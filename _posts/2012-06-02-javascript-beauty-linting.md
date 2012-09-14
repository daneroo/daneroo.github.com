---
layout: post
title: Javascript Beauty Linting
excerpt: Discussing a workflow for formatting and linting JavaScript
tags: [javascript]
comments: true
---

I write a lot of JavaScript, I want it to look great, and be consistent.

* **Look great**: Beautification/Code Formatting
* **Consistent**: Linting tools: JSLint/JSHint.

### Get to the point

* **Beautifier**: [jsbeautifier.org](http://jsbeautifier.org/) - based [Javascript Tools Textmate plugin](https://github.com/subtleGradient/javascript-tools.tmbundle).
* **Linter**: [JSLint](http://www.jslint.com/) - Warning: JSLint will hurt your feelings.
* **Integration**: Works with multpile configurations, integrated into my Editor, and pre-commit check.

## tl;dr

There is one feature I absolutely count on when developping: __Code Formatting__.
This is the critical feature on which I choose my editor. It is why I loved Netbeans, which I since abandoned because it feels too heavy. Now I have moved on to __Textmate__, but I have a nagging feeling that the platform lock-in may yet bring me to __Sublime Text 2__ soon. (_I have failed at Vim too many times to count..._).

### Beautifying
So TextMate has a decent built-in code formatter, and even a Javascript specific one, based on a 2007 php version of Einars Lielmanis's JSBeatifier. That beautifier is still one of finest for javascript, but the implementation shipped in TextMate needs an update.
There are __lots__ of third party bundles which integrate different flavors of this beautifier library into Textmate.

### Linting
Next is linting, which is a code quality tool. For our puposes there are two choices [JSLint](http://www.jslint.com/) and [JSHint](http://www.jshint.com/).

The easy part is accepting that any set of enforced quality policies is better that **NONE**.
The harder part is to refine the configuration choices to maximize quality and safety while preserving enough flexibility and convinience.

### Integration
The crux of the choices to make here depend on the workflow requirements.

Ideal Conditions:
* No restriction on platform or Editor.
* Adapts to different set of style/coding practices (different projects)
* Formatting is integrted into Editor(s), at least on each platform.
* Linting is performed *as you type*, and can be checked *en masse* at checkin (git pre-commit hook).

For my current Editor, Textmate, [Javascript Tools](https://github.com/subtleGradient/javascript-tools.tmbundle), by Thomas Aylott aka *subtleGradient*, which I installed with [Get Bundles](https://gist.github.com/2722805). 

There is also [JSTools](https://github.com/adamhope/js-tools.tmbundle) by Adam Hope, but it does not seeem to be as current.
I also considered [JSLintmate](http://rondevera.github.com/jslintmate/) for jslint/jshint, but wanted a more integrated solution (that I didn;t write myself)

Now for configuration, and integration...
