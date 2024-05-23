const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i, // Add this rule to handle CSS files
        use: ['style-loader', 'css-loader'],
      }, // Ensure watch is enabled
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
