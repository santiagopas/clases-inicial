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
    <h2>Clase 1!</h2>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="reset" type="button"></button>
    </div>

  </div>
`
// guardar en una constante el boton de reset y llamrlo desde resetCounter
// guardaste en una constante el boton de reset
const counterBtn = document.querySelector('#counter')
// llamar a la funcion resetCounter y pasarle como parametro el counterBtn


const resetBtn = document.querySelector('#reset')

setupCounter(counterBtn)
resetCounter(resetBtn)