import React from 'react';

import { GlobalStyle } from '../src/reference/shared/global';
import '../src/reference/shared/tailwind.css';
// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
