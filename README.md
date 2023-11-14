<img src="mingit-logo.jpg" alt="Mingit Logo" width="250" height="100"/>

An extremely minified alias for git commands with tab completion.  Because who wants `git commit -m "blah blah blah"` to make every change?

<img src="https://lh3.googleusercontent.com/VMJqIA52i_7oeY3z1zRThPmE_4nZYdsLfTdP95EKrQU=w906-h582-no" alt="animated demo" width="500px"/>

## Getting started

### Installation
_Using ohmyzsh? See [Use mingit with Oh My Zsh](mingit-ohmyzsh)_

The below works out of the box for zsh on mac or bash on windows.  If using bash on mac, change the value of `use-mac-bash` in [package.json] to `true`: 

    npm install -g mingit && source ~/.mingit.sh

** You must execute `source ~/.mingit.sh` or `source ~/.zshrc` if using zsh on mac, or open a new terminal, then you can try out the [Commands](#commands) below. **

Tested on Mac OS X El Capitan.  If this doesn't work for you, see [Manual Install](#manual-install)

### Commands
Supporting the minimal number of highly-used commands

    g a .                      // git add .
    g b other-branch           // git branch other-branch
    g b which                  // git branch --show-current (note this assumes git version >= 2.22)
    g c -m "made some changes" // git commit -m "made some changes"
    g co master                // git checkout master
    g d                        // git diff
    g f                        // git fetch
    g i                        // git init 
    g m hotfix                 // git merge hotfix
    g pll                      // git pull
    g psh                      // git push
    g r                        // git reset
    g rsto                     // git restore
    g s                        // git status
    
This doesn't destroy command line parameters, so for example typing 

    g psh origin magic      // pushes local to origin/magic

or any other number of parameters on different commands works as "git push origin magic" would.  Also, since command line parameters are not destoryed, using `g` by itself instead of git followed by a command also works:

    g stash                 // works just as well with any git subcommand

It also keeps tab completion.  So when you want to switch to another branch, just 

    $ g co <TAB><TAB>
    HEAD         master       second-branch   ORIG_HEAD

as you normally would.

### Manual Install

### Linux

If on linux, append [scripts/bashrc] to `~/.bashrc` to use shortened commands. 

	cat ./.bashrc >> ~/.bashrc

### Mac

For zsh:

* Copy [scripts/zsh-mingit] to `~/.mingit.sh`
* Copy [scripts/git-completions.bash] to `~/.git-completions-mingit.sh`

Then add the following to your `~/.zshrc` file:

    # start mingit #
    zstyle ':completion:*:*:git:*' script ~/.git-completions-mingit.bash
    autoload -Uz compinit && compinit -u
    source ~/.mingit.sh
    compdef g='git'
    # end mingit #

For bash:
Append the contents of [scripts/bash_profile] to your `~/.bash_profile`:

	cat ./.bash_profile >> ~/.bash_profile

### Windows 

If on windows, append [scripts/win-bashrc] to `~/.bashrc` (create it if it doesn't exist) in your home directory (find home by `echo $HOME` on your git bash setup...probably `/c/users/$USER`). 

Now use the [mingit commands](#commands) instead of the git commands to save tons of time while using git.

### Uninstall

As of v7 of npm, uninstall scripts don't work :( However, you can easily uninstall this alias by running node scripts/uninstall.js before executing the below.

	$ npm uninstall -g mingit
