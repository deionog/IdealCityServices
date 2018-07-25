var mongoose = require('mongoose');
var router = require('express').Router();
var CityFavorites = mongoose.model('CityFavorites');
var User = mongoose.model('User');
var auth = require('../auth');

router.get('/', auth.required, function (req, res, next) {
  CityFavorites.find().then(function (favorites) {
    return res.json({ myCities: favorites });
  }).catch(next);
});

router.post('/', auth.required, function (req, res, next) {
  console.log("Adding a new city favorite >>>>");
  if (!req.payload.id) {
    res.status(401).json({
      "message": "UnauthorizedError: private city list"
    });
  } else {
    User.findById(req.payload.id)
      .then(function (user) {
        let favorites = new CityFavorites();
        if (user) {
          favorites.city = req.body.myCities.city;
          favorites.userId = user._id;

          favorites.save().then(function () {
            return res.json({ myCities: favorites.toJSON() });
          }).catch(next);
        } else {
          return res.sendStatus(404);
        }
      }).catch(next);
  }

});

router.delete('/:id', auth.required, function (req, res, next) {
  CityFavorites.findByIdAndDelete(req.params.id).then(function (city) {
    return res.sendStatus(200);
  }).catch(next);
});

module.exports = router;