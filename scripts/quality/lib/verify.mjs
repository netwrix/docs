/**
 * Independent meaning check. A separate model call sees only the original and
 * edited sentence, never the rewriter's reasoning, and must say the meaning is
 * identical and that it is certain. Anything else rejects the edit.
 */
import { getClient, textOf } from './llm.mjs';

const SCHEMA = {
  type: 'object',
  properties: {
    verdicts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          same_meaning: { type: 'boolean' },
          certain: { type: 'boolean' },
          difference: { type: 'string' },
        },
        required: ['id', 'same_meaning', 'certain', 'difference'],
        additionalProperties: false,
      },
    },
  },
  required: ['verdicts'],
  additionalProperties: false,
};

const SYSTEM =
  `You compare pairs of sentences from software documentation. For each pair, decide whether the second sentence says exactly what the first says. ` +
  `Same meaning requires all of: the same actions, the same conditions, the same requirements and permissions, the same scope and quantities, and the same referents for every pronoun. ` +
  `Set same_meaning to false if anything is added, removed, weakened, strengthened, or made ambiguous. Set certain to false if you have any doubt. ` +
  `In "difference", name the change in a few words, or write "none".`;

/** @param {{id:number,before:string,after:string}[]} pairs @returns {Promise<Map<number,{ok:boolean,difference:string}>>} */
export async function verifyMeaning(pairs, { model, client = getClient() }) {
  const out = new Map();
  if (!pairs.length) return out;
  const response = await client.messages.create({
    model,
    max_tokens: 4000,
    system: SYSTEM,
    messages: [
      {
        role: 'user',
        content: pairs.map(p => `#${p.id}\nFIRST: ${p.before}\nSECOND: ${p.after}`).join('\n\n'),
      },
    ],
    output_config: { format: { type: 'json_schema', schema: SCHEMA } },
  });
  const parsed = JSON.parse(textOf(response));
  for (const v of parsed.verdicts) out.set(v.id, { ok: v.same_meaning && v.certain, difference: v.difference });
  // A pair the verifier did not answer is not verified.
  for (const p of pairs) if (!out.has(p.id)) out.set(p.id, { ok: false, difference: 'no verdict returned' });
  return out;
}
