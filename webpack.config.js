const path = require('path');
const { AotPlugin } = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
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
    }),
    new HtmlWebpackPlugin({
      template: '/var/assets_build/input/index.html',
      chunks: ['polyfills', 'vendor', 'app']
    })
  ],

  watchOptions: {
    poll: true,
    aggregateTimeout: 300
  }
};
