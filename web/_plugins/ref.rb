require 'jekyll/scholar'
require 'uri'

module MarkdownFilter
  class MyMarkdown < BibTeX::Filter
    def apply(value)
      
      value.to_s.gsub(URI.regexp(['http','https','ftp'])) { |c| "<a href=\"#{$&}\">#{$&}</a>" }
    end
  end
end


