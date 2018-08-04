var fs=require('fs');
var bodyParser=require('body-parser');

/*
var data=fs.readFileSync('./database/data.json');
data=JSON.parse(data)

var urlencodedParser=bodyParser.urlencoded({extended: false});

var addData=function(data){
  data=JSON.stringify(data);
  fs.writeFileSync('./database/data.json',data);
}
*/
const database = require('../models/database');
var urlencodedParser=bodyParser.urlencoded({extended: false});

database.run();


module.exports=function(app){

  app.get('/todo',function(req,res){
database.todo.find({},function(err, data){
  if(err) throw err;
  console.log('finded..',data);
  res.render('todo', {todos:data});

});


  });

app.post('/todo',urlencodedParser,function(req,res){
  var newItem = database.todo(req.body).save(function(err,data){
    if(err) throw err;
      res.json(data);
  });

});

app.delete('/todo/:item',function(req,res){
  database.todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
    if(err) throw err;
    res.json(data);
  })

  })






}
