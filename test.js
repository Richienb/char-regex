const test = require("ava")
const charRegex = require(".")

test("main", (t) => {
	t.is("❤️👊🏽".split(charRegex()), ["❤️", "👊🏽"])
})
