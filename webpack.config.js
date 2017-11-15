const path = require('path');
var html_wp = require('html-webpack-plugin');


module.exports = {
  entry: __dirname + "./src/index.jsx", // トランスパイル対象
  output: {
    path: __dirname + './dist', // 出力先ディレクトリ
    filename: 'bundle.js' // 入力されたファイルをまとめて出力するときのファイル名
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader", // Babelをwebpackで利用できるようにする
        options:{
          presets: ['react', 'es2015'] // reactとes2015をトランスパイル対象とする
        }
      }
    ],
    loaders: [
      {test: /\.toml$/, loader: 'toml'}
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // distディレクトリのファイルを確認する
    port: 3000, // 3000ポートを利用
  },
  resolve: {
    extensions: ['.js', '.jsx'] // jsファイル, jsxファイルを対象とする
  }
};

