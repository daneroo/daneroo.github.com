---
layout: post
title: Installing MacPorts
excerpt: Since OSX dosn't have a native package management solution, installing some opensource software can be greatly simplified by using MacPorts, which fills this void.
tags: [devops]
comments: true
---

Since OSX dosn't have a native package management solution, installing some opensource software can be greatly simplified by using MacPorts, which fills this void.

Case in point, although there is a great [installer](http://code.google.com/p/git-osx-installer/)
 for getting Git up and running on OSX, when I wanted to add git-svn functionality, I had to use another installation method, MacPorts fit the bill perfeclty
 
The [requirements](http://www.macports.org/install.php#requirements) for installing MacPorts do include having a recent version of XCode, but otherwise it is rather straight forward.

*   Download `.dmg` from [MacPorts Site](http://www.macports.org/install.php) 
*   Run `sudo port -v selfupdate`, (should be done regularly)
*   start using macports!

As an example, here is how I replaced the git-osx-installer version of git, with macports'
getting `svn` and `bash_completion` support:

    # remove git-osx-installer version of git first.
    sudo rm -rf /usr/local/git /etc/paths.d/git /etc/manpaths.d/git
    
    # install git, git-svn with MacPorts
    sudo port install git-core +bash_completion +doc +svn
    
Wait a while, this pull in a lot of dependancies, like perl, ncurses,....
    --->  Dependencies to be installed: bash-completion curl curl-ca-bundle perl5 perl5.12 libidn gettext expat libiconv gperf ncurses ncursesw openssl zlib pkgconfig p5-error p5-libwww-perl p5-compress-raw-zlib p5-crypt-ssleay p5-mime-base64 p5-html-parser p5-html-tagset p5-io-compress p5-compress-raw-bzip2 p5-uri p5-svn-simple subversion-perlbindings apr apr-util db46 sqlite3 readline cyrus-sasl2 neon serf subversion p5-term-readkey python27 bzip2 gdbm python_select rsync popt 
    
I then replaced this section in my .profile

    # excerpt from my ~/.profile
    # git bash prompt
    PS1='\h:\W$(__git_ps1 "(%s)") \u\$ '
    # MacPorts Bash shell command completion
    if [ -f /opt/local/etc/bash_completion ]; then
        . /opt/local/etc/bash_completion
    fi

Just for fun, solve this longstanding irritant:

    sudo port install wget
    
Last thought: That was pretty easy! Must remember to run __`sudo port -v selfupdate`__ frequently.