import { expectType } from "tsd"
import charRegex from "./index.js"

expectType<RegExp>(charRegex())
