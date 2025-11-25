# IEEE @ Stanford Website

Official website for the IEEE Stanford Student Branch.

> **Note:** This site was migrated from static HTML/CSS/JS to a React-based SPA in November 2025. The original static site is preserved in `legacy/` for reference.

## Tech Stack

- **React 18** - UI framework
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **PostCSS** - CSS processing

## Development

### Prerequisites

- Node.js 20+ and npm

### Setup

```bash
# Clone the repository
git clone https://github.com/mljoshi/IEEE_Stanford_Website.git
cd IEEE_Stanford_Website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder with:

- Static HTML files for each route (`/officers/index.html`, etc.)
- Bundled and minified JavaScript/CSS in `/assets/`
- All images and static assets copied from `public/`

### Deployment

Upload the contents of `dist/` to your web server via FTP/SFTP.

**For Stanford hosting:**

1. Connect to Stanford's server via Cyberduck
2. Upload all files from `dist/` to your web root (e.g., `WWW/` or `public_html/`)
3. Ensure `.htaccess` is uploaded for proper routing

The `.htaccess` file enables clean URLs (`/officers` instead of `/#/officers`) on Apache servers.

## Project Structure

```
├── public/              # Static assets (images, etc.)
│   ├── img/
│   └── ieee.png
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Nav.jsx
│   │   └── OfficerCard.jsx
│   ├── pages/           # Route pages
│   │   ├── Home.jsx
│   │   ├── Officers.jsx
│   │   ├── Events.jsx
│   │   ├── Resources.jsx
│   │   └── Contact.jsx
│   ├── styles/          # CSS files
│   │   └── index.css
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── scripts/
│   └── prerender.js     # Generates static HTML for routes
├── dist/                # Production build output
├── legacy/              # Original static site (archived)
└── vite.config.js       # Vite configuration
```

## Features

- ✅ Responsive design
- ✅ Client-side routing with clean URLs
- ✅ Static site generation for SEO
- ✅ Optimized production builds
- ✅ IntersectionObserver animations for event cards

## Contributing

Contact the branch leadership or submit a pull request with improvements.
