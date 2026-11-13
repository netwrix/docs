---
title: "Anthropic"
description: "Connect an Anthropic organization to AI Security with an Admin API key and a workspace API key to read managed agents and API keys."
sidebar_position: 40
---

# Anthropic

Connect Anthropic so AI Security can read one Anthropic organization with up to two keys. An Admin API key reads the organization's API keys. An ordinary workspace API key reads the agents that Anthropic hosts for you. Either key alone is a connection, and each reads its own half. You create the keys in the Claude Console and enter them in 1Secure.

## Before you start

* An organization admin creates the Admin API key.
* The workspace key is an ordinary API key in the workspace your agents run in. Managed agents must be enabled for the organization.
* Sign in to the Claude Console at platform.claude.com.
* Have a password manager open. The console shows each key once.

## Create the keys in the Claude Console

1. Open **Settings > Admin keys**, and click **Create admin key**.
2. Name the key, for example "Netwrix 1Secure AI Security", and choose an expiry.
3. Click **Add**.
4. Copy the key. It starts with `sk-ant-admin`.
5. To read managed agents, open **Settings > API keys**, and click **Create key**.
6. Name the key, scope it to the workspace your agents run in, and create it.
7. Copy the key.

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Anthropic".
3. In the Anthropic row, click **Connect**. The **Connect Anthropic** dialog opens.
4. Paste each key you created. Leave a field empty if you made only one key, since either key alone connects. The dialog shows both fields under "Choose one of the following to connect:".
   * In **Admin API key**, paste the Admin key.
   * In **Workspace API key**, paste the workspace key.
5. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
6. Click **Done**.

The dialog has no field for the organization ID. It says "Organization ID is read from the credential". A passing test fills it in and names this source.

Select the Anthropic row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", or "Warning" when you gave both keys and Anthropic refused one of them. |
| Last scanned | "Never", then a result. |

