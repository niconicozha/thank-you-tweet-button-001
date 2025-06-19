import type { Config } from "jest";

export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
} satisfies Config;
