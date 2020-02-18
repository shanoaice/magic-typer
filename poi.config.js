const isCI = require('is-ci')

module.exports = {
  entry: ['src/registerServiceWorker', 'src/index'],
  plugins: [
    {
      resolve: '@poi/plugin-eslint'
    },
    {
      resolve: '@poi/plugin-pwa'
    }
  ],
  output: {
    publicUrl: isCI ? '/magic-typer/' : '/'
  }
}
