// board class with fields for score of p1 and p2
// add score for player 


// need dom for the h1 and h3 >> update score and playing up to
// playing up to default is 5 >> but this may change
// also need dom for reset 

class Board {
	constructor(){
		this.scoreText = document.querySelector("#scoreUI");
		this.maxUI = document.querySelector("#maxUI");
		this.playerToScore = new Object();
		this.maxScore = 5;
	}

	addPlayer(player) {
		if (!(player in this.playerToScore)) {
			this.playerToScore[player] = 0;
		}
	}

	updatePlayerScore(player) {
		
			var canUpdate = player in this.playerToScore && 
			this.playerToScore[player] + 1 <= this.maxScore;
			if (canUpdate) {
				this.playerToScore[player]++;
			}

			// if the current player wins as a result of the just made move, make green
			if (this.isGameOver()) {
				var scoreSpan = document.querySelector("#" + player);
				scoreSpan.classList.add("winner");
			}
	
	}

	updateUI() {
		// update scoreboard
		var uI = " ";
		for (var player in this.playerToScore) {
			var currentElement = "<span id='" + player +  "'>" + this.playerToScore[player] + "</span>";
			uI += currentElement + " "; 
 		}
 		uI = uI.trim();
		this.scoreText.innerHTML = uI;
		 
		// update max score info
		var maxScoreDisplay = "Playing to: " + this.maxScore;
		this.maxUI.textContent = maxScoreDisplay;
	}

	isGameOver() {
		for (var player in this.playerToScore) {
			if (this.playerToScore[player] >= this.maxScore) {
				return true;
			}
		}
		return false;
	}

	reset() {
		this.playerToScore = new Object();
	}

	setMax(maxScore) {
		this.maxScore = maxScore;
	}
}


var scoreBoard = new Board();
scoreBoard.addPlayer("p1");
scoreBoard.addPlayer("p2");

var addPlayer1Score = document.querySelector("#addPlayer1Score");
var addPlayer2Score = document.querySelector("#addPlayer2Score");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("#numInput");

addPlayer1Score.addEventListener("click", function() {
	if (!scoreBoard.isGameOver()) {
		scoreBoard.updatePlayerScore("p1");
		scoreBoard.updateUI();
	}
});

addPlayer2Score.addEventListener("click", function() {
	if (!scoreBoard.isGameOver()) {
		scoreBoard.updatePlayerScore("p2");
		scoreBoard.updateUI();
	}
});

reset.addEventListener("click", function() {
	scoreBoard.reset();
	scoreBoard.addPlayer("p1");
	scoreBoard.addPlayer("p2");
	scoreBoard.updateUI();
})

numInput.addEventListener("change", function() {
	if (!scoreBoard.isGameOver()) {
		var newMax = numInput.value;
		scoreBoard.setMax(newMax);
		scoreBoard.updateUI();
	}
	
})

