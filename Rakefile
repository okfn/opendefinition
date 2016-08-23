require 'html-proofer'
require 'rspec/core/rake_task'

task :test do
  sh 'bundle exec jekyll build'
  HTMLProofer.check_directory('./_site',
                              check_html: true,
                              validation: { ignore_script_embeds: true },
                              empty_alt_ignore: true,
                              url_swap: { %r{http://opendefinition.org} => '' }).run
end
