export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['../public'],

  async viteFinal(config) {
    config.build = config.build || {};
    config.build.rollupOptions = config.build.rollupOptions || {};
    
    const originalWarn = config.build.rollupOptions.onwarn;
    config.build.rollupOptions.onwarn = (warning, warn) => {
      if (warning.message && warning.message.includes('has been externalized for browser compatibility')) {
        return;
      }
      if (originalWarn) {
        originalWarn(warning, warn);
      } else {
        warn(warning);
      }
    };
    
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = [...(config.optimizeDeps.exclude || []), 'twin.macro'];
    
    config.define = {
      ...config.define,
      'process.env': {},
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'production'),
    };
    
    return config;
  }
};
