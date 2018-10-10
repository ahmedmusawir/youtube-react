module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'import/newline-after-import': 'off',
    'import/no-named-as-default': 0,
    // 'react/prop-types': 0,
  },
  env: {
    browser: true,
    node: true,
  },
};
