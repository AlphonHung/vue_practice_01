const path = require('path');
const pathResolve = (...pathName) => path.resolve(__dirname, ...pathName);

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        Assets: pathResolve('src', 'assets'),
        Views: pathResolve('src', 'views'),
        Components: pathResolve('src', 'components'),
        Store: pathResolve('src', 'store'),
        // Directives: pathResolve('src', 'directives'),
        // Filters: pathResolve('src', 'filters'),
        // Validators: pathResolve('src', 'validators'),
        // Utils: pathResolve('src', 'utils'),
        // Models: pathResolve('src', 'models'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/scss/all.scss";
        `
      }
    }
  }
};
