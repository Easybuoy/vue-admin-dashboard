module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/global-styles/colors";
            @import "@/global-styles/typography";
            `,
      },
    },
  },
};
