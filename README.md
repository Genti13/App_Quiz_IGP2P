# Quiz de Ingeniería de Software

App de opción múltiple (HTML + CSS + JS, sin dependencias) con tres secciones:

- **Quiz Generativo**: 105 preguntas sobre los apuntes de la cátedra; tras cada respuesta explica por qué es correcta o incorrecta (`questions.js`).
- **Quiz Legacy**: 68 preguntas de los parciales (Excel `ParcialesAdministracion_refactor`); incluye selección múltiple (`legacy.js`).
- **Desarrollo**: respuestas modelo estáticas a las preguntas de desarrollo (en `index.html`).

## Usar localmente
Abrí `index.html` en el navegador (no necesita servidor).

## Publicar con GitHub Pages
1. Creá un repositorio nuevo y subí estos archivos a la raíz.
2. En **Settings → Pages**, elegí *Deploy from a branch*, rama `main`, carpeta `/ (root)`.
3. En un minuto queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Agregar o editar preguntas
Editá `questions.js` (Generativo). Formato de cada pregunta:

```js
{ "t": "Tema", "p": "Enunciado", "c": "Opción correcta",
  "w": ["Incorrecta 1", "Incorrecta 2", "Incorrecta 3"],
  "e": "Por qué la correcta es correcta",
  "r": ["Por qué falla la 1", "Por qué falla la 2", "Por qué falla la 3"] }
```

En `legacy.js` cada pregunta es `{ tags, p, opts: [{t, ok}], multi, fixed }` (`multi`: varias correctas; `fixed`: no mezclar opciones).
