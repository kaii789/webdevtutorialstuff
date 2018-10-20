// board class with fields for score of p1 and p2
// add score for player 


// need dom for the h1 and h3 >> update score and playing up to
// playing up to default is 5 >> but this may change
// also need dom for reset 

class Board {
	constructor(){
		this.scoreText = document.querySelector("#scoreUI");
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
	}

	updateUI() {
		var uI = " ";
		for (var player in this.playerToScore) {
			uI += this.playerToScore[player] + " "; 
 		}
 		uI = uI.trim();

 		this.scoreText.textContent = uI;
	}
}


var scoreBoard = new Board();
scoreBoard.addPlayer("p1");
scoreBoard.addPlayer("p2");

var addPlayer1Score = document.querySelector("#addPlayer1Score");
var addPlayer2Score = document.querySelector("#addPlayer2Score");

addPlayer1Score.addEventListener("click", function() {
	scoreBoard.updatePlayerScore("p1");
	scoreBoard.updateUI();
});
addPlayer2Score.addEventListener("click", function() {
	scoreBoard.updatePlayerScore("p2");
	scoreBoard.updateUI();
});
