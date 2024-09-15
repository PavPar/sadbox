/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  setupFilesAfterEnv: ["<rootDir>/internal/jest.setup.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.app.json",
    },
  },
};
