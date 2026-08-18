// Docusaurus scrolls to the top (or to a hash target) on every route change.
// Our global `scroll-behavior: smooth` (src/css/custom.css) makes the browser
// animate that scroll. We only want the animation for anchor navigation within
// the same page (e.g. TOC clicks) — a new page should land instantly, whether
// at the top or at an anchor.
export function onRouteUpdate({ previousLocation, location }) {
  const samePage = previousLocation?.pathname === location.pathname;
  document.documentElement.style.scrollBehavior = samePage ? 'smooth' : 'auto';

  // On a fresh page load (no previousLocation) Docusaurus leaves hash scrolling
  // to the browser's native fragment navigation. In dev, `docusaurus start`
  // serves an empty shell and renders content client-side, so the target
  // element doesn't exist yet when the browser tries to scroll to it — it
  // never retries. Handle that case ourselves, landing instantly once the
  // element shows up.
  if (!previousLocation && location.hash) {
    scrollToHashOnceRendered(location.hash);
  }
}

export function onRouteDidUpdate() {
  document.documentElement.style.scrollBehavior = '';
}

function scrollToHashOnceRendered(hash) {
  const id = decodeURIComponent(hash.substring(1));
  const root = document.getElementById('__docusaurus') ?? document.body;
  let debounceTimer;

  const attemptScroll = () => {
    if (window.location.hash !== hash) {
      cleanup();
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
  };

  // Debounce so we scroll once the DOM has stopped changing, not on the first
  // sighting of the element — later mutations (syntax highlighting, reserved
  // image space resolving, etc.) can still shift it out from under the navbar.
  const scheduleScroll = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(attemptScroll, 150);
  };

  const cleanup = () => {
    clearTimeout(debounceTimer);
    clearTimeout(stopTimer);
    observer.disconnect();
  };

  const observer = new MutationObserver(scheduleScroll);
  observer.observe(root, { childList: true, subtree: true, attributes: true });
  scheduleScroll();
  const stopTimer = setTimeout(cleanup, 2000);
}
