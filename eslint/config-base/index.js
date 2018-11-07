module.exports = {
  extends: [require.resolve('eslint-config-airbnb'), 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 90,
        singleQuote: true,
        trailingComma: 'es5',
        parser: 'babylon',
      },
    ],
  },
};
