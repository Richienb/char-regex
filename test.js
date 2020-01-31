const test = require("ava")
const charRegex = require(".")

test("main", (t) => {
	t.deepEqual("❤️👊🏽".match(charRegex()), ["❤️", "👊🏽"])
})
