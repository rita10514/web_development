
const mongoose = require("mongoose");
// Replace the uri string with your MongoDB deployment's connection string.
mongoose.connect("mongodb://localhost:27017/friutsDB" ,
 {useNewUrlParser: true , useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const apple = mongoose.model("Fruit", fruitSchema );
const fruit = new Fruit({
  name: "apple",
  rating: 7,
  review: "pretty good"
});

apple.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema );
const person = new Person({
  name: "John",
  age: 37
});


person.save();

const kiwi  = new Fruit({
  name: "kiwi",
  rating: 10,
  review: "pretty good"
});

const orange  = new Fruit({
  name: "orange",
  rating: 4,
  review: "meh"
});

const banana  = new Fruit({
  name: "banana",
  rating: 3,
  review: "just bad"
});

Fruit.insertMany([kiwi,orange,banana], function(err){
  if(err){console.log(err)}
  else{console.log("Succesfuly saved all the fruits to fruitsDB");}
});

fruit.save();
