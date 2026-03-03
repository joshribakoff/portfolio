# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Architecture

This is a personal portfolio site built with Astro 5.

### Key Files

- `astro.config.mjs` - Astro configuration; site is deployed to GitHub Pages at `/portfolio` base path
- `src/layouts/Layout.astro` - Shared layout with header navigation and global styles
- `src/content.config.ts` - Content collection schema for blog posts

### Content System

Blog posts live in `src/content/blog/` as Markdown files. Each post requires frontmatter with:
- `title`: string
- `description`: string
- `date`: string (used for sorting)

Posts are displayed at `/musings/` (list) and `/musings/[slug]/` (individual post).

### URL Handling

All internal links must use `import.meta.env.BASE_URL` prefix since the site is deployed to a subdirectory (`/portfolio`).
