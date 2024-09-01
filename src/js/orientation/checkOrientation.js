import { addStyleOnChangeOrientation } from "./addStyleOnChangeOrientation";
import portraitImgSrc from '../../images/website-images/portrait-orientation-img.jpg'
import fieldImgSrc from '../../images/website-images/field.jpg'
import { debounce } from "../debounce";

export const checkOrientation = () => {
	window.matchMedia("(orientation: portrait)").matches ? addStyleOnChangeOrientation('add', portraitImgSrc) : addStyleOnChangeOrientation('remove', fieldImgSrc)
};

export const debounceCheckOrientation = debounce(checkOrientation, 200)