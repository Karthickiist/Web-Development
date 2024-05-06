import express from "express";
import bodyParser from "body-parser";
import jokes from "./jokes.js";

const app = express();
const port = 3000;
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/random", (req, res)=>{
    const joke = jokes[Math.floor(Math.random()*jokes.length)];
    res.json(joke);
})

app.get("/jokes/:id", (req, res)=>{
  const id = parseInt( req.params.id);
  const joke_ = jokes.find((joke) => joke.id === id);
  res.json(joke_);
})

app.get("/jokes", (req, res)=>{
  const type_ = req.query.type;
  const joke = jokes.filter((joke) => {
    return joke.jokeType === type_;
  });
  res.json(joke);
  
})

app.post("/joke", (req, res)=>{
  const text = req.body.text;
  const type = req.body.type;
  const newJoke = {
    id : jokes.length+1,
    jokeText: text,
    jokeType: type,
  }
  jokes.push(newJoke);
  res.json(newJoke);
  
})

app.put("/joke/:id", (req, res)=>{
  const idt = req.params.id;
  const newJoke = {
    id : idt,
    jokeText: req.body.text,
    jokeType: req.body.type,
  }
  const reqIndex = jokes.findIndex((joke) => joke.id === idt);
  jokes[reqIndex] = newJoke;
  res.json(newJoke);

})

app.patch("/joke/:id", (req, res) => {
  const idt = parseInt(req.params.id);
  const existingJoke = jokes.find((joke)=> joke.id === idt);
  const replacement = {
    id : idt,
    jokeText : req.body.text || existingJoke.jokeText,
    jokeType : req.body.type || existingJoke.jokeType,
  }
  const reqIndex = jokes.findIndex((joke) => joke.id === idt);
  jokes[reqIndex] = replacement;
  res.json(replacement);

})

app.delete("/joke/:id", (req, res)=>{
  const idt = parseInt(req.params.id);
  const reqIndex = jokes.findIndex((joke) => joke.id === idt);
  if(reqIndex > -1) {
    jokes.splice(reqIndex,1);
    res.send("ok");
  }else{
    res
      .status(404)
      .json({error: `joke with id: ${idt} is not found`});
  }
})

app.delete("/all", (req, res)=>{
  const key = req.query.Key;
  if(key === masterKey){
    jokes.length = 0;
    console.log(jokes);
    res.sendStatus(200);
  }else{
    res
      .status(404)
      .json({error: "Authentication Failed, please check your Master Key"});
  }
})

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});


