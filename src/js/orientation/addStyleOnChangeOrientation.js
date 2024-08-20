const portraitOrientationTitle = document.querySelector('.field-orientation__message')
export const fieldImg = document.querySelector(".field__img");

export const addStyleOnChangeOrientation = (value, fieldImgSrc) => {
	fieldImg.src = fieldImgSrc
	fieldImg.classList[value]('field__portrait')
	portraitOrientationTitle.classList[value]('field-orientation__message_show')
}