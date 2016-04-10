var num = 0
while (num <= 10) {
	console.log(num);
	num++;
}

for (var number = 0; number <= 12; number++) {
	console.log(number)
}

var block = "#";
while(block.length <= 7) {
	console.log(block);
	block = block + "#";
}

for (var count = 1; count <= 100; count++) {
	if(count % 3 == 0 && count % 5 == 0) {
		console.log("Fizz");
	} 
	else if (count % 3 == 0) {
		console.log("Fizz");
	} 
	else if (count % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(count);
	}
}

var chessString = "";

var size = 20;

for (var boardSize = 1; boardSize <= size*size; boardSize++) {
	if(boardSize % size == 0) {
		chessString += "\n";
	}
	if(boardSize % 2 == 0) {
		chessString += "#";
	} else {
		chessString += " ";
	}

}

console.log(chessString);

