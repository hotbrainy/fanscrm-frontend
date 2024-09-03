module.exports = {
  settings: {
    react: {
      version: 'detect', // Automatically detects the version of React to use
    },
  },
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:jest-react/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest-react'],
  // add your custom rules here
  rules: {
    'react/prop-types': 1,
  },
};
