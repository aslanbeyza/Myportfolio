/// <reference types="vitest/globals" />
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Mock ResizeObserver which isn't available in jsdom
 
class MockResizeObserver {
  observe() {
    /* noop */
  }
  unobserve() {
    /* noop */
  }
  disconnect() {
    /* noop */
  }
}
globalThis.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver;

Object.defineProperty(globalThis, "scrollTo", {
  writable: true,
  value: vi.fn(),
});

const localStorageStore = new Map<string, string>();
const localStorageMock: Storage = {
  get length() {
    return localStorageStore.size;
  },
  clear: vi.fn(() => {
    localStorageStore.clear();
  }),
  getItem: vi.fn((key: string) =>
    localStorageStore.has(key) ? localStorageStore.get(key)! : null
  ),
  key: vi.fn((index: number) => [...localStorageStore.keys()][index] ?? null),
  removeItem: vi.fn((key: string) => {
    localStorageStore.delete(key);
  }),
  setItem: vi.fn((key: string, value: string) => {
    localStorageStore.set(key, value);
  }),
};
Object.defineProperty(globalThis, "localStorage", {
  configurable: true,
  value: localStorageMock,
});

// Mock matchMedia for theme/motion preference tests
Object.defineProperty(globalThis, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
 
class MockIntersectionObserver {
  constructor() {
    /* noop */
  }
  observe() {
    /* noop */
  }
  unobserve() {
    /* noop */
  }
  disconnect() {
    /* noop */
  }
  root = null;
  rootMargin = "";
  thresholds: number[] = [];
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
globalThis.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;
