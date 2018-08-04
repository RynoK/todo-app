var express=require('express');
var controller=require('./controllers/controller');

var app=express();
controller(app);
app.set('view engine','ejs');
app.use(express.static("./public"));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server started on port ${port}`));
