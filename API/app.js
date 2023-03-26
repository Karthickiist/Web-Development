const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');
const article_schema = {
    title: String,
    article: String
};

const Article = mongoose.model("article", article_schema);
app.route("/articles")
    .get((req, res) => {
        Article.find({}, (err, obj) => {
            if (!err) {
                res.send(obj);
            } else {
                res.send(err);
            }
        });
    })

    .post((req, res) => {
        title_temp = req.body.title;
        post_temp = req.body.post;
        temp_data = new Article({
            title: title_temp,
            article: post_temp
        });
        temp_data.save(function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send("succesfully stored");
            }
        });

    })

    .delete((req, res) => {
        Article.deleteMany({}, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Deleted successfully");
            }
        });
    });


app.route("/articles/:title")
    .get((req, res) => {
        Article.find({
            title: req.params.title
        }, (err, obj) => {
            if (err) {
                res.send(err);
            } else {
                res.send(obj);
            }
        });
    })
    .put((req, res) => {
        Article.replaceOne({
            title: req.params.title
        }, {
            title: req.body.title,
            article: req.body.post
        }, {
            overwrite: true
        }, (err) => {
            if (err) {
                res.send("error: " + err);
            } else {
                res.send("Updated Successfully");
            }
        });
    })
    .patch((req, res) => {
        Article.updateOne({
            title: req.params.title
        }, {
            title: req.body.title,
            article: req.body.post
        }, (err) => {
            if (err) {
                res.send("error: " + err);
            } else {
                res.send("All successfully updated")
            }
        });
    })
    .delete((req,res)=>{
        Article.deleteOne({title: req.params.title}, (err)=>{
            if (err) {
                res.send("error: " + err);
            } else {
                res.send("All successfully deleted")
            }
        });
    });
    

app.listen(3000, () => {
    console.log("Server running in port 3000");
});