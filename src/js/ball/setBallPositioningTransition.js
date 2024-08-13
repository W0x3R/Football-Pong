import { delay } from "../delay"
import { ballImg } from "./setBallPosition"

export const setBallPositioningTransition = () => {
	delay(50).then(() => ballImg.style.transition = "none")
	delay(300).then(() => ballImg.style.transition = "all 0.6s ease-in")
}