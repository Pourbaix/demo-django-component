/** @type { import('@storybook/react-webpack5').StorybookConfig } */
module.exports = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: (config) => {
    config.module.rules = config.module.rules.concat([
      {
        test: /\.html$/,
        // Webpack 5:
        type: 'asset/source',
        // Webpack 4 (make sure to also install the raw-loader package):
        // use: 'raw-loader',
      },
    ]);
    return config;
  },
};
