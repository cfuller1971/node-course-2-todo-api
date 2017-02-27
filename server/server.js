var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/TodoApp');

var app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos})
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get(`/todos/:id`, (req, res) => {
	var id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Todo.findById(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}
		res.send({todo})
	}).catch((e) => {
		res.status(400).send();
	});

});

// Update

// Delete

app.delete('/todos/:id', (req, res) => {
	// get the id
	var id = req.params.id;

	// validate the id - if not, return 404
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	// remove todo by id
	Todo.findByIdAndRemove(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}
		res.send({todo})
	}).catch((e) => {
		res.status(400).send();
	});
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

module.exports = {app};