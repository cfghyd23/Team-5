const express = require("express");
const {
    registerUser,
    currentUser,
    loginUser,
    dashboardData,
} = require("../controllers/internController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

// router.get("/current", currentUser);

// router.get("/dashboard" , dashboardData);

module.exports = router;