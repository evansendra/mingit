const os = require('os');
const execFile = require('child_process').execFile;

function isWindows() {
    return os.platform().toLowerCase().indexOf('win32') > -1;
}

function isApple() {
    return os.platform().toLowerCase().indexOf('darwin') > -1;
}

var script = 'scripts/';
if (isWindows()) {
    script += 'install-win-bashrc.sh';
} else if (isApple()) {
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