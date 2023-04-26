module.exports = {
  automock: false,
  bail: false,
  collectCoverageFrom: ['src/**/*.{js,ts}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['src/logEvents/*'],
  coverageDirectory: '<rootDir>/coverage',
  globals: {
    __DEV__: true,
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'jsx', 'node'],
  preset: 'ts-jest',
  roots: ['<rootDir>/tests'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  reporters: ['default'],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text', 'json', 'json-summary', 'lcov', 'clover'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  }
};
