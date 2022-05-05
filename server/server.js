require("dotenv").config();
const express = require("express");
// const inquirer = require("inquirer");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("Connected to the Resume DataBase")
);

//comment CRUD OPERATIONS
//Get ALL
app.get("/api/comment", (req, res) => {
  const sql = `SELECT*FROM comment`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ err: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});
//Get One
app.get("/api/comment/:id", (req, res) => {
  const sql = "SELECT*FROM comment WHERE id= ?";
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ err: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});
//Post New
app.post("/api/comment", ({ body }, res) => {
  const sql = `INSERT INTO comment (name, message) VALUES (?,?)`;
  const params = [body.name, body.message];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ err: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});
//DELETE COMMENT
app.delete("/api/comment/:id", (req, res) => {
  const sql = `DELETE FROM comment WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Comment not found",
      });
    } else {
      res.json({
        message: "comment a-gonner",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});
//update comment
app.put("/api/comment/:id", (req, res) => {
  const sql = `SELECT comment.*, name AS name from comment LEFT JOIN name ON comment.id= id WHERE comment.id = ?`;
});

// db.query(`SELECT * FROM comment WHERE id=1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });
// app.use((req, res) => {
//   res.status(404).end();
//});
// db.query(`DELETE FROM comment WHERE id = 1`, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result)
// });

// const sql = `INSERT INTO comment (id, name, message) VALUES (?,?,?)`;
// const params = [1, "Raymond Flaherty", "I'm Back Baby!"];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
