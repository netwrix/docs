---
title: "Tanium"
description: "Connect Tanium to AI Security with an API token so it can find AI tools on managed endpoints and join them to people, identities, and agents."
sidebar_position: 72
---

# Tanium

Connect Tanium so AI Security can read the endpoints Tanium manages and the AI tools that Tanium finds on them. Where Threat Response is deployed, it also reads the AI tools that run and the AI services that endpoints call. AI Security shows where AI tools such as Claude Code, Codex, and Cursor are installed, on which endpoints, and who last signed in there. It joins that to the people, identities, and agents that AI Security already holds. You create a Tanium API token and enter it in AI Security.

This source gives the same evidence as CrowdStrike Falcon and Microsoft Defender for Endpoint, for organizations that run Tanium instead. The Shadow AI rows, the activity records, and the issues read Tanium as they read Falcon.

## Before you start

- A Tanium Cloud instance. The Beta covers Tanium Cloud. A Tanium Server reachable only inside your network can't be connected yet.
- The instance's API host, such as `https://example-api.cloud.tanium.com`.
- A Tanium API token whose user can read endpoints and sensors and ask questions. A token for a user with read rights on the endpoints' computer groups reads everything on this page.
- For process starts and DNS queries, Threat Response deployed to the endpoints with a recorder profile. Without it, the scan still reads the installed tools and reports that Threat Response isn't deployed.

## Connect Tanium

### Create the API token in Tanium

1. In the Tanium console, select **Administration > Permissions > API Tokens**.
2. Signed in as a user who can read endpoints and sensors and ask questions, click **New API Token**. The token carries that user's permissions.
3. Create the token.
4. Copy the token. Tanium shows it once, when you create it.

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Tanium".
3. In the Tanium row, click **Connect**. The **Connect Tanium** dialog opens.
4. In **API host**, enter the instance's API host, starting with `https://`. The API host is the console address with `-api` after the instance name. A trailing slash is dropped.
5. In **API token**, paste the token.
6. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
7. Click **Done**.

The API host must be a public https address. AI Security refuses a private or reserved address, a single-label name, a name in an internal zone, and plain http.

## What this connector reads

- The endpoints: name, domain, operating system, IP address, when each was last seen, and the account that Tanium states as signed in now or, where nobody is, the last to sign in.
- The AI tools installed on each endpoint, from the `Installed Applications` sensor and the `AI Coding Agents` sensor, read from the data Tanium has already collected and filtered on the Tanium side. AI Security reads only titles that match its list of AI tools, such as Claude, Claude Code, ChatGPT, Codex, Cursor, GitHub Copilot, Ollama, and LM Studio. It doesn't keep anything about other applications. `AI Coding Agents` is Tanium's own content for AI coding agents installed outside the package managers, such as by npm, a script, or a single binary.
- Tools that install in a folder under a person's home, such as Hermes Agent or OpenClaw, from a live `Folder Exists` question. A folder found means the tool is installed there, and the user whose home holds it is the person there.
- With Threat Response, over the last 7 days by default, the `Trace Executed Processes` and `Trace DNS Queries` questions. They show which listed tools ran and which AI API hosts, such as `api.anthropic.com` and `api.openai.com`, endpoints asked for. **Detection events window** under **Scan settings** on the source changes the window, from 1 to 90 days, for this source and CrowdStrike Falcon.

Tanium harvests `Installed Applications` hourly and `AI Coding Agents` every twelve hours, so a newly enrolled endpoint can be missing from Tanium's collected data until then. Where the instance holds more endpoints than the collected read returned, or a sensor's collected read came back empty, AI Security asks that sensor once as a live question and keeps the answers for the endpoints the collected read didn't return.

### What it produces

- One Shadow AI row per AI product for the instance, never one per endpoint and never an agent, with the endpoints it is on and the people signed in there. Where Falcon or Defender for Endpoint also reports the product, the rows are one.
- A person keyed to the directory by account name. Each row says its people come from the last signed in user, one account per endpoint. Tanium states the account in three shapes.
  - `DOMAIN\name` is a domain account, and AI Security keys it by the name.
  - `.\name`, `Local\name`, or the endpoint's own name before the backslash is a local account. AI Security names it as the endpoint's, such as `WS01\admin`, and never keys it to a directory person.
  - `WORKGROUP\name` is kept as stated and never keyed to a directory person either.
  - `AzureAD\Name` is a Microsoft Entra ID account. AI Security keeps it as stated, because the name after the backslash is the profile Windows made, which need not be the sign-in name, and keys it only where a directory person answers to it.
- One activity record per endpoint, person, and tool that ran, and one per endpoint and AI API host it asked for. Each record has how many times and the first and last time in the window.
- One Shadow AI row per AI service, such as "OpenAI API", for AI API hosts that endpoints asked for where no tool that calls them was seen. The issue is "AI service reached from a machine with no known AI tool for it", medium, on the endpoints where no tool that calls the service was found installed or starting.

### How titles are matched

Microsoft's Copilot isn't GitHub Copilot. AI Security doesn't read the Windows "Copilot" or "Microsoft 365 Copilot" app as GitHub Copilot.

