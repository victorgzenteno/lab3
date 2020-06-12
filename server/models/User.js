const mongoose = require('mongoose');
 
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
});

UserSchema.statics.getUserById = function(id,callback)
{
  return this.findById(id,callback);
};

module.exports = mongoose.model('users', UserSchema);;