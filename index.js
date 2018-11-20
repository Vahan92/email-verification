const express = require('express');
const authRoutes = require('./routes/login');
const validator = require('express-validator');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const signup = require('./routes/signup');
const login = require('./routes/login');
const keys = require('./config/keys');

const app = express();
app.use(validator());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(keys.mongodb.URI, ()=>{
})

app.use('/confirmation', signup.confirmationPost);
app.use('/sign-up', signup.signupPost);
app.use('/login',signup.loginPost);
app.post('/resend', signup.resendTokenPost);

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});

module.exports = app;
