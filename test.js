const test = require("ava")
const arrayUniq = require("array-uniq")
const unicodeChars = arrayUniq([...require("unicode-chars")(), ...require("emoji.json").map(({ char }) => char)])
const charRegex = require(".")()

// See: https://mathiasbynens.be/notes/javascript-unicode#poo-test
test("The Pile of Poo Test™", (t) => {
	t.deepEqual("Iñtërnâtiônàlizætiøn☃💩".match(charRegex), [
		"I", "ñ", "t", "ë", "r", "n", "â", "t", "i", "ô", "n", "à", "l", "i", "z", "æ", "t", "i", "ø", "n", "☃", "💩",
	])
})

unicodeChars.forEach((character) => {
	test(`Test "${character}"`, (t) => {
		t.deepEqual(character.match(charRegex), [character])
	})
})
