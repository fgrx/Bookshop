// jest.config.ts
import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  setupFiles: ["<rootDir>/.jest/setEnvVars.ts"],
};
export default config;
