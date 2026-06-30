# Arancha Ramírez — Portfolio

Personal portfolio site built with Astro 5, Tailwind v4, and vanilla TypeScript.

## Local development

**Prerequisites:** Node.js 20+ and npm.

```bash
npm install
npm run dev        # starts at http://localhost:4321
```

## Building for production

```bash
npm run build      # outputs to ./dist
npm run preview    # serve the built output locally
```

## Deployment (GitHub Pages)

1. Push this repo to GitHub.
2. In `astro.config.mjs`, set `site` to your GitHub Pages URL and `base` to your repository name:
   ```js
   site: 'https://yourusername.github.io',
   base: '/arancha-portfolio',   // must match your repo name exactly
   ```
3. In your GitHub repo → **Settings → Pages**, set Source to **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Adding your images

Drop images into `public/images/` following the structure below. The site gracefully hides broken images, so you can add them incrementally.

```
public/images/
├── og.jpg                          # 1200×630 social share card
├── about/
│   ├── portrait.jpg
│   ├── volleyball.jpg
│   ├── skiing.jpg
│   ├── kayaking.jpg
│   ├── madrid.jpg
│   ├── travel-1.jpg
│   ├── travel-2.jpg
│   ├── portugal.jpg
│   └── reading.jpg
└── projects/
    └── {slug}/
        ├── hero.jpg        # used on portfolio grid + project hero
        ├── 01.jpg          # carousel slides
        ├── 02.jpg
        ├── 03.jpg
        ├── 04.jpg
        ├── 05.jpg
        ├── feature.jpg     # "Key features" left-hand image
        ├── role-1.jpg      # "My role" section images
        ├── role-2.jpg
        ├── role-3.jpg
        └── video.mp4       # only if project.has_video = true
```

Project slugs: `actib`, `all-ink`, `hive-fu`, `marios-garden`, `nest-assured`, `ursa`, `desalination`, `housescout`, `foodji`, `data-to-product`

## Filling in placeholder content

Open `src/data/projects.ts`. Projects 07–10 (Desalination, HouseScout, Foodji, Data to Product) have `[PLACEHOLDER]` fields. Replace them with your real content — the type annotations will guide you.

## Adding a CV PDF

Place your CV at `public/cv-arancha-ramirez.pdf`. The CV page links to it automatically.

## Adding report PDFs (Other projects)

Place PDFs at `public/reports/{slug}.pdf`:
- `public/reports/drone-delivery.pdf`
- `public/reports/rain-prediction.pdf`
- `public/reports/hip-implant-fea.pdf`
