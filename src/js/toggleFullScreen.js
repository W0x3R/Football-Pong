export const toggleFullScreen = () => {
	const doc = document.documentElement;
	document.fullscreenElement ? document.exitFullscreen() : doc.requestFullscreen()
}

export const checkIosDevice = () => {
		const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

	if (isIOS) {
		document.querySelector('.fullscreen-toggle').style.display = 'none';
	}
}