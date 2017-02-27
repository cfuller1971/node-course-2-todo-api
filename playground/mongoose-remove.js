const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: 58b36e8d9c68781659a7964f}).then((todo) => {

});

Todo.findByIdAndRemove('58b36e8d9c68781659a7964f').then((todo) => {
	console.log(todo);
});