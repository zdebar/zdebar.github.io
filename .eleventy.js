module.exports = function configureEleventy(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addFilter("findProject", function findProject(projects, slug) {
    return projects.find((project) => project.slug === slug);
  });
  eleventyConfig.addFilter("splitWords", function splitWords(value) {
    return String(value).trim().split(/\s+/).filter(Boolean);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
  };
};
