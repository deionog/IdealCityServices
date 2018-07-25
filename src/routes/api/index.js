var router = require('express').Router();

router.use('/', require('./users'));
router.use('/userPreferences', require('./userPreferences'));
router.use('/compareCities', require('./compare-cities'));
router.use('/mycities', require('./cityFavorites'));
router.use('/myPreferences', require('./myPreferences'));

router.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  if(err.name === 'MongoError'){
    console.log(err);
    return res.status(500).json({error: err.message});
  }

  return next(err);
});

module.exports = router;