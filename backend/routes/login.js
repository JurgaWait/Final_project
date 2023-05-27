// const express = require("express");
// const { dbLoginConnection } = require("../dbLogin");
// const { defaultCallback } = require("../helpers/dbHelper");

// const router = express.Router();

// router.get("/login", (req, res) => {
//     dbLoginConnection.execute(`SELECT * FROM login`, (err, result) => {
//             defaultCallback(err, result, res);
//         });  
// });

// router.post("/login", (req, res) => {

//     const { email, password, name, surname } = req.body;

//     const postQuery = "INSERT INTO login (email, password, name, surname) VALUES (?, ?, ?, ?)";

//     dbLoginConnection.execute(postQuery, [email, password, name, surname], (err, result) => {
//         defaultCallback(err, result, res);
//     });
// });

module.exports = router;
