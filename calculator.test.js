import { describe, it, expect, vi } from 'vitest';
import { getRandomQuote, calculateTip, splitBill } from './calculator.js';

const VALID_QUOTES = [
  "You got this.",
  "Keep going.",
  "Every day is a fresh start.",
  "Believe in yourself.",
  "Small steps lead to big results."
];

// --- getRandomQuote ---

describe('getRandomQuote', () => {
  it('returns a string', () => {
    expect(typeof getRandomQuote()).toBe('string');
  });

  it('returns one of the known quotes', () => {
    expect(VALID_QUOTES).toContain(getRandomQuote());
  });

  it('returns a non-empty string', () => {
    expect(getRandomQuote().length).toBeGreaterThan(0);
  });

  it('returns different quotes across many calls', () => {
    const results = new Set(Array.from({ length: 50 }, () => getRandomQuote()));
    expect(results.size).toBeGreaterThan(1);
  });

  it('covers every quote via controlled Math.random', () => {
    const spy = vi.spyOn(Math, 'random');
    VALID_QUOTES.forEach((expected, i) => {
      spy.mockReturnValue(i / VALID_QUOTES.length);
      expect(getRandomQuote()).toBe(expected);
    });
    spy.mockRestore();
  });
});

// --- calculateTip ---

describe('calculateTip', () => {
  it('calculates 20% tip on a $50.00 bill', () => {
    expect(calculateTip(5000, 20)).toBe(1000); // $10.00
  });

  it('calculates 15% tip on a $33.33 bill', () => {
    expect(calculateTip(3333, 15)).toBe(500); // $5.00 rounded
  });

  it('returns 0 for a 0% tip', () => {
    expect(calculateTip(5000, 0)).toBe(0);
  });

  it('returns 0 for a $0 bill', () => {
    expect(calculateTip(0, 20)).toBe(0);
  });

  it('throws when bill is negative', () => {
    expect(() => calculateTip(-100, 20)).toThrow('Bill amount cannot be negative');
  });

  it('throws when tip percent is negative', () => {
    expect(() => calculateTip(5000, -5)).toThrow('Tip percent cannot be negative');
  });
});

// --- splitBill ---

describe('splitBill', () => {
  it('splits $60.00 total evenly across 3 people', () => {
    expect(splitBill(5000, 1000, 3)).toBe(2000); // $20.00 each
  });

  it('rounds up when total does not divide evenly', () => {
    // $10.01 total / 3 people = $3.3367 → rounds up to $4 (334 cents)
    expect(splitBill(1000, 1, 3)).toBe(334);
  });

  it('returns full total when there is 1 person', () => {
    expect(splitBill(5000, 1000, 1)).toBe(6000);
  });

  it('throws when number of people is 0', () => {
    expect(() => splitBill(5000, 1000, 0)).toThrow('Number of people must be at least 1');
  });

  it('throws when number of people is negative', () => {
    expect(() => splitBill(5000, 1000, -2)).toThrow('Number of people must be at least 1');
  });
});
