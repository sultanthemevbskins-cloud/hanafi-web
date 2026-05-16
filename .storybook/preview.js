import '../packages/tokens/tokens.css';
import '../apps/web/src/index.css';
import './preview-override.css';
import ctosTheme from './ctosTheme';

// Inject Google Fonts so Poppins, Manrope, Lato, Plus Jakarta Sans load in Storybook
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Manrope:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Lato:wght@300;400;700;900&display=swap';
document.head.appendChild(link);

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    docs: {
      theme: ctosTheme,
    },
    options: {
      storySort: {
        order: ['CTOS Design System', '*', ['*'], ['_Archived'], 'Configure your project'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    backgrounds: {
      options: {
        white: { name: 'white',      value: '#FFFFFF' },
        light: { name: 'light',      value: '#F9FAFB' },
        teal: { name: 'teal',       value: '#007B85' },
        "teal-dark": { name: 'teal-dark',  value: '#055157' },
        dark: { name: 'dark',       value: '#111827' }
      }
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'white'
    }
  }
};

export default preview;
