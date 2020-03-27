// this file is run with npm run build
// it uses babel to compile everything in client/src into bundle.js
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/src/App.jsx'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
    }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
