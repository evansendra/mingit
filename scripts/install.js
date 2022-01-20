const utils = require('./utils');
const execFile = require('child_process').execFile;
const homedir = require('homedir');
const fs = require('fs-extra');
const path = require('path');
const readline = require('readline-sync');

if (utils.isWindows()) {
	fs.copySync(path.resolve(__dirname, 'win-bashrc'), path.resolve(homedir(), '.mingit.sh'));
	fs.appendFile(path.resolve(homedir(), '.bashrc'), 'source ~/.mingit.sh', function(err) {
		if (err) {
			throw err;
		}
	});
} else {
	var script = path.resolve(__dirname) + '/';
	if (utils.isApple()) {
			// // Get process.stdin as the standard input object.
			// var standard_input = process.stdin;
			// // Set input character encoding.
			// standard_input.setEncoding('utf-8');
			// // Prompt user to input data in console.
			// const PROMPT = "Use bash instead of zsh (default)? [y/n/blank(default)]";
			// console.log(PROMPT);

			// function terminalSelect (data) {
			// 	let trimmed_data = data.trim();
			// 	if (trimmed_data === "y" || trimmed_data === "Y")
			// 		// bash
			// 		script += 'install-apple-bash-profile.sh';
			// 	else
			// 		// zsh
			// 	script += 'install-apple-zsh.sh';
			// }
			let user_terminal = readline.question("If you want to use bash instead of zsh (default), type `bash`, otherwise leave blank or type anything else.\n");
			if (user_terminal === "bash")
				script += 'install-apple-bash-profile.sh';
			else
				script += 'install-apple-zsh.sh';

			// // When user inputs data and click enter key.
			// standard_input.on('data', terminalSelect);
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

