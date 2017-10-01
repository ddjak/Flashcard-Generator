module.exports = BasicCard;

function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

var firstPres = new BasicCard("Who was the first president of the United States?", "George Washington");

console.log(firstPres.front);

console.log(firstPres.back);