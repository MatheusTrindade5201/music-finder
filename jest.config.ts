/** @type {import('ts-jest').JestConfigWithTsJest} */
export {}
module.exports = {
  'preset': 'ts-jest',
  'testEnvironment': 'jsdom',
  'moduleDirectories': ["node_modules", "@"],
  'roots': [
      '<rootDir>/src'
  ],
  'transform': {
      '^.+\\.tsx?$': 'ts-jest'
  },
  'moduleNameMapper': {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy" 
  },
  "transformIgnorePatterns": ["/node_modules/(?!(atest)/)"] 
};