const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "index.js"],
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    modules: [ path.resolve(__dirname, 'src'), 'node_modules' ],
    alias: {
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets/'),
      storybook: path.resolve(__dirname, '.storybook')
    },
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.css$/,
        use: [ 
          'style-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('postcss-import')()]
            }

          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
