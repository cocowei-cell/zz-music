const path = require('path');
const resolve = (p) => {
  return path.resolve(__dirname, p)
}
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "pages": resolve("src/pages"),
      "store": resolve("src/store")
    }
  }
}