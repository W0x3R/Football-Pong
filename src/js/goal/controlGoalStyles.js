import { delay } from "../delay"

const COLOR_RED = '#ff0000'
const COLOR_YELLOW = '#e4ff00'

export const controlGoalStyles = (numberOfPlayer) => {
	delay(700).then(() => numberOfPlayer.style.color = COLOR_RED)
	delay(1600).then(() => numberOfPlayer.style.color = COLOR_YELLOW)
}