const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();
const cors = require('cors');
const methods = require('methods');
const config = require('./db');
const User = require('./src/models/User');
const UserPreference = require('./src/models/UserPreference');
const CityFavorites = require('./src/models/CityFavorites');
const MyPreferences = require('./src/models/MyPreferences');
const PORT = 4000;

require('./src/config/passport');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('method-override')());

mongoose.connect(config.DBLocal).then(
    () => {console.log('Database is connected'); },
    err => { console.log('Can not connect to the database' +err);
});

app.use(require('./src/routes'));

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT: ',PORT);
});
