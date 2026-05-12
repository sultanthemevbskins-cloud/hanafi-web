import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    config.resolve = config.resolve ?? {}
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@ctos/ui':     resolve(__dirname, '../packages/ui/src'),
      '@ctos/tokens': resolve(__dirname, '../packages/tokens/tokens.js'),
    }
    return config
  },
};

export default config;
