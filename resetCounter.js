import { setupCounter } from "./counter";

export function resetCounter(elem) {
    console.log('elem', elem);
    elem.innerHTML = 'Reset';
    elem.addEventListener('click', () => setupCounter(document.querySelector('#counter')));
  }
