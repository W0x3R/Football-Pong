export function debounce(fn, ms) {
	let timerId
	return function () {
		clearInterval(timerId)
		timerId = setTimeout(() => {
			fn.apply(this, arguments)
		}, ms);
	}
}