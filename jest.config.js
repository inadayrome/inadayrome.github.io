module.exports = {
  // this section tells Hest that all js/jsx/ts/tsx files need to be transformed through jest-preprocess.js file
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  // this section tells Jest how to handle imports
  moduleNameMapper: {
    // mock stylesheets using 'identity-obj-proxy' package
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    // all other assets to be mocked using config in file-mock.js
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  // to tell Jest to ignore any tests in the following directories
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  // list of files that will be included before all tests are run
  setupFiles: [`<rootDir>/loadershim.js`],
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
};
