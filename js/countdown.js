/**
 * Countdown Timer — persisted in sessionStorage for urgency
 * NutriGuia Pro
 */
export function initCountdown() {
  const stored = sessionStorage.getItem('countdownEnd');
  let endTime;

  if (stored && parseInt(stored) > Date.now()) {
    endTime = parseInt(stored);
  } else {
    // 5h 42m 18s from now
    endTime = Date.now() + (5 * 3600 + 42 * 60 + 18) * 1000;
    sessionStorage.setItem('countdownEnd', endTime);
  }

  const hoursEl = document.getElementById('countdown-hours');
  const minsEl = document.getElementById('countdown-minutes');
  const secsEl = document.getElementById('countdown-seconds');

  function update() {
    const diff = Math.max(0, endTime - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');

    if (diff > 0) {
      requestAnimationFrame(() => setTimeout(update, 1000));
    }
  }

  update();
}
