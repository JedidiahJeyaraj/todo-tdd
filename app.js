const express = require("express")
const todoRoutes = require("./routes/todo.routes");
const app = express();
const mongodb = require('./mongodb/mongodb.connect');

mongodb.connect()

app.use(express.json());


app.get("/", (req, res) => {
    res.json("Hello World")
});

app.use("/todos", todoRoutes);


module.exports = app;