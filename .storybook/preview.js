import '../packages/tokens/tokens.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white',      value: '#FFFFFF' },
        { name: 'light',      value: '#F9FAFB' },
        { name: 'teal',       value: '#007B85' },
        { name: 'teal-dark',  value: '#055157' },
        { name: 'dark',       value: '#111827' },
      ],
    },
  },
};

export default preview;
