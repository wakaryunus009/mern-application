const express = require('express');
const { register, login, profile, updateProfile, deleteProfile, logout, allUsers } = require('../Controllers/userController');
const { isAuthenticated } = require('../middlewares/authentication');

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/profile", isAuthenticated, profile);
router.put("/update", isAuthenticated, updateProfile);
router.delete("/delete", isAuthenticated, deleteProfile);
router.get("/allusers", isAuthenticated, allUsers);

module.exports = router;