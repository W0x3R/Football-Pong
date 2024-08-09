import { getSessionStorage } from "../storage/getSessionStorage"
import { playerOneScore, playerTwoScore, setPlayerScore } from "./setPlayerScore"

export const checkSessionScorePresence = () => {
	setPlayerScore(playerOneScore, getSessionStorage('playerOneScore'))
	setPlayerScore(playerTwoScore, getSessionStorage('playerTwoScore'))
}