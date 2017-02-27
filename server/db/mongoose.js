var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost:27017/TodoApp');
mongoose.connect(process.env.MongoDB_URI);
//mongoose.connect('mongodb://cfuller1971:F0rn1cat3!@ds161049.mlab.com:61049/nodetodoapi');

module.exports = {mongoose};