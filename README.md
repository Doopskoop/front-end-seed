# Front-End SPA seed project

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

To get started:

```sh
npm install
npm start
# requires node 10 & npm 6 or higher
```

## Scripts

- `start` runs your app for development, rebuilds on file change
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Karma
- `lint` runs the linter for your project
- `format` fixes most eslint and prettier issues

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Actor model

This uses the actor model and broadcastChannel to communicate between the different actors.
