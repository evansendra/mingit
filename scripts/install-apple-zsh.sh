cp scripts/zsh-mingit ~/.mingit.sh
cp scripts/git-completions.bash ~/.git-completions-mingit.bash
[ ! -d ~/.zsh_mingit ] && mkdir ~/.zsh_mingit
cp scripts/git-completions.zsh ~/.zsh_mingit/_git

_fpath='$fpath' # weird thing needed to get bash to print $... as a string instead of blank value

cat << EOF >> ~/.zshrc
# start mingit #
zstyle ':completion:*:*:git:*' script ~/.git-completions-mingit.bash
autoload -Uz compinit && compinit -u
source ~/.mingit.sh
compdef g='git'
fpath=(~/.zsh_mingit $_fpath)
# end mingit #
EOF