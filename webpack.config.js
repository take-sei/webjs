const path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');



module.exports = {
  devtool: "eval",

  entry: {
    js: __dirname + "/src/index.jsx", // トランスパイル対象
  },

  output: {
    path: __dirname + '/dist', // 出力先ディレクトリ
    filename: 'bundle.js' // 入力されたファイルをまとめて出力するときのファイル名
  },

  resolve: {
    extensions: ['.scss', 'css' ,'.js', '.jsx'] // jsファイル, jsxファイルを対象とする
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader", // Babelをwebpackで利用できるようにする
          options:{
            presets: ['react', 'es2015'] // reactとes2015をトランスパイル対象とする
          }
        },
      },
      {test: /\.scss$/,
        use:[
          { loader: 'style-loader'},
          { loader: 'css-loader'},
          {
            loader:'sass-loader',
            options:{
              // outputStyle: 'compressed',
              includePaths: ['./node_modules']
            }
          }
        ]},
      {test: /\.toml$/, use: 'toml'}
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // distディレクトリのファイルを確認する
    port: 3000, // 3000ポートを利用
  }
};

