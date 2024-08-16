import './style.scss';
import kickSound from './sounds/kick.mp3'
import goalSound from './sounds/goal.mp3';
import hitBallSounds from './sounds/hit-the-net.mp3';
import { getSessionStorage } from './js/storage/getSessionStorage';
import { playerOneScore, playerTwoScore, setPlayerScore } from './js/playerScore/setPlayerScore';
import { setSessionStorage } from './js/storage/setSessionStorage';
import { checkSessionScorePresence } from './js/playerScore/checkSessionScoreExists';
import { ballImg, setBallHorizontalPosition, setBallVerticalPosition } from './js/ball/setBallPosition';
import { getCurrentCenterOfField } from './js/sizes/getCurrentCenterOfField';
import { movingBallRelativeFlag } from './js/ball/movingBallRelativeFlag';
import { delay } from './js/delay';
import { checkOrientation } from './js/orientation/checkOrientation';
import { toggleFullScreen } from './js/toggleFullScreen';
import { playSounds } from './js/sounds/playSounds';
import { checkGoalsCoordinates } from './js/goal/checkGoalsCoordinates';
import { controlGoalStyles } from './js/goal/controlGoalStyles';

export const fieldImg = document.querySelector(".field__img");
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

function checkFirstPlayerScore() {
	if (
		parseInt(ballImg.style.top) <= getCurrentCenterOfField() + checkGoalsCoordinates() &&
		parseInt(ballImg.style.top) >= getCurrentCenterOfField() - checkGoalsCoordinates()
	) {
		delay(200).then(playSounds(hitBallSounds))
		flag = 1;
		setSessionStorage('flag', flag)
		delay(700).then(() => {
			playSounds(goalSound)
			playerOneScore.textContent++
			setSessionStorage('playerOneScore', playerOneScore.textContent)
			setBallVerticalPosition('top')
		})
		controlGoalStyles(playerOneScore);
	}

}
//check second player goals
function checkSecondPlayerScore() {
	if (
		parseInt(ballImg.style.top) <= getCurrentCenterOfField() + checkGoalsCoordinates() &&
		parseInt(ballImg.style.top) >= getCurrentCenterOfField() - checkGoalsCoordinates()
	) {
		delay(200).then(playSounds(hitBallSounds))
		delay(700).then(() => {
			playSounds(goalSound)
			playerTwoScore.textContent++
			setSessionStorage('playerTwoScore', playerTwoScore.textContent)
			setBallVerticalPosition('top')
		})
		controlGoalStyles(playerTwoScore);
	}
}

// event click on ball
ballImg.addEventListener("click", function () {
	playSounds(kickSound)
	if (sessionStorage.getItem("flag") === "0") {
		setBallHorizontalPosition('right')
		setBallVerticalPosition('random')
		checkFirstPlayerScore();
		flag++;
		setSessionStorage('flag', flag)
	} else {
		setBallHorizontalPosition('left')
		setBallVerticalPosition('random')
		checkSecondPlayerScore();
		flag = 0;
		setSessionStorage('flag', flag)
	}
});