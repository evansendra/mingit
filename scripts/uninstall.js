const fs = require('fs');
const homedir = require('homedir');
const exec = require('child_process').exec;

const mac_config_file_bash = homedir() + '/.bash_profile';
const mac_config_file_zsh = homedir() + '/.zshrc';
const win_linux_config = homedir() + '/.bashrc';

function fileOp(filename, strToRemove) {
	fs.stat(filename, (err, stat) => {
		if (err === null) {
			console.log(filename + " exists; removing Mingit from it...");
			fs.access(filename, fs.R_OK | fs.W_OK, (err) => {
				if (err) throw err;

				fs.readFile(filename, 'utf8', function(err, data) {
					if (err) { console.log('err'); throw err; }
					var needle = strToRemove;
					if (data.indexOf(needle) > -1) {
						var newData = data.replace(needle, '');	

						fs.writeFile(filename, newData, (err) => {
							if (err) throw err;
						});
					}
				});
			});
		} else if (err.code === 'ENOENT') {
			console.log(filename + " does not exist; checking next...");
		} else {
			console.log(err.code, " ", err);
		}
	})
}

fileOp(mac_config_file_bash, 'source ~/.mingit.sh');
fileOp(win_linux_config, 'source ~/.mingit.sh');
var added_lines_zsh =
`# start mingit #
zstyle ':completion:*:*:git:*' script ~/.git-completions.bash
autoload -Uz compinit && compinit -u
source ~/.mingit.sh
compdef g='git'
# end mingit #`;
fileOp(mac_config_file_zsh, added_lines_zsh);

const mingit_sh = homedir() + '/.mingit.sh';
const git_completions = homedir() + '/.git-completions.bash';
const files_to_delete = [mingit_sh, git_completions];
files_to_delete.map((file) => {
	fs.access(file, fs.R_OK | fs.W_OK, (err) => {
		if (err) {
			// if ENOENT, file doesn't exist for some reason...nothing to do
			if (err.code !== 'ENOENT')
				throw err;
		} else {
			fs.unlink(file, (err) => {
				if (err) throw err;
				console.log(file + " was deleted.");
			});
		}
	});
});

console.log("Mingit Uninstalled");
