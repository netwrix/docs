---
title: "ChatGPT Enterprise"
description: "Connect a ChatGPT Enterprise workspace to AI Security with a Compliance API key to read its GPTs, projects, Codex environments, and owners."
sidebar_position: 43
---

# ChatGPT Enterprise

Connect ChatGPT Enterprise so AI Security can read one ChatGPT Enterprise workspace with that workspace's Compliance API key. The key reads the workspace's GPTs, projects, and Codex environments, and the users who own them. A workspace owner issues the key in the ChatGPT admin console, and you enter it in 1Secure with the workspace ID.

## Before you start

* Use a ChatGPT Enterprise or Edu workspace, and have a workspace owner who can issue a Compliance API key for it.
* Have the workspace ID at hand. A workspace owner finds it in the ChatGPT admin console under **Workspace settings**.
* Have a password manager open. The admin console shows the key once.

## Issue the Compliance API key

1. Sign in to ChatGPT as a workspace owner, and open the admin console.
2. Issue a Compliance API key for the workspace, and name it, for example "Netwrix 1Secure AI Security".
3. Copy the key.

:::warning
A key made on the OpenAI Platform (platform.openai.com) doesn't reach the Compliance API, even in the same company. The Compliance API answers it with "API key not authorized for enterprise logs".
:::

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "ChatGPT".
3. In the ChatGPT Enterprise row, click **Connect**. The **Connect ChatGPT Enterprise** dialog opens.
4. In **Compliance API key**, paste the key.
5. In **Workspace ID**, enter the ID of the workspace the key was issued for.
6. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
7. Click **Done**.

Select the ChatGPT Enterprise row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded". |
| Last scanned | "Never", then a result. |

A scan reads ChatGPT Enterprise only when you enter both settings.

## What this connector reads

With the Compliance API key:

* Every GPT in the workspace, as an agent: its name, description, owner, sharing, tools, how many knowledge files it holds, who wrote its latest configuration and when, and whether it has earlier configuration versions.
* Every project in the workspace, as an agent, read the same way. A project lists no tools.
* Every Codex environment in the workspace, as an agent: its name, who created it, its network access, the repositories it holds with the permissions the environment has on each, who in the workspace may start a task in it, and how many tasks have run in it. AI Security counts its environment variables and secrets and never reads them.
* Every user in the workspace, for their email, role, and status. The scan shows a user as the owner of what they own, with their role and status on the owner. If AI Security also reads the organization's directory, the user's email matches them to the directory user. The scan doesn't list a user who owns nothing.


How sharing reads:

| Sharing in ChatGPT | Shown as |
|--------------------|----------|
| A GPT or project set to invite only, with nobody invited | Shared with nobody. |
| A GPT or project set to invite only, with people invited | Shared with named people. |
| A GPT or project anyone in the workspace can open with its link | Shared with everyone in the workspace. |
| A GPT or project listed for the whole workspace | Shared with everyone in the workspace. |
| A Codex environment shared with the workspace | Shared with everyone in the workspace. |
| A private Codex environment, with nobody named | Shared with nobody. |
| A private Codex environment, with people named | Shared with named people. |
| Any other setting | Unknown. |

What each tool on a GPT becomes:

| Tool | Shown as |
|------|----------|
| Web browsing | Searches the web. |
| Code interpreter | Runs code. |
| A custom action | A tool the GPT holds. The scan doesn't show the service the action calls. |
| Canvas, image generation, and any other tool | A tool the GPT holds. |

How network access on a Codex environment reads:

* Off means the task's code reaches no host.
* On with no allow list, or with the preset that allows every host, means it reaches any host.
* On with an allow list means it reaches the hosts listed.
* Any other setting is unknown.

### What the connector never touches

* It records a GPT's or project's instructions as their first sentence, which says what it is for, and otherwise as present and as a length. It never keeps the rest of the text.
* It never keeps conversation starters, categories, knowledge file names, or download links. It counts knowledge files and never opens them.
* It never keeps a Codex environment's setup scripts, environment variable values, or secrets.
* It never reads conversations, memories, Codex tasks, or the conversation log files. They hold what the workspace's people wrote.
* It never writes. Every call is a read.

## Permissions

| Key | What AI Security reads with it | Scan without it |
|-----|--------------------------------|-----------------|
| A Compliance API key, issued by a workspace owner in the ChatGPT admin console | That workspace's users, GPTs, projects, and Codex environments. | AI Security doesn't read ChatGPT Enterprise. |

## If the test fails

The test lists the workspace's users with the key.

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The key or the workspace ID isn't stored. | Click **Edit**, and enter both. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored key. | Click **Edit**, and enter the key again. |
| "The credential works, but access was denied. A permission is missing." | The Compliance API refused the key. It isn't a Compliance API key, it was issued for another workspace, it was revoked, or the workspace ID is wrong. The test says: "the Compliance API key is issued by a workspace owner in the ChatGPT admin console for one workspace. A key made on the OpenAI Platform is refused, and so is a key for another workspace". | Check the workspace ID, or have a workspace owner issue a Compliance API key for this workspace, and enter it under **Edit**. |
| "The platform didn't answer, or said it is down or busy." | The Compliance API didn't answer. | Test again later. |
| "The platform didn't answer in time." | The Compliance API didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the key. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix Support. |

## If the scan reports a list it couldn't read

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned". If the Compliance API slows a list down or doesn't answer, the scan lists that list among the skipped items, keeps what earlier scans found for the workspace, and reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Failed", and "Not scanned: Anything from this ChatGPT Enterprise workspace, because its Compliance API key could not read the workspace's users." | The key couldn't read the workspace's users. It isn't a Compliance API key, it was issued for another workspace, or it was revoked. The source says: "To fix: Have a workspace owner issue a Compliance API key in the ChatGPT admin console, then save it with the workspace id in the source's settings." | Have a workspace owner issue a Compliance API key for this workspace, and enter it with the workspace ID. |
| "Succeeded", with "The users of this ChatGPT Enterprise workspace, because its Compliance API key could not read them." among the skipped items | The key passed the first user read and the Compliance API refused the full user list. AI Security still reads the GPTs, projects, and Codex environments, without each owner's role and status, and with each Codex environment's creator by ID alone. The scan says: "Issue the workspace's Compliance API key again in the ChatGPT admin console with access to users, then save it in the source's settings." | Issue the key again with access to users. |
| "Succeeded", with "The GPTs in this ChatGPT Enterprise workspace, because its Compliance API key could not read them." among the skipped items, or the same message for the projects or the Codex environments | The key read the users and the Compliance API refused that list. AI Security still reads the other lists. A workspace without Codex answers the Codex environment list this way. The scan says, for example: "Issue the workspace's Compliance API key again in the ChatGPT admin console with access to GPTs, then save it in the source's settings." | Issue the key again with access to that list. |
| "Partly scanned", and "Not scanned: The rest of a long list, because the scanner reached the most it reads in one scan." | The list had more pages than a scan reads. The scan shows what it read. The source says: "To fix: Set Run scans to Every day under Settings, Scan schedule, so each scan reads a shorter span." | The scan keeps what it read, and the rest of the list isn't read. Set **Run scans** to **Every day** as the message says, so each scan reads a shorter span. |

## Security notes

* AI Security stores the key encrypted when you click **Connect** and never shows it again. The source shows only whether a credential is set. The workspace ID isn't secret and appears on the source.
* AI Security sends the key only to api.chatgpt.com.
* To revoke access, delete the key in the ChatGPT admin console. **Disconnect** on the source removes it from 1Secure.
