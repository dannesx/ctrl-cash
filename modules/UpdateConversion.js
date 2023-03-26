const conversionEl = document.querySelector('.conversion')
import rate from '../data/price.json' assert { type: 'json' }

let conversion = localStorage.getItem('rate')
	? localStorage.getItem('rate')
	: rate.conversion

localStorage.setItem('rate', conversion)

export default function UpdateConversion() {
	conversionEl.textContent = '1 CC → R$' + conversion
	return conversion
}
