module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    './.storybook/design-addon/register.js',
  ],
};