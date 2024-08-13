import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    return config;
  },
};

export default config;
