var mongoose = require('mongoose');
var router = require('express').Router();
var UserPreference = mongoose.model('UserPreference');

router.get('/', function(req, res, next){
    UserPreference.find().then(function(preferences){
      return res.json({preferences: preferences});
    }).catch(next);
});

router.post('/', function(req, res, next){
    console.log("Adding a new user preference>>>>");
    let userPreference = new UserPreference();

    userPreference.name = req.body.userPreference.name;
    userPreference.isDefault = req.body.userPreference.isDefault;

    userPreference.save().then(function(){
      return res.json({preference: userPreference.toJSON()});
    }).catch(next);
});

module.exports = router;