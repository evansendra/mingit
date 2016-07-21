function isWindows() {
    return os.platform().toLowerCase().indexOf('win32') > -1;
}

function isApple() {
    return os.platform().toLowerCase().indexOf('darwin') > -1;
}

if (isWindows()) {
    exec('./install-win-bashrc.sh');
} else if (isApple()) {
    exec('./install-apple-bash-profile.sh');
} else {
    exec('./install-linux-bashrc.sh');
}