const express = require("express")
const logs = require("./controllers/logsController.js")
const app = express()

app.use(express.json())
app.use("/logs", logs)

app.get("/", (req, res) => {
	res.send("Welcome To The Captain\'s Log.")
})

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;