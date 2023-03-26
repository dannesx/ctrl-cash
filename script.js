import UpdatePrice from './modules/UpdatePrice.js'
import UpdateConversion from './modules/UpdateConversion.js'

const url = window.location.search
const input = document.querySelector('#price')
const button = document.querySelector('.button')

let rate = UpdateConversion()
let value = url ? parseFloat(url.split('=')[1]) : 0
value = Math.round(value / rate)

UpdatePrice(0, value, 1000)

button.addEventListener('click', e => {
	e.preventDefault()
	let value = input.value
	value = value ? value : 0
	window.location.href = 'index.html?price=' + value
})