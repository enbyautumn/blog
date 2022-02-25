const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const del = require('del');

module.exports = function(eleventyConfig) {
    const dirToClean = '_site/*';
    del(dirToClean);

    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPlugin(syntaxHighlight);

    return {
      dir: {
        // ⚠️ These values are both relative to your input directory.
        includes: "_includes",
        layouts: "_layouts"
      }
    }
  };
  