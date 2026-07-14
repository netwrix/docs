// Three contestants in the blind pilot. All three go through Algolia Agent
// Studio — the browser POSTs directly to Algolia's /completions endpoint with
// the app-scoped API key (safe to embed; the same key is what Algolia's own
// Integration Help modal ships to your React app). No pilot-server proxy.
//
// Each Algolia agent's provider is set to point at the unified multi_agent
// Cloud Run gateway; agents differ only by the Model field they send to it:
//   - baseline agent      → model=algolia-baseline → naive Gemini + algolia_search
//   - prototype-v1 agent  → model=prototype-v1    → RRF+coref+gate orchestration
//   - gemini-baseline     → model=gemini-baseline → Gemini + google_search grounding
//                                                    (Algolia's system prompt + any
//                                                    algolia tools are stripped at
//                                                    the handler; see
//                                                    src/multi_agent/handlers/
//                                                    gemini_baseline.py)

// App-scoped, agent-studio-limited key. Publicly visible in the Integration
// Help modal of every agent — safe to embed client-side.
const ALGOLIA_APP_ID  = 'KPMSCF6G6J';
const ALGOLIA_API_KEY = 'd30ffbfc8214a1c3f2ed04cbe8c4503a';

// Public, unauth feedback endpoint on the unified multi_agent gateway
// (same API Gateway that fronts /v1/chat/completions and /v1/models).
// The browser POSTs {rank, comment} here after the user ranks an answer;
// the gateway forwards to Cloud Run's /v1/feedback, which writes a row
// to the `feedback` BigQuery table.
const FEEDBACK_ENDPOINT = 'https://prototype-v1-gateway-60rduzyd.uc.gateway.dev/v1/feedback';

export const CONTESTANTS = [
  {
    key: 'prototype-v1',
    agentId: 'bb71922d-a942-450e-ab0e-5c60426c0c32',
  },
  {
    key: 'baseline',
    agentId: '167bf855-d5d6-402d-be7d-7f8fb71a1440',
  },
  {
    key: 'gemini-baseline',
    // Set after the gemini-baseline agent is created in Algolia Agent Studio
    // and its provider is pointed at the multi_agent gateway with model=gemini-baseline.
    agentId: null,
  },
];

function algoliaUrl(agentId) {
  return `https://${ALGOLIA_APP_ID}.algolia.net/agent-studio/1/agents/${agentId}/completions?stream=true&compatibilityMode=ai-sdk-5`;
}

export function shuffled(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Stream a single completion for one contestant.
 *
 * @param {Object} contestant  from CONTESTANTS
 * @param {Array}  messages    history to send (assistant messages contain final text)
 * @param {String} conversationId
 * @param {String} messageId
 * @param {AbortSignal} signal
 * @param {(evt) => void} onEvent  { type: 'text'|'tool'|'citations'|'error'|'done', ... }
 */
export async function streamContestant(contestant, messages, conversationId, messageId, signal, onEvent) {
  if (!contestant.agentId) {
    onEvent({
      type: 'error',
      message:
        `Contestant "${contestant.key}" has no agentId yet. Create the agent in ` +
        `Algolia Agent Studio (Provider → multi_agent gateway, Model = ${contestant.key}), ` +
        `publish it, and paste its UUID into src/pages/pilot/agents.js.`,
    });
    onEvent({ type: 'done' });
    return;
  }

  const url = algoliaUrl(contestant.agentId);
  let res;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream',
        'x-algolia-application-id': ALGOLIA_APP_ID,
        'x-algolia-api-key': ALGOLIA_API_KEY,
      },
      body: JSON.stringify({
        messages,
        conversationId,
        messageId,
      }),
      signal,
    });
  } catch (err) {
    onEvent({ type: 'error', message: `Fetch to Algolia failed: ${err.message}` });
    onEvent({ type: 'done' });
    return;
  }

  if (!res.ok || !res.body) {
    let bodyText = '';
    try { bodyText = await res.text(); } catch { /* ignore */ }
    onEvent({ type: 'error', message: `Algolia ${res.status}: ${bodyText.slice(0, 400)}` });
    onEvent({ type: 'done' });
    return;
  }

  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = '';
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      let sep;
      while ((sep = buf.indexOf('\n\n')) !== -1) {
        const chunk = buf.slice(0, sep);
        buf = buf.slice(sep + 2);
        for (const line of chunk.split('\n')) {
          if (!line.startsWith('data:')) continue;
          const data = line.slice(5).trim();
          if (!data || data === '[DONE]') {
            if (data === '[DONE]') onEvent({ type: 'done-sse' });
            continue;
          }
          try {
            onEvent(algoliaSseToEvent(JSON.parse(data)));
          } catch {
            // non-JSON keepalive; ignore
          }
        }
      }
    }
  } catch (err) {
    onEvent({ type: 'error', message: `stream: ${err.message}` });
  } finally {
    onEvent({ type: 'done' });
  }
}

