const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/success", function(req,res){
    res.redirect("/");
});

app.post("/failure", function(req,res){
    res.redirect("/");
});

app.post("/",function(req, res){
    firstName=req.body.firstName;
    lastName=req.body.lastName;
    mail=req.body.Mail;
    var data={
        members: [{
            email_address: mail,
            status: "subscribed",
            merge_field:{
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    };

    var jsonData=JSON.stringify(data);
    url= "https://us10.api.mailchimp.com/list/700ceaba80";
    option={
        method: "POST",
        auth: "karthick:cf90193fa7de0f38a27df0b6a8ea8664-us10"
    };
    const request=https.request(url, option, function(response){
        sucess_ot=response.statusCode
        if (sucess_ot==200){
            res.sendFile(__dirname +"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
            
        }
        response.on("data",function(data){
    
        });
    });
    
    request.write(jsonData);
    request.end();
});

app.listen(process.env.PORT || 3000,function(){
    console.log("server running in port 3000");
});


// cf90193fa7de0f38a27df0b6a8ea8664-us10
// 700ceaba80