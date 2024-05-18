const nombre = 'Shona'
const champ = 'Samira'

const saludar = (parametro) => {
	return `Hola ${nombre} tu champ favorito es ${champ}`
}

console.log(saludar(nombre))


document.querySelector('.manco').innerHTML = saludar(nombre)