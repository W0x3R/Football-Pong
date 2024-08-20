import './style.scss';
import kickSound from './sounds/kick.mp3'
import { getSessionStorage } from './js/storage/getSessionStorage';
import { playerOneScore, playerTwoScore, setPlayerScore } from './js/playerScore/setPlayerScore';
import { setSessionStorage } from './js/storage/setSessionStorage';
import { checkSessionScorePresence } from './js/playerScore/checkSessionScoreExists';
import { ballImg, setBallHorizontalPosition, setBallVerticalPosition } from './js/ball/setBallPosition';
import { movingBallRelativeFlag } from './js/ball/movingBallRelativeFlag';
import { checkOrientation } from './js/orientation/checkOrientation';
import { toggleFullScreen } from './js/toggleFullScreen';
import { playSounds } from './js/sounds/playSounds';
import { setPlayersScore } from './js/goal/setPlayersScore';

const restartButton = document.querySelector(".field__restart-btn");
const fullscreen = document.querySelector(".fullscreen-toggle");

let flag = 0;

restartButton.addEventListener("click", function () {
	setSessionStorage("playerOneScore", 0)
	setSessionStorage("playerTwoScore", 0)
	setPlayerScore(playerOneScore, getSessionStorage('playerOneScore'))
	setPlayerScore(playerTwoScore, getSessionStorage('playerTwoScore'))
});

// resize event
window.addEventListener("resize", () => {
	movingBallRelativeFlag();
	checkOrientation();
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
	playSounds(kickSound)
	if (sessionStorage.getItem("flag") === "0") {
		setBallHorizontalPosition('right')
		setBallVerticalPosition('random')
		setPlayersScore(playerOneScore, 'playerOneScore')
		flag = 1;
		setSessionStorage('flag', flag)
	} else {
		setBallHorizontalPosition('left')
		setBallVerticalPosition('random')
		setPlayersScore(playerTwoScore, 'playerTwoScore')
		flag = 0;
		setSessionStorage('flag', flag)
	}
});