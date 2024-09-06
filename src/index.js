import './style.scss';
import { getSessionStorage } from './js/storage/getSessionStorage';
import { playerOneScore, playerTwoScore, setPlayerScore } from './js/playerScore/setPlayerScore';
import { setSessionStorage } from './js/storage/setSessionStorage';
import { checkSessionScorePresence } from './js/playerScore/checkSessionScoreExists';
import { ballImg } from './js/ball/setBallPosition';
import { debounceMovingBallRelativeFlag, movingBallRelativeFlag } from './js/ball/movingBallRelativeFlag';
import { checkOrientation, debounceCheckOrientation } from './js/orientation/checkOrientation';
import { toggleFullScreen } from './js/toggleFullScreen';
import { movingBallOnClick } from './js/ball/movingBallOnClick';

const restartButton = document.querySelector(".field__restart-btn");
const fullscreen = document.querySelector(".fullscreen-toggle");

restartButton.addEventListener("click", function () {
	setSessionStorage("playerOneScore", 0)
	setSessionStorage("playerTwoScore", 0)
	setPlayerScore(playerOneScore, getSessionStorage('playerOneScore'))
	setPlayerScore(playerTwoScore, getSessionStorage('playerTwoScore'))
});

// resize event
window.addEventListener("resize", () => {
	debounceMovingBallRelativeFlag()
	debounceCheckOrientation()
});

// window load event
window.addEventListener("load", () => {
	checkOrientation();
	movingBallRelativeFlag()
	checkSessionScorePresence()
});

// toggle fullscreen
fullscreen.addEventListener("click", toggleFullScreen);


// event click on ball
ballImg.addEventListener("click", function () {
	if (sessionStorage.getItem("flag") === "0") {
		movingBallOnClick('right', playerOneScore, 'playerOneScore', 1)
	} else {
		movingBallOnClick('left', playerTwoScore, 'playerTwoScore', 0)
	}
});