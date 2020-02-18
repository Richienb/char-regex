"use strict"

// Based on: https://github.com/lodash/lodash/blob/master/.internal/unicodeSize.js

module.exports = () => {
	// Used to compose unicode character classes.
	const astralRange = "\\ud800-\\udfff"
	const comboMarksRange = "\\u0300-\\u036f"
	const comboHalfMarksRange = "\\ufe20-\\ufe2f"
	const comboSymbolsRange = "\\u20d0-\\u20ff"
	const comboMarksExtendedRange = "\\u1ab0-\\u1aff"
	const comboMarksSupplementRange = "\\u1dc0-\\u1dff"
	const comboRange = comboMarksRange + comboHalfMarksRange + comboSymbolsRange + comboMarksExtendedRange + comboMarksSupplementRange
	const varRange = "\\ufe0e\\ufe0f"

	// Used to compose unicode capture groups.
	const astral = `[${astralRange}]`
	const combo = `[${comboRange}]`
	const fitz = "\\ud83c[\\udffb-\\udfff]"
	const modifier = `(?:${combo}|${fitz})`
	const nonAstral = `[^${astralRange}]`
	const regional = "(?:\\uD83C[\\uDDE6-\\uDDFF]){2}"
	const rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]"
	const zwj = "\\u200d"

	// Used to compose unicode regexes.
	const optModifier = `${modifier}?`
	const optVar = `[${varRange}]?`
	const optJoin = `(?:${zwj}(?:${[nonAstral, regional, rsSurrPair].join("|")})${optVar + optModifier})*`
	const seq = optVar + optModifier + optJoin
	const nonAstralCombo = `${nonAstral}${combo}?`
	const symbol = `(?:${[nonAstralCombo, combo, regional, rsSurrPair, astral].join("|")})`

	// Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode).
	return new RegExp(`${fitz}(?=${fitz})|${symbol + seq}`, "g")
}
