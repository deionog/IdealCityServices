const mongoose = require('mongoose');

var MyPreferencesSchema = new mongoose.Schema({
    "name": String,
    "userId": String
}, {timestamps: true});

MyPreferencesSchema.index({ name: 1, userId: 1}, {unique: true});

MyPreferencesSchema.methods.toJSON = function(){
    return {
      id: this._id,
      name: this.name
    };
  };

mongoose.model('MyPreferences', MyPreferencesSchema);