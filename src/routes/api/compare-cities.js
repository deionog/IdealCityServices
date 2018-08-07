var router = require('express').Router();
var cityDataController = require('../../controllers/cityDataController');

router.get('/', function (req, res, next) {

});

router.post('/', function (req, res, next) {
    console.log("Retrieve city data >>>>");
    let cities = [];
    let prefPromises = [];
    let data = {};

    req.body.cities.forEach(city => {
        cities.push(city);
    });

    if (req.body.preferences) {

        req.body.preferences.forEach(pref => {
            prefPromises.push(cityDataController.getDataBasedOnPref(pref, cities));
        });
        Promise.all(prefPromises).then(results => {
            return res.json({ cityData: results });
        });
    } else {

        cityDataController.getAllData(cities).then(result => {
            console.log(result);
            return res.json({ cityData: result });
        });
    }



    // call controller to get data

});

module.exports = router;