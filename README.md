# WestShell

A Next.js project optimized for Cloudflare Pages deployment using Bun for local development.

## Getting Started

### Local Development (with Bun)

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production (local with Bun)
bun run build:bun
```

### Cloudflare Deployment

The project uses standard Node.js for Cloudflare builds to ensure compatibility:

```bash
# Preview locally (simulates Cloudflare environment)
bun run preview

# Deploy to Cloudflare Pages
bun run deploy
```

## Scripts

- `dev` - Start development server with Turbopack (uses Bun)
- `build` - Build for production (Node.js compatible, used by Cloudflare)
- `build:bun` - Build for production using Bun runtime
- `start` - Start production server
- `lint` - Run ESLint
- `preview` - Preview Cloudflare deployment locally
- `deploy` - Deploy to Cloudflare Pages
- `cf-typegen` - Generate Cloudflare environment types

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Runtime**: Bun (local) / Node.js (Cloudflare)
- **Styling**: Tailwind CSS 4
- **Deployment**: Cloudflare Pages with OpenNext
- **Language**: TypeScript

## Notes

- The project uses `output: "standalone"` for Cloudflare compatibility
- Local development uses Bun with `--bun` flag for optimal performance
- Cloudflare builds use standard Node.js to avoid Bun version conflicts
