var orm = require('orm');
var bcrypt = require('bcrypt-nodejs');
var salt = bcrypt.genSaltSync(10);

var DB = orm.express('mysql://dogz:dogz123!@#@jimis.net/dogz', {
  define: function(db,models,next){
    models.user = db.define('users',{
      id: {type: 'serial', key: true},
      email: String,
      password: String,
      access_level: Number,
      subscription: Number,
      data: Object,
      signup_date: String,
      lastlogin_date: String
    }, {
      methods: {
        hashPassword: function(password){
          return bcrypt.hashSync(password,salt);
        },
        validPassword: function(password){
          return bcrypt.compareSync(password, this.password);
        },
        serialize: function(){
          return {
            id: this.id,
            email: this.email,
            access_level: this.access_level,
            subscription: this.subscription,
            data: this.data,
            signup_date: new Date(this.signup_date),
            lastlogin_date: new Date(this.lastlogin_date)
          }
        }
      }
    });
    models.article = db.define('articles', {
      id: {type: 'serial', key: true},
      scrape_id: {type: 'serial'},
      date_posted: Date,
      date_published: Date,
      author_id: {type: 'serial'},
      image: String,
      source: String,
      title: String,
      word_count: Number,
      tags: Object,
      summary: String
    }, {
      methods:{
        serialize: function () {
          return {
            id:this.id,
            scrape_id: this.scrape_id,
            date_posted: this.date_posted,
            date_published: this.date_published,
            author_id: this.author_id,
            image: this.image,
            source: this.source,
            title: this.title,
            word_count: this.word_count,
            tags: this.tags,
            summary: this.summary
          }
        },
        addComment: function (comment,done){
          comment.parent = this.id;
          comment.save(function(err){
            if (err){
              done(err)
            } else {
              done(null,comment);
            }
          })
    }
      }});
    models.comment = db.define('comments', {
      id: {type: 'serial', key: true},
      date_posted: Date,
      date_edited: Date,
      author: String,
      parent: String
    },{
      methods: {
        serialize: function (){
          return {
            id: this.id,
            date_posted: this.date_posted,
            date_edited: this.date_edited,
            author: this.author,
            parent: this.parent
          }
        }
      }
    });
    models.scrape = db.define('scraped',{
      id: {type: 'serial', key: true},
      date: Date,
      source: String,
      title: String,
      link: String,
      pubDate: String,
      images: Object,
      content: Object,
      wordCount: Number
    },
      {
        methods: {
          serialize: function(){
            return {
              id: this.id,
              date: this.date,
              source: this.source,
              title: this.title,
              link: this.link,
              pubDate: this.pubDate,
              images: this.images,
              content: this.content,
              wordCount: this.wordCount
            }
        }}
      });
    next();
  }
});

module.exports = DB;