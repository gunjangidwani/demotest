const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/client.js',
    bundle: './src/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url?limit=8192' },
      { test: /\.(otf|eot|ttf)$/, loader: "file?prefix=font/" },
      { test: /\.svg$/, loader: "file" }
    ]
 },
 resolve: {
     extensions: [".tsx", ".ts", ".js", ".scss"]
 },
 devtool: 'inline-source-map'
}
