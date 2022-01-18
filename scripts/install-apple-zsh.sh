cp scripts/bash_profile ~/.mingit.sh
cp git-completion.bash ~/.git-completion.bash
echo <<EOT >> .zshrc

# start mingit
zstyle ':completion:*:*:git:*' script ~/.git-completion.bash
autoload -Uz compinit && compinit -u

source ~/.mingit.sh
compdef g='git'
# end mingit
EOT