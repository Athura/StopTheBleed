const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const request = require('request');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const Class = require('../models/Class');
const User = require('../models/User');

// @route     GET api/class
// @desc      Test route for class
// @access    public
router.get('/', (req, res) => res.send('Class route working as expected'));

// @route     POST api/class
// @desc      Create or update a new class
// @access    private
router.post(
  '/',
  auth,
  [
    check('description', 'Please provide a description of what will be taught.')
      .not()
      .isEmpty(),
    check('name', 'Please provide a name for your class')
      .not()
      .isEmpty(),
    check(
      'sizeLimit',
      'Please provide a number for how many students can enroll in your class.'
    )
      .not()
      .isEmpty(),
    check('location', 'Please provide where your class will be taking place.')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    const user = await User.findById(req.user.id).select('-password');
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    if (user.userType !== 'teacher') {
      res.status(500).send({
        msg:
          'You must be a teacher to create a class. Please edit your account user type.'
      });
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
  }
);

router.put('/:class_id', auth, async (req, res) => {
  try {
    const updateClass = await Class.findOne({
      class: req.params.class_id
    });

    if (!updateClass) {
      res.status(404).send({ msg: 'Class could not be found' });
    }

    const { description, name, sizeLimit, status, location, rating } = req.body;

    const newClassFields = {};

    if (description) newClassFields.description = description;
    if (name) newClassFields.name = name;
    if (sizeLimit) newClassFields.sizeLimit = sizeLimit;
    if (status) newClassFields.status = status;
    if (location) newClassFields.location = location;
    if (rating) newClassFields.rating = rating;

    await updateClass.save(newClassFields);
    res.json(updateClass);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/class/class_id
// @desc      Delete Class by ID
// @access    private
router.delete('/:class_id', auth, async (req, res) => {
  try {
    await Class.findOneAndRemove({
      _id: req.params.class_id
    });

    res.json({
      msg: 'Class has been deleted.'
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT api/class/enroll/:class_id
// @desc      Enroll in a class
// @access    private
router.put('/enroll/:class_id', auth, async (req, res) => {
  try {
    const enroll = await Class.findById(req.params.class_id);

    if (
      enroll.students.filter(
        enrollment => enrollment.user.toString() === req.user.id
      ).length > 0
    ) {
      return res.status(400).json({
        msg: 'Student is already enrolled.'
      });
    }

    enroll.students.unshift({ user: req.user.id });
    await enroll.save();
    res.json(enroll.students);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route     DELETE api/posts/unenroll/:class_id
// @desc      Unenroll in a class
// @access    private
router.delete('/unenroll/:class_id', auth, async (req, res) => {
    try {
        const unenroll = await Class.findById(req.params.class_id);

        if (
          unenroll.students.filter(
            enrollment => enrollment.user.toString() === req.user.id
          ).length === 0
        ) {
          return res.status(400).json({
            msg: 'Student is not enrolled in this class.'
          });
        }

        const removeIndex = unenroll.students.map(enrollment => enrollment.user.toString().indexOf(req.user.id));

        unenroll.students.splice(removeIndex, 1);
        
        await unenroll.save();
        res.json(unenroll.students);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error!');
      }
    });

module.exports = router;
