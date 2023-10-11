const express = require("express");
const logs = express.Router()
const logArray = require("../models/log.js")

logs.get("/", (req, res) => {
	res.json(logArray)
})

logs.get("/:arrayIndex", (req, res) => {
	const{arrayIndex} = req.params;
	if (logArray[arrayIndex]) {
		res.status(200).json(logArray[arrayIndex])
	} else {
		res.status(404).redirect()
	}
})
	
logs.post("/", (req, res) => {
	logsArray.push(req.body);
	res.status(200).json(logArray[logArray.length - 1]).send()
})


module.exports = logs