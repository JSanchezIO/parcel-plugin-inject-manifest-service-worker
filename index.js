const replaceInFile = require('replace-in-file');
const workbox = require('workbox-build');

module.exports = function generateSWPrecache(bundler) {
  bundler.on('bundled', async function onBundled() {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const manifest = await workbox.getManifest({
      dontCacheBustURLsMatching: new RegExp(
        /(^((?!service-worker\.).)*\.js$|.svg|.png|.woff2|.css)/g
      ),
      globDirectory: bundler.options.outDir,
      globPatterns: ['**/*.{html,js,css,jpg,png,gif,svg,eot,ttf,woff,woff2}'],
    });

    await replaceInFile({
      files: `${bundler.options.outDir}/service-worker.js`,
      from: /SERVICE_WORKER_MANIFEST_ENTRIES/,
      to: JSON.stringify(manifest.manifestEntries),
    });
  });
};
