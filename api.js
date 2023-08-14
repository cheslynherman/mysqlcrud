const express = require ("express");
const router = express.Router();
const connection = require("./db");

// create a new record 
router.post("/create", (req, res) => {
    const {title, description} = req.body;
    const query = "INSERT INTO records (title, description) VALUES (?, ?)";
    connection.query(query, [title, description], (err, result) => {
        if (err) throw err;
        res.status (201).json ({message: "Record created successfully"});
    });
});

module.exports= router;

