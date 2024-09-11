import { addStyleOnChangeOrientation } from './addStyleOnChangeOrientation'
import { debounce } from '../debounce'

export const checkOrientation = () => {
	window.matchMedia('(orientation: portrait)').matches
		? addStyleOnChangeOrientation('add')
		: addStyleOnChangeOrientation('remove')
}

export const debounceCheckOrientation = debounce(checkOrientation, 150)
