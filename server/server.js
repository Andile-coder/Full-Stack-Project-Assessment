const express = require("express");
const app = express();
const { Pool } = require("pg");
const pool = new Pool({
  user: "andilemasela",
  host: "localhost",
  database: "cyf_videos",
  password: "Masela@2018",
  port: 5432,
});
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});
app.use(express.json());
app.get("/", (req, res) => {
  pool.query("SELECT * FROM videos", (error, result) => {
    res.json(result.rows);
  });
});
app.post("/", (req, res) => {
  const title = req.body.title;
  const url = req.body.url;
  const rating = 0;
  const query = `INSERT INTO videos (title,url,rating) VALUES ($1,$2,$3)`;
  pool.query(query, [title, url, rating]).catch((e) => console.error(e));
  console.log(req.body.title);
});
app.get("/:id", (req, res) => {
  const id = req.params.id;
  pool.query(`SELECT * FROM videos WHERE id=${id}`, (error, result) => {
    res.json(result.rows);
  });
});
app.delete("/:id", (req, res) => {
  pool
    .query(`DELETE FROM videos WHERE id=${req.params.id}`)
    .catch((e) => console.error(e));
});
app.put("/:id", (req, res) => {
  const id = req.params.id;
  const rate = req.body.rating;
  pool
    .query(`UPDATE videos SET rating=$1 WHERE ID=$2`, [rate, id])
    .then(() => console.log(rate))
    .catch((e) => console.error(e));
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
