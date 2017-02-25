const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58b0b8d148d070954cc00db311';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// };

// Comes back as array
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// // Comes back as object
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

// Query users collection
// load User mongoose model
// User.findById
// Query works, but no user - user not found
// User found - print to the screen
// Print error object to screen

var id = '58b076750fdaf71149ebfea0';

if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
};

User.findById(id).then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));