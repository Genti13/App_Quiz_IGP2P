(function () {
  'use strict';
  var LET = 'ABCDEFGH';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------- Normalización de los dos bancos a un formato común ---------- */
  // Generativo: {t, p, c, w[3], e, r[3]}  (explicación por opción)
  function fromGenerative(q) {
    var opts = [{ t: q.c, ok: true, why: q.e }];
    q.w.forEach(function (w, i) { opts.push({ t: w, ok: false, why: q.r[i] }); });
    return { topics: [q.t], p: q.p, opts: opts, multi: false, fixed: false, expl: q.e, html: true };
  }
  // Legacy: {tags[], p, opts[{t, ok}], multi, fixed}  (sin explicación en el Excel)
  function fromLegacy(q) {
    return { topics: q.tags, p: q.p, opts: q.opts, multi: !!q.multi, fixed: !!q.fixed, expl: null, html: false };
  }

  /* ---------- Motor del quiz ---------- */
  function createQuiz(root, cfg) {
    root.innerHTML = '';
    root.appendChild(document.getElementById('quiz-tpl').content.cloneNode(true));
    var $ = function (c) { return root.querySelector('.' + c); };

    var bank = cfg.bank.map(cfg.normalize);
    var topics = [], counts = {};
    bank.forEach(function (q) {
      q.topics.forEach(function (t) {
        if (!(t in counts)) { counts[t] = 0; topics.push(t); }
        counts[t]++;
      });
    });
    if (cfg.topicOrder) {
      topics.sort(function (a, b) { return cfg.topicOrder.indexOf(a) - cfg.topicOrder.indexOf(b); });
    }
    $('js-note').textContent = cfg.note || '';

    var tp = $('js-topics');
    topics.forEach(function (t, i) {
      var l = document.createElement('label');
      l.innerHTML = '<input type="checkbox" checked data-t="' + i + '"><span>' + esc(t) +
        '<small>' + counts[t] + (counts[t] === 1 ? ' pregunta' : ' preguntas') + '</small></span>';
      tp.appendChild(l);
    });

    function selectedPool() {
      var sel = [].slice.call(tp.querySelectorAll('input:checked')).map(function (x) { return topics[+x.dataset.t]; });
      return bank.filter(function (q) {
        return q.topics.some(function (t) { return sel.indexOf(t) > -1; });
      });
    }
    function refreshCount() {
      var n = selectedPool().length, c = $('js-count'), prev = c.value;
      c.innerHTML = '';
      var opts = [10, 20, 30, 50].filter(function (x) { return x < n; });
      if (n > 0) opts.push(n);
      opts.forEach(function (x) {
        var o = document.createElement('option');
        o.value = x; o.textContent = (x === n ? 'Todas (' + x + ')' : x);
        c.appendChild(o);
      });
      if (prev && opts.indexOf(+prev) > -1) c.value = prev;
      else c.value = opts.indexOf(20) > -1 ? 20 : n;
      $('js-avail').textContent = n + (n === 1 ? ' pregunta disponible' : ' preguntas disponibles');
      $('js-start').disabled = n === 0;
    }
    tp.addEventListener('change', refreshCount);
    $('js-all').onclick = function () { tp.querySelectorAll('input').forEach(function (x) { x.checked = true; }); refreshCount(); };
    $('js-none').onclick = function () { tp.querySelectorAll('input').forEach(function (x) { x.checked = false; }); refreshCount(); };
    refreshCount();

    var deck = [], idx = 0, score = 0, answered = false, results = [], picked = [];

    function show(name) {
      ['js-setup', 'js-play', 'js-end'].forEach(function (s) { $(s).classList.toggle('hidden', s !== name); });
      window.scrollTo(0, 0);
    }
    function isActive() { return !root.classList.contains('hidden') && !$('js-play').classList.contains('hidden'); }

    function start(pool, all) {
      var doShuf = $('js-shuf').checked;
      var d = doShuf ? shuffle(pool) : pool.slice();
      var n = all ? d.length : +$('js-count').value;
      deck = d.slice(0, n).map(function (q) {
        var o = q.opts.map(function (x) { return x; });
        if (doShuf && !q.fixed) o = shuffle(o);
        return { q: q, opts: o };
      });
      idx = 0; score = 0; results = [];
      show('js-play'); render();
    }

    function render() {
      answered = false; picked = [];
      var it = deck[idx];
      $('js-prog').textContent = 'Pregunta ' + (idx + 1) + ' de ' + deck.length;
      $('js-sc').textContent = 'Aciertos: ' + score;
      $('js-barfill').style.width = (idx / deck.length * 100) + '%';
      $('js-topic').textContent = it.q.topics.join(' · ');
      $('js-qtext').textContent = it.q.p;
      var h = $('js-hint');
      if (it.q.multi) { h.textContent = 'Selección múltiple: marcá todas las opciones correctas y confirmá.'; h.classList.remove('hidden'); }
      else h.classList.add('hidden');
      var box = $('js-opts'); box.innerHTML = '';
      it.opts.forEach(function (o, i) {
        var b = document.createElement('button');
        b.className = 'opt'; b.type = 'button';
        if (it.q.multi) b.setAttribute('aria-pressed', 'false');
        b.innerHTML = (it.q.multi ? '<span class="box">☐</span>' : '') + '<span class="k">' + LET[i] + '.</span>' + esc(o.t);
        b.onclick = function () { it.q.multi ? toggle(i) : answerSingle(i); };
        box.appendChild(b);
      });
      $('js-fb').className = 'js-fb hidden'; $('js-fb').innerHTML = '';
      $('js-next').classList.add('hidden');
      $('js-confirm').classList.toggle('hidden', !it.q.multi);
      $('js-confirm').disabled = true;
    }

    function toggle(i) {
      if (answered) return;
      var p = picked.indexOf(i);
      if (p > -1) picked.splice(p, 1); else picked.push(i);
      var b = $('js-opts').children[i], on = picked.indexOf(i) > -1;
      b.classList.toggle('sel', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.querySelector('.box').textContent = on ? '☑' : '☐';
      $('js-confirm').disabled = picked.length === 0;
    }

    function finishAnswer(it, right, chosenIdx) {
      answered = true;
      if (right) score++;
      var chosenTxt = chosenIdx.map(function (i) { return it.opts[i].t; });
      results.push({ q: it.q, ok: right, chosen: chosenTxt });
      var btns = $('js-opts').children;
      it.opts.forEach(function (o, k) {
        var b = btns[k]; b.disabled = true;
        var was = chosenIdx.indexOf(k) > -1;
        if (o.ok && was) b.classList.add('ok');
        else if (o.ok && !was) b.classList.add(it.q.multi ? 'miss' : 'ok');
        else if (!o.ok && was) b.classList.add('ko');
        // texto "por qué" bajo la opción elegida y la correcta
        if (o.ok || was) {
          var w = document.createElement('div'); w.className = 'why';
          var lab = o.ok ? (was || !it.q.multi ? '<b class="t">✔ Correcta.</b> ' : '<b class="t">✔ Correcta (faltó marcarla).</b> ')
                         : '<b class="t">✘ Tu elección es incorrecta.</b> ';
          w.innerHTML = lab + (o.why ? (it.q.html ? o.why : esc(o.why)) : '');
          b.appendChild(w);
        }
      });
      var fb = $('js-fb');
      var correctLetters = [];
      it.opts.forEach(function (o, k) { if (o.ok) correctLetters.push(LET[k]); });
      var verdict = right ? '¡Correcto!'
        : 'Incorrecto — ' + (correctLetters.length > 1 ? 'las correctas eran: ' : 'la correcta era la ') + correctLetters.join(', ') + '.';
      var html = '<div class="verdict ' + (right ? 'ok' : 'ko') + '">' + verdict + '</div>';
      if (it.q.expl) {
        html += '<div class="expl"><b>Por qué:</b> ' + it.q.expl + '</div>';
        var others = it.opts.map(function (o, k) {
          return (o.ok || chosenIdx.indexOf(k) > -1 || !o.why) ? '' : '<li><b>' + LET[k] + '.</b> ' + o.why + '</li>';
        }).join('');
        if (others) html += '<details><summary>Por qué las otras opciones no son correctas</summary><ul class="why" style="margin-top:8px">' + others + '</ul></details>';
      } else if (cfg.sourceNote) {
        html += '<div class="expl">' + esc(cfg.sourceNote) + ' · ' + esc(it.q.topics.join(', ')) + '</div>';
      }
      fb.innerHTML = html; fb.className = 'js-fb';
      $('js-sc').textContent = 'Aciertos: ' + score;
      $('js-barfill').style.width = ((idx + 1) / deck.length * 100) + '%';
      $('js-confirm').classList.add('hidden');
      var nx = $('js-next'); nx.classList.remove('hidden');
      nx.textContent = idx === deck.length - 1 ? 'Ver resultados' : 'Siguiente';
      nx.focus();
    }

    function answerSingle(i) {
      if (answered) return;
      var it = deck[idx];
      finishAnswer(it, !!it.opts[i].ok, [i]);
    }
    function confirmMulti() {
      if (answered || !picked.length) return;
      var it = deck[idx];
      var right = it.opts.every(function (o, k) { return !!o.ok === (picked.indexOf(k) > -1); });
      finishAnswer(it, right, picked.slice().sort());
    }

    $('js-confirm').onclick = confirmMulti;
    $('js-next').onclick = function () {
      if (!answered) return;
      if (idx >= deck.length - 1) finish(); else { idx++; render(); }
    };
    $('js-quit').onclick = function () { if (results.length === 0) show('js-setup'); else finish(); };

    function finish() {
      var n = results.length, pct = n ? Math.round(score / n * 100) : 0;
      $('js-final').textContent = score + ' / ' + n + ' (' + pct + ' %)';
      $('js-msg').textContent = pct >= 85 ? 'Excelente: dominás el material.'
        : pct >= 60 ? 'Bien, pero repasá los temas con menor porcentaje.'
        : 'Conviene repasar el resumen y volver a intentar.';
      var by = {};
      results.forEach(function (r) {
        r.q.topics.forEach(function (t) {
          by[t] = by[t] || { a: 0, n: 0 }; by[t].n++; if (r.ok) by[t].a++;
        });
      });
      var h = '<tr><th>Tema</th><th class="n">Aciertos</th><th class="n">%</th></tr>';
      topics.forEach(function (t) {
        if (by[t]) h += '<tr><td>' + esc(t) + '</td><td class="n">' + by[t].a + ' / ' + by[t].n + '</td><td class="n">' + Math.round(by[t].a / by[t].n * 100) + ' %</td></tr>';
      });
      $('js-bytopic').innerHTML = h;
      var wrong = results.filter(function (r) { return !r.ok; });
      $('js-retry').classList.toggle('hidden', wrong.length === 0);
      $('js-reviewcard').classList.toggle('hidden', wrong.length === 0);
      $('js-review').innerHTML = wrong.map(function (r) {
        var good = r.q.opts.filter(function (o) { return o.ok; }).map(function (o) { return esc(o.t); }).join(' / ');
        return '<div class="rev"><b>' + esc(r.q.p) + '</b><br><span style="color:var(--ko)">Tu respuesta: ' +
          r.chosen.map(esc).join(' / ') + '</span><br><span style="color:var(--ok)">Correcta: ' + good + '</span>' +
          (r.q.expl ? '<br><span>' + r.q.expl + '</span>' : '') + '</div>';
      }).join('');
      show('js-end');
    }

    $('js-retry').onclick = function () {
      var pool = results.filter(function (r) { return !r.ok; }).map(function (r) { return r.q; });
      start(pool, true);
    };
    $('js-again').onclick = function () { show('js-setup'); };
    $('js-start').onclick = function () { start(selectedPool(), false); };

    // atajos de teclado (solo el quiz visible)
    document.addEventListener('keydown', function (e) {
      if (!isActive() || e.ctrlKey || e.metaKey || e.altKey) return;
      var it = deck[idx]; if (!it) return;
      var p = LET.toLowerCase().indexOf(e.key.toLowerCase());
      if (e.key.length === 1 && p > -1 && p < it.opts.length && !answered) {
        it.q.multi ? toggle(p) : answerSingle(p);
      } else if (e.key === 'Enter') {
        if (!answered && it.q.multi) { confirmMulti(); e.preventDefault(); }
        else if (answered) { $('js-next').click(); e.preventDefault(); }
      } else if (e.key === 'ArrowRight' && answered) { $('js-next').click(); }
    });
  }

  /* ---------- Pestañas ---------- */
  var TABS = ['generativo', 'legacy', 'desarrollo'];
  function selectTab(name) {
    if (TABS.indexOf(name) < 0) name = 'generativo';
    TABS.forEach(function (t) {
      var on = t === name;
      document.getElementById('tab-' + t).classList.toggle('hidden', !on);
      var b = document.getElementById('t-' + t);
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
    if (location.hash !== '#' + name) {
      try { history.replaceState(null, '', '#' + name); } catch (e) { location.hash = name; }
    }
  }
  document.querySelectorAll('.tab').forEach(function (b) {
    b.addEventListener('click', function () { selectTab(b.dataset.tab); });
    b.addEventListener('keydown', function (e) {
      var i = TABS.indexOf(b.dataset.tab), n = null;
      if (e.key === 'ArrowRight') n = TABS[(i + 1) % TABS.length];
      if (e.key === 'ArrowLeft') n = TABS[(i + TABS.length - 1) % TABS.length];
      if (n) { selectTab(n); document.getElementById('t-' + n).focus(); }
    });
  });

  createQuiz(document.getElementById('tab-generativo'), {
    bank: window.QUESTIONS,
    normalize: fromGenerative,
    note: 'Preguntas generadas a partir de los 13 apuntes de la cátedra. Cada respuesta se explica: por qué es correcta y por qué falla cada opción.'
  });
  createQuiz(document.getElementById('tab-legacy'), {
    bank: window.LEGACY,
    normalize: fromLegacy,
    topicOrder: ['Parcial 1', 'Parcial 2', 'Calidad', 'Métricas', 'Scrum', 'Gestión de configuración'],
    note: 'Preguntas de tus parciales (Excel «ParcialesAdministracion_refactor»). La respuesta correcta es la que está marcada en verde en el Excel; no traen explicación. Algunas son de selección múltiple.',
    sourceNote: 'Fuente: parciales'
  });
  selectTab((location.hash || '').replace('#', ''));
  window.addEventListener('hashchange', function () { selectTab((location.hash || '').replace('#', '')); });
})();
