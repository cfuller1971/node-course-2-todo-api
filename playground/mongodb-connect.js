// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://@localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: 'false'
	// }, (err, res) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Todo', err);
	// 	}
	// 	console.log(JSON.stringify(res.ops, undefined, 2));
	// });

	// Insert new doc into users collection
	// name, age, location

	// db.collection('Users').insertOne({
	// 	name: 'Carl Fuller',
	// 	age: 45,
	// 	location: 'Huffman, TX'
	// }, (err, res) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Todo', err);
	// 	}
	// 	console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
	// });

	db.close();
});