import { DateTime } from 'luxon';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import sitemap from "@quasibit/eleventy-plugin-sitemap";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import fs from 'fs';

export default function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  // eleventyConfig.addPassthroughCopy('src/posts/**/*.jpg');
  // eleventyConfig.addPassthroughCopy('src/posts/**/*.png');

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(syntaxHighlight)

  // Collection for published posts only (for listings, navigation, sitemap, etc.)
  eleventyConfig.addCollection("publishedPosts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").filter(function(item) {
      // Default to "published" if status is not set
      const status = item.data.status || "published";
      return status === "published";
    });
  });
  
  // Add file modification time filter
  eleventyConfig.addFilter('fileModTime', (page) => {
    try {
      if (page.inputPath) {
        const stats = fs.statSync(page.inputPath);
        return stats.mtime;
      }
    } catch (e) {
      // Fallback to page.date if file read fails
    }
    return page.date || new Date();
  });

  // Add custom date filter
  eleventyConfig.addFilter('readableDate', (dateString) => {
    return DateTime.fromISO(dateString).toFormat('MMM dd, yyyy');
  });
  
  // To create a filter to determine duration of post
  eleventyConfig.addFilter('readTime', (value) => {
    const content = value;
    const textOnly = content.replace(/(<([^>]+)>)/gi, '');
    const readingSpeedPerMin = 450;
    return Math.max(1, Math.floor(textOnly.length / readingSpeedPerMin));
  });
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://test.curious-grapes.one",
    },
  });

  const md = markdownIt({ html: true, linkify: true })
  md.use(markdownItAnchor, { 
    level: [1, 2], 
    permalink: markdownItAnchor.permalink.headerLink({ 
      safariReaderFix: true,
      class: 'header-anchor',
    })
  })
  eleventyConfig.setLibrary('md', md)


  return {
  dir: {
    input: 'src',
    includes: '_includes',
    output: '_site',
  },
  templateFormats: ['md', 'njk', 'html'],
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
  dataTemplateEngine: 'njk',
  };
}
