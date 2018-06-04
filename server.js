var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.static('resources'));
global.__basedir = __dirname;

const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => {
//  console.log('Drop and Resync with { force: true }');
//});

require('./app/route/customer.route.js')(app);
require('./app/route/upload.route.js')(app);
require('./app/route/user.route.js')(app);

 
// Create a Server
var server = app.listen(8083, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})