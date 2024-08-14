import { fieldImg } from ".."

const portraitOrientationTitle = document.querySelector('.field-orientation__message')

export const addStyleOnChangeOrientation = (value, fieldImgSrc) => {
	fieldImg.src = fieldImgSrc
	fieldImg.classList[value]('field__portrait')
	portraitOrientationTitle.classList[value]('field-orientation__message_show')
}