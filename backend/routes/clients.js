const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelper");

const router = express.Router();

router.get("/clients", (req, res) => {
    dbConnection.execute(`SELECT * FROM clients`, (err, result) => {
            defaultCallback(err, result, res);
        });  
});

router.post("/clients", (req, res) => {

    const { name, surname, email, phone } = req.body;

    const postQuery = "INSERT INTO clients (name, surname, email, phone) VALUES (?, ?, ?, ?)";

    dbConnection.execute(postQuery, [name, surname, email, phone], (err, result) => {
        defaultCallback(err, result, res);
    });
})

module.exports = router;
