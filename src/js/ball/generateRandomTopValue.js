import { getItemSizes } from "../sizes/getItemSizes"
import { getBallBackOutField } from "./getBallBackOutField"
import { ballImg } from "./setBallPosition"

export const generateRandomTopValue = () => {
	let min = +getBallBackOutField()
	let max = Math.floor(
		getItemSizes(window, "innerHeight") - getItemSizes(ballImg, "width") - min
	)
	return Math.floor(Math.random() * (max - min + 1) + min)
}
