const utils = require('./utils');
const execFile = require('child_process').execFile;

var script = 'scripts/';
if (utils.isWindows()) {
    script += 'install-win-bashrc.sh';
} else if (utils.isApple()) {
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
