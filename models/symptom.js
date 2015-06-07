var symptom = {
  model: {
    gid: {type:'number', key: true},
    name: String,
    commentid: Number,
    dogmasterid: Number
  },
  methods: {
    getAge: function(){
      //todo
    },
    serialize: function(){
      return {
        gid: this.gid,
        name: this.name,
        description: this.commentid,
        dog: this.dogmasterid
      }
    }
  }
}