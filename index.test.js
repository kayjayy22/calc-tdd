import { describe, it, expect } from 'vitest';
import { Add } from './index';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(Add("")).toBe(0);
  });

  it('should return the number when the string contains a single number', () => {
    expect(Add("1")).toBe(1);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    expect(Add("1,2")).toBe(3);
  });

  it('should handle an unknown amount of numbers', () => {
    expect(Add("1,2,3,4,5")).toBe(15);
  });

  it('should handle newlines as delimiters', () => {
    expect(Add("1\n2,3")).toBe(6);
  });

  it('should support custom delimiters', () => {
    expect(Add("//;\n1;2")).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => Add("-1,2")).toThrow("negatives not allowed: -1");
  });

  it('should throw an exception with all negative numbers listed', () => {
    expect(() => Add("2,-4,3,-5")).toThrow("negatives not allowed: -4,-5");
  });

  it('should ignore numbers greater than 1000', () => {
    expect(Add("2,1001")).toBe(2);
  });

  it('should support delimiters of any length', () => {
    expect(Add("//[***]\n1***2***3")).toBe(6);
  });
});