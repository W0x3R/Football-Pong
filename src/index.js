import './style.scss'
import { checkSessionScorePresence } from './js/playerScore/checkSessionScoreExists'
import {
	debounceMovingBallRelativeFlag,
	movingBallRelativeFlag
} from './js/ball/movingBallRelativeFlag'
import { checkOrientation, debounceCheckOrientation } from './js/orientation/checkOrientation'
import { clickEvents } from './js/eventHandlers/clickEvents'
import { callEvents } from './js/eventHandlers/callEvents'

// resize event
window.addEventListener('resize', () => {
	debounceMovingBallRelativeFlag()
	debounceCheckOrientation()
})

// window load event
window.addEventListener('load', () => {
	checkOrientation()
	movingBallRelativeFlag()
	checkSessionScorePresence()
})

window.addEventListener('click', (e) => {
	callEvents(e, clickEvents)
})
