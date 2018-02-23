var express = require('express');


//create a app

var app = express();
app.use(express.static('public'));
app.listen(3000, function() {

	console.log('express server is open on port 3000')

});

