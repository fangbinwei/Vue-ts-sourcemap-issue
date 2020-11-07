const isVue3 = false

/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
  configureWebpack: (config) => {
    config.devtool = 'eval-source-map'
  },
  chainWebpack: (config) => {
    config
      .entry('app')
      .clear()
      .add('./src/main.ts')
    config.resolve.extensions.prepend('.ts').prepend('.tsx')

    config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('babel-loader')
      .loader(require.resolve('babel-loader'))
      .options({
        presets: [['@babel/preset-typescript', { allExtensions: true }]],
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      })

    config.module
      .rule('tsx')
      .test(/\.tsx$/)
      .use('babel-loader')
      .loader(require.resolve('babel-loader'))
      .options({
        presets: [
          ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
        ],
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      })

    config
      .plugin('fork-ts-checker')
      .use(require('fork-ts-checker-webpack-plugin'), [
        {
          typescript: {
            extensions: {
              vue: {
                enabled: true,
                compiler: isVue3
                  ? '@vue/compiler-sfc'
                  : 'vue-template-compiler',
              },
            },
            diagnosticOptions: {
              semantic: true,
              syntactic: true,
            },
          },
        },
      ])
  },
}
