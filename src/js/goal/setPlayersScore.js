import { setBallVerticalPosition } from "../ball/setBallPosition"
import { delay } from "../delay"
import { playSounds } from "../sounds/playSounds"
import { setSessionStorage } from "../storage/setSessionStorage"
import { checkGoals } from "./checkGoals"
import { controlGoalStyles } from "./controlGoalStyles"
import goalSound from '../../sounds/goal.mp3';
import hitBallSounds from '../../sounds/hit-the-net.mp3';

export const setPlayersScore = (numOfPlayer, storageKey) => {
	const checkGoalsCoordinate = checkGoals()
	if (checkGoalsCoordinate) {
		delay(200).then(playSounds(hitBallSounds))
		delay(700).then(() => {
			playSounds(goalSound)
			numOfPlayer.textContent++
			setSessionStorage(storageKey, numOfPlayer.textContent)
			setBallVerticalPosition('top')
		})
		controlGoalStyles(numOfPlayer);
	}
}
