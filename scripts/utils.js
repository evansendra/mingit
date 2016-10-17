var os = require('os');

module.exports = {
	isWindows: function() {
		return os.platform().toLowerCase().indexOf('win32') > -1;
	},

	isApple: function() {
		return os.platform().toLowerCase().indexOf('darwin') > -1;
	}
}
