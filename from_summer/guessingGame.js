var number = 4;
var guessedNumber = Number(prompt("Guess a number"));
if (guessedNumber < number) {
	alert("Go Higher");
}
else if (guessedNumber ===	 number) {
	alert("Yis");
}
else {
	alert("Go lower");
}