module.exports = {
  preset: 'react-native',
  automock: false,
  coveragePathIgnorePatterns: ['/node_modules/'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', './jest/setupAfterEnv.js'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-)?@?react-native|@react-navigation)'],
};
