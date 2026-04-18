import { DateTime } from 'luxon';
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import markdownIt from 'markdown-it';
import markdownItMark from 'markdown-it-mark';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItAttrs from 'markdown-it-attrs';
import pluginTOC from 'eleventy-plugin-nesting-toc';
import sitemap from "@quasibit/eleventy-plugin-sitemap";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import fs from 'fs';
import * as cheerio from 'cheerio';

// ── Obsidian callout config ───────────────────────────────────────
const CALLOUT_ALIASES = {
  note: 'note',
  abstract: 'abstract', summary: 'abstract', tldr: 'abstract',
  info: 'info',
  todo: 'todo',
  tip: 'tip', hint: 'tip', important: 'tip',
  success: 'success', check: 'success', done: 'success',
  question: 'question', help: 'question', faq: 'question',
  warning: 'warning', caution: 'warning', attention: 'warning',
  failure: 'failure', fail: 'failure', missing: 'failure',
  danger: 'danger', error: 'danger',
  bug: 'bug',
  example: 'example',
  quote: 'quote', cite: 'quote',
};

const CALLOUT_LABELS = {
  note: 'Note', abstract: 'Abstract', info: 'Info', todo: 'Todo',
  tip: 'Tip', success: 'Success', question: 'Question', warning: 'Warning',
  failure: 'Failure', danger: 'Danger', bug: 'Bug', example: 'Example', quote: 'Quote',
};

const CALLOUT_ICONS = {
  note:     `<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>`,  
  abstract: `<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>`,
  info:     `<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>`,
  todo:     `<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>`,
  tip:      `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>`,
  success:  `<path d="M20 6 9 17l-5-5"/>`,
  question: `<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>`,
  warning:  `<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>`,
  failure:  `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`,
  danger:   `<path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z"/>`,  
  bug:      `<path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/>`,
  example:  `<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>`,
  quote:    `<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>`,
};

