function isEven(num) {
	return (num % 2) == 0;
}

function factorial(num) {
	if (num === 1) {
		return 1;
	}
	return factorial(num - 1) * num;
}

function kebabToSnake(string) {
	// replace "-" with "_"
	result = "";
	for (letter in string) {
		if (letter === "-") {
			result += "_";
		}
		else {
			result += letter
		}
	}

}