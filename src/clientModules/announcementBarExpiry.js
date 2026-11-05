// Docusaurus remembers a dismissed announcement bar forever (until its `id`
// changes). We want it to come back after a while, so we stamp the first time
// we see it dismissed and clear the dismissal once the stamp is old enough.
// Runs at module load (before the bar renders on a fresh page load) and on
// every route update (to stamp a dismissal made during this session).
const DISMISS_KEY = 'docusaurus.announcement.dismiss';
const STAMP_KEY = 'epp.announcement.dismissedAt';
const SHOW_AGAIN_AFTER_DAYS = 10;

function checkDismissalExpiry() {
  try {
    if (localStorage.getItem(DISMISS_KEY) !== 'true') {
      localStorage.removeItem(STAMP_KEY);
      return;
    }
    const stamp = Number(localStorage.getItem(STAMP_KEY));
    if (!stamp) {
      localStorage.setItem(STAMP_KEY, String(Date.now()));
    } else if (Date.now() - stamp > SHOW_AGAIN_AFTER_DAYS * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(DISMISS_KEY);
      localStorage.removeItem(STAMP_KEY);
    }
  } catch {
    // Storage unavailable (private mode, blocked): fall back to Docusaurus's default.
  }
}

if (typeof window !== 'undefined') {
  checkDismissalExpiry();
}

export function onRouteUpdate() {
  checkDismissalExpiry();
}
