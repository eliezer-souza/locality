module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'tests/coverage',
  testMatch: ['**/tests/**/*.test.ts?(x)'],
  moduleNameMapper: {
    'domain/(.*)': '<rootDir>/src/domain/$1',
    'shared/(.*)': '<rootDir>/src/shared/$1',
    'tests/(.*)': '<rootDir>/src/tests/$1',
    'infra/(.*)': '<rootDir>/src/infra/$1',
  },
};
