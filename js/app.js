/**
 * App Entry Point — NutriGuia Pro
 * Imports and initializes all modules on DOMContentLoaded.
 */

import { initScrollReveal } from './scroll-reveal.js';
import { initNavigation }   from './navigation.js';
import { initFAQ }          from './faq.js';
import { initCountdown }    from './countdown.js';
import { initAnalytics }    from './analytics.js';

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavigation();
  initFAQ();
  initCountdown();
  initAnalytics();
});
