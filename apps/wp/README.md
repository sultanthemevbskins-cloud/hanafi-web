# CTOS Web — WordPress Edition (`apps/wp`)

Block theme for WordPress that mirrors the CTOS web design system. Built with Full Site Editing (FSE), `theme.json` design tokens, and block patterns.

---

## Project structure

```
apps/wp/
├── .wp-env.json              wp-env local config (requires Docker)
├── package.json              scripts for wp-env
└── themes/
    └── ctos/
        ├── style.css         Theme metadata header (required)
        ├── theme.json        Design tokens — colors, fonts, spacing (required)
        ├── functions.php     PHP hooks, image sizes, menus
        ├── templates/        Block templates (FSE)
        │   ├── index.html    Post listing (required)
        │   ├── single.html   Single post
        │   ├── page.html     Static page
        │   ├── archive.html  Category / tag archive
        │   └── 404.html      Not found
        ├── parts/            Reusable template parts
        │   ├── header.html
        │   └── footer.html
        └── patterns/         Block patterns (insert via editor)
            ├── hero.php
            └── cta-section.php
```

---

## Local development — Option A: WordPress Studio (Recommended, no Docker)

WordPress Studio is a free desktop app by Automattic. No Docker, no config — just install and run.

1. **Download** → https://developer.wordpress.org/studio/
2. Install and open WordPress Studio
3. Click **Add Site** → give it a name (e.g. `ctos-local`)
4. Once created, click **Open in Finder/Explorer** to find the `wp-content/themes/` folder
5. Copy (or symlink) `apps/wp/themes/ctos/` into that `themes/` folder
6. Back in Studio, click **Open Site** → WordPress admin opens in your browser
7. Go to **Appearance → Themes** → activate **CTOS**
8. Go to **Appearance → Editor** to use the Full Site Editor

---

## Local development — Option B: Local by Flywheel (GUI, no Docker)

1. Download → https://localwp.com/
2. Create a new site
3. Copy `apps/wp/themes/ctos/` into the site's `wp-content/themes/` folder
4. Activate in WordPress admin → **Appearance → Themes**

---

## Local development — Option C: wp-env (Docker required)

```bash
# Install Docker Desktop first: https://www.docker.com/products/docker-desktop/

cd apps/wp
npm install
npm run start        # starts WordPress at http://localhost:8888
                     # admin at http://localhost:8888/wp-admin (admin/password)
npm run stop         # stop the environment
npm run destroy      # wipe and start fresh
```

---

## Design tokens (theme.json)

All CTOS brand values are defined in `theme.json` and available as CSS custom properties:

| Token | CSS var | Value |
|---|---|---|
| CTOS Teal | `--wp--preset--color--ctos-teal` | `#007b85` |
| CTOS Amber | `--wp--preset--color--ctos-amber` | `#f2b530` |
| CTOS Dark | `--wp--preset--color--ctos-dark` | `#102a2e` |
| Poppins | `--wp--preset--font-family--poppins` | headings |
| Lato | `--wp--preset--font-family--lato` | body |

---

## Block patterns

| Pattern | Slug | Use |
|---|---|---|
| Hero Banner | `ctos/hero` | Homepage hero with CTA |
| CTA Section | `ctos/cta-section` | Teal call-to-action strip |

Insert via editor: **Block Inserter → Patterns → CTOS**

---

## WordPress handbook reference

- Theme development: https://developer.wordpress.org/themes/
- Block themes: https://developer.wordpress.org/themes/block-themes/
- theme.json reference: https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/
- Block patterns: https://developer.wordpress.org/themes/features/block-patterns/
- Template hierarchy: https://developer.wordpress.org/themes/templates/template-hierarchy/
