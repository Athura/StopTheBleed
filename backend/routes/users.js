const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator/check");
const config = require("config");

const User = require("../models/User");

// @route     GET api/users
// @desc      Test route for user
// @access    public
router.get("/", (req, res) => res.send("User route working as expected"));

// @route     POST api/users
// @desc      Register user
// @access    public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6, max: 20 }),
    check(
      "userType",
      "Please select which type of user you are: Teacher or Student."
    ).not().isEmpty(),
    check('userType', "Please provide a valid user type").isIn(["teacher", "student"]),
    check("location", "Please provide a location").not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { name, email, password, location, userType } = req.body;

    try {
      let user = await User.findOne({
        email
      });

      if (user) {
        res.status(400).json({
          errors: [
            {
              msg: "User already exists."
            }
          ]
        });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "identicon"
      });

      user = new User({
        name,
        email,
        password,
        avatar,
        location,
        userType
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 360000 },
          (err, token) => {
              if(err) throw err;
              res.json({
                  token
              });
          }
      );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error!");
    }
  }
);

module.exports = router;
