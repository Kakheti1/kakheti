const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

    // Pass-through files
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    // Filter for formatting post dates
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Create a collection for founders (Markdown files with 'tags: founders')
    eleventyConfig.addCollection("founders", function (collectionApi) {
        return collectionApi.getFilteredByTags("founders");
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
