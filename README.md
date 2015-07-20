![#g Unit](https://lh3.googleusercontent.com/AjJ-FREnS8Fs26KeBM1YCHbXkwscaJAtuL2s7ClZzrc=w640-h200-no)

A smaller set of commands for the most-used commands in git, because who wants to keep typing `git commit -m "blah blah blah"` their whole lives? 

## Getting started

Append the `.append-to-your-bashrc` to the appropriate place (see below) and start a new shell.

If on linux, append the bashrc file to `~/.bashrc` and try out the shortened commands!

If on windows, you should be able to append the bashrc file to the directory output by entering `echo $HOME` on your git bash setup (probably `/c/users/$USER`)

If on mac, append the bashrc file to your `~/.bash_profile` file

Now use the [Supported Commands] instead of the git commands to save tons of time while using git.

## Supported Commands
Supporting the minimal number of highly-used commands

    g a .                   // git add .
    g b new-branch          // git branch new-branch
    g c "made some changes" // git commit -m "made some changes"
    g co master             // git checkout master
    g d                     // git diff
    g pll                   // git pull
    g psh                   // git push
    g s                     // git status
    
This tries not to destroy command line parameters, so for example typing 

    g psh origin magic      // pushes local to origin/magic

or any other number of parameters on different commands is also ok.  Also, since command line parameters are not destoryed, using `g` by itself instead of git followed by a command also works:

    g stash                 // works just as well with any git subcommand
