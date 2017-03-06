/*
showdown footnote extension

Adapted in part from https://github.com/Kriegslustig/showdown-footnotes

Footnote styles adapted from meltdown default js-markdown-extra.

*/

(function () {
  'use strict';

  var footnotes = function (converter) {
  return [
  { // footnote
    type: 'lang',
    filter: function (text) {
      return text.replace(/^\[\^([\d\w]+)\]:((.+)|(\n+(\s{2,}|\t).+)+)$/gm,
        function (str, p1, p2, p3, p4) {
          var content;
          if (p4) { // process any formatting within the footnote body
            content = converter.makeHtml(p2.replace(/^\s+/gm, ''));
          } else {
            content = ' ' + p3;
          }
          return '<li class="footnote" id="fn:' + p1 +
                    '">' + content + '<small><a href="#fnref:' + p1 +
                    '" rev="footnote">↩</a></small></li>';
        });
    }
  },
  { // footnoter marker
    type: 'lang',
    filter: function (text) {
      return text.replace(/\[\^([\d\w]+)\]/gm, function (str, p1) {
        return '<sup id="fnref:' + p1 + '"><a href="#fn:' + p1 +
          '" rel="footnote">[' + p1 + ']</a></sup>';
      });
    }
  },

  { // add block container for footnotes
      type: 'output',
      filter: function (text) {
        // remove any <p> tags wrapping around footnote <li>s
        text = text.replace(new RegExp('<p>(<li class="footnote".*<\/li>)<\/p>', 'mg'),
          function (str, p1) { return p1; });

        // find beginning of first footnote and add beginning footnote div/ol wrapper
        text = text.replace(new RegExp('(<li class="footnote")', 'm'),
          function (str, p1) {
          // start footnote div and ordered list
          return '<div class="footnotes">\n<ol>' + p1;
        });

        // find end of last footnote and add closing footnote div/ol
        text = text.replace(new RegExp('(<li class="footnote".*</li>)(?![.\n\r]*<li class="footnote")', 'mg'),
          function (str, p1) {
          // add ending footnote div and ordered list
          return p1 + '</ol>\n</div>';
        });

        return text;
      }
  }];
};

  // Client-side export
  if (typeof window !== 'undefined' && window.showdown && window.showdown.extensions) {
    window.showdown.extension('footnotes', footnotes);
        // window.showdown.extensions.footnotes = footnotes;
  }
  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = footnotes;
  }

}());
