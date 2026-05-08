import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';
import '../src/styles/typography.css';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'page',
      values: [
        { name: 'page', value: 'var(--surface-page)' },
        { name: 'primary', value: 'var(--surface-primary)' },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Light / dark theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      document.documentElement.setAttribute('data-theme', theme);
      return Story();
    },
  ],
};

export default preview;
