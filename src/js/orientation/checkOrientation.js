import { addStyleOnChangeOrientation } from "./addStyleOnChangeOrientation";
import portraitImgSrc from '../../images/website-images/portrait-orientation-img.jpg'
import fieldImgSrc from '../../images/website-images/field.jpg'

export const checkOrientation = () => {
	window.matchMedia("(orientation: portrait)").matches ? addStyleOnChangeOrientation('add', portraitImgSrc) : addStyleOnChangeOrientation('remove', fieldImgSrc)
};