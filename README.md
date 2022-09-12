# astro + css-in-js

This monorepo will show examples of various CSS-in-JS libraries in Astro. Currently only shows a basic counter example, would be nice to demonstrate more advanced usage for each library.

## Compatibility table

| Library           | Status             | Notes                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| styled-components | 🟡 Partially works | Prod build errors with: `styled.div is not a function`. <br> Can be worked around with [`client:only`](https://docs.astro.build/en/reference/directives-reference/#clientonly) or by using [`vite.legacy.buildSsrCjsExternalHeuristics`](https://vitejs.dev/guide/ssr.html#ssr-format) and [`vite.ssr.noExternal`](https://vitejs.dev/config/ssr-options.html#ssr-noexternal) (will cause FOUC though). |
| emotion           | 🟡 Partially works | Prod build errors with: `styled.div is not a function`. <br> Can be worked around with [`client:only`](https://docs.astro.build/en/reference/directives-reference/#clientonly) or by using [`vite.legacy.buildSsrCjsExternalHeuristics`](https://vitejs.dev/guide/ssr.html#ssr-format) and [`vite.ssr.noExternal`](https://vitejs.dev/config/ssr-options.html#ssr-noexternal) (will cause FOUC though). |
| linaria           | ✅ Works           | Prod build errors with: `Named export 'styled' not found.`. <br> Can be worked around using [`vite.legacy.buildSsrCjsExternalHeuristics`](https://vitejs.dev/guide/ssr.html#ssr-format) and [`vite.ssr.noExternal`](https://vitejs.dev/config/ssr-options.html#ssr-noexternal) or by downgrading to v3.                                                                                                 |
| stitches          | ✅ Works           | `<style>` tag for SSR needs to be in React component                                                                                                                                                                                                                                                                                                                                                    |
| typestyle         | ✅ Works           | -                                                                                                                                                                                                                                                                                                                                                                                                       |
| vanilla-extract   | ✅ Works           | -                                                                                                                                                                                                                                                                                                                                                                                                       |
| solid-styled      | ❌ Doesn't work    | No vite or rollup plugin, also requires Context                                                                                                                                                                                                                                                                                                                                                         |

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

## Contributing

To add an example of a new library:

1. Create a copy of any folder (e.g. `emotion`).
2. Rename the folder and the `name` field in the folder's package.json.
3. Update the dependencies and run `npm install` from the root of the monorepo.
4. Update the code. Try to keep the actual styles more or less the same.
5. Update the README.md
