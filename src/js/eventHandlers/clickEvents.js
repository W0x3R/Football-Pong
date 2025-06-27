import { playerOneScore, playerTwoScore, setPlayerScore } from "../playerScore/setPlayerScore"
import { getSessionStorage } from "../storage/getSessionStorage"
import { setSessionStorage } from "../storage/setSessionStorage"
import { toggleFullScreen } from "../toggleFullScreen"
import { movingBallOnClick } from "../ball/movingBallOnClick"

export const clickEvents = {
	'.field__restart-btn': () => {
		setSessionStorage("playerOneScore", 0)
		setSessionStorage("playerTwoScore", 0)
		setPlayerScore(playerOneScore, getSessionStorage('playerOneScore'))
		setPlayerScore(playerTwoScore, getSessionStorage('playerTwoScore'))
	},
	'.fullscreen-toggle':  toggleFullScreen,
	'.field__ball': () => {
		const getFlagCurrentValue = getSessionStorage('flag')
		getFlagCurrentValue === '0' ? movingBallOnClick('right', playerOneScore, 'playerOneScore', 1) : movingBallOnClick('left', playerTwoScore, 'playerTwoScore', 0)
	}
}