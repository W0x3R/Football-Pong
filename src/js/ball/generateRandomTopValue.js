import { fieldImg } from "../..";
import { getItemSizes } from "../sizes/getItemSizes";
import { ballImg } from "./setBallPosition";

export const generateRandomTopValue = () => {
	let min = 25;
	let max = Math.floor(getItemSizes(fieldImg, 'height') - getItemSizes(ballImg, 'width') - 25);
	return Math.floor(Math.random() * (max - min + 1) + min);
}