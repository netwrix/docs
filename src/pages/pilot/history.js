// Per-panel conversation history, ratings, and message identifiers persisted
// in localStorage. Each contestant gets its own transcript so a "prototype-v1"
// conversation survives page reloads independently of "baseline" and "gemini".

const HIST_KEY = 'pilot-blind:v1';
const ORDER_KEY = 'pilot-blind:order';

export function loadState() {
  if (typeof window === 'undefined') return { conversations: {}, ratings: [] };
  try {
    const raw = window.localStorage.getItem(HIST_KEY);
    if (!raw) return { conversations: {}, ratings: [] };
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return { conversations: {}, ratings: [] };
    return {
      conversations: parsed.conversations || {},
      ratings: parsed.ratings || [],
    };
  } catch {
    return { conversations: {}, ratings: [] };
  }
}

export function saveState(state) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(HIST_KEY, JSON.stringify(state));
  } catch (e) {
    // localStorage full or unavailable — fine, history is nice-to-have
    console.warn('pilot: could not persist history', e);
  }
}

export function clearState() {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(HIST_KEY);
    window.localStorage.removeItem(ORDER_KEY);
  } catch {
    /* ignore */
  }
}

export function loadPanelOrder(defaultOrder) {
  if (typeof window === 'undefined') return defaultOrder;
  try {
    const raw = window.localStorage.getItem(ORDER_KEY);
    if (!raw) return defaultOrder;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length === defaultOrder.length) return parsed;
  } catch {
    /* ignore */
  }
  return defaultOrder;
}

export function savePanelOrder(order) {
  if (typeof window === 'undefined') return;
  try { window.localStorage.setItem(ORDER_KEY, JSON.stringify(order)); } catch { /* ignore */ }
}

export function newId(prefix) {
  const rand = Math.random().toString(36).slice(2, 10);
  return `${prefix}_${Date.now().toString(36)}${rand}`;
}