:::info
Anthropic refuses the service account list to an Admin key. A scan with the Admin key therefore lists the service accounts as skipped, and **Last scanned** still reads "Succeeded" when AI Security read everything else. See [If the scan skips something or warns](#if-the-scan-skips-something-or-warns).
:::

## What you see after a scan

* **Agents**: every managed agent Anthropic runs for the organization (read with the workspace key). Claude Tag appears as one agent when the GitHub source is also connected.
* **Identities**: every API key of the organization, each as a non-human identity with the workspace it reaches, its creator as its owner, and the workspace admins as its administrators (read with the Admin key). People aren't listed as identities here. AI Security reads the organization's members only to name each key's creator and to place Claude Code and Claude Desktop users that an endpoint product saw under this organization, on **Shadow AI**.
* **Not read**: service accounts. Anthropic lists them only to an `org:admin` OAuth token, and the Sources dialog has no field for one.

## What this connector reads

With the Admin API key:

* The organization's ID and name.
* Every API key: its workspace or organization scope, its creator, its status, and when it was created. AI Security never receives the key's value, only the hint Anthropic shows.
* The workspaces and members, to name each key's workspace and creator. The members also place Claude Code and Claude Desktop users seen by an endpoint product under this organization. The placement is by membership, not by key.

An issue about how many admin keys the organization holds appears under **Anthropic workspace settings**, once per organization, rather than on one key. It has no owner. See [Issues](/docs/1secureaisecurity/admin/pages/issues.md).

With the workspace API key:

* Every managed agent: model, version, tools with their permission policies, Model Context Protocol (MCP) servers, skills, whether it can run other agents, and whether its system prompt is set. For a set prompt, AI Security records its length and its first sentence, which says what the agent is for.
* The sandboxes an agent's sessions ran in and their network settings, and the vaults those sessions used. A sandbox that no session ran in isn't linked to any agent. A sandbox, vault, or memory store found in a session stays linked while its agent stays, even when a later scan reads no session of that agent.
* The memory stores an agent's sessions mounted: each store's name and whether any session could write to it. What one session writes to a store, later sessions read as the agent's memory. AI Security doesn't read the memories, the store's description, or the session's instructions for it.
* Each session as an event: when it started, its status, and how long it ran. A source's first scan reads the sessions started in the last 3 days, or in the Activity window the organization chose under **Settings**. Each later scan reads on from where the scan before it stopped, and catches up on no more than the last 14 days, or the Activity window where the organization chose a longer one.

With the GitHub source also connected:

* Claude Tag as one agent. The GitHub App installation named for Claude or Anthropic is joined to it as an identity it holds. AI Security doesn't read its Slack side.

### What the connector never touches

* It records a system prompt as present, as a length, and as its first sentence. It never records the rest of the text.
* It records sessions as counts, times, and status. It records no title, no transcript, and no usage content.
* It never writes. Every call is a read.

## Permissions

| Key | What AI Security reads with it | Scan without it |
|-----|--------------------------------|-----------------|
| Admin API key, created by an organization admin | The organization inventory. | API keys aren't read. |
| Workspace API key, with managed agents enabled for the organization | Managed agents, their sessions, and the memory stores those sessions mounted. | Agents aren't read. |
| An `org:admin` OAuth token | Service accounts. | Service accounts aren't read, and API keys are unaffected. |
| The Admin API key, reading each workspace's members | The workspace admins, named as administrators of every key bound to their workspace. | The keys name no administrator, and the scan lists "Who administers each Anthropic workspace." among the skipped items. |

The Admin API isn't available to individual accounts. Managed agents are a beta that Anthropic enables for an organization. The Sources dialog has no field for an `org:admin` OAuth token, so AI Security doesn't read service accounts.

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | Neither key is stored. | Click **Edit**, and enter at least one key. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored keys. | Click **Edit**, and enter the keys again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Anthropic refused the key: it is wrong, disabled, or deleted. | Create a new key, and enter it under **Edit**. |
| "The credential works, but access was denied. A permission is missing." | Anthropic accepted the key and refused the read. For the Admin key, the test says: "use an Admin API key, created by an organization admin in the Claude Console. A regular API key cannot read the Admin API." or "confirm the key belongs to an organization and has admin scope". | Put an Admin key, not a workspace key, in **Admin API key**. |
| "The platform returned a response the scanner doesn't support." | The agents read isn't available. The test says: "managed agents need an ordinary workspace API key in the source's Anthropic API key setting and the managed agents beta enabled for the organization. The organization inventory read with the Admin key is unaffected." | Ask Anthropic to enable managed agents for the organization, or connect with the Admin key alone. |
| "The credential works, but Anthropic refused part of what the scan reads." | You gave both keys and Anthropic refused one of them. | Fix the key that the message names. |
| "The platform didn't answer, or said it is down or busy." | Anthropic didn't answer. | Test again later. |
| "The platform didn't answer in time." | Anthropic didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the keys. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix Support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned". If Anthropic slows a listing down or doesn't answer, the scan lists that listing among the skipped items, keeps what earlier scans found for the organization, and reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "The organization's service accounts." among the skipped items | Anthropic refused the service accounts. The scan says: "service accounts are readable only with an org:admin OAuth token, not an Admin API key; connect one to inventory them". | Nothing. The Sources dialog has no field for that token. |
| "Succeeded", with "The organization's API keys, so no key, who made it or which workspace it reaches is listed." among the skipped items | Anthropic refused the key listing. The scan reads the organization with no API keys, which isn't the same as having none. The scan says: "Use an Admin API key that can read the organization's API keys, created by an organization admin in the Claude Console." | Put an Admin key that can read API keys in **Admin API key**, and scan again. |
| "Succeeded", with "The organization's members." among the skipped items | Anthropic refused the member listing, so the organization reads as one with nobody in it. AI Security doesn't place the Claude Code and Claude Desktop users that an endpoint product saw under it. The scan says: "Use an Admin API key that can read members, created by an organization admin in the Claude Console." | Put an Admin key that can read members in **Admin API key**, and scan again. |

## Security notes

* AI Security stores the keys encrypted when you click **Connect** and never shows them again. The source shows only whether a credential is set and which settings are missing.
* AI Security sends the keys only to api.anthropic.com.
* To revoke access, delete the keys in the Claude Console. **Disconnect** on the source removes them from 1Secure.
