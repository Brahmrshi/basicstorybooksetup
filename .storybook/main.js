const path = require("path");
module.exports = {
  stories: ["../components/**/*.stories.js", "../components/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-scss",
      options: {
        includePaths: [path.join(__dirname, "/../node_modules/bootstrap/scss")],
        cssLoaderOptions: {
          modules: {
            auto: true,
          },
        },
      },
    },
  ],
};