For a tool whose name is an ordinary word elsewhere, such as Cursor, Codex, or Claude, AI Security matches only a title that is that name, optionally followed by a per-user mark or a version. For other tools, it matches a title that contains their name.

### What a sensor answers when it can't run

A sensor that can't run on an endpoint answers with a sentence in place of a reading. AI Security never reads that sentence as data. It counts them per sensor and reports the count once.

| What the endpoints answered | How the scan reports it |
|-----------------------------|-------------------------|
| "Ensure Threat Response tooling has been deployed", or Python failing to import `threat_response`. | Listed as skipped, with the count of endpoints per Trace sensor. |
| "TSE-Error", "Error locating", another missing module, or another tool not deployed. | Listed as skipped, with the count of endpoints per sensor. |
| "Not applicable", such as an operating system the sensor doesn't support. | Listed as skipped, with the count. |

### Limits

- Tanium states one account per endpoint, the one signed in now or the last. A shared endpoint names one person. An endpoint that states "Uninitialized - waiting for login", or a Linux login record name such as "wtmp", names nobody.
- `AI Coding Agents` doesn't list every install, such as a tool installed for one user. A tool that neither sensor lists appears only where `Trace Executed Processes` sees it start.
- `Installed Applications` lists what an installer registers with the operating system, and `AI Coding Agents` fills part of that gap. Still, this source can say a tool is installed and never that a tool is absent.
- `Trace Executed Processes` filters by the program file's path only, so it doesn't find a tool that runs as node or python, which Falcon finds from its command line.
- The window a Trace question reaches is what each endpoint's recorder still holds, so it reads less where the recorder keeps less.
- On a busy endpoint, a Trace question may not return every row.
- The two Trace questions are live, and so are the endpoint count, the `Folder Exists` questions and, where an endpoint isn't yet harvested, the inventory questions. Each appears in the Tanium console under **Interact** as a question asked by the token's user. On a large estate, each can take a while.

### What it never touches

- AI Security changes nothing on the instance: no action, package, deployment, or setting. Asking a question is a read, and Tanium records it as a question.
- It reads only the endpoints, the sensors described on this page, and the questions' answers.

## Troubleshoot the connection

### If the test fails

The test reads one endpoint count and asks no question.

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The API host or the token isn't stored. | Click **Edit**, and enter both. |
| "The platform refused the credential. It is wrong, expired or revoked." | Tanium refused the token. | Check that the token hasn't expired or been revoked, and that the API host is the instance's API host. |
| "The credential works, but access was denied. A permission is missing." | Tanium refused the endpoints read, or accepted the token and answered with an error that the detail quotes. | Check that the token hasn't expired, and give the token's user a role that can read endpoints and sensors. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The API host isn't https, or resolves to a private address. | Enter the instance's API host as Tanium shows it. |
| "That is the console address. Add -api after the instance name." | The address is the console, not the API host. | Click **Edit**, and enter the API host, for example `https://example-api.cloud.tanium.com`. |
| "The platform didn't answer, or said it is down or busy." | Tanium didn't answer at that address. | Check the address. Otherwise test again later. |

### If the source says what came up short

A scan that reads to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "The AI tools and AI services on the endpoints, because Threat Response is not on them." skipped | Threat Response isn't deployed on the endpoints counted. | Deploy Threat Response tooling and a recorder profile to them. |
| "Succeeded", with "What the Tanium sensor [sensor] reads on the endpoints, because it failed there." skipped. Where several sensors failed, the line says "a Tanium sensor" and the **Export** list names them. | A sensor failed on the endpoints counted. | Check the sensor's content and tools on those endpoints. |
| "Succeeded", with "What a Tanium sensor reads on endpoints whose operating system it does not support." skipped | A sensor doesn't run on some endpoints' operating system. | Nothing to do. |
| "Succeeded", with "The Tanium read of the sensor [sensor]." skipped | Tanium answered one read with an error, such as a sensor that isn't in the instance. | Import the sensor's content, or grant the token's user access to it. |
| "Succeeded", with "The rest of this source, because it stopped answering in time." beside "The Tanium read of the sensor [sensor]." skipped | Tanium failed or didn't answer a sensor read. The scan removes nothing that the last scan found. | Scan again. |
| "Partly scanned", with "The rest of one read, because the platform asked the scanner to slow down for longer than a scan allows." | Tanium slowed a sensor read down. The scan removes nothing that the last scan found. | Wait for the next scan, which reads the rest. |
| "Succeeded", with "The AI tool events on Tanium endpoints that did not answer in time." skipped | Not enough endpoints answered a live question in time. | Nothing to do. The next scan asks again. |
| "Partly scanned", and "Not scanned: The rest of a long list, because the scanner reached the most it reads in one scan." | A list stopped at the most a scan reads, and the scan keeps the rows it read. | Set **Run scans** to **Every day** under **Settings > Scan schedule**, so each scan reads a shorter span. |

## Security notes

- AI Security sends the token only to the API host you entered.
- Revoke access by deleting the API token in Tanium or rotating it.
