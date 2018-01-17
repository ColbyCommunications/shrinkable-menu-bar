import path from "path";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

import packageJson from "./package.json";

const main = () => {
  const PROD = process.argv.includes("-p");
  const min = PROD ? ".min" : "";

  const entry = {
    [packageJson.name]: ["./src/js/index.js", "./src/css/main.css"]
  };
  const filename = `${packageJson.name}${min}.js`;
  const plugins = [new ExtractTextPlugin(`${packageJson.name}${min}.css`)];
  return {
    entry,
    plugins,
    output: {
      filename,
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "postcss-loader"]
          })
        }
      ]
    }
  };
};

export default main;
