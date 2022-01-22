cp scripts/zsh-mingit ~/.mingit.sh
cp scripts/git-completions.bash ~/.git-completions-mingit.bash

cat << EOF >> ~/.zshrc

# start mingit #
zstyle ':completion:*:*:git:*' script ~/.git-completions-mingit.bash
autoload -Uz compinit && compinit -u
source ~/.mingit.sh
compdef g='git'
# end mingit #
EOF