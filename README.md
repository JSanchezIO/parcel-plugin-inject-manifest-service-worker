# Parcel and Precaching with a Custom Service Worker

![CI](https://github.com/JSanchezIO/parcel-plugin-inject-manifest-service-worker/workflows/CI/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://img.shields.io/npm/v/parcel-plugin-inject-manifest-service-worker)](https://img.shields.io/npm/v/parcel-plugin-inject-manifest-service-worker)

You've a custom service worker and want to support precaching using workbox. This will inject the
files outputted from a Parcel build as a workbox precache compliant array.

## Installation

Begin by install the package as a dependency

```sh
npm i parcel-plugin-inject-manifest-service-worker
```

## Usage

Insert `SERVICE_WORKER_MANIFEST_ENTRIES` wherever you want a workbox precache compliant array

```js
precacheAndRoute(SERVICE_WORKER_MANIFEST_ENTRIES);
```

If you're using TS, add the following to avoid errors

```js
/// <reference path="../../node_modules/parcel-plugin-inject-manifest-service-worker/index.d.ts" />
```

Build using Parcel

## Configuration

> There currently is no way to configure this plugin.

The current configuration will look for a `service-worker.js` file in the Parcel's output folder.
This means that your service worker file must be named `service-worker.js` or `service-worker.ts`
and be located as an immediate child of the output folder.

The generated manifest will provide revisions for any files matching:

- `*.html`
