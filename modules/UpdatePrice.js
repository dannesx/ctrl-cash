const ctrlCash = document.querySelector('.ctrl-cash')

export default function UpdatePrice(startValue, endValue, interval) {
	let duration = Math.floor(interval / endValue)
	return setInterval(() => {
		startValue += 9
		ctrlCash.textContent = startValue
		if (startValue >= endValue) {
			ctrlCash.textContent = endValue
			clearInterval()
		}
	}, duration)
}
