import "@testing-library/jest-dom/vitest";

// framer-motion s'appuie sur IntersectionObserver pour `useInView`, que jsdom
// ne fournit pas. Le stub déclare tout visible : les sections sont rendues,
// ce qui est ce que les tests observent.
class IntersectionObserverStub implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];
  constructor(private readonly callback: IntersectionObserverCallback) {}
  observe(target: Element) {
    this.callback(
      [{ isIntersecting: true, target } as IntersectionObserverEntry],
      this,
    );
  }
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

window.IntersectionObserver = IntersectionObserverStub as unknown as typeof IntersectionObserver;
globalThis.IntersectionObserver = window.IntersectionObserver;
