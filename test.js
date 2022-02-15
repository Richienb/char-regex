import test from "ava"
import createAllChars from "all-chars"
import createAllTeluguChars from "./fixture/all-telugu-chars.js"
import createCharRegex from "./index.js"

const allChars = createAllChars()
const allTeluguChars = createAllTeluguChars()
const charRegex = createCharRegex()

// See: https://mathiasbynens.be/notes/javascript-unicode#poo-test
test("The Pile of Poo Test™", t => {
	t.deepEqual("Iñtërnâtiônàlizætiøn☃💩".match(charRegex), [
		"I", "ñ", "t", "ë", "r", "n", "â", "t", "i", "ô", "n", "à", "l", "i", "z", "æ", "t", "i", "ø", "n", "☃", "💩"
	])
})

// Test for Telugu language with custom code point combinations
for (const character of allTeluguChars) {
	test(`Test Telugu "${character}"`, t => {
		t.deepEqual(character.match(charRegex), [character])
	})
}

for (const character of allChars) {
	test(`Test "${character}"`, t => {
		t.deepEqual(character.match(charRegex), [character])
	})
}
