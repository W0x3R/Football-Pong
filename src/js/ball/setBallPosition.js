import { fieldImg } from "../orientation/addStyleOnChangeOrientation";
import { getItemSizes } from "../sizes/getItemSizes";
import { generateRandomTopValue } from "./generateRandomTopValue";
import { getBallBackOutField } from "./getBallBackOutField";

export const ballImg = document.querySelector(".field__ball");

export const setBallHorizontalPosition = (neededPos) => {
	let currentPos = neededPos === 'left' ? `${getBallBackOutField()}px` : getItemSizes(fieldImg, 'width') - getItemSizes(ballImg, 'width') - getBallBackOutField() + "px"
	ballImg.style.left = currentPos;
}

export const setBallVerticalPosition = (neededPos) => {
	let currentPos = neededPos === 'top' ? `${getBallBackOutField()}px` : generateRandomTopValue() + "px"
	ballImg.style.top = currentPos;
}