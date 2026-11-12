---
title: "Mistral"
description: "Connect a Mistral workspace to AI Security with an API key so it can read the workspace's agents, versions, libraries, and conversations."
sidebar_position: 63
---

# Mistral

Connect Mistral so AI Security can read one Mistral workspace with an API key from that workspace. The key reads the workspace's agents, their versions, the libraries they use, and the conversations the key's own creator started. You create the key in Mistral Studio and enter it in 1Secure.

## Before you start

- Have a Mistral account with access to the workspace whose agents you want read, in a role that can create API keys there.
- Sign in to Mistral Studio at console.mistral.ai.
- Open a password manager. Studio shows the key once.

## Create the API key in Mistral Studio

1. Select the workspace your agents are in.
2. Open **API keys**, and click **Create new key**.
3. Name the key, for example "Netwrix 1Secure AI Security".
4. Copy the key.

:::warning
Mistral offers no read-only key, so the key itself can create and delete agents. AI Security never does.
:::

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Mistral".
3. In the Mistral row, click **Connect**. The **Connect Mistral** dialog opens.
4. In **API key**, paste the key.
5. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
6. Click **Done**.

Select the Mistral row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded". |
| Last scanned | "Never", then a result. |

## What this connector reads

With the workspace API key, AI Security reads the following:

- Every agent in the workspace: its name, description, model, tools, the agents it hands off to, its guardrails, its metadata, where it was made (Studio playground, API, or agent builder), whether it is deployed to chat, its version, and when it was made and last changed.
- Each agent's version history, one entry per version with its model.
- The libraries the key's creator made or was given: name, document count, size, who owns each, and how widely it is shared.
- The maker of each agent, as the ID Mistral records as its owner. A workspace key can't read the organization's members, so AI Security never matches the ID to a person or gives it a name. The agent's owner reads "Reported by the platform", with the ID beneath.
- Each conversation the key's own creator started on an agent, as an event: which agent, which version, and when. A workspace key lists only its own creator's conversations, never the workspace's, so these events are a sample of the agent's use, not all of it.

{/* TODO: confirm how far back the conversation read goes (the source gave 90 days). */}

Each tool on an agent appears as follows.

| Tool type | Shown as |
|-----------|----------|
| Code interpreter | Runs code. |
| Web search, premium web search | Searches the web. |
| Connector | A Model Context Protocol (MCP) server the agent uses, named by its connector ID, with the tools it includes, excludes, and asks to confirm. |
| Document library | A store the agent reads, one per library, with the library's name and document count. |
| Image generation | A tool the agent holds, listed with the agent's tools and not as a capability. |
| Function | The function's name on the agent. AI Security doesn't count it as something the agent can reach, because a function runs in your own code, not on Mistral. |
| A handoff | Calls another agent. |

### What the key can't read

A workspace API key can't read the workspace's API keys, the organization, or other workspaces. The scan therefore doesn't show who holds a key to the workspace, doesn't name the organization, and reads only the key's own workspace. Members, API keys, the audit log, and the other workspaces belong to Mistral's Admin API. It takes an Admin API key made in the Mistral Backoffice, and this connector doesn't use it. A second workspace is a second source with its own key.

### What it never touches

- It records an agent's instructions as their first sentence, which says what the agent is for, and otherwise as present and as a length. It never keeps the rest of the text.
- It never keeps a connector tool's authorization, which can hold a token.
- It records a conversation as its ID, agent, version, and times. It never reads the conversation's name, description, metadata, or messages.
- It never reads a library's description or documents.
- It never writes. Every call is a read.

## Permissions

| Key | What AI Security reads with it | Scan without it |
|-----|--------------------------------|-----------------|
| A workspace API key, created in Mistral Studio | That workspace's agents, versions, libraries, and the key's own conversations. | AI Security doesn't read Mistral. |

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | No key is stored. | Click **Edit**, and enter the key. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored key. | Click **Edit**, and enter the key again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Mistral refused the key: it is wrong, revoked, or expired. | Create a new key, and enter it under **Edit**. |
| "The credential works, but access was denied. A permission is missing." | Mistral accepted the key and refused the agent list. The test says: "create an API key in Mistral Studio under the workspace whose agents you want read. A key from another workspace reads that workspace's agents instead". | Create the key in the workspace your agents are in. |
| "The platform didn't answer, or said it is down or busy." | Mistral didn't answer. | Check that AI Security can reach api.mistral.ai. |
| "The platform didn't answer in time." | Mistral didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the key. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix support. |

A scan also notes, without failing, an agent whose version history Mistral refused or that was past the cap of 200 agents. The scan still lists that agent with its current version.

If Mistral slowed down a read of versions, conversations, or libraries, or didn't answer it, the scan lists it once among the skipped items. The scan keeps what earlier scans found for the workspace, rather than removing it as gone.

## Security notes

- AI Security stores the key encrypted when you click **Connect** and never shows it again. The source shows only whether a credential is set.
- AI Security sends the key only to api.mistral.ai.
- To revoke access, delete the key in Mistral Studio. **Disconnect** on the source removes it from 1Secure.
