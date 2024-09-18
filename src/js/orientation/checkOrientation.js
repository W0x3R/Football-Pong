import { addStyleOnChangeOrientation } from "./addStyleOnChangeOrientation"

export const checkOrientation = () => {
	window.matchMedia("(orientation: portrait)").matches
		? addStyleOnChangeOrientation("add")
		: addStyleOnChangeOrientation("remove")
}
