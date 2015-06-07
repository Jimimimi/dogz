var dogcalendar = {
  model: {
    gid: {type:'serial', key: true},
    startDate: Date,
    endDate: Date,
    symptomId: {type: 'serial'},
    dogId: {type: 'serial'}
  },
  methods: {
    getDuration: function(){
      //todo
    },
    serialize: function(){
      return {
        gid: this.gid,
        startDate: Date,
        endDate: Date,
        symptomId: {type: 'serial'},
        dogId: {type: 'serial'}
      }
    }
  }
}

module.exports = dogcalendar;