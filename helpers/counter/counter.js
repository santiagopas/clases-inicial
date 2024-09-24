export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Tuki: ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

}


// declarar variables
// scope o el alcance que tiene

// No usar VAR!
// var userName = 'Juan'
// var password = '1234'


// let nombre = 'Juan let'
// nombre = 'nuevo nombre'

// let nombre = 'jorge'


// const nombre 

// nombre = 'juan const 2'



// console.log(nombre) 