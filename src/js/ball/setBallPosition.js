import { fieldImg } from "../..";
import { getItemSizes } from "../sizes/getItemSizes";
import { generateRandomTopValue } from "./generateRandomTopValue";

export const ballImg = document.querySelector(".field__ball");

export const setBallHorizontalPosition = (neededPos) => {
	let currentPos = neededPos === 'left' ? '25px' : getItemSizes(fieldImg, 'width') - getItemSizes(ballImg, 'width') - 25 + "px"
	ballImg.style.left = currentPos;
}

export const setBallVerticalPosition = (neededPos) => {
	let currentPos = neededPos === 'top' ? '25px' : generateRandomTopValue() + "px"
	ballImg.style.top = currentPos;
}