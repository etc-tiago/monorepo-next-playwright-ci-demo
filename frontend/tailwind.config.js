// eslint-disable-next-line no-undef
module.exports = {
  purge: [
    './src/**/*.{ts,tsx,js,jsx}',
    './node_modules/@codebase/**/*.ts',
    './node_modules/@codebase/**/*.tsx',
    '../../node_modules/@codebase/**/*.ts',
    '../../node_modules/@codebase/**/*.tsx',
    './*.js',
  ],
  mode: 'jit',
  darkMode: false,
};
