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

// @route     POST api/class
// @desc      Create or update a new class
// @access    private
router.post("/", auth, [
    check("description", "Please provide a description of what will be taught.").not().isEmpty(),
    check("name", "Please provide a name for your class").not().isEmpty(),
    check("sizeLimit", "Please provide a number for how many students can enroll in your class.").not().isEmpty(),
    check("location", "Please provide where your class will be taking place.").not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    const user = await User.findById(req.user.id).select("-password");
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    if(user.userType !== "teacher") {
        res.status(500).send({ msg: "You must be a teacher to create a class. Please edit your account user type." });
    }

        const { description, name, sizeLimit, status, location, rating } = req.body;

        const classFields = {};

        if (description) classFields.description = description;
        if (name) classFields.name = name;
        if (sizeLimit) classFields.sizeLimit = sizeLimit;
        if (status) classFields.status = status;
        if (location) classFields.location = location;
        if (rating) classFields.rating = rating;

    try {
        let newClass = await Class.findOne({
            user: req.user.id
        });

        newClass = new Class({
            description,
            name,
            sizeLimit,
            status,
            location,
            rating,
            user: req.user.id
        });

        await newClass.save();
        res.json(newClass);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put("/:id", auth, async (req, res) => {
    try {
        const updateClass = await Class.findOne({
            classId: req.params.id
        });
    } catch (err) {

    }
})

module.exports = router;
