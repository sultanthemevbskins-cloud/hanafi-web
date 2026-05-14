// Apply CTOS theme to the Storybook manager shell (sidebar, toolbar, panels)
// Uses storybook/manager-api — the Storybook 10 core path (no @ prefix)
import { addons } from 'storybook/manager-api';
import ctosTheme from './ctosTheme';

addons.setConfig({
  theme: ctosTheme,
  sidebar: {
    showRoots: true,
  },
  panelPosition: 'bottom',
});
