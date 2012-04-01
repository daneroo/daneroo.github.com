---
layout: post
title: Relative Importance of Minifaction and Compression
excerpt: 
tags: [javascript]
comments: true
---

While having a discussion recently on the tradeoffs of different data representations of our json data for an [open data project](https://github.com/GatineauOuverte/gatineau_parcsespacesverts), I thought it important to put this aspect of optimizaation into context.

Minification is the process by which javascript (json) text representation is minimized by removing all unnecessary characters from the source, like white-space. Sometimes it involves safe-rewiting variable names for shorter ones, etc.

The primary objective of minification is to reduce the time required to transport the javascript, by reducing its size.

But there is another factor which affects the transported scripts' size, usually to an even greater degree: _compression_.

When an http response is transported it may be compressed, this is subject to a negociation between the browser and server, but, long story short, almost all browsers support compression, and most servers (properly configured) do also.
For example apache uses [mod_deflate](http://httpd.apache.org/docs/2.0/mod/mod_deflate.html).

So while you definetely want to make use of both of these processes, the fact is that compression is usually more important to final transport size.
You can see these numbers (Size/Content) for yourself with the Firebug or Chrome DevTool Network tab.
![alt text](/images/chrome-devtool-compression-size.png "Title")

 Here is an example of the [Google CDN Hosted jquery script](http://code.google.com/apis/libraries/devguide.html#jquery)

<table style="border: 1px solid black; border-collapse:collapse; width:auto; margin:auto; margin-bottom:1em">
    <tr><th></th><td>uncompressed</td><td>compressed</td></tr>
    <tr><th>jquery-1.7.1.js</th><td>242.42 KB</td><td>71.20 KB</td></tr>
    <tr><th>jquery-1.7.1.min.js</th><td>91.67 KB</td><td>32.79 KB</td></tr>
    <tr><th>markers.json</th><td>88.52 KB</td><th>9.64 KB</th></tr>
</table>


Furthermore these two processes are linked. So that when making choices, for example on readability, by using less spaces, or shorter variable names, it may not have the impact that you expect. For example, by looking at our geo-marker data json file, one might say, *Hey, if we use tabs instead of our current spacing we would save almost almost 10KB (86.67-75.28 KB) on this file*, but if we take compression into account, we see that we actually only save 0.1 KB.

<table style="border: 1px solid black; border-collapse:collapse; width:auto; margin:auto; margin-bottom:1em">
     <tr><th>markers.json</th><td>uncompressed</td><td>compressed</td></tr>
     <tr><td>as currently checked in</td><td>86.67 KB</td><td> 9.57 KB</td></tr>
     <tr><td>8 spaces indentation</td><td>86.67 KB</td><td> 9.57 KB</td></tr>
     <tr><td>4 spaces indentation</td><td>80.16 KB</td><td> 9.52 KB</td></tr>
     <tr><td>2 spaces indentation</td><td>76.90 KB</td><td> 9.49 KB</td></tr>
     <tr><td>1 tab indentation</td><td>75.28 KB</td><td>9.46 KB</td></tr>
</table>

Conclusion, I think this is another case where premature optimization is perhaps not the best use of your effort, and that readability or maintainability concerns probably outweigh size-optimization.