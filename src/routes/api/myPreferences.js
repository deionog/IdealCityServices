var mongoose = require('mongoose');
var router = require('express').Router();
var MyPreferences = mongoose.model('MyPreferences');
var User = mongoose.model('User');
var auth = require('../auth');

router.get('/', auth.required, function (req, res, next) {
  MyPreferences.find().then(function (preferences) {
    return res.json({ myPreferences: preferences });
  }).catch(next);
});

router.post('/', auth.required, function (req, res, next) {
  console.log("Adding a new preference favorite >>>>");
  if (!req.payload.id) {
    res.status(401).json({
      "message": "UnauthorizedError: private preference list"
    });
  } else {
    User.findById(req.payload.id)
      .then(function (user) {
        let preferences = new MyPreferences();
        if (user) {
          preferences.name = req.body.myPreferences.name;
          preferences.userId = user._id;

          preferences.save().then(function () {
            return res.json({ myPreferences: preferences.toJSON() });
          }).catch(next);
        } else {
          return res.sendStatus(404);
        }
      }).catch(next);
  }

});

router.delete('/:id', auth.required, function (req, res, next) {
  MyPreferences.findByIdAndDelete(req.params.id).then(function (preference) {
    return res.sendStatus(200);
  }).catch(next);
});

module.exports = router;