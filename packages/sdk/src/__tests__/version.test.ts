import { readFileSync } from 'fs';
import { resolve } from 'path';
import { VERSION } from '../index.js';

// NOTE: `__dirname` is used deliberately. ts-jest's default-esm preset still
// injects it for `.ts` test sources, and switching to `import.meta.url` here
// trips TS1343 in this exact tooling combination (ts-jest 29 + Jest ESM
// preset) despite `module: esnext` being set. Revisit if Jest moves to pure
// ESM execution.
const pkg = JSON.parse(
  readFileSync(resolve(__dirname, '../../package.json'), 'utf8')
);

describe('VERSION', () => {
  it('matches package.json version (prevents drift)', () => {
    expect(VERSION).toBe(pkg.version);
  });
});
