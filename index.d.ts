/**
 * A regex to match any full character, considering weird character ranges.
 * @example
 * ```
 * const charRegex = require("char-regex");
 *
 * "❤️👊🏽".split(charRegex())
 * //=> ["❤️", "👊🏽"]
 * ```
*/
declare function charRegex(): RegExp;

export = charRegex;
