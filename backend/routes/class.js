const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const request = require("request");
const config = require("config");
const { check, validationResult } = require("express-validator/check");

const Class = require("../models/Class");
const User = require("../models/User");

// @route     GET api/class
// @desc      Test route for class
// @access    public
router.get("/", (req, res) => res.send("Class route working as expected"));

// @route     GET api/profile/me
// @desc      Get current user's profile
// @access    private

module.exports = router;
