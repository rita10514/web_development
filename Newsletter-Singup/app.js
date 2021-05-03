const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/singup.html")
});


app.listen(process.env.PORT || 3000, function(){
  console.log("server up and running on port 3000");
});

app.post("/", function(req, res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }
  ]
};



  const jsonData = JSON.stringify(data);
  const url = "https://us2.api.mailchimp.com/3.0/lists/f28e3a4c42";

  const options = {
    method: "POST",
    auth: "moonlight:760e2ccb2dca5218ae9922abdeece278-us2"
  }


const request =  https.request(url, options, function(response){
  const statuseCode = response.statusCode;

    response.on("data",function(data){
      // window.js = JSON.parse(data);
      // console.log(js.errors[0].error_code);


    });
    if (statuseCode === 200 ){
         res.sendFile(__dirname + "/success.html");
         // if (window.js.errors[0].error_code === "ERROR_CONTACT_EXISTS"){
         //   console.log("you are already signed up!");
         // }
    }
    else {
      res.sendFile(__dirname + "/failure.html");
    }

  });
  request.write(jsonData);
  request.end();
});
app.post("/failure",function(req, res){
  res.redirect("/");
});
//760e2ccb2dca5218ae9922abdeece278-us2
//f28e3a4c42
