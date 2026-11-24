(function(){
  var ALL = window.QUESTIONS.map(function(q){return q});
  var $ = function(id){return document.getElementById(id)};
  var LET = ['A','B','C','D'];
  var topics = [], counts = {};
  ALL.forEach(function(q,i){q.id=i; if(!(q.t in counts)){counts[q.t]=0; topics.push(q.t)} counts[q.t]++});

  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}

  // setup
  var tp = $('topics');
  topics.forEach(function(t,i){
    var l=document.createElement('label');
    l.innerHTML='<input type="checkbox" checked data-t="'+i+'"><span>'+esc(t)+'<small>'+counts[t]+' preguntas</small></span>';
    tp.appendChild(l);
  });
  function selectedPool(){
    var sel=[].slice.call(tp.querySelectorAll('input:checked')).map(function(x){return topics[+x.dataset.t]});
    return ALL.filter(function(q){return sel.indexOf(q.t)>-1});
  }
  function refreshCount(){
    var n=selectedPool().length, c=$('count'), prev=c.value;
    c.innerHTML='';
    var opts=[10,20,30,50].filter(function(x){return x<n});
    opts.push(n);
    opts.forEach(function(x,i){var o=document.createElement('option');o.value=x;o.textContent=(x===n?'Todas ('+x+')':x);c.appendChild(o)});
    if(prev && opts.indexOf(+prev)>-1) c.value=prev; else c.value = opts.indexOf(20)>-1?20:n;
    $('avail').textContent=n+' preguntas disponibles';
    $('start').disabled = n===0;
  }
  tp.addEventListener('change',refreshCount);
  $('all').onclick=function(){tp.querySelectorAll('input').forEach(function(x){x.checked=true});refreshCount()};
  $('none').onclick=function(){tp.querySelectorAll('input').forEach(function(x){x.checked=false});refreshCount()};
  refreshCount();

  // state
  var deck=[], idx=0, score=0, answered=false, results=[];

  function show(id){['setup','play','end'].forEach(function(s){$(s).classList.toggle('hidden',s!==id)});window.scrollTo(0,0)}

  function start(pool){
    var doShuf=$('shuf').checked;
    var d = doShuf?shuffle(pool):pool.slice();
    var n = +$('count').value;
    if(pool.__custom) n=d.length;
    deck=d.slice(0,n).map(function(q){
      var o=[{txt:q.c,ok:true,why:q.e}].concat(q.w.map(function(w,i){return {txt:w,ok:false,why:q.r[i]}}));
      if(doShuf) o=shuffle(o);
      return {q:q,opts:o};
    });
    idx=0;score=0;results=[];
    show('play');render();
  }

  function render(){
    answered=false;
    var it=deck[idx];
    $('prog').textContent='Pregunta '+(idx+1)+' de '+deck.length;
    $('sc').textContent='Aciertos: '+score;
    $('barfill').style.width=(idx/deck.length*100)+'%';
    $('topic').textContent=it.q.t;
    $('qtext').textContent=it.q.p;
    var box=$('opts');box.innerHTML='';
    it.opts.forEach(function(o,i){
      var b=document.createElement('button');
      b.className='opt';b.type='button';
      b.innerHTML='<span class="k">'+LET[i]+'.</span>'+esc(o.txt);
      b.onclick=function(){answer(i)};
      box.appendChild(b);
    });
    $('fb').className='hidden';$('fb').innerHTML='';
    $('next').className='hidden';
  }

  function answer(i){
    if(answered)return;answered=true;
    var it=deck[idx], chosen=it.opts[i], right=chosen.ok;
    if(right)score++;
    results.push({q:it.q,ok:right,chosen:chosen.txt});
    var btns=$('opts').children;
    it.opts.forEach(function(o,k){
      var b=btns[k];b.disabled=true;
      var show=o.ok||k===i;
      if(o.ok)b.classList.add('ok');else if(k===i)b.classList.add('ko');
      if(show){
        var w=document.createElement('div');w.className='why';
        w.innerHTML=(o.ok?'<b class="t">✔ Correcta. </b>':'<b class="t">✘ Tu elección es incorrecta. </b>')+(o.ok?'':o.why);
        b.appendChild(w);
      }
    });
    var fb=$('fb');
    var others=it.opts.map(function(o,k){return o.ok||k===i?'':'<li><b>'+LET[k]+'.</b> '+o.why+'</li>'}).join('');
    fb.innerHTML='<div class="verdict '+(right?'ok':'ko')+'">'+(right?'¡Correcto!':'Incorrecto — la respuesta correcta era la '+LET[it.opts.findIndex(function(o){return o.ok})]+'.')+'</div>'
      +'<div class="expl"><b>Por qué:</b> '+it.q.e+'</div>'
      +(others?'<details><summary>Por qué las otras opciones no son correctas</summary><ul class="why" style="margin-top:8px">'+others+'</ul></details>':'');
    fb.className='';
    $('sc').textContent='Aciertos: '+score;
    $('barfill').style.width=((idx+1)/deck.length*100)+'%';
    var nx=$('next');nx.className='';
    nx.textContent=idx===deck.length-1?'Ver resultados':'Siguiente';
    nx.focus();
  }

  $('next').onclick=function(){
    if(!answered)return;
    if(idx>=deck.length-1){finish()}else{idx++;render()}
  };
  $('quit').onclick=function(){ if(results.length===0){show('setup')}else finish() };
  document.addEventListener('keydown',function(e){
    if($('play').classList.contains('hidden'))return;
    var k=e.key.toLowerCase(), p='abcd'.indexOf(k);
    if(p>-1 && !answered && p<deck[idx].opts.length){answer(p)}
    else if((e.key==='Enter'||e.key==='ArrowRight') && answered){$('next').click()}
  });

  function finish(){
    var n=results.length, pct=n?Math.round(score/n*100):0;
    $('final').textContent=score+' / '+n+' ('+pct+' %)';
    $('msg').textContent=pct>=85?'Excelente: dominás el material.':pct>=60?'Bien, pero repasá los temas con menor porcentaje.':'Conviene repasar el resumen en PDF y volver a intentar.';
    var by={};results.forEach(function(r){var t=r.q.t;by[t]=by[t]||{a:0,n:0};by[t].n++;if(r.ok)by[t].a++});
    var h='<tr><th>Tema</th><th class="n">Aciertos</th><th class="n">%</th></tr>';
    topics.forEach(function(t){if(by[t])h+='<tr><td>'+esc(t)+'</td><td class="n">'+by[t].a+' / '+by[t].n+'</td><td class="n">'+Math.round(by[t].a/by[t].n*100)+' %</td></tr>'});
    $('bytopic').innerHTML=h;
    var wrong=results.filter(function(r){return !r.ok});
    $('retry').classList.toggle('hidden',wrong.length===0);
    $('reviewcard').classList.toggle('hidden',wrong.length===0);
    $('review').innerHTML=wrong.map(function(r){
      return '<div class="rev"><b>'+esc(r.q.p)+'</b><br><span style="color:var(--ko)">Tu respuesta: '+esc(r.chosen)+'</span><br><span style="color:var(--ok)">Correcta: '+esc(r.q.c)+'</span><br><span>'+r.q.e+'</span></div>';
    }).join('');
    show('end');
  }
  $('retry').onclick=function(){
    var pool=results.filter(function(r){return !r.ok}).map(function(r){return r.q});
    pool.__custom=true;start(pool);
  };
  $('again').onclick=function(){show('setup')};
  $('start').onclick=function(){start(selectedPool())};
})();