/**
 * Fire-and-forget feedback POST. Failures log to console but never surface
 * to the user — feedback is nice-to-have and localStorage still records
 * the rating regardless.
 */
export async function submitFeedback({
  contestantKey,
  conversationId,
  messageId,
  question,
  rank,
  comment,
  submittedAt,
}) {
  try {
    await fetch(FEEDBACK_ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contestant: contestantKey,
        conversation_id: conversationId,
        message_id: messageId,
        question,
        rank,
        comment,
        submitted_at: submittedAt,
      }),
    });
  } catch (err) {
    // Never bubble — feedback is best-effort.
    console.warn('pilot: submitFeedback failed', err);
  }
}

// Algolia Agent Studio streams events shaped like Vercel ai-sdk v5.
// Observed on our published agents (2026-07):
//   start, start-step, text-start, text-delta, text-end, finish-step, finish
//   tool-input-start, tool-input-delta, tool-input-available, tool-output-available
//   source-url (occasional)
function algoliaSseToEvent(evt) {
  const t = evt.type || evt.event;

  // text tokens — delta streaming
  if (t === 'text-delta' || t === 'text' || t === 'token') {
    const text = evt.delta || evt.text || evt.value || '';
    if (text) return { type: 'text', text };
    return { type: 'noop' };
  }
  if (t === 'message' && typeof evt.content === 'string') {
    return { type: 'text', text: evt.content };
  }

  // life-cycle markers we don't render but still swallow silently
  if (['start', 'start-step', 'text-start', 'text-end', 'finish-step'].includes(t)) {
    return { type: 'noop' };
  }

  // tool calls / tool results — suppressed as visible widgets; we surface a
  // discreet "searching…" indicator via the 'tool' event only.
  if (t === 'tool-input-start' || t === 'tool-call' || t === 'tool_call' || t === 'tool-input-available') {
    return { type: 'tool', phase: 'call', name: evt.toolName || evt.name || evt.tool || 'algolia_search' };
  }
  if (t === 'tool-input-delta') {
    return { type: 'noop' };
  }
  if (t === 'tool-result' || t === 'tool_result' || t === 'tool-output-available') {
    return { type: 'tool', phase: 'result', name: evt.toolName || evt.name || evt.tool || 'algolia_search' };
  }

  // citations / sources
  if (t === 'source' || t === 'source-url' || t === 'sources' || t === 'citations') {
    const list = Array.isArray(evt.sources) ? evt.sources : (Array.isArray(evt.citations) ? evt.citations : [evt]);
    const citations = list
      .map((s) => ({
        uri: s.url || s.uri || s.href || s.source?.url || s.source?.uri,
        title: s.title || s.name || s.label,
      }))
      .filter((c) => c.uri);
    if (citations.length) return { type: 'citations', citations };
    return { type: 'noop' };
  }

  // done markers
  if (t === 'finish' || t === 'end' || t === 'stop' || t === 'message-stop' || t === 'done') {
    return { type: 'done-sse' };
  }

  if (t === 'error') {
    return { type: 'error', message: evt.message || evt.error || 'unknown error' };
  }

  return { type: 'debug', raw: evt };
}
