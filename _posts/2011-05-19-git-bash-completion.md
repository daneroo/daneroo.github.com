---
layout: post
title: Git bash completion
excerpt: When using git from the bash shell, this setup allows for auto-completion of many useful aspects of git usage.
tags: [devops]
comments: true
---

Here is a bash completion setup which will auto-complete many aspects of git operation from the shell.
This allow for auto-completion of commands, sub-commands, long form option, branch and tag names.
Here are some examples taken from [Wincent Colaiuta's blog](http://www.wincent.com/a/about/wincent/weblog/archives/2007/12/bash_completion.php)

    # show subcommands starting with "show"
    $ git show<tab>
    show          show-branch   show-ref

    # autocompletion of branch names
    $ git checkout m<tab>
    maint    master

    # same, but with awareness of "co" alias for checkout
    $ git co m<tab>
    maint    master

    # autocompletion of file names
    $ git co WO<tab>
    WOAudioscrobbler.h  WOAudioscrobbler.m  WOCommon@           WOPublic@

    # autocompletion of options
    $ git diff --<tab>
    --abbrev                --diff-filter           --ignore-space-at-eol   --no-renames            --shortstat 
    --binary                --exit-code             --ignore-space-change   --numstat               --stat 
    --cached                --ext-diff              --name-only             --patch-with-stat       --summary 
    --check                 --find-copies-harder    --name-status           --pickaxe-all           --text 
    --color                 --full-index            --no-color              --pickaxe-regex         
    --color-words           --ignore-all-space      --no-ext-diff           --quiet

If you installed Git with the [git-osx-installer](http://code.google.com/p/git-osx-installer/)
you already have what is needed, there should be a file:  
`/usr/local/git/contrib/completion/git-completion.bash`,
which you can `source` in your `.profile` (or `.bash_profile`). Adding the current branch to you bash prompt, is then just changing your `PS1` environment variable 

    # excerpt from my ~/.profile
    # git bash prompt
    PS1='\h:\W$(__git_ps1 "(%s)") \u\$ '
    # git-osx-installer Bash shell command completion
    if [ -f /usr/local/git/contrib/completion/git-completion.bash ]; then
        . /usr/local/git/contrib/completion/git-completion.bash
    fi
