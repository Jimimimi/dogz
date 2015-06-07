var express = require('express'),
    bodyParser = require('body-parser')
var app = express();

app.use(bodyParser());
app.use(express.query());

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