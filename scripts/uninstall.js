const fs = require('fs');
const homedir = require('homedir');
const exec = require('child_process').exec;

const mac_config_file = homedir() + '/.bash_profile';
const win_linux_config = homedir() + '/.bashrc';

function fileOp(filename) {
	fs.access(filename, fs.R_OK | fs.W_OK, (err) => {
		if (err) throw err;

		fs.readFile(filename, 'utf8', function(err, data) {
			if (err) { console.log('err'); throw err; }
			var needle = 'source ~/.mingit.sh'
			if (data.indexOf(needle) > -1) {
				var newData = data.replace(needle, '');	

				fs.writeFile(filename, newData, (err) => {
				  if (err) throw err;
				});
			}
		});
	});
}

fileOp(mac_config_file);
fileOp(win_linux_config);

const mingit_sh = homedir() + '/.mingit.sh';
fs.access(mingit_sh, fs.R_OK | fs.W_OK, (err) => {
	if (err) {
		// if ENOENT, file doesn't exist for some reason...nothing to do
		if (err.code !== 'ENOENT')
			throw err;
	} else {
		fs.unlink(mingit_sh);
	}
});

console.log("Mingit Uninstalled");
