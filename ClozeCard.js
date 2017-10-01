module.exports = ClozeCard;

function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	

	if (this.text.includes(this.cloze)) {
		this.partial = this.text.replace(this.cloze, '...');
	}

	else if (!this.text.includes(this.cloze)) {
		this.cloze = 'ERROR';
		this.partial = 'NO';
		this.text = 'MATCH';
	}
}

var firstPres = new ClozeCard("George Washington was the first president of the United States", "George Washington");

	console.log(firstPres.cloze);
	console.log(firstPres.partial);
	console.log(firstPres.text);
	console.log("\n---------------------\n")

var brokenCloze = new ClozeCard("This doesn't work", "oops");

	console.log(brokenCloze.cloze);
	console.log(brokenCloze.partial);
	console.log(brokenCloze.text);