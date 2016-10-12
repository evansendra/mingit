const utils = require('./utils');
const execFile = require('child_process').execFile;
const homedir = require('homedir');
const fs = require('fs-extra');
const path = require('path');

if (utils.isWindows()) {
	fs.copySync(path.resolve(__dirname, 'win-bashrc'), path.resolve(homedir(), '.mingit.sh'));
	fs.appendFile(path.resolve(homedir(), '.bashrc'), 'source ~/.mingit.sh', function(err) {
		if (err) {
			throw err;
		}
	});
} else {
	var script = 'scripts/';
	if (utils.isApple()) {
	    script += 'install-apple-bash-profile.sh';
	} else {
	    script += 'install-linux-bashrc.sh';
	}

	execFile(script, function(err, out, stderr) {
	  if (err instanceof Error)
	    throw err;
	  process.stderr.write(stderr);
	  process.stdout.write(out); 
	});
}


