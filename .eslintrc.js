const eslintrc = {
  extends: ['eslint-config-airbnb'],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    'react',
    'babel'
  ],
  rules: {
    'jsx-filename-extension': 0,
    'no-extraneous-dependencies': 0,
  }
};

module.exports = eslintrc;
