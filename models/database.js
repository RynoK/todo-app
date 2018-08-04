const mongoose = require('mongoose');
var run =function(){
///connecting db

mongoose.connect('mongodb://user1:todouser1@ds113442.mlab.com:13442/todoapp');
mongoose.connection.once('open',function(){
  console.log('database has been connected');
}).on('error',function(err){
  console.log('DATABASE : ',err);
})

}
///make schema/
const Schema = mongoose.Schema;
var listSchema = new Schema({
  item: String
})
var Todo = mongoose.model('todo',listSchema);



module.exports.run =run ;
module.exports.todo =Todo;
