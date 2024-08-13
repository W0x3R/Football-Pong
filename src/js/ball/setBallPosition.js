import { fieldImg, mathRandom } from "../..";
import { getItemSizes } from "../sizes/getItemSizes";

export const ballImg = document.querySelector(".field__ball");

export const setBallHorizontalPosition = (neededPos) => {
	let currentPos = neededPos === 'left' ? '25px' : getItemSizes(fieldImg, 'width') - getItemSizes(ballImg, 'width') - 25 + "px"
	ballImg.style.left = currentPos;
}

export const setBallVerticalPosition = (neededPos) => {
	let currentPos = neededPos === 'top' ? '25px' : mathRandom() + "px"
	ballImg.style.top = currentPos;
}