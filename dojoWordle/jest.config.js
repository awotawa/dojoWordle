/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  // setupFiles: ['./jest/test-setup.js'],
  clearMocks: true,
  fakeTimers: {
    enableGlobally: true,
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  reporters: ['default', 'github-actions'], // Remove this line if your CI is not on Github actions
};

module.exports = config;
