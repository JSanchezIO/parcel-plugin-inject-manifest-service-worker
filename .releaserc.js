module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'ghostwriter',
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'ghostwriter',
      },
    ],
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): ${nextRelease.version}\n\n[skip ci]',
      },
    ],
  ],
  repositoryUrl: 'https://github.com/JSanchezIO/parcel-plugin-inject-manifest-service-worker.git',
};
