const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./userRoute');
var chai,{ assert,expect } = require('chai');  
var should = chai.should();


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/soraya_DB', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/user', userRoutes);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});

//######## routes ##########
app.get('/',(req,res)=>{
    console.log('route: /');
    res.send('root')
})

// app.post('/add',(req,res)=>{
//     console.log('route: /add');
//     res.send('hello')
// })