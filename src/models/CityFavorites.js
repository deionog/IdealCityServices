const mongoose = require('mongoose');

var CityFavoritesSchema = new mongoose.Schema({
    "city": String,
    "userId": String
}, {timestamps: true});

CityFavoritesSchema.index({ city: 1, userId: 1}, {unique: true});

CityFavoritesSchema.methods.toJSON = function(){
    return {
      id: this._id,
      city: this.city
    };
  };

mongoose.model('CityFavorites', CityFavoritesSchema);