const bodyParser=require("body-parser");
const express=require("express");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/", function(req,res){
    num1=parseInt(req.body.num1);
    num2=parseInt(req.body.num2);
    sum=num1+num2;
    res.send("The result is "+sum);
});

app.post("/bmicalculator", function(req, res){
    height=parseInt(req.body.num1);
    weight=parseInt(req.body.num2);
    bmi=weight/(height*height);
    res.send("Your BMI is "+bmi);
});

app.listen(3000,function(){
    console.log("server started at port 3000");
});