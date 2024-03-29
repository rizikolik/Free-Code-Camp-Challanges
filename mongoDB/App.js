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

/*=========================
FIND BY NAME AND UPDATE 
==========================*/
var findAndUpdate = function(personName, done) {
  var ageToSet = 20;

  Person.findOneAndUpdate(
    {name: personName},
    {$set: {age: ageToSet}},
    {new: true},
    (err, data) => {
      if (err) return done(err, data);
      return done(null, data);
    }
  );
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
/*==============================================
FIND AND MODEL WİTH AN ID AND UPDATE IT AND SAVE 
================================================*/
var findEditThenSave = function(personId, done) {
  var foodToAdd = 'hamburger';
Person.findById(personId,(err,data)=>{
  data.favoriteFoods.push(foodToAdd);
  data.save((err,data)=>{
    if(err){
     return done(err);
    }
    return done(null,data)
  });
  if(err){
    return done(err);
  }
})
};

/*======================================================================
Find people who like "burrito". Sort them alphabetically by name,
 Limit the results to two documents, and hide their age.
Chain `.find()`, `.sort()`, `.limit()`, `.select()`, and then `.exec()`,
=======================================================================*/
var queryChain = function(done) {
  var foodToSearch = "burrito";
  Person.find({favoriteFoods:foodToSearch}).sort("name").limit(2).select("-age").exec((err,data)=>{
    err?done(err):done(null,data);
  })
  
  
};




