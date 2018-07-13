var router = require('express').Router();
var cityDataController = require('../../controllers/cityDataController');

router.get('/', function(req, res, next){

});

router.post('/', function(req, res, next){
    console.log("Retrieve city data >>>>");
    let cities = [];

    req.body.cities.forEach(city => {
        cities.push(city);
    });

    // cityDataController.getData(cities).then(result => {
    //     console.log(result);
    // });

    cityDataController.getAllData(cities).then(result => {
        console.log(result);
        return res.json({ cityData: result });
    });



    // call controller to get data

});

module.exports = router;