# astro + css-in-js

This monorepo will show examples of various CSS-in-JS libraries in Astro. Currently only shows a basic counter example, would be nice to demonstrate more advanced usage for each library.

## Compatibility table

See https://github.com/withastro/astro/issues/4432

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
