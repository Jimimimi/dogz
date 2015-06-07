
var vet = {

  model: {
    gid : {type: 'serial', key: true},
    name: String,
    birthdate: Date,
    gender: String,
    avatarlink: String,
    commentid: Number,
    businessname: String,
    address: String,
    city: String,
    telephone: String,
    mobile: String,
    country: String,
    rating: Number
  },
  methods: {
    serialize: function(){
      return {
        id: this.gid,
        name: this.name,
        birthdate: new Date(this.birthdate),
        avatarlink: this.avatarlink,
        description: this.commentid,
        businessname: this.businessname,
        address: this.address,
        city: this.city,
        telephone: this.telephone,
        mobile: this.mobile,
        country: this.country,
        rating: this.rating
      }
    },
    getAge: function() {
      // todo
    }
  }
};

module.exports = owner;