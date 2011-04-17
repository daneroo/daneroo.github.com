[This repository](https://github.com/daneroo/daneroo.github.com) holds the source code and configuration for my personal website.

This site site was forked/cloned/copied/modified from [TJ Steins's site](http://tjstein.com/) which was publicly accessible at [github](https://github.com/bummercloud/tjstein.com)

### To run and serve:

    jekyll --server --auto --url http://localhost:4000

### To view:

    open http://localhost:4000
    open -a Google\ Chrome.app  http://localhost:4000

### TODO

*   Remove all TJStein refs (blog/about/links...)
*   replace disqus/goggle analytics
*   cleanup/rm images
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

To emulate TJSteins site:

    gem install jekyll-pagination
    