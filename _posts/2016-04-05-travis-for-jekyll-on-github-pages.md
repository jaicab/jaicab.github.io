---

title: "Travis for Jekyll on GitHub Pages"
meta: "Easy to setup continuous integration tests for your Jekyll site"
syntax: true

---

If you have a site or blog hosted on [GitHub Pages](https://pages.github.com/) published with [Jekyll](https://jekyllrb.com/), you are going to like this. But first let me tell you what this is about.

Continuous Integration (CI) is a development practice where all the developers integrate their code into a shared repository as often as possible. Each change to this repo is then verified by an automated build, allowing teams to detect problems early. 

[Travis](https://travis-ci.org/) is an online tool to run this build and perform any tests you may have on every commit. It works with GitHub repos and it's **free for any open source projects**.

For our case, Travis will build the Jekyll site and test the HTML on every commit, and then warn us if the build fails or if any of the links on the HTML point to down pages. It will even check external links!

This process will not affect your code in any way. It’s just an enhancement to your process, an added test.


## Setting up Travis 
First of all, login on the Travis site. There’s two sites, one for [open source projects](https://travis-ci.org) (free) and another one for [private ones](https://travis-ci.com) (paid). So make sure you go on the `.org` for this.

After it finishes syncing your data from GitHub you should be able to go to your profile and see all your public repos. Go ahead and **switch on** the repo for the Jekyll site you want use for this.

In order to let Travis build the site, we need to provide him with the required packages for the build, the same you would need to build it locally. 
In this case it means Jekyll and any other plugins you’re using. 

To define these, create a filed called `Gemfile` and put it on your repo root. Here’s an example for this very site:

```ruby
source "https://rubygems.org"

gem "jekyll"
gem "jekyll-redirect-from"
gem "jekyll-paginate"
gem "jekyll-sitemap"
gem "jekyll-feed"
gem "html-proofer"
```

This will allow Travis to install Jekyll and all the plugins you are using before running any tests. Remember that you can find what plugins you are using on your `_config.yml` file. Notice I've included `html-proofer` too. This will check your compiled HTML.

**Important**: Make sure you add `vendor` to your excludes list in your `_config.yml` file, so Jekyll doesn't compile the dependencies as part of the site, therefore slowing down the process.

Then we have to set a list of commands for Travis to run. By convention you should have a `script` folder with a file called `cibuild` on your repo root. 

```
#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer ./_site
```

Now we need to set up the Travis configuration. This is done with a `.travis.yml` file in your repo root. We need to say what we are using and on what branches it should act, plus some enhancements. Here's mine:

```yaml
language: ruby
rvm:
- 2.1

before_script:
 - chmod +x ./script/cibuild # or do this locally and commit

# Assume bundler is being used, therefore
# the `install` step will run `bundle install` by default.
script: ./script/cibuild

# branch whitelist, only for GitHub Pages
branches:
  only:
  - master

env:
  global:
  - NOKOGIRI_USE_SYSTEM_LIBRARIES=true # speeds up installation of html-proofer

sudo: false # route your build to the container-based infrastructure for a faster build
```

Here we are telling Travis that this is built on Ruby, and to run the scripts in `./script/cibuild`. It will run `bundle install` first, which will go through your `Gemfile` and install all the dependencies we set before.

It is important that you list all the branches you want to check. This site is an GitHub account site, not a project one, that's why I'm running it on `master` branch. Usually you'll want to change that to `gh-pages` and add any other temporary branches you may work on.


## Using Travis

After you commit all these files, every further commit you make will trigger a Travis build. You can see a full log on the Travis website and see it happening in real time, check a list of builds and see where they failed, etc. Check out [jaicab.com on Travis](https://travis-ci.org/jaicab/jaicab.github.io) as an example. 

But the beauty of CI resides in letting it run in the background. Then if the Jekyll build or the `html-proofer` fails, Travis will email you with the problem. When you fix it, it will email you to confirm you it's fixed. But as long as everything is alright, it will just double-check stuff for you.

You can also trigger Travis tests manually in the project page. This may be useful if don't need to make any changes but want to double check all the external links you're pointing to still work just fine.

The great thing about this is that now you will always have a stable codebase and no links to sites that are down, and this is tested on every change you make without any hassle. 

If you want to go **even further**, I'd recommend having your Jekyll codebase on a `dev` branch and make Travis test first and then [deploy](https://gist.github.com/domenic/ec8b0fc8ab45f39403dd) to the `gh-pages` branch only when the tests passed.

But don't stop here! You can use Travis on any project, not only on Jekyll sites. For example, if you have a JavaScript library you can run `npm` and test that all dependencies are up and you could even write and run specific tests for your project. Welcome to the world of continuous integration. Let computers do the boring bit for you.



