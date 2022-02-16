const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
    address:{
        type: String,
        required: true
    },
    phoneno:{
        type:Number,
        required:true
    },firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true

    },
},


{
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;