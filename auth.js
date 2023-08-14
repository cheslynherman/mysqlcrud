const express = require("express");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const connection = require("./db");

// user registration 
router.post("/register", async(req, res) => {
    const {username, password}= req.body;

    try {
        const hashedPassword= await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (username, password) VALUES ('Cheslyn', 'BigdaddyC')";
        connection.query(query, [username, hashedPassword], (err, result) => {
            if (err) throw err;
            res.status(201).json({message: "User registered successfully"});
        });
    }catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
});

module.exports = router;

