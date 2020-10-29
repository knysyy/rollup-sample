import type { Config } from '@jest/types';
const { defaults: tsjPreset } = require('ts-jest/presets');

const config: Config.InitialOptions = {
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "transform": {
    ...tsjPreset.transform
  },
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.json"
    }
  },
  "testMatch": [
    "**/?(*.)+(spec|test).(j|t)s"
  ],
  "moduleNameMapper": {
    "^@/(.+)": "<rootDir>/src/$1"
  }
};

export default config;
