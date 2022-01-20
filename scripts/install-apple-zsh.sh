cp scripts/zsh-mingit ~/.mingit.sh
cp scripts/git-completions.bash ~/.git-completions.bash

cat << EOF >> ~/.zshrc

# start mingit #
zstyle ':completion:*:*:git:*' script ~/.git-completions.bash
autoload -Uz compinit && compinit -u
source ~/.mingit.sh
compdef g='git'
# end mingit #
EOF