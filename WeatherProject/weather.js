const express=require("express");
const bodyParser=require("body-parser");
const { request } = require("http");
const https=require("https");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html")
   
});

app.post("/",function(req,res){
    var city= req.body.cityname;
    link="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3371e46db5e9e1b0df7c946bec53ba0a";

    https.get(link, function(response){
        response.on("data",function(data){
            const weather_d=JSON.parse(data);
            temperature=weather_d.main.temp;
            condition=weather_d.weather[0].description;
            res.write("<h1>The temperature in "+city+" is "+temperature+" Kelvin</h1>");
            res.write("The weather condition is "+condition);
            res.send();
            
            
        });
    });
});

app.listen(3000,function(){
    console.log("Server running on port 3000");
});