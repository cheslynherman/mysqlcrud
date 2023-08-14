const jwt = require("jsonwebtoken");
const SECRET_KEY= "cheslyn";

const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({error: "Unauthorized"});

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json ({error: "Forbidden"});
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
