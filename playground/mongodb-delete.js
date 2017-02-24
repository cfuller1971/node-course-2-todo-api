// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://@localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');

	// deleteMany
	// db.collection('Todos').deleteMany({
	// 	text: 'Beat up the kid down the street'
	// })
	// .then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({
	// 	text: 'Walk the dog'
	// })
	// .then((result) =>  {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({
	// 	completed: false
	// })
	// .then((result) => {
	// 	console.log(result);
	// });

	//deleteMany
	// db.collection('Users').deleteMany({
	// 	name: 'Carl Fuller'
	// })
	// .then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('58b0211ccc690943ee08d5d8')
	})
	.then((result) => {
		console.log(result);
	});

	//db.close();
});