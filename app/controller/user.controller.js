const db = require('../config/db.config.js');
const User = db.user;
 
// Save FormData - User to MySQL
exports.save = (req, res) => {
	console.log('Post a User: ' + JSON.stringify(req.body));
	console.log(req.files)
	User.create({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
	},{
		//attributes: {include: ['firstname', 'lastname']}
	}).then(user => {
		res.send(user);
	})
};
 
// Fetch all Users
exports.findAll = (req, res) => {
	console.log("Get All Customers");
	User.findAll({
		attributes: ['id', 'firstname', 'lastname','createdAt']
	}).then(users => {
	   res.send(users);
	});
};