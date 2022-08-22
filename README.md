# astro + css-in-js

This monorepo will show examples of various CSS-in-JS libraries in Astro.

## Compatibility table

| Library           | Status             | Notes                                                                                                                |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| emotion           | 🟡 Partially works | Seeing type errors in IDE, also SSR will need manual configuration                                                   |
| stitches          | ✅ Works           | -                                                                                                                    |
| vanilla-extract   | ✅ Works           | (pending example currently)                                                                                          |
| styled-components | ❌ Doesn't work?   | Example needed to confirm. For now, see [issue](https://github.com/styled-components/styled-components/issues/3759). |
| linaria           | ❌ Doesn't work?   | (pending example currently)                                                                                          |
| solid-styled      | ❌ Doesn't work?   | (pending example currently)                                                                                          |

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
