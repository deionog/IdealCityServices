const mongoose = require('mongoose');

var UserPreferenceSchema = new mongoose.Schema({
    "name": String,
    "category": String,
    "isDefault": Boolean
}, {timestamps: true});

UserPreferenceSchema.methods.toJSON = function(){
    return {
      id: this._id,
      name: this.name,
      category: this.category,
      isDefault: this.isDefault
    };
  };

mongoose.model('UserPreference', UserPreferenceSchema);