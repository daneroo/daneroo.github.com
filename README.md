[This repository](https://github.com/daneroo/daneroo.github.com) holds the source code and configuration for my personal website.

The site has been redone with bootstrap. (2.1)

This site site was originally forked/cloned/copied/modified from [TJ Steins's site](http://tjstein.com/) which was publicly accessible at [github](https://github.com/bummercloud/tjstein.com)

### To run and serve:

    jekyll --server --auto --url http://localhost:4000

### To view:

    open http://localhost:4000
    open -a Google\ Chrome.app  http://localhost:4000

### TODO

* From Scratch
* start from initializr w/bootstrap/jquery
* bootstrap (less or css) see [less.app](http://incident57.com/less/)
* layout (landing, portfolio, blog (ohh))
* customize (fonts, boottheme) as in [this article](http://antjanus.com/blog/web-design-tips/user-interface-usability/customize-twitter-bootstrap-into-themes/)
* move to daniel-lauzon.com
* landing page (see splash.html)
* socialbar snippet
* replace hellos.js from default-old.html
* ------------------
* cleanup images into img|post_assets
* ----------------
*   replace disqus/goggle analytics
*   check Rake tasks - remove backup
*   Remove unwanted JS (/js/highlight, /languages)
*   Rakefile
*   robots.txt
*   sitemap.xml (+gogle ping)
*   daniel-lauzon.com: CNAME
*   <strike>landing page</strike>
*   <strike>get a favicon.ico</strike>

### Install requirements:

    gem install jekyll
    gem install rdiscount
    gem install jekyll-pagination

### Notes:

    jekyll --rdiscount

Or, in your `_config.yml` file put the following so you don’t have to specify the flag:

    markdown: rdiscount

python for syntax highlighting

    easy_install Pygments

In your `_config.yml` file put the following so you don’t have to specify the flag: `--pygments`

    pygments: true

To generates the style sheet, and make the rules specific to .highlight class:

    pygmentize -f html -S default -a .highlight > css/pygments.css
    
See [this article](http://www.stehem.net/2012/02/14/how-to-get-pygments-to-work-with-jekyll.html) for interaction between bootstrap and css.



To emulate TJSteins site:

    gem install jekyll-pagination
    