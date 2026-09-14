"use client";

import { useEffect } from "react";

export function ScrollAnimationProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const selectors = [
      ".reveal",
      ".reveal-up",
      ".reveal-down",
      ".reveal-title",
      ".reveal-left",
      ".reveal-right",
      ".reveal-scale",
      ".reveal-zoom",
      ".reveal-fade",
      "[data-reveal]",
    ];
    const selectorQuery = selectors.join(", ");

    const observerCallback: IntersectionObserverCallback = (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.add("is-revealed");
          // Once revealed, unobserve to free up GPU & CPU cycles
          obs.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    });

    const initRevealElements = () => {
      const elements = document.querySelectorAll(selectorQuery);
      elements.forEach((el) => {
        // If element is already in or above the viewport on initial page load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 30) {
          el.classList.add("visible");
          el.classList.add("is-revealed");
        } else {
          observer.observe(el);
        }
      });
    };

    // Run on mount
    initRevealElements();

    // Re-check after a short tick to catch any asynchronously rendered elements
    const timer = setTimeout(initRevealElements, 300);

    // MutationObserver to capture dynamic child elements
    const mutationObserver = new MutationObserver(() => {
      initRevealElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

export default ScrollAnimationProvider;

