var dog = {
  model: {
    gid: {type:'serial', key: true},
    name: String,
    birthdate: Date,
    weight: Number,
    height: Number,
    gender: String,
    breedname: String,
    ownerid: {type:'serial'},
    imagelink: String,
    chip_id: String
  },
  methods: {
    getAge: function(){
      //todo
    },
    serialize: function(){
      return {
        gid: this.gid,
        name: this.name,
        birthdate: this.birthdate,
        weight: this.weight,
        height: this.height,
        gender: this.gender,
        breedname: this.breedname,
        ownerid: this.ownerid,
        imagelink: this.imagelink,
        chip_id: this.chip_id
      }
    }
  }
}