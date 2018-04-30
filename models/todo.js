const mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/nodeapp', {
}).then(function(){
    console.log('Database Connected');
});

let todoSchema = new Schema({
    description: String,
    done: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);

