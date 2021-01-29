// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    "src": "/",
    "public": "/"
  },
  exclude: ['**/node_modules/**/*'],
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    secure: true
  },
  buildOptions: {
    /* ... */
  },
};
