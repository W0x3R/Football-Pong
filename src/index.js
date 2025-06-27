import "./style.scss"
import { checkSessionScorePresence } from "./js/playerScore/checkSessionScoreExists"
import { movingBallRelativeFlag } from "./js/ball/movingBallRelativeFlag"
import { checkOrientation } from "./js/orientation/checkOrientation"
import { clickEvents } from "./js/eventHandlers/clickEvents"
import { callEvents } from "./js/eventHandlers/callEvents"
import { checkIosDevice } from "./js/toggleFullScreen"

// resize event
window.addEventListener("resize", () => {
	movingBallRelativeFlag()
	checkOrientation()
})

// window load event
window.addEventListener("load", () => {
	checkOrientation()
	checkIosDevice()
	movingBallRelativeFlag()
	checkSessionScorePresence()
})

window.addEventListener("click", (e) => {
	callEvents(e, clickEvents)
})
