var mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI);

/*====================================
CREATE A SCHEMA AND A MODEL 
====================================*/
var PersonSchema=new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods :{
    type: Array,
  
  }
  
});
var Person=mongoose.model("Person",PersonSchema);

/*===============================================
CREATE A NEW INSTANCE AND SAVE IT WİTH A CALLBACK
================================================*/
var createAndSavePerson = function(done) {
  const person=new Person({
  name:"dfdfdf",
  age:12,
  favoriteFoods:["njfdbfdj","fdfdf"]
});
person.save((err,data)=>{
  if(err){
 return  done(err);
  }else{
     return done(null, data);
  }
})};
/*============================================
CREATE MANY WITH AN ARRAY USING MODEL.CREATE()
=============================================*/
var createManyPeople = function(arrayOfPeople, done) {
    Person.create(arrayOfPeople, function (err, data) {
      if (err) {
        done(err);
      }
    done(null, data);
    });
    
};

/*==========================================================
FIND ALL PEOPLE MATHES THE GIVEN PARAMETER WITH `Model.find()
===========================================================*/
var findPeopleByName = function(personName, done) {
  Person.find({name:personName},(err,data)=>{
             if (err) {
        done(err);
      }
    done(null, data);  
              })
};

/*=======================================================================
FIND JUST ONE PERSON THAT HAS A "favoriteFoods:" KEYS  MATHCHES THE QUERY
========================================================================*/
var findOneByFood = function(food, done) {
Person.findOne({favoriteFoods:food},(err,data)=>{
  if(err){
    return done(err);
  }
 return  done(null,data)
})
};

/*============================================
FIND THE PERSON THAT HAS THE GİVEN ID PARAMATER
=============================================*/
var findPersonById = function(personId, done) {
  Person.findById(personId,(err,data)=>{
    if(err){
      return done(err);
    }
    done(null,data)
  })
};
