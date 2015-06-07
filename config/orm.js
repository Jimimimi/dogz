var orm = require('orm');
var bcrypt = require('bcrypt-nodejs');
var salt = bcrypt.genSaltSync(10);
var users = require('../models/user'),
    owner = require('../models/owner'),
    vet = require('../models/vet'),
    dog = require('../models/dog'),
    event_ = require('../models/event'),
    symptom = require('../models/symptom'),
    symptomEvent = require('../models/symptomEvent'),
    disease = require('../models/disease'),
    comment = require('../models/comment');


var DB = orm.express('mysql://dogz:dogz123!@#@jimis.net/dogz', {
  define: function(db,models,next){
    models.user = db.define('users',user.model, {
,      methods: user.methods
    });
    models.owner = db.define('owners', owner.model, {
      methods: owner.methods
    });
    models.vet = db.define('veterinarian', vet.model, {
      methods: vet.methods
    });
    models.dog = db.define('dogmaster',dog.model,{
      methods: dog.methods
    });
    models.event_ = db.define('events', event_.model,{
      methods: event_.methods
    });
    models.symptom = db.define('symptoms', symptom.model, {
      methods: symptom.methods
    });
    models.symptomEvent = db.define('dogcalendar', dogcalendar.model, {
      methods: dogcalendar.methods
    });
    models.disease = db.define('dogdiseases', diseases.model, {
      methods: diseases.methods
    });
    models.comment = db.define('comments', comment.model,{
      methods: comment.methods
    });
    next();
  }
});

module.exports = DB;