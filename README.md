This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare

The site is built as a [static export](https://nextjs.org/docs/app/guides/static-exports) (`output: "export"`) into `out/` and served by [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) — configuration in `wrangler.jsonc`, response headers in `public/_headers`.

```bash
npm run preview   # build + serve locally in the Workers runtime (wrangler dev)
npm run deploy    # build + deploy to Cloudflare (wrangler deploy)
```

Because there is no server, features that need one (Server Actions, Route Handlers reading the request, `cookies()`, ISR, Next.js image optimization) are unavailable. Images go through `lib/image-loader.ts`, which lets Unsplash's CDN resize them.
