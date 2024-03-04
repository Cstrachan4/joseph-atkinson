const path = require("path");

// Aliases for use in Webpack configuration
module.exports = {
  styles: path.resolve(__dirname, "../styles/"),
  components: path.resolve(__dirname, "../components/"),
  lib: path.resolve(__dirname, "../lib/"),
  sanity: path.resolve(__dirname, "../sanity/"),
  store: path.resolve(__dirname, "../store/"),
  public: path.resolve(__dirname, "../public/"),
  assets: path.resolve(__dirname, "../public/assets"),
};
