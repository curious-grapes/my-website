/**
 * Post Status System
 * 
 * Add 'status' to your post frontmatter:
 * - "hidden": Post is not compiled to HTML at all
 * - "draft": Post is compiled but excluded from listings, sitemap, etc. (accessible via direct link)
 * - "published" (default): Post appears everywhere normally
 */

export default {
  layout: "layouts/base.html",
  tags: ["posts"],
  eleventyComputed: {
    permalink: function(data) {
      // Hidden posts don't get a permalink (not compiled to HTML)
      if (data.status === "hidden") {
        return false;
      }
      // Default permalink for other posts
      return data.permalink;
    },
    eleventyExcludeFromCollections: function(data) {
      // Exclude hidden posts from collections
      return data.status === "hidden";
    }
  }
};
