var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

var user = {

  model: {
    gid : {type: 'serial', key: true},
    email: String,
    password: String,
    is_owner: Number,
    registered: Date,
    ownerid: Number,
    veterianarianid: Number
  },
  methods: {
    hashPassword: function(password){
      return bcrypt.hashSync(password,salt);
    },
    validPassword: function(password){
      return bcrypt.compareSync(password, this.password);
    },
    getProfileId: function(){
      if (this.is_owner) {return this.ownerid}
      else {return this.veterianarianid}
    },
    serialize: function(){
      return {
        id: this.gid,
        email: this.email,
        registered: new Date(this.registered),
        profileId: this.getProfileId(),
      }
    }
  }
};

module.exports = user;