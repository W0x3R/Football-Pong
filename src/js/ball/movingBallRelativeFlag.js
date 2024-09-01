import { debounce } from "../debounce";
import { getSessionStorage } from "../storage/getSessionStorage";
import { setBallHorizontalPosition, setBallVerticalPosition } from "./setBallPosition";
import { setBallPositioningTransition } from "./setBallPositioningTransition";

export const movingBallRelativeFlag = () => {
	const getFlagCurrentValue = getSessionStorage('flag')
	setBallPositioningTransition()
	setBallVerticalPosition('top')
	getFlagCurrentValue === '0' ? setBallHorizontalPosition('left') : setBallHorizontalPosition('right')
};

export const debounceMovingBallRelativeFlag = debounce(movingBallRelativeFlag, 200)