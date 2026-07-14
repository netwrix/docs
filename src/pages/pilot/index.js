// Blind 3-way AI compare page. Mounts a full-viewport stage over the docs
// site chrome. Users can leave via the ✕ button (back to previous page) or
// browser back — panels stay identical apart from their model's answer text
// and appear in a randomized order per page load (persisted so the ordering
// survives an in-tab reload but re-shuffles on a fresh open).

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useHistory } from '@docusaurus/router';

import styles from './styles.module.css';
import { CONTESTANTS, shuffled, streamContestant, submitFeedback } from './agents';
import {
  loadState, saveState, clearState,
  loadPanelOrder, savePanelOrder, newId,
} from './history';
import { renderMarkdown } from './markdown';

// ---------------------------------------------------------------------------

function PanelHead({ letter, label, onClearOne }) {
  return (
    <div className={styles.panelHead}>
      <div className={styles.panelLabel}>Answer {letter}</div>
      <div className={styles.topbarSpacer} />
      <button className={styles.iconBtn} onClick={onClearOne} title="Clear this panel's history">clear</button>
      {/* NB: intentionally do NOT show the underlying model label to the user;
          the whole point is a blind comparison. */}
    </div>
  );
}

function Thinking() {
  return (
    <div className={styles.thinking}>
      <span className={styles.pulse} />
      <span>thinking…</span>
    </div>
  );
}

function ToolCallLine({ name }) {
  // Deliberately understated: we don't want the "hey I'm calling algolia_search"
  // widget to give away which contestant is which.
  return (
    <div className={styles.pending}>
      <span className={styles.pulse} />
      <span>searching…</span>
    </div>
  );
}

// Citation `uri` values come straight from the model's SSE stream. React
// attribute-escapes the value, so an interpolated `"` can't break out of the
// href. What React does NOT block is `javascript:` (or `data:` / `vbscript:`)
// URLs — those still fire on click. Whitelist http/https/mailto and render
// anything else as plain text so a poisoned source doesn't become an active
// XSS surface (the label stays visible; per team norm, malformed model output
// remains a signal to the evaluator).
function safeCitationHref(u) {
  if (typeof u !== 'string') return null;
  const trimmed = u.trim();
  if (!/^(?:https?:|mailto:)/i.test(trimmed)) return null;
  return trimmed;
}

