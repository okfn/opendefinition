# frozen_string_literal: true

require 'html-proofer'
require 'rspec/core/rake_task'

desc 'Run specs'
RSpec::Core::RakeTask.new do |t|
  t.pattern = 'spec/**/*_spec.rb'
  t.rspec_opts = ['--order', 'rand', '--color']
end

task :test do
  sh 'bundle exec jekyll build'
  Rake::Task['spec'].invoke
  HTMLProofer.check_directory(
    './_site',
    check_html: true,
    check_img_http: true,
    validation: { ignore_script_embeds: true },
    empty_alt_ignore: true,
    url_swap: { %r{https://opendefinition.org} => '' },
    hydra: { max_concurrency: 10 },
    file_ignore: [%r{/diffs/}]
  ).run
end
