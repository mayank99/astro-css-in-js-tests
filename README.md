# astro + css-in-js

This monorepo will show examples of various CSS-in-JS libraries in Astro. Currently only shows a basic counter example, would be nice to demonstrate more advanced usage for each library.

## Compatibility table

| Library           | Status             | Notes                                                                                                  |
| ----------------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| styled-components | 🟡 Partially works | SSR seems to require babel ([docs](https://styled-components.com/docs/advanced#server-side-rendering)) |
| emotion           | 🟡 Partially works | TS errors in IDE, also SSR doesn't work (see [docs](https://emotion.sh/docs/ssr#on-server))            |
| linaria           | ✅ Works           | Works perfectly using rollup plugin                                                                    |
| stitches          | ✅ Works           | -                                                                                                      |
| vanilla-extract   | ✅ Works?          | (pending example currently)                                                                            |
| solid-styled      | ❌ Doesn't work    | No vite or rollup plugin, also requires Context                                                        |

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

1. Create a copy of any folder (e.g. `emotion/`)
2. Rename the folder and the `package` field in the folder's package.json
3. Update the code (dependencies, imports, etc). Try to keep the actual styles more or less the same.
4. Update the README.md
