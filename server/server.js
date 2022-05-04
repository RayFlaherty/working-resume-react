require("dotenv").config();
const express = require("express");
// const inquirer = require("inquirer");
// const mysql = require(mysql2 / promise);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res) => {
  res.status(404).end();
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// async function init(){
//     try{
//         const connection =await mysql.createConnection({
//         //    process.env.PORT || 3001,
//         })
//     } catch (error) {
//         if (error) console.log(error)}
// }
