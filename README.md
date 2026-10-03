# IEEE @ Stanford Website

Official website for the IEEE Stanford Student Branch.

> **Note:** This site was migrated from static HTML/CSS/JS to React with static site generation in November 2025. The original static site is preserved in the `legacy` branch for reference.

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

- `npm run dev` - Start development server with hot reload (events come from the deployed Worker, same as production)
- `npm run dev:local-events` - Same, but events come from a local Worker (see [Events](#events-luma))
- `npm run worker:dev` - Run the events Worker locally on port 8787
- `npm run worker:deploy` - Deploy the events Worker to Cloudflare
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier

## Events (Luma)

The Upcoming and Recent lists on the Events page, the "What's next" section on the
home page, and the event banner all come from the
[IEEE Stanford Luma calendar](https://luma.com/calendar/cal-LO8vEyiS1bADtaM).
**To add or change an event, edit it in Luma.** The site picks up changes within
about 15 minutes. You don't need to rebuild or redeploy.

How it works: a Cloudflare Worker ([worker/luma-events](worker/luma-events/README.md))
reads the Luma calendar every 15 minutes and serves it as JSON. The site fetches that
JSON in the visitor's browser ([src/data/lumaEvents.js](src/data/lumaEvents.js)).

Still hand-written, in [src/data/eventsPageData.jsx](src/data/eventsPageData.jsx):

- **Featured** cards (`featuredEventsData`) and their `/event/:id` write-up pages
- Past events that were never on Luma (marked `notOnLuma: true`)
- Press links, past highlights, and the pre-2026 archive

If the Worker can't be reached, or Luma has nothing upcoming, those sections are hidden.

### Working on events locally

`npm run dev` uses the deployed Worker, so you see the same events as the live site.
To change the Worker itself, run it locally in a second terminal:

```bash
npm run worker:dev
```

Then start the site against it:

```bash
npm run dev:local-events
```

The Worker URL comes from `VITE_LUMA_EVENTS_URL`, falling back to the deployed URL in
`src/data/lumaEvents.js`. You can also set it in a `.env.local` file.

## Building for Production

```bash
npm run build
```

This creates a `dist/` folder with:

- Static HTML files for each route (`/team/index.html`, etc.)
- Bundled and minified JavaScript/CSS in `/assets/`
- All images and static assets copied from `public/`

### Deployment

```bash
npm run deploy -- <your-sunetid>
```

This builds the site and uploads `dist/` (including `.htaccess`) to `/afs/ir/group/ieee/WWW` on `rice.stanford.edu` via `scp`. You'll be asked for your SUNet password and a Duo approval. You can also set the `SUNET` environment variable instead of passing it as an argument.

Stanford's login hosts require Duo, so deploys can't run unattended from GitHub. Instead, a GitHub Action ([.github/workflows/build.yml](.github/workflows/build.yml)) builds every push and PR to `main` to catch broken builds, and saves the built `dist/` as a downloadable artifact.

Manual fallback: connect to `rice.stanford.edu` with Cyberduck and upload everything in `dist/` (including `.htaccess`) to `afs/ir/group/ieee/WWW`.

The `.htaccess` file enables clean URLs (`/team` instead of `/#/team`) on Apache servers.

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
│   │   ├── Team.jsx
│   │   ├── Events.jsx
│   │   ├── Resources.jsx
│   │   └── Contact.jsx
│   ├── data/            # Page content, plus lumaEvents.js (Luma events fetch)
│   ├── styles/          # CSS files
│   │   └── index.css
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── scripts/
│   └── prerender.js     # Generates static HTML for routes
├── worker/
│   └── luma-events/     # Cloudflare Worker serving the Luma calendar as JSON
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
