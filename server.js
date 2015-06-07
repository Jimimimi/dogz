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


app.post('/register', function(req,res,next) {

  if (!db.findOne('users',{email:req.body.email}).id) {
    var newuser = new User(req.body);
    var user = db.save('users',newuser);
    res.status(200).json(user);
  } else {
    res.status(500).json({message: 'User already exists! Try signing in instead'});
  }
})

app.post('/login', function(req,res,next) {
  var user = db.findOne('users',{email:req.body.email});
  if (!user.password){
    res.status(500).json({message: 'Cannot find email in database'});
  } else {
      if (user.password === req.body.password) {
        res.status(200).json(user);
     } else {
        res.status(500).json({message: 'Wrong password'});
     }
  }
});

app.get('/users/:userId', function(req,res,next) {
  var user = db.findOne('users', {id: req.params.userId});
  res.status(200).json(user);
});

app.get('/users/:userId/dogs', function(req,res,next) {
  var dogs = db.find('dogs', {owner: req.params.userId});
  res.status(200).json(dogs);
});

app.post('/users/:userId/dogs', function(req,res,next) {
  var newdog = new Dog(req.body);
  newdog.owner = req.params.userId;
  var dog = db.save('dogs', newdog)
  res.status(200).json(dog);
});

app.get('/dogs/:dogId', function(req,res,next) {
  var dog = db.findOne('dogs', {id:req.params.dogId});
  if (!dog.id) {
    res.status(500).json({message: 'Cannot find dog'});
  } else {
    res.status(200).json(dog);
  }
});

app.get('/dogs/:dogId/events', function(req,res,next) {
  var ev = db.find('events', {dog: req.params.dogId});
  res.status(200).json(ev);
});

app.post('/dogs/:dogId/events', function(req,res,next) {
  var newEv = new DogEvent(req.body);
  newEv.dog = req.params.dogId;
  var ev = db.save('events', newEv);

  res.status(200).json(ev);
});

app.get('/dogs/:dogId/symptomevents', function(req,res,next){
  var symptoms = db.find('symptomEvents', {dog: req.params.dogId});
  res.status(200).json(symptoms);
});

app.post('/dogs/:dogId/symptomevents', function(req,res,next) {
  var newSym = new SymptomEvent(req.body);
  newSym.dog = req.params.dogId;
  var sym = db.save('events', newSym);

  res.status(200).json(sym);
});


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