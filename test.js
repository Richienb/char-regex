import test from "ava"
import createAllChars from "all-chars"
import createCharRegex from "./index.js"

const allChars = createAllChars()
const charRegex = createCharRegex()

// See: https://mathiasbynens.be/notes/javascript-unicode#poo-test
test("The Pile of Poo Test™", t => {
	t.deepEqual("Iñtërnâtiônàlizætiøn☃💩".match(charRegex), [
		"I", "ñ", "t", "ë", "r", "n", "â", "t", "i", "ô", "n", "à", "l", "i", "z", "æ", "t", "i", "ø", "n", "☃", "💩"
	])
})

for (const character of allChars) {
	test(`Test "${character}"`, t => {
		t.deepEqual(character.match(charRegex), [character])
	})
}
