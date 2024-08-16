import { heightsOfGoalArea } from "./heightsOfGoalArea";
import { getCurrentCenterOfField } from "../sizes/getCurrentCenterOfField";

export const checkGoalsCoordinates = () => {
	const center = getCurrentCenterOfField();
	for (const item of heightsOfGoalArea
	) {
		if (center >= item.min) {
			return item.height
		}
	}
}