var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodewebappdb');
console.log(mongoose.connection.readyState);