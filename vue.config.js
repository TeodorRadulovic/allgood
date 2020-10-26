module.exports = {
    // ...
    css: {
      loaderOptions: {
        sass: {
          prependData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_global.scss";
          `
        },
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/'
  }