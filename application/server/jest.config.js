module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'Tests/coverage',
  testMatch: ['**/Tests/**/*.test.ts?(x)'],
  moduleNameMapper: {
    'Domain/(.*)': '<rootDir>/Domain/$1',
    'Shared/(.*)': '<rootDir>/Shared/$1',
  },
};
