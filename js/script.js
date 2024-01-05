// create variables
const field = document.querySelector(".field");
const ballImg = document.querySelector(".field__ball");
const fieldImg = document.querySelector(".field__img");
const playerOneScore = document.querySelector(".player-one-score");
const playerTwoScore = document.querySelector(".player-two-score");
const restartButton = document.querySelector(".field__restart-btn");
const fullscreen = document.querySelector(".fullscreen-toggle");

const portraitOrientationTitle = document.createElement("h1");
portraitOrientationTitle.textContent = "Please use landscape orientation and click on the icon to enable full screen mode for the game to work correctly!";
portraitOrientationTitle.classList.add("portrait-orientation__message");

let flag = 0;

// get sessionStorage data
const getSessionScore = (numberPlayer, item) => {
	return (numberPlayer.textContent = sessionStorage.getItem(item));
};

// set sessionStorage data
const setSessionScore = (item, value) => {
	return (sessionStorage.setItem(item, value));
};

const checkSessionScorePresence = () => {
	if (sessionStorage.getItem("playerOneScore") && sessionStorage.getItem("playerTwoScore")) {
		getSessionScore(playerOneScore, "playerOneScore");
		getSessionScore(playerTwoScore, "playerTwoScore");
	} else {
		playerOneScore.textContent = 0;
		playerTwoScore.textContent = 0;
	}
}



// add listener that can restart the game
restartButton.addEventListener("click", function () {
	setSessionScore("playerOneScore", 0)
	setSessionScore("playerTwoScore", 0)
	getSessionScore(playerOneScore, 'playerOneScore')
	getSessionScore(playerTwoScore, 'playerTwoScore')
});

//creating  functions to check the real values ​​of the width and height of element
const getCurrentBallWidth = () => ballImg.width;

const getCurrentFieldWidth = () => fieldImg.width;

const getCurrentFieldHeight = () => fieldImg.height;

const getCurrentPaddingOfField = (direction) => parseInt(getComputedStyle(fieldImg).padding + direction);

const getCurrentCenterOfField = () =>
	parseInt(getCurrentFieldHeight() / 2) - getCurrentBallWidth() / 2 + getCurrentPaddingOfField("Top");

// delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// left position during resize
const positionLeft = () => {
	ballImg.style.left = 25 + getCurrentPaddingOfField("Left") + "px";
	ballImg.style.top = 25 + getCurrentPaddingOfField("Top") + "px";
	delay(50).then(() => ballImg.style.transition = "none")
	delay(300).then(() => ballImg.style.transition = "all 0.6s ease-in")
};

// right position during resize
const positionRight = () => {
	ballImg.style.left = getCurrentFieldWidth() - getCurrentBallWidth() + getCurrentPaddingOfField("Left") - 25 + "px";
	ballImg.style.top = 25 + getCurrentPaddingOfField("Top") + "px";
	delay(50).then(() => ballImg.style.transition = "none")
	delay(300).then(() => ballImg.style.transition = "all 0.6s ease-in")
};

// check flag during resize
const checkFlagResize = () => {
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
	checkSessionScorePresence()
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
	}
	else {
		cancelFullScreen.call(document);
	}
}




// random top position
function mathRandom() {
	let min = 25 + Math.ceil(getCurrentPaddingOfField("Top"));
	let max = Math.floor(getCurrentFieldHeight() - getCurrentBallWidth() + getCurrentPaddingOfField("Bottom") - 25);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function playKickSound() {
	new Audio("kick.mp3").play();
}

function playGoalSound() {
	new Audio("goal.mp3").play();
}

function playHitTheNet() {
	new Audio("hit-the-net.mp3").play()
}

const checkWidthOfGoal = () => {
	if (getCurrentCenterOfField() >= 605) {
		return 183;
	} else if (getCurrentCenterOfField() <= 604 && getCurrentCenterOfField() >= 570) {
		return 183;
	} else if (getCurrentCenterOfField() <= 569 && getCurrentCenterOfField() >= 540) {
		return 172;
	} else if (getCurrentCenterOfField() <= 539 && getCurrentCenterOfField() >= 520) {
		return 164;
	} else if (getCurrentCenterOfField() <= 519 && getCurrentCenterOfField() >= 500) {
		return 157;
	} else if (getCurrentCenterOfField() <= 499 && getCurrentCenterOfField() >= 470) {
		return 145;
	} else if (getCurrentCenterOfField() <= 469 && getCurrentCenterOfField() >= 446) {
		return 137;
	} else if (getCurrentCenterOfField() <= 445 && getCurrentCenterOfField() >= 420) {
		return 127;
	} else if (getCurrentCenterOfField() <= 419 && getCurrentCenterOfField() >= 388) {
		return 116;
	} else if (getCurrentCenterOfField() <= 387 && getCurrentCenterOfField() >= 360) {
		return 108;
	} else if (getCurrentCenterOfField() <= 359 && getCurrentCenterOfField() >= 332) {
		return 100;
	} else if (getCurrentCenterOfField() <= 331 && getCurrentCenterOfField() >= 300) {
		return 88;
	} else if (getCurrentCenterOfField() <= 299 && getCurrentCenterOfField() >= 282) {
		return 78;
	} else if (getCurrentCenterOfField() <= 281.5 && getCurrentCenterOfField() >= 261.5) {
		return 76;
	} else if (getCurrentCenterOfField() <= 260.5 && getCurrentCenterOfField() >= 246.5) {
		return 73;
	} else if (getCurrentCenterOfField() <= 245.5 && getCurrentCenterOfField() >= 223.5) {
		return 68;
	} else if (getCurrentCenterOfField() <= 222.5 && getCurrentCenterOfField() >= 208.5) {
		return 62;
	} else {
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
		setSessionScore('flag', flag)
		delay(700).then(() => {
			playGoalSound();
			playerOneScore.textContent++
			setSessionScore('playerOneScore', playerOneScore.textContent)
			ballImg.style.left = getCurrentFieldWidth() - 25;
			ballImg.style.top = 25 + getCurrentPaddingOfField("Top") + "px";
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
			setSessionScore('playerTwoScore', playerTwoScore.textContent)
			ballImg.style.left = 25 + getCurrentPaddingOfField("Left") + "px";
			ballImg.style.top = 25 + getCurrentPaddingOfField("Top") + "px";
		})
		showGoal(playerTwoScore);
	}
}

// event click on ball
ballImg.addEventListener("click", function () {
	playKickSound();
	if (sessionStorage.getItem("flag") === "0") {
		ballImg.style.left = getCurrentFieldWidth() - getCurrentBallWidth() + +getCurrentPaddingOfField("Right") - 25 + "px";
		ballImg.style.top = mathRandom() + "px";
		checkFirstPlayerScore();
		flag++;
		setSessionScore('flag', flag)
	} else {
		ballImg.style.left = 25 + +getCurrentPaddingOfField("Left") + "px";
		ballImg.style.top = mathRandom() + "px";
		checkSecondPlayerScore();
		flag = 0;
		setSessionScore('flag', flag)
	}
});

