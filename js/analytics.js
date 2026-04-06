/**
 * Analytics — Event tracking stubs & UTM parser
 * NutriGuia Pro
 */

/**
 * Generic event tracker — dispatches to Facebook Pixel & GA4 when available.
 */
function trackEvent(eventName, params) {
  // Facebook Pixel
  if (typeof fbq !== 'undefined') fbq('track', eventName, params);
  // Google Analytics 4
  if (typeof gtag !== 'undefined') gtag('event', eventName, params);
  // Debug
  console.log('[Track]', eventName, params);
}

/**
 * Track CTA button clicks.
 */
function trackCTAClicks() {
  document
    .querySelectorAll('.btn-primary, .btn-combo, .btn-product, .nav-cta')
    .forEach((btn) => {
      btn.addEventListener('click', () => {
        trackEvent('cta_click', { button_text: btn.textContent.trim() });
      });
    });
}

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%).
 */
function trackScrollDepth() {
  const depths = [25, 50, 75, 100];
  const tracked = new Set();

  window.addEventListener(
    'scroll',
    () => {
      const scrollPct = Math.round(
        ((window.scrollY + window.innerHeight) / document.body.scrollHeight) * 100
      );

      depths.forEach((d) => {
        if (scrollPct >= d && !tracked.has(d)) {
          tracked.add(d);
          trackEvent('scroll_depth', { depth: d });
        }
      });
    },
    { passive: true }
  );
}

/**
 * Track FAQ accordion interactions.
 */
function trackFAQInteractions() {
  document.querySelectorAll('.faq-item').forEach((item, i) => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      trackEvent('faq_interaction', { question_index: i });
    });
  });
}

/**
 * Track product card visibility.
 */
function trackProductViews() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trackEvent('product_view', {
            product: entry.target.querySelector('h3')?.textContent,
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.product-card').forEach((card) => observer.observe(card));
}

/**
 * Parse UTM parameters from URL and store in sessionStorage.
 */
function parseUTMParams() {
  const params = new URLSearchParams(window.location.search);
  const utms = {};

  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(
    (key) => {
      const val = params.get(key);
      if (val) utms[key] = val;
    }
  );

  if (Object.keys(utms).length > 0) {
    sessionStorage.setItem('utmParams', JSON.stringify(utms));
    console.log('[UTM]', utms);
  }
}

/**
 * Initializes all analytics modules.
 */
export function initAnalytics() {
  trackCTAClicks();
  trackScrollDepth();
  trackFAQInteractions();
  trackProductViews();
  parseUTMParams();
}
