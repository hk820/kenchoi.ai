# kenchoi.ai

Personal website of Ken Tsai. Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Structure

- `app/` — routes (one folder per page)
- `components/` — shared header, footer and page building blocks
- `lib/projects.ts` — project data (title, summary, GitHub URL, tags)

To add a project, add an entry to `lib/projects.ts` and create
`app/projects/<slug>/page.tsx` rendering `<ProjectDetail slug="<slug>" />`.
