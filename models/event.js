var event_ = {
  model: {
    gid: {type:'serial', key: true},
    eventype: String,
    rdate: Date,
    commentid: {type: 'serial'},
    dogmasterid: {type: 'serial'}
  },
  methods: {

    serialize: function(){
      return {
        gid: this.gid,
        eventype: this.eventype,
        date: this.rdate,
        description: this.commentid,
        dog: this.dogmasterid
      }
    },
    setType: function (typeOf) {
      this.eventype = typeOf;
    }
  }
};

module.exports = event_;
