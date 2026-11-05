---
description: Set an expiry date on agent API keys, renew them with Extend or Regenerate, and configure the email reminders that PingCastle Enterprise sends before expiry.
sidebar_position: 2
sidebar_label: API key expiration
---
# Agent API Key Expiration in PingCastle Enterprise

Agent API keys have an optional expiry date. Administrators choose a key lifetime when they create an agent. PingCastle Enterprise emails administrators before a key expires. After a key expires, the agent can't log in until an administrator extends or regenerates the key.

## Expiration presets

You set a preset when you create an agent, extend a key, or regenerate a key.

| Preset | Effect |
|---|---|
| 90 days | Expires 90 days after the action. |
| 180 days | Expires 180 days after the action. |
| 365 days | Expires 365 days after the action. This is the default for new agents. |
| Never expires | No expiry date. |

PingCastle Enterprise calculates the expiry date from the moment you take the action, in UTC. It doesn't calculate from the previous expiry date.

## Key status

The **Agents** list and the agent **Details** page show a status badge for each key:

- **Active** — The key expires after the reminder window.
- **Expiring soon** — The key expires within the reminder window. The default window is 30 days. The **Details** page also shows a banner with the days remaining.
- **Expired** — The expiry date has passed.
- **Never Expires** — The key has no expiry date.

## Extend or regenerate a key

Only users in the Admin role can extend or regenerate a key.

- **Extend** sets a new expiry date from a preset. The key value doesn't change, so you don't need to reconfigure the agent.
- **Regenerate** issues a new key and immediately invalidates the old key. You choose an expiration preset at the same time. Update every client that uses the agent with the new key.

To extend a key:

1. Go to **Configuration** > **Agents**.
2. Click **Extend** next to the agent.
3. Select a preset, and then confirm.

To regenerate a key:

1. Go to **Configuration** > **Agents**.
2. Click **Regenerate** next to the agent.
3. Select a preset, and then confirm.
4. Click **Copy**, select **I've copied this key**, and then click **Done**.

PingCastle Enterprise shows a regenerated key once. It can't show the key again.

Both actions reset the reminder state, so reminders start again for the new expiry date.

For example, an agent with a 90-day key that you extend on March 1 with the 365-day preset expires 365 days after March 1, not 365 days after the previous expiry date.

## What happens when a key expires

When an agent logs in with an expired key, PingCastle Enterprise rejects the login with the generic message "Agent not found". It returns the same message for an unknown key or a disabled agent. The server logs a warning with the agent ID and the sanitized agent name.

To restore access, use **Extend** or **Regenerate**. If the 401 error appears on a scheduler or agent, see [Scheduler or Agent Deployment Returns 401 Unauthorized Error](../../kb/scheduler-or-agent-deployment-returns-401-unauthorized-error.md).

## Email reminders

A daily background job sends reminders for enabled agents whose key expires within the reminder window.

- **Recipients** — Users in the Administrators role who have notifications enabled, plus the addresses in **Settings** > **Notifications**. PingCastle Enterprise removes duplicate addresses.
- **Content** — The agent name, the expiry date, and the days remaining. The email explains that **Extend** keeps the key value and **Regenerate** replaces it. It links to the agent page.
- **Requirement** — You must configure email. Without email, the job skips reminders. See [Configuring Email](../../configuration/settings/email.md).
- **Frequency** — At most one reminder per agent per day, and only on the threshold days.

Reminder timing follows the hour of the configured daily job.

### Configure reminders

Configure these fields on **Configuration** > **Settings** > **Notifications**:

- **Agent API key expiry reminder** — The number of days before expiry that reminders start. The default is 30. The allowed range is 1 to 89.
- **Also send follow-up reminders** — Selected by default. When selected, PingCastle Enterprise sends extra reminders 21, 14, and 7 days before expiry. It sends each extra reminder only if that day is within the main threshold. When cleared, PingCastle Enterprise sends one reminder, at the main threshold.

For example, with the default threshold of 30 days and follow-up reminders on, PingCastle Enterprise sends reminders 30, 21, 14, and 7 days before expiry. With a threshold of 14 days, it sends reminders 14 and 7 days before expiry.

## Key storage and audit events

PingCastle Enterprise no longer stores new and regenerated keys in plaintext. It stores a SHA-256 hash for login matching and an encrypted copy for internal use, such as the scheduler. At login, PingCastle Enterprise matches the hash first. It falls back to the plaintext value for keys created before the upgrade.

**Extend** and **Regenerate** write `Agent.KeyExtended` and `Agent.KeyRegenerated` events to the [audit log](../audit-log.md). Each event records the old and new expiry date, the preset days, and the preset. PingCastle Enterprise logs both events at Warning severity.

## Upgrade behavior

Existing agents have no expiry date after you upgrade, so they show **Never Expires** and keep working.

{/* TODO: confirm that no data migration sets an expiry on existing agents. The source only showed the schema migration. */}

Existing keys stay in plaintext until you regenerate them.

{/* TODO: confirm whether the Cloud API (PingCastle.Cloud.API) has an equivalent expiry. The source covers Enterprise agent keys only. */}
