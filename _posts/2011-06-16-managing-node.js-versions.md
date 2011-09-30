---
layout: post
title: Managing Node.js Versions
excerpt: Since node.js moves rapidly we often need to update it.
tags: [devops]
comments: true
---

As in our last post, we need to manage versions of [http://nodejs.org/](node).

There are different solutions, 

*   install from source : instructions are [here](https://github.com/joyent/node/wiki/Installation), but this is a git-clone,make,make install solution
*   use macports: `sudo port install nodejs`
*   use [n](https://github.com/visionmedia/n#readme), which manages multiple node versions simultaneously

I Chose all three in turn, __but I am now usign n___.
Use or install the latest official release:

    sudo npm install -g n
    suso n latest