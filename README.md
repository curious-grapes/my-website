# My website

This is my personal website and blog built with [Eleventy](https://www.11ty.dev/).

## Project Structure

```
.
├── src/
│   ├── posts/                   # Blog posts
│   │   └── materials/           # Attached media
│   │       ├── featured-img/    # Featured images for posts
│   │       └── posts/           # Post-specific media
│   ├── assets/                  # CSS and site images
│   ├── _templates/              # Layouts and includes
│   │   ├── parts/               # Reusable template parts
│   │   └── templates/           # Page layouts
│   ├── index.html               # Homepage
│   ├── about.md                 # About page
│   └── contacts.md              # Contact page
├── .eleventy.js                 # Eleventy configuration
├── posts_status.py              # Prints status of posts
└── package.json                 # Dependencies
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/curious-grapes/my-website
   cd my-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

### Development Server
Start a local development server with live reload:
```bash
npm run start
```
The site will be available at `http://localhost:8080`

### Testing Server
To test website for different devices, run:
```bash
cd curious-grapes.one && python -m http.server 8000
```

### Production Build
Generate the static site for production:
```bash
npm run prod
```

### Cleanup
- **Clean all generated files and dependencies**
  ```bash
  npm run clean
  ```
- **Remove build and cache directories**
  ```bash
  npm run erase
  ```

## Posts options
Posts have three levels of status:
- **Hidden**: Not included in the build, but still present in the source
- **Draft**: Not ready for publication, not listed in homepage or sitemap, but still accessible via direct URL
- **Published**: Fully published and included in all listings and sitemap

## Configuration

Configuration is handled in `.eleventy.js`. Key setup includes:
- Custom Markdown parsing
   - Using `markdown-it` with plugins for footnotes, anchors, and more
   - Callouts for styled notes and warnings
   - Auto wrap multiple lists in a grid container
- Passthrough file copying (CSS, images)
- Collections and filters for posts
- Output structure and templating
