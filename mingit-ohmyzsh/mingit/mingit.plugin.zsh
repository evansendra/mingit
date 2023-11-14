# start mingit #
CUR_DIR="$(dirname "$(realpath "$0")")"
zstyle ':completion:*:*:git:*' script $CUR_DIR/git-completions-mingit.bash
autoload -Uz compinit && compinit -u
source $CUR_DIR/mingit.sh
compdef g='git'
fpath=($CUR_DIR/zsh_mingit $fpath)
# end mingit #
