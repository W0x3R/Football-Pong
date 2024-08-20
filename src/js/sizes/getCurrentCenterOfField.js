import { fieldImg } from "../orientation/addStyleOnChangeOrientation";
import { ballImg } from "../ball/setBallPosition";
import { getItemSizes } from "./getItemSizes";

export const getCurrentCenterOfField = () => parseInt(getItemSizes(fieldImg, 'height') / 2) - getItemSizes(ballImg, 'width') / 2;