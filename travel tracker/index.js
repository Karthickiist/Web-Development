import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: '1234',
  port: 5432,
});

db.connect();


app.get("/", async (req, res) => {
  const countrie = await db.query("SELECT * FROM visited_countries");
  let codes = [];
  countrie.rows.forEach(temp => {
    codes.push(temp.country_code);
  });
  res.render("index.ejs",{countries:codes, total:countrie.length});
});

app.post("/add", async (req, res) =>{
    var country_name = req.body.country;
    const new_code = await db.query("SELECT * FROM COUNTRIES WHERE country_name = $1",[country_name])
    if (new_code.length === 0){
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",[new_code.rows[0].country_code]);
    }
    res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
