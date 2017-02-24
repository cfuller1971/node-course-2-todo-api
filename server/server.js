var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/TodoApp');

var app = express();

// Middleware
app.use(bodyParser.json());

// Create
app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

// Read

// Update

// Delete

app.listen(3000, () => {
	console.log('Server started on port 3000');
});

module.exports = {app};