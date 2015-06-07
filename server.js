var express = require('express'),
    bodyParser = require('body-parser')
var app = express();

app.use(bodyParser());
app.use(express.query());


var Database = require('somewhere');
var db = new Database('./db/db.json');
var user = {
  email: 'jimi@jimis.net',
  password: 'test'
}

var User = function(data){
  this.email = data.email || '';
  this.password = data.password || '';
  this.registered = Date.now();
}

var Dog = function(data){
  this.name = data.name || '';
  this.dob = data.dob || new Date();
  this.weight = data.weight || 0;
  this.height = data.height || 0;
  this.gender = data.gender|| '';
  this.breed = data.breed || '';
  this.owner = data.owner || ''
  this.imagelink = data.imagelink || '';
  this.chipId = data.chipId || '';
}

var DogEvent = function(data){
  this.eventType = data.eventType || '';
  this.date = data.date || new Date();
  this.description = data.description || '';
  this.dog = data.dog || '';
}
var Symptom = function(data) {
  this.name = data.name || '';
  this.description = data.description || ''
}

var SymptomEvent = function(data){
  this.startDate = data.startDate || new Date();
  this.endDate = data.endDate || new Date();
  this.symptom = data.symptom || '';
  this.dog = data.dog || '';
}

var Disease = function(data) {
  this.name = data.name || '';
  this.symptoms = data.symptoms || [];
};



// mongoose.connect("mongodb://localhost/resources");
// var DogSchema = mongoose.Schema({
//   name: String,
//   birthdate: Date,
//   weight: Number,
//   height: Number,
//   gender: String,
//   breedname: String,
//   owner: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
//   imagelink: String,
//   chip_id: String
// });

// var User = restful.model('user', mongoose.Schema({
//     email: String,
//     password: String,
//     dogs: [DogSchema],
//     registered: Date
// }))
//   .methods(['get', 'post', 'put', 'delete']);

// var Dog = restful.model('dog', DogSchema)
//   .methods(['get', 'post', 'put', 'delete']);

// var DogSymptomEvent = restful.model('symptom', mongoose.Schema({
//   name: String,
//   description: String,
//   startDate: Date,
//   endDate: Date,
//   dog: {type: mongoose.Schema.Types.ObjectId, ref: 'dog'}
// }))
//   .methods(['get','post','put','delete']);

// var DogEvent = restful.model('dogEvent', mongoose.Schema({
//   name: String,
//   description: String,
//   dog: {type: mongoose.Schema.Types.ObjectId, ref: 'dog'}
// }))
//   .methods(['get','post','put','delete']);

// var Disease = restful.model('Disease', mongoose.Schema({
//   name: String,
//   symptoms: [{type: mongoose.Schema.Types.ObjectId, ref: 'symptom'}]
// }))
//   .methods(['get','post','put','delete']);



// User.register(app, '/users');
// Dog.register(app, '/dogs');
// DogSymptomEvent.register(app, '/symptomevents');
// DogEvent.register(app,'/dogevents');
// Disease.register(app,'/diseases');


app.listen(3000);  