function calloutSvg(type) {
  const paths = CALLOUT_ICONS[type] || CALLOUT_ICONS.note;
  return `<svg class="callout-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}

export default function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/posts/materials/posts/**/*.!(jpg|png)');
  // eleventyConfig.addPassthroughCopy('src/posts/**/*.jpg');
  // eleventyConfig.addPassthroughCopy('src/posts/**/*.png');

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC, { tags: ['h1', 'h2', 'h3'] });

  eleventyConfig.addGlobalData('currentYear', () => new Date().getFullYear());

  // Obsidian-style callouts: > [!TYPE] Title
  eleventyConfig.addTransform('obsidian-callouts', function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith('.html')) return content;
    const $ = cheerio.load(content);
    $('blockquote').each(function() {
      const bq = $(this);
      const firstP = bq.children().first();
      if (!firstP.is('p')) return;
      const pHtml = firstP.html() || '';
      const match = pHtml.match(/^\[!(\w+)\]([+-]?)\s*([^\n<]*)(?:\n)?([\s\S]*)?$/i);
      if (!match) return;

      const rawType = match[1].toLowerCase();
      const foldModifier = match[2];          // '+' | '-' | ''
      const customTitle  = match[3].trim();   // optional title text
      const firstParaRest = match[4] ? match[4].trim() : '';

      const type  = CALLOUT_ALIASES[rawType] || 'note';
      const label = customTitle || CALLOUT_LABELS[type] || type.charAt(0).toUpperCase() + type.slice(1);
      const icon  = calloutSvg(type);

      // Build body: remainder of first para + all subsequent children
      const bodyParts = [];
      if (firstParaRest) bodyParts.push(`<p>${firstParaRest}</p>`);
      bq.children().slice(1).each(function() { bodyParts.push($.html(this)); });
      const bodyHtml = bodyParts.join('\n');

      // Keep markdown-it breaks globally, but remove forced <br> inside callout paragraphs.
      const body$ = cheerio.load(`<div id="callout-body">${bodyHtml}</div>`, null, false);
      body$('#callout-body p br').replaceWith(' ');
      const normalizedBodyHtml = body$('#callout-body').html() || '';

      const contentDiv = `<div class="callout-content">${normalizedBodyHtml}</div>`;

      if (foldModifier) {
        const open = foldModifier === '+' ? ' open' : '';
        bq.replaceWith(
          `<details class="callout callout-${type}" data-callout="${type}"${open}>
            <summary class="callout-title">${icon}<span class="callout-title-text">${label}</span><span class="callout-fold"></span></summary>
            ${contentDiv}
          </details>`
        );
      } else {
        bq.replaceWith(
          `<div class="callout callout-${type}" data-callout="${type}">
            <div class="callout-title">${icon}<span class="callout-title-text">${label}</span></div>
            ${contentDiv}
          </div>`
        );
      }
    });
    return $.html();
  });

  // Auto-wrap multi-h3+ul or multi-ul sections after an h2 in a grid container
  eleventyConfig.addTransform('auto-grid', function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith('.html')) return content;
    const $ = cheerio.load(content);
    const sectionBoundarySelector = 'h1, h2';
    $('.prose h2').each(function() {
      const siblings = [];
      let el = $(this).next();
      while (el.length && !el.is(sectionBoundarySelector)) {
        siblings.push(el.clone());
        el = el.next();
      }
      const h3Count = siblings.filter(e => e.is('h3')).length;
      const ulCount  = siblings.filter(e => e.is('ul')).length;

      // Pattern A: multiple h3+ul pairs — only count h3s immediately followed by ul
      let h3UlPairCount = 0;
      for (let i = 0; i < siblings.length - 1; i++) {
        if (siblings[i].is('h3') && siblings[i + 1].is('ul')) {
          h3UlPairCount++;
          i++; // skip the ul we already counted
        }
      }
      const isGameGrid = h3UlPairCount >= 2;

      // Pattern B: multiple bare uls (e.g. when written without blank lines)
      const isMultiListGrid = ulCount >= 2 && h3Count === 0;

      // Pattern C: single loose ul (blank lines between items) with >= 4 items
      // markdown-it wraps items in <p> when there are blank lines between them
      const firstUl = siblings.find(e => e.is('ul'));
      const isLooseList = firstUl && firstUl.find('li > p').length > 0;
      const itemCount = firstUl ? firstUl.find('li').length : 0;
      const isSingleLooseGrid = ulCount === 1 && h3Count === 0 && isLooseList && itemCount >= 4;

      if (isGameGrid || isMultiListGrid) {
        const wrapper = $('<div class="md-grid"></div>');
        const domH2 = $(this);

        if (isGameGrid) {
          // Snapshot sibling elements before any DOM mutations
          const nodes = [];
          let walk = domH2.next();
          while (walk.length && !walk.is(sectionBoundarySelector)) {
            nodes.push(walk);
            walk = walk.next();
          }
          // Remove all collected nodes from DOM
          nodes.forEach(n => n.remove());
          // Re-pair: each h3 + following ul → one column div
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].is('h3')) {
              const col = $('<div class="md-grid-col"></div>');
              col.append(nodes[i]);
              if (i + 1 < nodes.length && nodes[i + 1].is('ul')) {
                col.append(nodes[++i]);
              }
              wrapper.append(col);
            }
          }
        } else {
          // isMultiListGrid: bare uls, just wrap them all
          let cur = domH2.next();
          while (cur.length && !cur.is(sectionBoundarySelector)) {
            const next = cur.next();
            wrapper.append(cur);
            cur = next;
          }
        }

        domH2.after(wrapper);

      } else if (isSingleLooseGrid) {
        // Split the single ul's items evenly across 3 sub-uls in a grid
        const cols = 3;
        const items = firstUl.find('> li').toArray();
        const perCol = Math.ceil(items.length / cols);
        const wrapper = $('<div class="md-grid"></div>');
        for (let c = 0; c < cols; c++) {
          const chunk = items.slice(c * perCol, (c + 1) * perCol);
          if (chunk.length === 0) break;
          const ul = $('<ul></ul>');
          chunk.forEach(li => ul.append($(li).clone()));
          wrapper.append(ul);
        }
        // replace the original ul with the wrapper
        let cur = $(this).next();
        while (cur.length && !cur.is(sectionBoundarySelector)) {
          const next = cur.next();
          if (cur.is('ul')) cur.replaceWith(wrapper);
          else cur.remove();
          cur = next;
        }
      }
    });
    return $.html();
  });

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
    const content = String(value || '');

    // Exclude fenced markdown code blocks: ```lang ... ``` or ``` ... ```
    const withoutMarkdownCode = content.replace(/```[^\n]*\n[\s\S]*?```/g, ' ');

    // Exclude rendered HTML code blocks as an extra safeguard
    const withoutHtmlCode = withoutMarkdownCode
      .replace(/<pre[\s\S]*?<\/pre>/gi, ' ')
      .replace(/<code[\s\S]*?<\/code>/gi, ' ');

    const textOnly = withoutHtmlCode.replace(/(<([^>]+)>)/gi, ' ');
    const readingSpeedPerMin = 550;
    return Math.max(1, Math.floor(textOnly.length / readingSpeedPerMin));
  });
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://curious-grapes.one",
    },
  });

  const md = markdownIt({ html: true, linkify: true, breaks: true })
  md.use(markdownItAttrs)
  md.use(markdownItMark)
  md.use(markdownItAnchor, { 
    level: [1, 2, 3, 4], 
    permalink: markdownItAnchor.permalink.headerLink({ 
      safariReaderFix: true,
      class: 'header-anchor',
    })
  })

  eleventyConfig.setLibrary('md', md)


  return {
  dir: {
    input: 'src',
    includes: '_templates',
    output: '_site',
  },
  templateFormats: ['md', 'njk', 'html'],
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
  dataTemplateEngine: 'njk',
  };
}
