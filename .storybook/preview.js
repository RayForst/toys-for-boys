/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    clearStaleStyles: true,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
