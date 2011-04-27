--- 
name: cloud-and-devops
layout: post
title: Cloud and DevOps
time: 2011-04-27 00:24:00 -04:00
excerpt: For our purposes, Devops, is not so much a set of specific tools and practices, as it is an invitation to broaden the scope of many established practices to include aspects which had hitherto been considered unrelated. Devops borows heaviliy from the toolset of Agile Development and extends their use into other fields such as IT Operations.
tags: [devops]

---

*Nothing new under the sun*, *All Things Old Are New Again*, and yet it sure feels like the field
of IT is undergoing constant and qualitative change.

There has been much buzz recently around something called [DevOps](http://en.wikipedia.org/wiki/DevOps), and much as [Cloud Computing](http://en.wikipedia.org/wiki/Cloud_computing) before it,
it is rather hard to define precisely.

For our purposes, Devops, is not so much a set of specific tools and practices, as it is an **invitation** to broaden the scope of many established practices to include aspects which had hitherto been considered unrelated. Devops borows heaviliy from the toolset of [Agile Development](http://en.wikipedia.org/wiki/Agile_software_development) and extends their use into other fields such as IT Operations.

It should always be kept in mind however that these practices are meant to solve business problems, and should not be viewed as dogma. They must therefore be tailored and sequenced
in the context of you own organization.

### Examples
It would be unthinkable today to implement a developpment process that doesn't include
some kind of version control and testing/QA workflow, but what about server configuration, does *it* benefit from the same tools' advantages. Tools like Chef and Puppet make these things possible.

Whatever state of maturity of automated testing you operate in, wouldn't it be desirable that 
your software builds be tested under conditions that closely resemble actual deployment conditions. Tools like Vagrant and Selenium allow us to describe *in code* some of our operating assumptions about browsers and servers and can be integrated into automated build cycles.

We all have first hand experience with social media tools, such as facebook, flickr, and the benefits of their ease of use. Github has extended some of these social inetraction paradigms into the world of software development, with one-click forking and sharing of entire projects.

### The way forward

The widespread availability and low-or-no cost of these tools, makes them quite easy to experiment with, before you commit to them in a more formal and definitive way. So go ahead, get your feet wet, you'll never look back.

I suggest you look at your current operations, no doubt there are some irritants which could use some loving attention; then try to see if some of these pratices can be creatively and efficiently be put to use.

* Is there something you can automate ?
* Is there something you can measure ?
* is there a functionality you can expose through an API ?

Think: **repeatable, measurable, testable.**

Also, thinking of your organisations' strategic objectives, try to see if some of these tools and practices could give you a competitive advantage, *before your competitors do*!

### These are a few of my *favorite* things...

* Strategic objectves
    * Leveraging comodity pricing of compute resources
    * Deployment speed and flexibility
    * Ensured Quality of deployment
* Tools and Tactics
    * Configuration Management
        * [Chef (Opscode)](http://www.opscode.com/)
        * [Puppet](http://www.puppetlabs.com/)
    * Cloud Infrastructure
        * [Eucalyptus](http://www.eucalyptus.com/)
        * [OpenStack](http://www.openstack.org/)
        * [Vagrant for dev and test](http://vagrantup.com/)
    * Continuous Integration
        * [Github](http://github.com/)
        * [Jenkins](http://jenkins-ci.org/) formerly Hudson
        * [Capistrano](https://github.com/capistrano/capistrano/wiki)
    * Monitoring and Analytics
        * [Zenoss](http://www.zenoss.com/)
        * [Nagios](http://www.nagios.org/)
        * [Splunk](http://www.splunk.com/)
* References
    * Media
        * [Velocity 09: John Allspaw, "10+ Deploys Per Day: Dev and Ops Cooperation at Flickr](http://velocityconference.blip.tv/file/2284377/)
        * [The Changelog Show](http://changelogshow.com/)
        * [Devops Cafe (podcast)](http://devopscafe.org/)
        * [Devops is Business Problem (article)](http://dev2ops.org/blog/2010/11/7/devops-is-not-a-technology-problem-devops-is-a-business-prob.html)
        * [The Cloud Computing Show (podcast)](http://cloudcomputingshow.blogspot.com/)