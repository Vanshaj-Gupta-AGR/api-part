const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 8000;

const db = require('./config/mongoose');
const passport = require('passport');


const passportJWT=require('./config/passport-jwt-strategy');
app.use(express.urlencoded());

app.use(cookieParser());

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(passport.setAuthenticatedUser);


app.use('/', require('./routes'));
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
