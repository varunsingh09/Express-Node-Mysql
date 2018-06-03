module.exports = function(app){
	const upload = require('../config/upload.config.js');
	const fileWorker = require('../controller/upload.controller.js');
	
	app.post('/api/uploadfile', upload.single("uploadfile"), fileWorker.upload);
}