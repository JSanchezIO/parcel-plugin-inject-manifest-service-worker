# Parcel, Custom Service Workers, and Precaching

![CI](https://github.com/JSanchezIO/parcel-plugin-inject-manifest-service-worker/workflows/CI/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/parcel-plugin-inject-manifest-service-worker.svg)](https://badge.fury.io/js/parcel-plugin-inject-manifest-service-worker)

You've a custom service worker but want to support precaching using workbox. This will inject the
files outputted from a Parcel build as a workbox precache compliant array.

## Table of Contents

1. Installation
2. Usage
3. Configuration

## Installation

Begin by install the package as a dependency

```sh
npm i parcel-plugin-inject-manifest-service-worker
```

## Usage

1. Insert `SERVICE_WORKER_MANIFEST_ENTRIES` wherever you want a workbox precache compliant array

```js
precacheAndRoute(SERVICE_WORKER_MANIFEST_ENTRIES);
```

2. Build using Parcel

## Configuration

> There currently is no way to configure this plugin.

The current configuration will look for a `service-worker.js` file in the Parcel's output folder.
This means that your service worker file must be named `service-worker.js` or `service-worker.ts`
and be located as an immediate child of the output folder.

The generated manifest will provide revisions for any files matching:

- `*.html`
- `service-worker.js`
