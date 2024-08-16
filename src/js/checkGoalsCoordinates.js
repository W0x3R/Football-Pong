import { getCurrentCenterOfField } from "./sizes/getCurrentCenterOfField";

export const checkGoalsCoordinates = () => {
	const center = getCurrentCenterOfField();
	const heights = [
		{ min: 570, height: 188 },
		{ min: 540, height: 172 },
		{ min: 520, height: 164 },
		{ min: 500, height: 157 },
		{ min: 470, height: 145 },
		{ min: 446, height: 137 },
		{ min: 420, height: 127 },
		{ min: 388, height: 116 },
		{ min: 360, height: 108 },
		{ min: 332, height: 100 },
		{ min: 300, height: 88 },
		{ min: 282, height: 78 },
		{ min: 261.5, height: 76 },
		{ min: 246.5, height: 73 },
		{ min: 223.5, height: 68 },
		{ min: 208.5, height: 62 },
		{ min: 0, height: 18 },
	]
	for (const item of heights) {
		if (center >= item.min) {
			return item.height
		}
	}
}