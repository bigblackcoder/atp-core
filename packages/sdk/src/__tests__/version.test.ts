import { readFileSync } from 'fs';
import { resolve } from 'path';
import { VERSION } from '../index.js';

const pkg = JSON.parse(
  readFileSync(resolve(__dirname, '../../package.json'), 'utf8')
);

describe('VERSION', () => {
  it('matches package.json version (prevents drift)', () => {
    expect(VERSION).toBe(pkg.version);
  });
});
