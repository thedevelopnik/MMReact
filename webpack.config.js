var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery"
    })
  ],
  output: {
    path: "./build",
    filename: "bundle.js",
    publicPath: "http://montmatch-web.herokuapp.com/"
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      "node_modules",
      "./app/components",
      "./app/api"
    ],
    alias: {
      app: "app",
      applicationStyles: "app/styles/app.scss",
      actions: "app/actions/actions.jsx",
      reducers: "app/reducers/reducers.jsx",
      configureStore: "app/store/configureStore.jsx"
    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "source-map"
      }
    ],
    loaders: [
      {
        test: /\.scss%/,
        include: /app/,
        loaders: [
          "style",
          "css",
          "autoprefixer?browsers=last 3 versions",
          "sass?outputStyle=expanded"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            "url?limit=8192",
            "img"
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          "react-hot",
          "babel?presets[]=stage-0,presets[]=react,presets[]=es2015"
        ]
      }
    ]
  },
  devtool: "eval"
};
