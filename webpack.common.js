// eslint-disable-next-line
const path = require("path");

module.exports = {
  entry: {
    backgroundPage: path.join(__dirname, "src/backgroundPage.ts"),
    popup: path.join(__dirname, "src/popup/index.tsx")
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // Creates style nodes from JS strings
          },
          {
            loader: "css-loader" // Translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // Compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[hash:5].[ext]",
              limit: 8192,
              outputPath: "../assets/",
              publicPath: "/assets/"
            }
          }
        ]
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/, // 处理字体
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000, // size <= 5KB
              name: "[name]-[hash:5].min.[ext]", // 属于file-loader的属性
              outputPath: "../fonts/", // 属于file-loader的属性
              publicPath: "fonts/" // 属于file-loader的属性
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@": path.resolve(__dirname, "src")
    }
  }
};
