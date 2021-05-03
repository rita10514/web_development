const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {//if the brouther asks for "/"
    res.sendFile(__dirname + "/index.html");//send it index.html file
});

app.get("/bmicalculator", function (req, res){//if the brouther asks for "/bmicalculator"
  res.sendFile(__dirname + "/bmiCalculator.html")//send it bmicalculator.html file
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height)/100;
  console.log(weight , height);
  var bmi = weight/(height*height);
  res.send("Your BMI is: " + bmi);
});

app.post("/", function(req, res){//when the user submits on the "/" page
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var result = Number(num1) + Number(num2);
  res.send("the result is: "+ result); //send it this

});

app.listen(3000 , function(){//server listens to incoming masseges on port 3000
 console.log("starting listening to port 3000");
});
