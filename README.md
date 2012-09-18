[This repository](https://github.com/daneroo/daneroo.github.com) holds the source code and configuration for my personal website.

## Usage

### To run and serve:

    rake
    # or
    jekyll --server --auto --url http://localhost:4000

### To view:

    open http://localhost:4000
    open -a Google\ Chrome.app  http://localhost:4000

# DNS
 TLD and www is pointed to [gihub pages](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).  
 So is onehundredhellos.daniel-lauzon.com.

## TODO

* assets: logo solo,axial,eko,macadamian,mw,ojs,gat-ouv ; node.js,javascript,ec2,chef,html5,git/hub
* Move to less for bootstrap and customization
* how about a build script
* a qr code (zxing+color)
* customize (fonts, boottheme) as in [this article](http://antjanus.com/blog/web-design-tips/user-interface-usability/customize-twitter-bootstrap-into-themes/)
* http://fortawesome.github.com/Font-Awesome/
* http://icomoon.io/#toPreview
* visit mobileboilerplate.com for other ideas: zepto ?
* socialbar snippet
* replace hellos.js from default-old.html
* ------------------
* cleanup images into img|post_assets
* ----------------
*   replace disqus/goggle analytics
*   check Rake tasks - remove backup
*   Rakefile
*   robots.txt
*   sitemap.xml (+gogle ping)
* <strike>move to daniel-lauzon.com</strike>
* <strike>landing page</strike>
* <strike>get a favicon.ico</strike>
* <strike>highlight correct entry in navbar</strike>

### Install requirements:

    # if rubygems<1.3.7 -- gem update --system
    gem install jekyll
    gem install rdiscount

## History
**2012** The site has been redone with bootstrap (responsive). (2.1)

**2011** This site site was originally forked/cloned/copied/modified from [TJ Steins's site](http://tjstein.com/) which was publicly accessible at [github](https://github.com/bummercloud/tjstein.com)

    