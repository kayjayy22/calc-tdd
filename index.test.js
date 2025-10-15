import { describe, it, expect } from 'vitest';
import { Add } from './index';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(Add("")).toBe(0);
  });
});