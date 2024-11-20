// Using visual code point representation for better human intelligibility
const independentVowels = ['అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ౠ', 'ఌ', 'ౡ', 'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ'];
const diacriticVowels = ['ా', 'ి', 'ీ', 'ు', 'ూ', 'ృ', 'ౄ', 'ౢ', 'ౣ', 'ె', 'ే', 'ై', 'ొ', 'ో', 'ౌ'];
const consonants = ['క', 'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ', 'జ', 'ఝ', 'ఞ', 'ట', 'ఠ', 'డ', 'ఢ', 'ణ', 'త', 'థ', 'ద', 'ధ', 'న', 'ప', 'ఫ', 'బ', 'భ', 'మ', 'య', 'ర', 'ల', 'వ', 'ళ', 'శ', 'ష', 'స', 'హ', 'ఱ'];
const rareConsonants = ['ౘ', 'ౙ', 'ౚ'];
const modifiers = ['్', 'ఁ', 'ం', 'ః', 'ౕ', 'ౖ'];
const numerals = ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯', '౸', '౹', '౺', '౻', '౼', '౽', '౾'];
const virama = '్';

const doubleCombos = []; // Telugu symbols built out of two code points
const tripleCombos = []; // Telugu symbols built out of three code points

// Consonants can be combined with many other character modifiers
for (const consonant of consonants) {
	// Consonant + vowel
	for (const vowel of diacriticVowels) {
		doubleCombos.push(String.fromCodePoint(consonant.codePointAt(0), vowel.codePointAt(0)));
	}

	// Consonant + special vowel modifier or length mark
	for (const modifier of modifiers) {
		doubleCombos.push(String.fromCodePoint(consonant.codePointAt(0), modifier.codePointAt(0)));
	}

	// Consonant + consonant (separated by ్)
	for (const consonant2 of consonants) {
		tripleCombos.push(String.fromCodePoint(consonant.codePointAt(0), virama.codePointAt(0), consonant2.codePointAt(0)));
	}
}

// Rare consonants like common consonants, but lack the consonant conjuncts
for (const consonant of rareConsonants) {
	// Rare consonant + vowel
	for (const vowel of diacriticVowels) {
		doubleCombos.push(String.fromCodePoint(consonant.codePointAt(0), vowel.codePointAt(0)));
	}

	// Rare consonant + special vowel modifier or length mark
	for (const modifier of modifiers) {
		doubleCombos.push(String.fromCodePoint(consonant.codePointAt(0), modifier.codePointAt(0)));
	}
}

/**
Create all single Telugu characters possible.

@return {string[]} All single Telugu chars possible.
*/
export function createAllTeluguChars() {
	return [...independentVowels, ...consonants, ...rareConsonants, ...numerals, ...doubleCombos, ...tripleCombos];
}

/**
Create Telugu character pairs that might occur.

Although it's possible in theory to create missed cases by combining certain single characters, they are hopefully not something that would happen in written Telugu.

@return {string[]} Telugu char pairs.
*/
export function createTeluguCharPairs() {
	const sampleCharsOneCodePoint = [...independentVowels, ...consonants, ...rareConsonants, ...numerals];
	const sampleCharsTwoCodePoints = [...doubleCombos];

	const charPairs = [];
	for (const char1 of sampleCharsOneCodePoint) {
		for (const char2 of sampleCharsOneCodePoint) {
			charPairs.push(`${char1}${char2}`);
		}

		for (const char2 of sampleCharsTwoCodePoints) {
			charPairs.push(`${char1}${char2}`);
		}
	}

	return charPairs;
}
