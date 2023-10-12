const express = require("express");
const logs = express.Router()
const logArray = require("../models/log.js")

logs.use(express.json())

logs.post("/", (req, res, next) => {
	const newLog= req.body
	console.log(req.body);
	logsArray.push(newLog);
	res.status(200).send(JSON.stringify(req.body))
})

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
	
logs.delete("/:arrayIndex", (req, res) => {
	const {arrayIndex} = req.params
	 if (logArray[arrayIndex]) {
			const removedLog = logArray.splice(arrayIndex, 1);
			res.status(303).json(removedLog);
		} else {
			res.status(404).redirect();
		}
})

module.exports = logs