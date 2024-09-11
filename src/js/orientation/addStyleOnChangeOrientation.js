const portraitOrientationTitle = document.querySelector('.field-orientation__message')
export const fieldImg = document.querySelector('.field__img')
const fieldPortraitImage = document.querySelector('.field__portrait-image')

export const addStyleOnChangeOrientation = (value) => {
	fieldImg.classList[value]('field__img_hide')
	fieldPortraitImage.classList[value]('field__portrait-image_show')
	portraitOrientationTitle.classList[value]('field-orientation__message_show')
}
