import './style.scss';
import kickSound from './sounds/kick.mp3'
import goalSound from './sounds/goal.mp3';
import hitBallSounds from './sounds/hit-the-net.mp3';
import { getSessionStorage } from './js/storage/getSessionStorage';
import { playerOneScore, playerTwoScore, setPlayerScore } from './js/playerScore/setPlayerScore';
import { setSessionStorage } from './js/storage/setSessionStorage';
import { checkSessionScorePresence } from './js/playerScore/checkSessionScoreExists';
import { ballImg, setBallHorizontalPosition, setBallVerticalPosition } from './js/ball/setBallPosition';
import { setBallPositioningTransition } from './js/ball/setBallPositioningTransition';
import { getItemSizes } from './js/sizes/getItemSizes';
import { getCurrentCenterOfField } from './js/sizes/getCurrentCenterOfField';

const field = document.querySelector(".field");
export const fieldImg = document.querySelector(".field__img");
const restartButton = document.querySelector(".field__restart-btn");
const fullscreen = document.querySelector(".fullscreen-toggle");
const portraitOrientationTitle = document.createElement("h1");
portraitOrientationTitle.textContent = "Please use landscape orientation and click on the icon to enable full screen mode for the game to work correctly!";
portraitOrientationTitle.classList.add("portrait-orientation__message");

let flag = 0;

restartButton.addEventListener("click", function () {
	setSessionStorage("playerOneScore", 0)
	setSessionStorage("playerTwoScore", 0)
	setPlayerScore(playerOneScore, getSessionStorage('playerOneScore'))
	setPlayerScore(playerTwoScore, getSessionStorage('playerTwoScore'))
});

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// left position during resize
const positionLeft = () => {
	setBallHorizontalPosition('left')
	setBallVerticalPosition("top")
};

// right position during resize
const positionRight = () => {
	setBallHorizontalPosition('right')
	setBallVerticalPosition('top')
};

// check flag during resize
const checkFlagResize = () => {
	setBallPositioningTransition()
	if (sessionStorage.getItem("flag") === "0") {
		positionLeft();
	} else {
		positionRight();
	}
};

// function that changes styles in portrait orientation
function changeStylesPortraitOrientation() {
	field.classList.add("portrait-orientation");
	field.append(portraitOrientationTitle);
	for (const item of field.children) {
		if (item.tagName === "H1") {
			break;
		} else {
			item.style.display = "none";
		}
	}
	checkFlagResize()
}

// function that changes styles in landscape orientation
function changeStylesLandscapeOrientation() {
	field.classList.remove("portrait-orientation");
	portraitOrientationTitle.remove();
	for (const item of field.children) {
		if (item.className === "players-score") {
			item.style.display = "flex";
		}
		else {
			item.style.display = "block";
		}
	}
	checkFlagResize()
}

// check the orientation on mobile
const checkOrientation = () => {
	if (window.matchMedia("(orientation: portrait)").matches) {
		changeStylesPortraitOrientation()
	}
	if (window.matchMedia("(orientation: landscape)").matches) {
		changeStylesLandscapeOrientation()
	}
};

// resize event
window.addEventListener("resize", () => {
	checkFlagResize();
	checkOrientation();
});

// window load event
window.addEventListener("load", () => {
	checkOrientation();
	checkFlagResize()
	checkSessionScorePresence()
});

// toggle fullscreen
fullscreen.addEventListener("click", toggleScreen);

function toggleScreen() {
	const document = window.document;
	const html = document.documentElement;

	const requestFullScreen = html.requestFullscreen || html.mozRequestFullScreen || html.webkitRequestFullScreen || html.msRequestFullscreen;
	const cancelFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
	if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
		requestFullScreen.call(html);
	} else {
		cancelFullScreen.call(document);
	}
}

// random top position
export function mathRandom() {
	let min = 25;
	let max = Math.floor(getItemSizes(fieldImg, 'height') - getItemSizes(ballImg, 'width') - 25);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function playKickSound() {
	new Audio(kickSound).play();
}

function playGoalSound() {
	new Audio(goalSound).play();
}

function playHitTheNet() {
	new Audio(hitBallSounds).play()
}

const checkWidthOfGoal = () => {
	const center = getCurrentCenterOfField();
	const heights = [
		{ min: 570, height: 183 },
		{ min: 540, height: 172 },
		{ min: 520, height: 164 },
		{ min: 500, height: 157 },
		{ min: 470, height: 145 },
		{ min: 446, height: 137 },
		{ min: 420, height: 127 },
		{ min: 388, height: 116 },
		{ min: 360, height: 108 },
		{ min: 332, height: 100 },
		{ min: 300, height: 88 },
		{ min: 282, height: 78 },
		{ min: 261.5, height: 76 },
		{ min: 246.5, height: 73 },
		{ min: 223.5, height: 68 },
		{ min: 208.5, height: 62 },
	]
	for (const item of heights) {
		if (center >= item.min) {
			return item.height
		}
	}
	if (center < 208.5) {
		return 18;
	}
};

function showGoal(numberOfPlayer) {
	delay(700).then(() => numberOfPlayer.style.color = "red")
	delay(1600).then(() => numberOfPlayer.style.color = "#e4ff00")
}

function checkFirstPlayerScore() {
	if (
		parseInt(ballImg.style.top) <= getCurrentCenterOfField() + checkWidthOfGoal() &&
		parseInt(ballImg.style.top) >= getCurrentCenterOfField() - checkWidthOfGoal()
	) {
		delay(200).then(playHitTheNet)
		flag = 1;
		setSessionStorage('flag', flag)
		delay(700).then(() => {
			playGoalSound();
			playerOneScore.textContent++
			setSessionStorage('playerOneScore', playerOneScore.textContent)
			setBallVerticalPosition('top')
		})
		showGoal(playerOneScore);
	}

}
//check second player goals
function checkSecondPlayerScore() {
	if (
		parseInt(ballImg.style.top) <= getCurrentCenterOfField() + checkWidthOfGoal() &&
		parseInt(ballImg.style.top) >= getCurrentCenterOfField() - checkWidthOfGoal()
	) {
		delay(200).then(playHitTheNet)
		delay(700).then(() => {
			playGoalSound();
			playerTwoScore.textContent++
			setSessionStorage('playerTwoScore', playerTwoScore.textContent)
			setBallVerticalPosition('top')
		})
		showGoal(playerTwoScore);
	}
}

// event click on ball
ballImg.addEventListener("click", function () {
	playKickSound();
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