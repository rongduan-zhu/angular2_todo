const path = require('path');
const { AotPlugin } = require('@ngtools/webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'input', 'main.ts'),
    polyfills: path.resolve(__dirname, 'input', 'polyfills.ts'),
    vendor: path.resolve(__dirname, 'input', 'vendor.ts')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['@ngtools/webpack'],
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  output: {
    filename: '[name].js',
    path: '/var/assets_build/output'
  },

  plugins: [
    new AotPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: '/var/assets_build/input/app/app.module#AppModule'
    })
  ],

  watchOptions: {
    poll: true,
    aggregateTimeout: 300
  }
};