function Assistant({ msg }) {
  const html = useMemo(() => renderMarkdown(msg.text || ''), [msg.text]);
  return (
    <div className={`${styles.msg} ${styles.msgAssistant}`}>
      {msg.text
        ? <div dangerouslySetInnerHTML={{ __html: html }} />
        : (msg.pending ? <Thinking /> : <span className={styles.pending}>(no response)</span>)}
      {msg.pending && msg.tool && !msg.text && <ToolCallLine name={msg.tool} />}
      {msg.error && <div className={styles.err}>{msg.error}</div>}
      {msg.citations && msg.citations.length > 0 && (
        <div className={styles.citations}>
          <div>Sources</div>
          <ol>
            {msg.citations.map((c, i) => {
              const href = safeCitationHref(c.uri);
              const label = c.title || c.uri;
              return (
                <li key={i}>
                  {href
                    ? <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                    : <span title="citation URL rejected (non-http scheme)">{label}</span>}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}

function UserBubble({ text }) {
  return <div className={`${styles.msg} ${styles.msgUser}`}>{text}</div>;
}

function RankAndCommentRow({ rank, comment, submitted, onChange, onSubmit }) {
  const [draftComment, setDraftComment] = useState(comment || '');
  useEffect(() => { setDraftComment(comment || ''); }, [comment]);
  const canSubmit = rank != null;

  return (
    <div className={styles.rateRow}>
      <div className={styles.rateRankGroup}>
        <span className={styles.rateLabel}>Rank:</span>
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            className={`${styles.rateBtn} ${rank === n ? styles.rateBtnActiveRank : ''}`}
            onClick={() => onChange({ rank: rank === n ? null : n })}
            title={
              n === 1 ? 'Best answer'
              : n === 2 ? 'Middle answer'
              : 'Worst answer'
            }
          >
            {n}
          </button>
        ))}
        <span className={styles.rateHint}>1 = best · 3 = worst</span>
      </div>
      <div className={styles.rateCommentGroup}>
        <textarea
          className={styles.rateComment}
          value={draftComment}
          onChange={(e) => setDraftComment(e.target.value)}
          placeholder="Optional: notes / recommendations for this answer"
          rows={2}
        />
        <button
          className={styles.rateSubmit}
          disabled={!canSubmit}
          onClick={() => onSubmit({ rank, comment: draftComment })}
          title={canSubmit ? 'Submit rank & comment' : 'Pick a rank (1/2/3) first'}
        >
          submit
        </button>
      </div>
      {submitted && <span className={styles.rateSubmitted}>saved</span>}
    </div>
  );
}

// ---------------------------------------------------------------------------

function Panel({ contestant, letter, transcript, onSetLast, isTurnActive }) {
  const bodyRef = useRef(null);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [transcript]);

  const lastMsg = [...transcript].reverse().find((m) => m.role === 'assistant' && !m.pending && m.text);

  return (
    <div className={styles.panel}>
      <PanelHead
        letter={letter}
        label={contestant.key}
        onClearOne={() => onSetLast('__clear_one__', contestant.key)}
      />
      <div className={styles.panelBody} ref={bodyRef}>
        {transcript.length === 0 && (
          <div className={styles.pending}>waiting for your first query…</div>
        )}
        {transcript.map((m, i) => (
          m.role === 'user'
            ? <UserBubble key={i} text={m.text} />
            : <Assistant key={i} msg={m} />
        ))}
      </div>
      {lastMsg && !isTurnActive && (
        <RankAndCommentRow
          rank={lastMsg.rank ?? null}
          comment={lastMsg.comment || ''}
          submitted={!!lastMsg.submittedAt}
          onChange={({ rank }) => onSetLast('__rank__', contestant.key, rank, lastMsg.id)}
          onSubmit={({ rank, comment }) => onSetLast('__submit__', contestant.key, { rank, comment }, lastMsg.id)}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------

function PilotStage() {
  const history = useHistory();

  const [{ conversations, ratings }, setState] = useState(() => loadState());
  const [order, setOrder] = useState(() => loadPanelOrder(shuffled(CONTESTANTS.map((c) => c.key))));
  const [query, setQuery] = useState('');
  const [pending, setPending] = useState({}); // { [key]: true } while streaming
  const abortRef = useRef(null);

  // First mount: if we didn't shuffle at load time, do it now.
  useEffect(() => { savePanelOrder(order); }, [order]);
  useEffect(() => { saveState({ conversations, ratings }); }, [conversations, ratings]);

  const shuffleAgain = () => {
    const s = shuffled(CONTESTANTS.map((c) => c.key));
    setOrder(s);
    savePanelOrder(s);
  };

  const isTurnActive = Object.values(pending).some(Boolean);

  const clearAll = () => {
    if (!window.confirm('Reset all three transcripts and ratings?')) return;
    clearState();
    setState({ conversations: {}, ratings: [] });
    shuffleAgain();
  };

  const clearOne = (key) => {
    setState((prev) => ({
      ...prev,
      conversations: { ...prev.conversations, [key]: [] },
    }));
  };

  const rankLast = (key, rank, msgId) => {
    setState((prev) => {
      const trans = prev.conversations[key] || [];
      const idx = trans.findIndex((m) => m.id === msgId);
      if (idx < 0) return prev;
      const next = trans.slice();
      next[idx] = { ...next[idx], rank };
      return {
        ...prev,
        conversations: { ...prev.conversations, [key]: next },
      };
    });
  };

  const submitFeedbackFor = (key, { rank, comment }, msgId) => {
    setState((prev) => {
      const trans = prev.conversations[key] || [];
      const idx = trans.findIndex((m) => m.id === msgId);
      if (idx < 0) return prev;
      const submittedAt = Date.now();
      const next = trans.slice();
      next[idx] = { ...next[idx], rank, comment, submittedAt };
      const question = findQuestionFor(trans, idx);
      const rec = { ts: submittedAt, key, rank, comment, msgId, question };
      const conversationId = getConvId(key);
      submitFeedback({
        contestantKey: key,
        conversationId,
        messageId: msgId,
        question,
        rank,
        comment,
        submittedAt,
      }).catch((err) => console.warn('pilot: feedback POST failed', err));
      return {
        ...prev,
        conversations: { ...prev.conversations, [key]: next },
        ratings: [...prev.ratings, rec],
      };
    });
  };

  const onSetLast = (kind, key, arg1, arg2) => {
    if (kind === '__clear_one__') return clearOne(key);
    if (kind === '__rank__') return rankLast(key, arg1, arg2);
    if (kind === '__submit__') return submitFeedbackFor(key, arg1, arg2);
  };

  const submit = async () => {
    const text = query.trim();
    if (!text || isTurnActive) return;
    setQuery('');

    const userMsg = { role: 'user', id: newId('alg_msg'), text };

    // Seed pending assistant messages on each panel; the rest of the transcript
    // (prior turns) is what we send back as history.
    setState((prev) => {
      const nextConv = { ...prev.conversations };
      for (const c of CONTESTANTS) {
        const priorForKey = nextConv[c.key] || [];
        nextConv[c.key] = [
          ...priorForKey,
          userMsg,
          { role: 'assistant', id: newId('alg_msg'), text: '', citations: [], pending: true, contestantKey: c.key },
        ];
      }
      return { ...prev, conversations: nextConv };
    });

    setPending(Object.fromEntries(CONTESTANTS.map((c) => [c.key, true])));

    const ac = new AbortController();
    abortRef.current = ac;

    await Promise.all(CONTESTANTS.map(async (c) => {
      try {
        const priorForKey = (loadState().conversations[c.key] || []).filter((m) => !m.pending);
        const history = [...priorForKey, userMsg];
        const messages = history.map((m) => ({
          id: m.id,
          role: m.role,
          parts: [{ type: 'text', text: m.text }],
        }));

        const conversationId = getConvId(c.key);
        const messageId = userMsg.id;

        await streamContestant(c, messages, conversationId, messageId, ac.signal, (evt) => {
          if (evt.type === 'text' && evt.text) {
            appendText(setState, c.key, evt.text);
          } else if (evt.type === 'tool') {
            markTool(setState, c.key, evt.name);
          } else if (evt.type === 'citations') {
            addCitations(setState, c.key, evt.citations);
          } else if (evt.type === 'error') {
            setError(setState, c.key, evt.message);
          } else if (evt.type === 'done') {
            finalize(setState, c.key);
            setPending((p) => ({ ...p, [c.key]: false }));
          }
        });
      } catch (err) {
        setError(setState, c.key, err.message);
        setPending((p) => ({ ...p, [c.key]: false }));
      }
    }));
  };

  return (
    <div className={styles.stage}>
      <Head>
        <title>Blind 3-way AI compare | Netwrix docs</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className={styles.topbar}>
        <div className={styles.topbarTitle}>Blind AI comparison</div>
        <div className={styles.topbarNote}>
          Same query → three assistants. Order is randomized. Rank each answer
          1 (best) → 3 (worst), leave a short note, and submit.
        </div>
        <div className={styles.topbarSpacer} />
        <button className={styles.iconBtn} onClick={shuffleAgain}>reshuffle</button>
        <button className={styles.iconBtn} onClick={clearAll}>reset all</button>
        <button className={styles.iconBtn} onClick={() => history.goBack()}>✕ close</button>
      </div>

      <div className={styles.panels}>
        {order.map((key, idx) => {
          const c = CONTESTANTS.find((x) => x.key === key);
          if (!c) return null;
          const letter = String.fromCharCode(65 + idx); // A, B, C
          return (
            <Panel
              key={c.key}
              contestant={c}
              letter={letter}
              transcript={conversations[c.key] || []}
              onSetLast={onSetLast}
              isTurnActive={!!pending[c.key]}
            />
          );
        })}
      </div>

      <div className={styles.querybar}>
        <textarea
          className={styles.queryInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask something — e.g. 'How do I create a new Change Tracker configuration?'"
          rows={2}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
          disabled={isTurnActive}
        />
        <button className={styles.querySend} onClick={submit} disabled={isTurnActive || !query.trim()}>
          {isTurnActive ? '…' : 'Ask all 3'}
        </button>
      </div>
    </div>
  );
}

// --- state mutators (kept out of the component body for readability) --------

function appendText(setState, key, delta) {
  setState((prev) => {
    const arr = prev.conversations[key] || [];
    const idx = lastPendingIdx(arr);
    if (idx < 0) return prev;
    const next = arr.slice();
    next[idx] = { ...next[idx], text: (next[idx].text || '') + delta };
    return { ...prev, conversations: { ...prev.conversations, [key]: next } };
  });
}

function markTool(setState, key, toolName) {
  setState((prev) => {
    const arr = prev.conversations[key] || [];
    const idx = lastPendingIdx(arr);
    if (idx < 0) return prev;
    const next = arr.slice();
    next[idx] = { ...next[idx], tool: toolName };
    return { ...prev, conversations: { ...prev.conversations, [key]: next } };
  });
}

function addCitations(setState, key, cits) {
  setState((prev) => {
    const arr = prev.conversations[key] || [];
    const idx = lastPendingIdx(arr);
    if (idx < 0) return prev;
    const next = arr.slice();
    const merged = mergeCitations(next[idx].citations || [], cits);
    next[idx] = { ...next[idx], citations: merged };
    return { ...prev, conversations: { ...prev.conversations, [key]: next } };
  });
}

function setError(setState, key, msg) {
  setState((prev) => {
    const arr = prev.conversations[key] || [];
    const idx = lastPendingIdx(arr);
    if (idx < 0) return prev;
    const next = arr.slice();
    next[idx] = { ...next[idx], error: msg, pending: false };
    return { ...prev, conversations: { ...prev.conversations, [key]: next } };
  });
}

function finalize(setState, key) {
  setState((prev) => {
    const arr = prev.conversations[key] || [];
    const idx = lastPendingIdx(arr);
    if (idx < 0) return prev;
    const next = arr.slice();
    next[idx] = { ...next[idx], pending: false, tool: undefined };
    return { ...prev, conversations: { ...prev.conversations, [key]: next } };
  });
}

function mergeCitations(existing, incoming) {
  const byUri = new Map();
  for (const c of existing) byUri.set(c.uri, c);
  for (const c of incoming) if (!byUri.has(c.uri)) byUri.set(c.uri, c);
  return Array.from(byUri.values());
}

function lastPendingIdx(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].role === 'assistant' && arr[i].pending) return i;
  }
  return -1;
}

function findQuestionFor(trans, assistantIdx) {
  for (let i = assistantIdx - 1; i >= 0; i--) if (trans[i].role === 'user') return trans[i].text;
  return null;
}

function getConvId(key) {
  const stateKey = `pilot-blind:conv:${key}`;
  if (typeof window === 'undefined') return null;
  let cid = window.localStorage.getItem(stateKey);
  if (!cid) { cid = newId('alg_conv'); window.localStorage.setItem(stateKey, cid); }
  return cid;
}

// ---------------------------------------------------------------------------

export default function PilotPage() {
  return (
    <BrowserOnly fallback={<div style={{ padding: 40 }}>Loading pilot…</div>}>
      {() => <PilotStage />}
    </BrowserOnly>
  );
}
