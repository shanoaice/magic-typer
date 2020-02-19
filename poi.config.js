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
    publicUrl: process.env.GITHUB_ACTIONS ? '/magic-typer/' : '/'
  }
}
