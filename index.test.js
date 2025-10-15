import { describe, it, expect } from 'vitest';
import { Add } from './index';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(Add("")).toBe(0);
  });

  it('should return the number when the string contains a single number', () => {
    expect(Add("1")).toBe(1);
  });
});