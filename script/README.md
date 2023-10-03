# Set up this project for local development

This project requires Ruby to run so you'll need to install it.  
With Ubuntu, this will be:

```bash
sudo apt install ruby ruby-dev
```

Then you'll need to install the dependencies.  
To avoid permission error and not use sudo for the next commands, you can install the gems in your home directory:

```bash
export OD_GEMS=$HOME/.odgems
export GEM_HOME=$OD_GEMS/ruby/2.7.0
export PATH=$OD_GEMS/bin:$PATH
bundle config set --local path "$OD_GEMS"
bundle install
```

And run locally overriding the `host` config value:

```bash
bundle exec jekyll serve --watch --incremental --trace --host=localhost
```
