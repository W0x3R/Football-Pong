export const toggleFullScreen = () => {
	const doc = document.documentElement;
	document.fullscreenElement ? document.exitFullscreen() : doc.requestFullscreen()
}