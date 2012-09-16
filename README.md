[This repository](https://github.com/daneroo/daneroo.github.com) holds the source code and configuration for my personal website.

## Usage

### To run and serve:

    rake
    # or
    jekyll --server --auto --url http://localhost:4000

### To view:

    open http://localhost:4000
    open -a Google\ Chrome.app  http://localhost:4000

#DNS
 TLD and www is pointed to [gihub pages](https://help.github.com/articles/setting-up-a-custom-domain-with-pages). 
## TODO

* move to daniel-lauzon.com
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
*   <strike>landing page</strike>
*   <strike>get a favicon.ico</strike>

### Install requirements:

    # if rubygems<1.3.7 -- gem update --system
    gem install jekyll
    gem install rdiscount

#### Pagination 

    # if you need to paginate more than one file,
    # or a file other than index.html: blog.html for us
    gem install jekyll-pagination
    # and add to _plugins/ext.rb
    require 'jekyll/pagination'

#### Syntax highlighting (python)

    easy_install Pygments

In your `_config.yml` file put the following so you don’t have to specify the flag: `--pygments`

    pygments: true

To generates the style sheet, and make the rules specific to .highlight class:

    pygmentize -f html -S default -a .highlight > css/pygments.css
    
See [this article](http://www.stehem.net/2012/02/14/how-to-get-pygments-to-work-with-jekyll.html) for interaction between bootstrap and css.


## History
**2012** The site has been redone with bootstrap (responsive). (2.1)

**2011** This site site was originally forked/cloned/copied/modified from [TJ Steins's site](http://tjstein.com/) which was publicly accessible at [github](https://github.com/bummercloud/tjstein.com)

    