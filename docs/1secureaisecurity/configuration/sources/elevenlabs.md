---
title: "ElevenLabs"
description: "Connect an ElevenLabs workspace to AI Security with a restricted API key to read its conversational agents, phone numbers, and call counts."
sidebar_position: 46
---

# ElevenLabs

Connect ElevenLabs so AI Security can read the conversational agents in one ElevenLabs workspace with a workspace API key. One key reads one workspace. You create the key in ElevenLabs and enter it in 1Secure.

## Before you start

* Have a workspace admin create the key.
* Sign in to ElevenLabs at elevenlabs.io.
* Have a password manager open. ElevenLabs shows the key once.

## Create the API key in ElevenLabs

1. Select **Developers** in the left sidebar, then the **API Keys** tab.
2. Click **Create API key**, and name it, for example "Netwrix 1Secure AI Security".
3. Keep **Restrict Key** on, which is the default.
4. Give the key read access to the agents and conversational AI resources and to workspace webhooks, and no write access. {/* TODO: confirm which restricted key scope covers agents. */}
5. Create the key, and copy it.

:::warning
A key created without restrictions has every permission the workspace has, including reading call transcripts, which AI Security never does.
:::

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "ElevenLabs".
3. In the ElevenLabs row, click **Connect**. The **Connect ElevenLabs** dialog opens.
4. In **API key**, paste the key.
5. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
6. Click **Done**.

There is no name to enter. The source is named ElevenLabs, and ElevenLabs publishes no workspace identifier, so two workspaces show as two sources of the same name.

Select the ElevenLabs row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", with the date of the test. |
| Last scanned | "Never", then "Succeeded", with a refused optional read, or one agent's detail refused while the agent list answered, listed as skipped. "Partly scanned" when a listing was cut at the page limit. |

The test reads the agent list with the key. A key with no Conversational AI scope can fail the test with "The credential works, but access was denied. A permission is missing." {/* TODO: confirm that a key with no Conversational AI scope fails the test this way. */}

## What this connector reads

* Every conversational agent: name, tags, model, tools, the IDs of its Model Context Protocol (MCP) servers, the names of its knowledge bases, whether callers must authenticate, voice recording and transcript retention settings, and its creator, by the email address ElevenLabs states for them. The scan doesn't name a creator that ElevenLabs states without an email address. An MCP server is known by ID only, so AI Security doesn't know the server's address.
* The phone numbers attached to agents, masked to the last four characters. AI Security stores the whole number nowhere, not on the agent, in an issue, or in an export.
* Where a call can be transferred, masked to the last four characters.
* How many calls each agent took, for how long, and when the last one was. If a scan reads fewer calls than the workspace holds, the next scan reads on from where it stopped.
* The workspace's stored secrets by name and type, and which agents and numbers use each one.
* Where post-call transcripts are sent, from the workspace's webhooks.
* The workspace's knowledge base listing. AI Security records knowledge only by name on the agents that use it.

{/* TODO: confirm how far back the call counts reach (the source gave 90 days). */}

### What the connector never touches

* It never retrieves a conversation. It counts and dates calls and never reads them.
* It keeps only the first sentence of each agent's system prompt, which says what the agent is for, and drops the rest of the prompt and the first message.
* It reads secrets by name and use, never by value.
* It masks phone numbers, transfer numbers, and addresses before it stores anything.
* It never writes. Every call is a read.

## Permissions

| Key access | What AI Security reads with it | Scan without it |
|------------|--------------------------------|-----------------|
| Read access to Conversational AI: agents, knowledge base, phone numbers, conversations | Agents and everything listed earlier. | AI Security reads nothing and the test fails. |
| Read access to conversations | Call counts per agent. | AI Security still reads the last call date from the agent list. |
| Read access to workspace secrets | Stored secrets by name. | AI Security doesn't read secrets. |
| Read access to the conversational settings | Whether transcripts are posted out of the workspace. | That setting is unknown. |
| Read access to workspace webhooks | Where post-call transcripts are sent. | The destination is unknown. |

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." | No key is stored. | Click **Edit**, and paste the key. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored key. | Click **Edit**, and paste the key again. |
| "The platform refused the credential. It is wrong, expired or revoked." | ElevenLabs refused the key: it is wrong, or deleted. | Create a new key, and paste it under **Edit**. |
| "The credential works, but access was denied. A permission is missing." | ElevenLabs accepted the key and refused the agent list. Under **Technical details**, the test says: "Create an ElevenLabs API key with read access to Conversational AI and to workspace webhooks, then save it in the source's settings." | Edit the key's restrictions, or create a new key with that access. |
| "The platform didn't answer, or said it is down or busy." | ElevenLabs didn't answer. | Check that AI Security can reach api.elevenlabs.io. |
| "The platform didn't answer in time." | ElevenLabs didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the key. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with a skipped item and what to do on its line, for example "Where ElevenLabs sends call transcripts after each call." followed by "Grant the ElevenLabs API key read access to workspace webhooks." | AI Security read agents and ElevenLabs refused an optional read. | Add the access the line names. The table under [Permissions](#permissions) lists each one. |
| "Succeeded", with "One ElevenLabs agent's configuration, though the agent is still listed." among the skipped items | The agent list answered and ElevenLabs refused one agent's detail. The scan still reports the agent, with its configuration unknown. A 404 means the agent was deleted during the scan and clears on the next scan. A 401 or 403 means the key's Conversational AI scope doesn't reach that agent. | Nothing for a 404. For a 401 or 403, check that the key's Conversational AI scope reaches the agent the detail names. |
| "Succeeded", with "The configuration of some ElevenLabs agents, which are still listed." among the skipped items | The workspace holds more agents than the 200 whose configuration a scan reads. The scan lists every agent. The scan says: "Raise Agents with full configuration under Scan settings on the source card." | Raise the limit, or accept that the scan lists the rest without their configuration. |
| "Succeeded", with "Activity after [moment], which the next scans read." among the skipped items | The scan read calls only up to that moment. | Nothing. The next scan reads on from there. |

## Security notes

* AI Security stores the key encrypted when you click **Connect** and never shows it again. The source shows only whether a key is set.
* AI Security sends the key only to api.elevenlabs.io.
* To revoke access, delete the key in ElevenLabs. **Disconnect** on the source removes it from 1Secure.
