import kickSound from '../../sounds/kick.mp3'

import { setPlayersScore } from "../goal/setPlayersScore"
import { playSounds } from "../sounds/playSounds"
import { setSessionStorage } from "../storage/setSessionStorage";
import { setBallHorizontalPosition, setBallVerticalPosition } from "./setBallPosition"

let flag = 0;

export const movingBallOnClick = (horizontalPos, numOfScoredPlayer, storageKeyScoredPlayer, flagValue) => {
	playSounds(kickSound)
	setBallVerticalPosition('random')
	setBallHorizontalPosition(horizontalPos)
	setPlayersScore(numOfScoredPlayer, storageKeyScoredPlayer)
	flag = flagValue;
	setSessionStorage('flag', flag)
}