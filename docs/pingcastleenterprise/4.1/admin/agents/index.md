---
description: Create and manage agents in PingCastle Enterprise, choose an authorization level, use the API key, and set up webhooks.
sidebar_position: 1
sidebar_label: Managing agents
---
# Managing Agents in PingCastle Enterprise

An agent is an API identity. It lets a PingCastle client or another system talk to PingCastle Enterprise without a user login. The most common use is uploading scan reports from `PingCastle.exe`.

Each agent has its own API key and an authorization level that limits what the key can do. Only users in the Admin role can open the **Agents** pages.

## Create an agent

1. Go to **Configuration** > **Agents**, and then click **Create**.
2. Complete the fields in the following table.
3. Click **Save**.
4. On the key page, click **Copy** and store the key in a secure location.
5. Select **I've copied this key**, and then click **Done**.

| Field | Description |
|---|---|
| **Name** | Label for the agent. Required. Maximum 100 characters. |
| **Expiration** | How long the key stays valid: 90 days, 180 days, 365 days, or **Never expires**. The default is 365 days. See [API key expiration](./key-expiration.md). |
| **Enabled** | When selected, the agent can log in. Clear it to block the agent without deleting it. |
| **Authorisation** | What the key can do. See [Authorization levels](#authorization-levels). |
| **Owner (domain)**, **Owner (Entra ID)**, **Owner (entity)** | Who is accountable for the agent. Enterprise edition only. Each agent needs either a domain owner or an entity owner. Other editions assign the owner automatically. |
| **Comment** | Free-text note. |
| **Webhook payload URL**, **Webhook secret**, **Webhook Active mode** | Optional webhook notifications. See [Webhooks](#webhooks). |

For initial setup or report imports, use the **[Default]** entity. PingCastle Enterprise creates it automatically.

:::warning
PingCastle Enterprise shows the API key once. The button **Done** stays unavailable until you select **I've copied this key**. If you lose the key, use **Regenerate** to issue a new one.
:::

For example, a scan agent for a branch office has the name `Branch-office-scanner`, the default 365-day expiration, the **Upload report only** authorization, and the **[Default]** entity as the owner.

## Authorization levels

| Level | Meaning |
|---|---|
| Upload report only | Can post scan results only. Use this level for scan agents. |
| Receive data from another PingCastle Enterprise instance | Instance-to-instance synchronization. Available to the Admin role in the Enterprise edition only. |
| Read access to owner data | Read-only, limited to the agent's owner. |
| Read all PingCastle Enterprise data | Read-only across all data. |
| Read and write access to owner data | Read and write, limited to the agent's owner. |
| Read and write all PingCastle Enterprise data | Read and write across all data. |
| Perform admin actions | Highest level. Only an admin can assign it. |

Follow least privilege. Use **Upload report only** for scanners, and give each webhook consumer its own agent.

## Use the API key

Pass the key to `PingCastle.exe` with one of these parameters:

- `--api-key <key>` — Puts the key on the command line.
- `--api-key-file <path>` — Reads the key from a file.

Use `--api-key-file`. A key on the command line is visible in process logs, including the process logs that endpoint detection and response (EDR) tools collect. With `--api-key-file`, the key doesn't appear in those logs.

The key file is a plain text file that contains only the key. PingCastle Enterprise doesn't support secret stores or similar services for the key. Protect the file with access control lists (ACLs) so that only the account that runs `PingCastle.exe` can read it.

```powershell
PingCastle.exe --healthcheck --level Full --api-endpoint https://pingcastle.contoso.com --api-key-file C:\Secrets\pingcastle-agent.txt
```

Programmatic clients post the key to `POST api/Agent/Login`. A successful login returns a bearer token for later API calls.

A failed login returns the generic message "Agent not found". The message is the same whether the key is unknown, the agent is disabled, or the key has expired.

See [Agent deployment](../../configuration/agent-deployment.md) for the full command-line setup.

## Webhooks

An agent can send webhook notifications to another system.

- **Webhook payload URL** — The address that receives notifications. It must be a valid URL.
- **Webhook secret** — A shared secret that the receiver uses to verify messages. The **Details** page masks it. When you edit the agent, leave the field blank to keep the existing value.
- **Webhook Active mode** — Turns webhooks on.

Webhooks need an authorization level of **Read access to owner data** or higher. The webhook fields are unavailable for lower levels. The owner-scoped levels cover only that owner's data.

{/* TODO: document the webhook payload format and events. The source for this page didn't cover payload behavior. */}

## Manage an agent

The **Agents** list shows each agent with its key status and expiry date. The action buttons include **Extend** and **Regenerate**.

- **Details** — Shows the key status, expiry date, enabled flag, last login time, last IP address, last computer, comment, and webhook settings.
- **Edit** — Changes the name, enabled flag, owner, comment, authorization level, and webhook settings. You can't edit the API key. Change the expiry date with **Extend** or **Regenerate**.
- **Extend** — Sets a new expiry date and keeps the same key.
- **Regenerate** — Issues a new key, immediately invalidates the old key, and shows the new key once.
- **Delete** — Removes the agent.

PingCastle Enterprise records the last login time, IP address, and computer on each successful login. Use these values to find unused or suspicious agents.

See [API key expiration](./key-expiration.md) for how **Extend** and **Regenerate** work.

## Audit agent activity

The [audit log](../audit-log.md) records these agent actions:

- Creating an agent
- Changing the name, authorization level, enabled flag, or owner
- Extending a key
- Regenerating a key
- Deleting an agent

Agent logins appear as `Agent.Login`.

## Set up an agent for scanning

1. Create the agent with the lowest authorization level that works, and choose an expiration.
2. Copy the key into a plain text key file, and restrict the file with ACLs.
3. Configure the client with `--api-key-file`.
4. Open the agent's **Details** page and check **Last login** to confirm that the agent connected.
5. Before the expiry date, use **Extend** or **Regenerate**. If you regenerate the key, update the client with the new key.
