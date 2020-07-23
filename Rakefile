require 'html-proofer'
require 'rspec/core/rake_task'

task :test do
  sh 'bundle exec jekyll build'
  HTMLProofer.check_directory(
      './_site',
      check_html: true,
      validation: { ignore_script_embeds: true },
      empty_alt_ignore: true,
      url_swap: { %r{https://opendefinition.org} => '' },
      :typhoeus => {
        :ssl_verifypeer => false,
        :ssl_verifyhost => 0
      },
      file_ignore: [/\/diffs\//]
).run
end
