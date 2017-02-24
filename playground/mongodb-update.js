// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://@localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb server');

	// findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('58b03236cc690943ee08d5db')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	// Update Users Name and Increment Age
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('58af8d22d7bdfe44b03c58bb')
	}, {
		$set: {
			name: "Carl Fuller"
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});


	//db.close();
});