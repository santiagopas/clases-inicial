import './public/css/style.css'
import javascriptLogo from './public/img/javascript.svg'
import viteLogo from './public/img/vite.svg'
import { setupCounter } from './helpers/counter/counter.js'
import { resetCounter } from './helpers/counter/resetCounter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h2>Clase!</h2>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="reset" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click en el logo de vite para aprender más
    </p>
  </div>
  <div>
    <h2>Vite</h2>
    <p>
      <strong>Vite</strong> es una herramienta de desarrollo front-end que se enfoca en la velocidad y el rendimiento. Sirve para construir interfaces de usuario modernas de forma rápida y eficiente. Ofrece un servidor de desarrollo super rápido y un proceso de construcción optimizado.
    </p>
  </div>
  <div>
    <h2>Git y GitHub</h2>
    <p>
      <strong>Git</strong> es un sistema de control de versiones distribuido, utilizado para el desarrollo de software. 
      Permite a los desarrolladores rastrear los cambios en el código fuente durante el desarrollo de software.
    </p> 
    <a href="https://git-scm.com/" target="_blank">
      <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Logo" width="100">
    </a>
    <p>
      <strong>GitHub</strong> es una plataforma de desarrollo colaborativo para alojar proyectos utilizando Git. 
      Permite a los desarrolladores trabajar juntos en código, realizar un seguimiento de los cambios y compartir su trabajo.
    </p>
    <a href="https://github.com/" target="_blank">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
 alt="GitHub Logo" width="100"> 
    </a>
  </div>
`

setupCounter(document.querySelector('#counter'))
resetCounter(document.querySelector('#reset'))
