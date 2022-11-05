// webpack.config.js
const path = require('path');
const MiniCssExtratPlugin = require('mini-css-extract-plugin');
const distDir = path.resolve(__dirname, '../../dist');

module.exports = (env, arg) => {
  const isProd = arg.mode === 'development';
  return {
    entry: './src/Index.tsx',
    output: {
      path: distDir,
      filename: 'bundle.js'
    },
    devServer: {
      static: {       
        directory: distDir
      },
      host: '127.0.0.1',
      port: 8888
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s?css$/,
          use: [
            isProd ? MiniCssExtratPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ]
    },
    plugins: [
      new MiniCssExtratPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
          chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
      })
    ],
    resolve: {
      extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },
  }
}