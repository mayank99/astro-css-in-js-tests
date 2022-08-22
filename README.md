# astro + css-in-js

This monorepo will show examples of various CSS-in-JS libraries in Astro.

## Compatibility table

| Library           | Status             | Notes                                                                                                               |
| ----------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| styled-components | 🟡 Partially works | SSR seems to require babel ([docs](https://styled-components.com/docs/advanced#server-side-rendering))              |
| emotion           | 🟡 Partially works | Seeing type errors in IDE, also SSR doesn't work out of the box (see [docs](https://emotion.sh/docs/ssr#on-server)) |
| stitches          | ✅ Works           | -                                                                                                                   |
| vanilla-extract   | ✅ Works           | (pending example currently)                                                                                         |
| linaria           | ❌ Doesn't work?   | (pending example currently)                                                                                         |
| solid-styled      | ❌ Doesn't work?   | (pending example currently)                                                                                         |

## Running locally

Clone the repo and install deps:

```
npm install
```

Start the dev server for all examples in parallel using turborepo:

```
npm run dev
```

Open `localhost:3000`, `localhost:3001`, etc in browser.
