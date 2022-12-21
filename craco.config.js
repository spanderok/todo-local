const { CracoAliasPlugin } = require('react-app-alias')

module.exports = {
  ignoreWarnings: [/Failed to parse source map/],
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
  ],
}
