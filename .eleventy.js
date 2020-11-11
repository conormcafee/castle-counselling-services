module.exports = {
  dir: {
    // ⚠️ This value is relative to your input directory.
    data: "_data",
  },
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("favicon");
  eleventyConfig.addPassthroughCopy("assets");
};
