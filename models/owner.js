
var owner = {

  model: {
    gid : {type: 'serial', key: true},
    name: String,
    birthdate: Date,
    gender: String,
    avatarlink: String,
    commentid: Number
  },
  methods: {
    serialize: function(){
      return {
        id: this.gid,
        name: this.name,
        birthdate: new Date(this.birthdate),
        avatarlink: this.avatarlink,
        description: this.commentid
      }
    },
    getAge: function() {
      // todo
    }
  }
};

module.exports = owner;