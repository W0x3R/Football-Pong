import { ballImg } from "../ball/setBallPosition";
import { getCurrentCenterOfField } from "../sizes/getCurrentCenterOfField";
import { checkGoalsCoordinates } from "./checkGoalsCoordinates";

export const checkGoals = () => parseInt(ballImg.style.top) <= getCurrentCenterOfField() + checkGoalsCoordinates() &&
	parseInt(ballImg.style.top) >= getCurrentCenterOfField() - checkGoalsCoordinates()