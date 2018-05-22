const mongoose = require('mongoose');

var UserPreferenceSchema = new mongoose.Schema({
    "name": String,
    "isDefault": Boolean
}, {timestamps: true});

UserPreferenceSchema.methods.toJSON = function(){
    return {
      id: this._id,
      name: this.name,
      isDefault: this.isDefault
    };
  };

mongoose.model('UserPreference', UserPreferenceSchema);