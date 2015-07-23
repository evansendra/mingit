![#mingit](https://lh3.googleusercontent.com/rWSr2KXpOY038Jk834olHW5HDPo_yBn7dDxkrv0KXNM=w728-h228-no)

An extremely minified alias for git commands with tab completion.  Because who wants `git commit -m "blah blah blah"` to make every change?

<img src="https://lh3.googleusercontent.com/VMJqIA52i_7oeY3z1zRThPmE_4nZYdsLfTdP95EKrQU=w906-h582-no" alt="animated demo" width="500px"/>

## Getting started

### Commands
Supporting the minimal number of highly-used commands

    g a .                   // git add .
    g b other-branch        // git branch other-branch
    g c "made some changes" // git commit -m "made some changes"
    g co master             // git checkout master
    g d                     // git diff
    g i                     // git init 
    g m hotfix              // git merge hotfix
    g pll                   // git pull
    g psh                   // git push
    g s                     // git status
    
This tries not to destroy command line parameters, so for example typing 

    g psh origin magic      // pushes local to origin/magic

or any other number of parameters on different commands is also ok.  Also, since command line parameters are not destoryed, using `g` by itself instead of git followed by a command also works:

    g stash                 // works just as well with any git subcommand

It also keeps tab completion.  So when you want to switch to another branch, just 

    $ g co <TAB><TAB>
    HEAD         master       second-branch   ORIG_HEAD

as you normally would.

### Setup in 2 minutes

Append the contents of `.append-to-your-bashrc` to the bottom of the appropriate file (see below) and start a new shell.

If on linux, append the bashrc file to `~/.bashrc` and append the `.append-to-your-git-completions` to file at `/usr/share/bash-completion/completions/git`, then try out the shortened commands!

Tab completions are currently not supported for windows or mac, so remove the `source ...` line from `.append-to-your-bashrc` and don't do anything with the second dotfile.

If on mac, append the bashrc file to your `~/.bash_profile` file.

If on windows, you should be able to append `.append-to-your-bashrc` to `.bashrc` (create it if it doesn't exist) in your home directory (find home by `echo $HOME` on your git bash setup...probably `/c/users/$USER`). 

Now use the [mingit commands](#commands) instead of the git commands to save tons of time while using git.


