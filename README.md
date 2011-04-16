[This repository](https://github.com/daneroo/daneroo.github.com) holds the source code and configuration for my personal website.

This site site was forked/cloned/copied/modified from [TJ Steins's site](http://tjstein.com/) which was publicly accessible at [github](https://github.com/bummercloud/tjstein.com)

to run and serve:
jekyll --server

to view:
open -a Google\ Chrome.app  http://localhost:4000

Install reqs:
gem install jekyll
gem install rdiscount
gem install jekyll-pagination

jekyll --rdiscount
Or, in your _config.yml file put the following so you don’t have to specify the flag:
markdown: rdiscount

python for syntax highlighting
easy_install Pygments
In your _config.yml file put the following so you don’t have to specify the flag:
pygments: true

To emulate TJSteins site:
gem install jekyll-pagination
