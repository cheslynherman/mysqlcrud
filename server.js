const express= require("express");
const bodyParser= require("body-parser");
const app= express();
const PORT= process.env.PORT || 3000;
const authRouter = require("./auth");
const apiRouter= require ("./api");
const authenticateToken= require("./authMiddleware");


// middleware
app.use(bodyParser.json());

// routes
app.get("/", (req, res) => {
    res.json({message: "Welcome to the CRUD API"});
});
app.use("/", authRouter); 
app.use("/api.js", authenticateToken, apiRouter);

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

