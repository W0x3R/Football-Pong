import { getItemSizes } from "../sizes/getItemSizes"
import { getBallBackOutField } from "./getBallBackOutField"
import { ballImg } from "./setBallPosition"

export const generateRandomTopValue = () => {
	let min = +getBallBackOutField()
	let max = Math.floor(
		getItemSizes(document.documentElement, "clientHeight") -
			getItemSizes(ballImg, "width") -
			min
	)
	return Math.floor(Math.random() * (max - min + 1) + min)
}
