import test from 'ava';
import createAllChars from 'all-chars';
import {createAllTeluguChars, createTeluguCharPairs} from './fixture/all-telugu-chars.js';
import createCharRegex from './index.js';

const allChars = createAllChars();
const allTeluguChars = createAllTeluguChars();
const sampleTeluguCharPairs = createTeluguCharPairs();
const charRegex = createCharRegex();

function getCodePoints(string) {
	let result = '';

	for (let index = 0; index < string.length; index++) {
		result += `\\u${string.codePointAt(index)}`;
	}

	return result;
}

// See https://mathiasbynens.be/notes/javascript-unicode#poo-test
test('The Pile of Poo Test™', t => {
	t.deepEqual('Iñtërnâtiônàlizætiøn☃💩'.match(charRegex), [
		'I', 'ñ', 't', 'ë', 'r', 'n', 'â', 't', 'i', 'ô', 'n', 'à', 'l', 'i', 'z', 'æ', 't', 'i', 'ø', 'n', '☃', '💩',
	]);
});

// Test for Telugu language with custom code point combinations
for (const character of allTeluguChars) {
	test(`Test Telugu "${character}" (${getCodePoints(character)})`, t => {
		t.deepEqual(character.match(charRegex), [character]);
	});
}

// Test for Telugu language generating certain char pairs
for (const characters of sampleTeluguCharPairs) {
	test(`Test Telugu char pairs "${characters}" (${getCodePoints(characters)})`, t => {
		t.true(characters.match(charRegex).length === 2);
	});
}

for (const character of allChars) {
	test(`Test "${character}" (${getCodePoints(character)})`, t => {
		t.deepEqual(character.match(charRegex), [character]);
	});
}
