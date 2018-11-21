const express = require('express');
const validator = require('express-validator');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/auth-routes');
const keys = require('./config/keys');

const app = express();
app.use(validator());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(keys.mongodb.URI, () => {});

app.use('/confirmation', routes.confirmationPost);
app.use('/sign-up', routes.signupPost);
app.use('/login',routes.loginPost);
app.post('/resend', routes.resendTokenPost);

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+ app.get('port'));
});

module.exports = app;
