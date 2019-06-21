module.exports = {
  transform: {
    "^.+\\.(js|jsx)?$": "<rootDir>/node_modules/babel-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  setupFiles: [
    '<rootDir>/src/setupTests.js',
  ],
  moduleNameMapper: {
    "\\.(css||scss)$": '<rootDir>/config/styleMocks.js'
  },
  modulePaths: ["src"],
  moduleDirectories: ['node_modules', 'src']
};