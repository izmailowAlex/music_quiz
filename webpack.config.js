/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Music Quiz',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      favicon: 'src/assets/img/favicon.ico',
    }),
    new HTMLWebpackPlugin({
      title: 'Music Quiz',
      template: path.resolve(__dirname, './src/game.html'),
      filename: 'game.html',
      favicon: 'src/assets/img/favicon.ico',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpe?g)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
