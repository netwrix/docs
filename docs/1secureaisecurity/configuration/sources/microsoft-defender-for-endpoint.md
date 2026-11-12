---
title: "Microsoft Defender for Endpoint"
description: "Connect Microsoft Defender for Endpoint so AI Security can read AI tools installed or run on onboarded machines and the AI services they call."
sidebar_position: 16
---

# Microsoft Defender for Endpoint

Connect Microsoft Defender for Endpoint so AI Security can read the software inventory Defender keeps for your onboarded machines, and the process starts of AI tools and the requests for AI services its sensor records. It's a source of its own on the **Sources** page, and it reads with the app registration of your Microsoft Entra ID source rather than asking for a credential of its own. You grant that app registration the Microsoft Graph permission `ThreatHunting.Read.All` in Microsoft Entra, and add the source in 1Secure.

## Before you start

* Connect Microsoft Entra ID first, or at least create its app registration. You need its three values. See [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md).
* Have a Global Administrator or Privileged Role Administrator grant the admin consent.
* Sign in to the Microsoft Entra admin center at entra.microsoft.com.

If Microsoft Entra ID was connected with **Sign in with Microsoft**, there's nothing to create and nothing more to grant. Every read of this source runs under `ThreatHunting.Read.All`, which that first sign-in already grants, so **Finish your Microsoft setup** has no Defender for Endpoint row. The optional account read is the one exception: you grant its two WindowsDefenderATP permissions on the app registration, as [Turn on the account read](#turn-on-the-account-read) describes. The steps that follow are for your own app registration.

## Create the credential in Microsoft Entra

1. Create the app registration and its client secret as steps 1 to 8 of the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) page describe, or reuse the one you have.
2. On the app, open **API permissions**, and click **Add a permission**.
3. Select **Microsoft Graph**.
4. Select **Application permissions**, and add `ThreatHunting.Read.All`. This is the one permission the source needs.
5. Click **Grant admin consent for** your tenant, then click **Yes**.

The permission row's status turns to "Granted".

You enter the three values on the Microsoft Entra ID source, not on this one.

| Microsoft calls it | Field in 1Secure |
|--------------------|------------------|
| Directory (tenant) ID | **Directory (tenant) ID** |
| Application (client) ID | **Application (client) ID** |
| Client secret, the Value column | **Client secret value** |

## Connect the source

Defender for Endpoint has a card of its own, with no fields to fill in. It reads with the app registration of your Microsoft Entra ID source.

1. In AI Security, select **Sources**.
2. If Microsoft Entra ID isn't connected yet, connect it with the three values, as [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) describes.
3. In **Search platforms**, enter "Microsoft Defender for Endpoint".
4. In the Microsoft Defender for Endpoint row, click **Connect**. The **Connect Microsoft Defender for Endpoint** dialog opens, and says "Uses the app registration of your Microsoft Entra ID source. Nothing to enter."
5. If your organization has more than one Microsoft Entra ID source, select the one to read with in **Connect using**.
6. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
7. Click **Done**.
8. Select the Microsoft Defender for Endpoint row, and click **Scan now**.

The test runs the smallest advanced hunting query, one machine. A registration without `ThreatHunting.Read.All` fails the test. A tenant without Defender for Endpoint reads "Not set up". A throttled or failing Microsoft Graph only warns.

A scan of the Defender for Endpoint source is a scan of its Microsoft Entra ID source, and a scan of that source reads Defender for Endpoint as long as this source is enabled.

:::info
A tenancy whose Microsoft Entra ID source came before the Defender for Endpoint source has one, enabled as its Entra ID source is, so nothing it read stops being read.
:::

| Line | What it shows |
|------|---------------|
| Credential | "The Microsoft Entra ID app", with what that app needs behind the info icon. |
| Credential, with no Microsoft Entra ID source connected | "Microsoft Entra ID not connected", and the **Sources** table says "Needs attention: connect Microsoft Entra ID first". |
| Last test, in a tenant without Defender for Endpoint | "Not set up", with "Defender for Endpoint isn't licensed or onboarded. Onboard your devices, or leave this source disabled." If the registration doesn't hold `ThreatHunting.Read.All`, the test can't tell a missing license from a missing grant and says "Defender refused the read. Defender for Endpoint isn't licensed or onboarded, or ThreatHunting.Read.All is missing." |
| Last scanned | "Succeeded", with how many machines' tools it read. |
| Last scanned, if a read was refused | "Succeeded" on the Defender for Endpoint source, with the refused read among the skipped items and the scan's message on what to grant. The Microsoft Entra ID source's own scan still succeeds. "Partly scanned" shows only if the Defender for Endpoint read stopped short: it stopped with an error, the scan ran out of time before Defender for Endpoint was read, Microsoft slowed the machine or software query down, or the machine or software list was cut at the limit of 100,000 rows. |
| Shadow AI | One row per AI product found installed or seen running, with its machines and people, which the **Overview** counts as AI products in use, apart from the agents. |
| Coverage | Microsoft Defender for Endpoint is connected while its source is enabled, so the Shadow AI **Techniques** tab lists the technique it feeds as connected, and the line saying AI tools on devices aren't visible doesn't show. |

:::warning
Disconnecting the Defender for Endpoint source deletes the Shadow AI rows it found, in the same step, as disconnecting any source does. Disconnecting Microsoft Entra ID while the Defender for Endpoint source stays connected keeps them. If you turn the source off instead, the next scan of the Entra ID source doesn't read Defender for Endpoint, and clears the Shadow AI rows it found with the rest of that scan's removed records.
:::

## What this connector reads

It's an input, not an inventory of agents. It adds evidence where an AI tool is installed or runs, and matches it to the people, identities, and agents AI Security already holds. The agents themselves come from the runtime sources, such as OpenShell, Kubernetes, and Docker, and from the platforms that host them. There are two exceptions. AI Security reads the agents that Defender itself lists in its agent inventory as agents, which is how Copilot Studio, declarative, and Agent Builder agents are read on a tenant without a Microsoft Agent 365 license. And a tool that only ever ran under a machine account is an agent, as [Agent or AI product](#agent-or-ai-product) describes.

* The machines Defender for Endpoint holds: name, operating system, onboarding state, when each was last seen, and its Entra device ID.
* The software titles Defender lists, matched against a catalog of AI tools, such as Claude desktop, Claude Code, ChatGPT desktop, Codex, Cursor, GitHub Copilot, Ollama, and LM Studio. AI Security reads a title that isn't on the list no further than its name.
* For each matched title, the machines it's installed on. AI Security drops a title that Defender lists on no machine.
* For each of those machines, the accounts that signed in to it: account name and domain, how they signed in, and when they were first and last seen. AI Security leaves out network-only sign-ins, such as a file share read, and machine accounts. Defender's sign-in data doesn't say whether an account is a domain admin, so AI Security reads none as one.
* The process starts of the listed tools' program files, such as claude, claude.exe, codex, and Cursor.exe, on every onboarded machine, regardless of whether a title matched there. Defender counts them, so AI Security reads no event one by one. The reads cover seven days by default, the same default as the CrowdStrike Falcon searches. If a query answers 100,000 rows, the most Microsoft Graph advanced hunting answers, AI Security keeps those rows and the source says the starts were cut short.
* For each run, the program of its latest start: its full path, its whole command line, and its SHA-256 hash. A command line can carry what someone entered on it, such as a token among the arguments. AI Security keeps it on the activity record, cut to 2,000 characters, and never logs it.
* The connections that machines made to an AI service's API host, from the same list of hosts that the CrowdStrike Falcon DNS search reads, such as api.anthropic.com and api.openai.com. AI Security reads, per machine, host, program, and account, the first and last time, and the program's full path, command line, and SHA-256 hash. Each is the same request record that Falcon's DNS read makes: on the tool seen on that machine that the program can be, else on one row per AI service. That row raises the "AI service reached from a machine with no known AI tool for it" issue for the machines where no tool that calls the service was found installed or seen starting. If more machines asked for the service than the issue names, it says, for example, "5 of the 7 machines that asked for api.anthropic.com have no known AI tool for it". Its fix is an advanced hunting search of `DeviceNetworkEvents` in the Microsoft Defender portal. An account that is the machine itself names no one.
* The agents that Defender lists in its agent inventory, each agent's latest record, leaving out the deleted ones. Defender lists agents built in Copilot Studio, Microsoft Foundry, and Microsoft 365, agents on connected platforms, and local agents, when you turn on security for AI agents in the Defender portal. AI Security reads each agent's ID, name, platform, description, the identifier its own platform gave it, its Entra agent ID, its publish and lifecycle status, availability, owners, who it's shared with, how its tools authenticate, its permissions, its declared data sources, tools, and Model Context Protocol (MCP) servers, its triggers, its model, and the catalog entry of a Microsoft 365 app. Microsoft documents the inventory at https://learn.microsoft.com/en-us/defender-xdr/security-for-ai/ai-agent-inventory.

### What it produces

* One Shadow AI row per AI product for the tenant, never one per install, and an AI product rather than an agent unless [Agent or AI product](#agent-or-ai-product) makes it one. Claude Code on a thousand machines is one row that reads a thousand machines and the people who use them. The row states the machines it's on, the people who sign in there, the endpoint products that saw it and, where the process starts or CrowdStrike Falcon's events say, when it was first and last seen used and the AI API hosts its machines asked for.
  * AI Security matches a person to the directory person whose on-premises account name, or whose user principal name before the at sign, is the account name Defender states. It needs exactly one match, or the person stays named by the account alone.
  * The row waits in the Shadow AI queue with **Confirm** and **Dismiss**, beside the directory's applications.
  * If the product's vendor organization is connected (Anthropic, OpenAI, or GitHub), AI Security places its members under it by membership, not by key, and a row whose people are all members leaves the queue.
* One activity record per machine, person, and tool that started, with how many times and the first and last time in the window. The person is the account as Defender names it, `DOMAIN\name`, or the name alone if no domain is stated. On Linux the domain is often the machine's own name, which names no domain. A start by the machine itself, such as SYSTEM or root, names no person and is a headless run. AI Security leaves out a start that the Defender sensor made itself, because it isn't use. Each record goes on the tool's row. If the inventory found the tool as well, it's the same row, with the machines of both and both reads named. On a machine where a person's start named who ran the tool, those accounts are its people in place of everyone signed in there. A machine that only the inventory saw, or where only the machine itself started the tool, keeps its sign-ins, and the row still records the headless run. The same rule joins Falcon's starts. This is how AI Security finds a tool that the inventory can't list, such as Claude Code installed by its own installer on Linux. The next scan updates the same record with its new count.
* Each person on a tool's row says how they're known: "started", an account Defender or Falcon saw start the tool on a machine, or "signed in", known only from a machine's sign-ins, which says the person uses the machine, not that they ran the tool. A person who did both is "started".
* If another source already holds the same tool for one of the same people, such as a Claude Code container on a Docker host that the same person owns, AI Security folds the Defender row into that agent. The agent keeps its own owners, grants, and reach, and gains the machines and people as evidence. If two or more discovered agents match, AI Security chooses none: the Defender row stays a Shadow AI row and the scan says so.
* If CrowdStrike Falcon also reports the product, the two rows are one, kept on this source and naming both products as what saw it. A decision recorded on the row in the Shadow AI queue stays with it.
* AI Security folds each agent that Defender lists and another source already holds into that agent, matched on its ID, the ID its own platform gave it, or the Entra agent ID the agent runs as, else on its name among the agents of the platform it names: Copilot Studio, Foundry, Microsoft 365, or SharePoint. It needs exactly one match, or no fold. The agent keeps what its own source read and gains what Defender states about it, its declared data sources and MCP servers as what the agent connects to, and its triggers if its own source stated none: an agent with an event trigger, such as a new email, reads as running on its own. Each agent that no other source holds, such as a declarative agent on a tenant without an Agent 365 license, is an agent row on this source, naming the platform Defender stated.
* AI Security reads a local agent as a tool installed on a computer, never as an agent of its own. Defender lists an AI tool installed on a computer, such as Claude Code, Cursor, OpenClaw, or Ollama Desktop, as a local agent, once for each computer and account. Each install adds its computer to the tool's machines and its account to the tool's people, on the same Shadow AI row. A tool that Defender lists only as a local agent gets a row of its own, which says it was found installed and is first seen when Defender recorded its earliest install. An install under a machine account, such as SYSTEM or root, names nobody and is a headless run.
* Defender names the apps of the Microsoft 365 catalog with the platform "Other". AI Security reads an app that holds a declarative agent, a bot, or a custom engine agent as an agent of Microsoft 365. It leaves out an app with only tabs or message extensions, because it isn't an agent. AI Security reads only an app that the tenant acquired or a package it uploaded, and counts and leaves out a store listing it hasn't acquired.
* A machine running the NVIDIA OpenShell gateway gets one row of its own, "OpenShell runtime on" the machine's name, which says where agents run rather than counting as an agent, and links to the sandboxes of a connected OpenShell source whose gateway address names the same machine.
* AI Security writes the rows under the Microsoft Entra ID source's records, because it reads them with its app. Its own source, not those rows, says whether Defender for Endpoint is connected.

### Agent or AI product

An endpoint row is an agent only if the tool runs as an agentic runtime. That means a container, a pod, or a sandbox, a headless or service account run, an MCP configuration naming tools, or a long-running process with no signed-in user. Everything else a person runs interactively, such as Claude Code, Codex, Cursor, Ollama, or a browser calling an AI API, is an AI product. A software inventory sees none of the runtime cases on its own. The process starts see one: a tool whose starts named only machine accounts, never a person, which stays an agent. The sources for the other runtimes read them, and the fold described earlier joins Defender's evidence to them.

### How sure

Each AI product row says how sure the endpoint products are that it's AI, in three tiers.

* **Certain:** a cataloged program was seen installed or started.
* **AI service used:** an AI API name was asked for, and every program that asked is named and is a known browser or a cataloged tool.
* **Needs a look:** an AI API name was asked for by a program nobody knows, or by no named program.

A "needs a look" row is in the Shadow AI queue with **Confirm** and **Dismiss** like any other, and a **Dismiss** teaches the tenant's catalog. The scan doesn't ask again about each program that asked, unless it's a shell, a script host, or a command-line client such as powershell.exe or curl.exe, which runs whatever it's told and so is never taught. If the row names such a program, or no program, the scan doesn't ask again about its domains. What a **Dismiss** taught is listed under **Configuration** with an undo. Undoing the last thing a **Dismiss** taught also restores that dismissal, so the next scan puts the row back in the queue. Defender's software inventory and its process starts name a program and no AI API name, so the rows they make are "certain". Its requests for AI services name an AI API host and the program that asked, so a row made from them takes its tier from that program, as a row made from Falcon's DNS requests does.

Defender lists what an installer registers with the operating system. A tool run as a single downloaded binary, installed as a global npm package, or run from a source checkout has no inventory entry. Its starts show it where it ran in the window under one of the listed program file names, so this input can say a tool is installed or ran and never that a tool is absent. If an earlier scan's inventory read listed a tool on a machine and a later scan's read no longer lists it there, **Seen on** in the Shadow AI drawer shows that machine as "Removed" with the date of that scan. The inventory entry is gone, which isn't proof that the tool is.

### What it never touches

* It never writes. Only if the account read described later is on does it call the Defender for Endpoint API, to run the script and read its result.
* It never calls a machine action or live response unless the account read is on, and never an alert.
* It copies no file off any machine, and reads no file on one unless the account read is on. In that case, the script reads each tool's sign-in record on the machine and prints only a domain and an organization identifier.
* From process events it asks only for the starts of the listed program files, the starts whose command line carries a listed piece, and the starts of node whose command line carries the link for Gemini CLI or OpenClaw. It keeps the whole command line of the latest start beside the count.
* It reads the name of every software title once, to match it, and keeps nothing about a title that isn't an AI tool.

## Read which account each AI tool signed in with

**Collect the account each AI tool signed in with** is an option on the Defender for Endpoint source, off until an administrator turns it on. With it on, each scan reads which account Claude Code and Codex signed in with on the machines where either was found, installed, or started. It says on the product row how many machines signed in to your organization's own vendor organization, to another organization, with a personal account, or with nothing the read could tell.

**What it reads, and what it never reads.** On each machine a script reads, for every profile under the users folder, Claude Code's `.claude.json` and Codex's `.codex/auth.json`. It prints one line per tool and profile with two values: the domain of the signed-in email, the part after the at sign, and the organization identifier the tool recorded. It never prints the part before the at sign, the address, a name, a profile name, a path, a token, a key, or the file. The file never leaves the machine. AI Security keeps no domain at all. It keeps, per machine, the organization identifier and whether the domain was a consumer mail domain such as gmail.com, counts them, and drops both after the counts are made.

**How it reads.** AI Security runs one live response action per machine from your live response library, with a comment naming AI Security and the scan. It reads only machines that Defender lists as active. A scan reads at most 10 machines, and each day's scans move on to the next 10, so a large estate is read in turn. Every read is in the Defender portal's Action center, under the app registration's name.

**The outcomes.** Each machine read is counted under each outcome its profiles showed:

| Outcome | When |
|---------|------|
| Signed in to your organization | The tool's organization identifier is the Anthropic organization your Anthropic source connected. AI Security compares only Claude Code, because the OpenAI source reads a platform organization, which isn't the ChatGPT workspace Codex records. |
| Personal account | The domain is a consumer mail domain. |
| Another organization | The tool names an organization, and the one your vendor source connected isn't it. |
| Unknown | Anything else: no sign-in, an API key or cloud provider run, or no connected organization to compare with. |

AI Security keeps the counts on the product row. **Per device detail** is a second switch under the first. With it on, the row also lists each machine read and its outcome, never a domain.

**The statement you confirm.** Turning either switch on opens a statement of what is read, what is never read or kept, that each read is a machine action Defender records, and that telling the people who use the machines is your organization's responsibility. Nothing is turned on until you confirm it. The card shows who confirmed it and when. Turning a switch off asks nothing.

### Turn on the account read

1. On the app registration, open **API permissions**, click **Add a permission**, open **APIs my organization uses**, search for WindowsDefenderATP, and select it.
2. Select **Application permissions**, and add `Machine.LiveResponse` and `Machine.ReadWrite.All`.
3. Click **Grant admin consent for** your tenant. [Permissions](#permissions) says why each is needed.
4. In the Microsoft Defender portal, select **Settings > Endpoints > Advanced features**.
5. Turn on **Live response**, and **Live response for servers** if the machines include servers.
6. Turn on **Automated investigation**, and give the machines' device group an automation level.
7. Turn on **Live response unsigned script execution** unless you sign the PowerShell script. Defender checks only PowerShell for a signature. It never checks the Bash script.
8. Read the two scripts before you upload them. Each states the rule it keeps at the top. {/* TODO: add a customer-accessible location or the text of the two scripts. */}
   * `netwrix-ai-account.ps1`, run on Windows and Windows Server.
   * `netwrix-ai-account.sh`, run on macOS and Linux.
9. On the **Library management** page in the Defender portal, upload the two scripts to the live response library once, by these names. AI Security never uploads them.
10. On the Defender for Endpoint source in 1Secure, turn on **Collect the account each AI tool signed in with**. The statement opens.
11. Click **Confirm**.

With the option on, **Test** also checks the roles of the Defender token and runs nothing on a machine. It fails with "The credential works, but access was denied. A permission is missing.", naming the grant still missing and the tenant switches. The test can't read the switches themselves before an action runs, so a scan names one that is off.

## Permissions

| Grant | What AI Security reads with it | Scan without it |
|-------|--------------------------------|-----------------|
| Microsoft Graph application permission `ThreatHunting.Read.All` | Every read but the account read, each by an advanced hunting query: the machines, the software titles and the machines each title is on, who signs in to each machine, the process starts of the listed tools, the requests for AI services, and the agents Defender lists. | AI Security doesn't read this input, and the rest of the Microsoft scan runs and succeeds. |

The tenant needs Microsoft Defender for Endpoint, or Microsoft Defender for Servers, with machines onboarded. A machine that isn't onboarded has no software inventory, and Defender doesn't list a device it only discovered on the network. The hunting tables keep 30 days, so Defender doesn't list a machine that hasn't reported for longer either. The agents query runs only where that read answers, and lists agents only where you turn on security for AI agents in the Microsoft Defender portal.

### Permissions for the account read

| Grant | Why |
|-------|-----|
| WindowsDefenderATP application permission `Machine.LiveResponse` | It runs the live response action. |
| WindowsDefenderATP application permission `Machine.ReadWrite.All` | It fetches the action's result, because Defender serves a live response result only under this permission, not under `Machine.LiveResponse`. It's a write grant held for that one read. AI Security writes nothing with it. |

## Troubleshooting

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "This source uses the Microsoft Entra ID app registration. Connect Microsoft Entra ID first." | No Microsoft Entra ID source is connected, or none points at what this source names. | Connect Microsoft Entra ID first, then test again. |
| "No credential is stored for this source.", "The credential is missing settings this platform needs." or "The stored credential can't be used. Enter it again." | The Microsoft Entra ID source's credential isn't set, is missing a value, or can't be opened. | Enter the credential again on the Microsoft Entra ID source. |
| "The credential works, but access was denied. A permission is missing." | Microsoft Graph refused the hunting query because `ThreatHunting.Read.All` is missing, or, with the account read on, the Defender token lacks `Machine.LiveResponse` or `Machine.ReadWrite.All`, and the message names which. | Grant `ThreatHunting.Read.All` as steps 2 to 5 of [Create the credential in Microsoft Entra](#create-the-credential-in-microsoft-entra) describe, and for the account read its two grants and tenant switches as [Turn on the account read](#turn-on-the-account-read) describes. |
| "The platform refused the credential. It is wrong, expired or revoked." | Microsoft refused the Entra ID app's credential. | Check the client secret on the Microsoft Entra ID source. |
| "The platform didn't answer, or said it is down or busy." | Microsoft Graph didn't answer the hunting query at all. A server error isn't a failure: the test warns and the next scan reads it again. | Check that AI Security can reach graph.microsoft.com, then test again. |

A scan can also end in "Not scanned because the Microsoft Entra ID source is disabled. Enable it and scan.": the Microsoft Entra ID source this one reads with is turned off, so the scan read nothing. Turn it on and scan again.

### If the source says what to grant

The Defender for Endpoint read runs to the end whatever Microsoft refuses it, so its source reads "Succeeded" and lists what it couldn't read as skipped items, with the message that follows under its last scan. Several lines carry the same message on what to grant: "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add the Microsoft Graph permission ThreatHunting.Read.All as an application permission and grant admin consent."

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with the installed AI tools among the skipped items | Microsoft Graph refused the machine or software query. The line gives the `ThreatHunting.Read.All` message. | Grant `ThreatHunting.Read.All` as steps 2 to 5 of [Create the credential in Microsoft Entra](#create-the-credential-in-microsoft-entra) describe. |
| "Succeeded", with who signs in among the skipped items | Microsoft Graph refused the sign-in query. The line gives the `ThreatHunting.Read.All` message. | Grant `ThreatHunting.Read.All` as steps 2 to 5 of [Create the credential in Microsoft Entra](#create-the-credential-in-microsoft-entra) describe. |
| "Succeeded", with who signs in past the cap among the skipped items | AI Security read who signs in for some machines only, because their sign-in events passed the 100,000 rows that Microsoft Graph advanced hunting answers to a query. The scan keeps the sign-ins it read, and doesn't read the rest of those machines' sign-ins this scan. | Nothing to do. |
| "Succeeded", with the process starts among the skipped items, naming a refusal | Microsoft Graph refused the advanced hunting query. The line gives the `ThreatHunting.Read.All` message. | Grant `ThreatHunting.Read.All` as steps 2 to 5 of [Create the credential in Microsoft Entra](#create-the-credential-in-microsoft-entra) describe. |
| "Succeeded", with the process starts among the skipped items, naming no refusal | Defender didn't answer the advanced hunting query, or turned it down for its size or its time, so the scan reports the starts as not read, never as none. | Scan again. |
| "Succeeded", with the process starts past the cap among the skipped items | The advanced hunting query answered 100,000 rows, the most Microsoft Graph answers, so AI Security doesn't read starts past them, and keeps the rows it read. | Nothing to do. |
| "Succeeded", with the requests for AI services among the skipped items, naming a refusal | Microsoft Graph refused the network hunting query. The line gives the `ThreatHunting.Read.All` message. | Grant `ThreatHunting.Read.All` as steps 2 to 5 of [Create the credential in Microsoft Entra](#create-the-credential-in-microsoft-entra) describe. |
| "Succeeded", with the requests for AI services among the skipped items, naming no refusal | Defender didn't answer the network hunting query, or turned it down, so the scan reports the requests as not read, never as none. | Scan again. |
| "Succeeded", with the requests for AI services past the cap among the skipped items | The network hunting query answered 100,000 rows, the most Microsoft Graph answers, so AI Security doesn't read requests past them, and keeps the rows it read. | Nothing to do. |
| "Succeeded", with the agents Defender lists among the skipped items, naming a refusal | Microsoft Graph refused the agents query. The line gives the `ThreatHunting.Read.All` message. | Grant `ThreatHunting.Read.All` as steps 2 to 5 of [Create the credential in Microsoft Entra](#create-the-credential-in-microsoft-entra) describe. |
| "Succeeded", with the agent inventory among the skipped items | Defender holds no agent inventory for this tenant. | Turn on security for AI agents in the Microsoft Defender portal, or leave it off. |
| "Succeeded", counting Microsoft 365 apps | Some Microsoft 365 apps that Defender lists hold only tabs or message extensions, or are store listings the tenant hasn't acquired, so AI Security doesn't read them as agents, and the warning counts them. | Nothing to do. |
| "Succeeded", with the agents Defender lists among the skipped items, naming no refusal | Microsoft Graph didn't answer the agents query, so the scan reports the agents as not read, never as none. | Scan again. |
| "Succeeded", with the Defender workspace among the skipped items | The tenant has no Defender for Endpoint workspace, and another read of the source answered. If the scan read nothing at all, the source reads "Not set up" with "This product isn't set up on the tenant." instead, and its test reads "Not set up" too. | Onboard machines to Defender for Endpoint, or leave this input off. |
| "Succeeded", with the Defender read among the skipped items | Microsoft Graph didn't answer the hunting query. | Check that AI Security can reach graph.microsoft.com, then scan again. |
| "Succeeded", with "One Microsoft read, because Microsoft did not answer." among the skipped items | Microsoft Graph failed or didn't answer the machine or software query. The scan keeps the rows the last scan found as they were. | Scan again later. |
| "Partly scanned", with "One Microsoft read, because Microsoft slowed the scanner down." | Microsoft slowed the machine or software query down. The scan keeps the rows the last scan found as they were. | Wait for the next scan, which reads it again. |
| "Partly scanned", with "More machines, past the most one scan lists." or "More software titles, past the most one scan lists." | The machine or software list answered 100,000 rows, the most one query answers, so the rest are unknown this scan, not absent. | Nothing to grant. |
| "Succeeded", with one title among the skipped items | AI Security couldn't read the machines one matched title is installed on, so it leaves that title out of this scan. | Scan again, and if it repeats, check the `ThreatHunting.Read.All` grant. |
| "Succeeded", naming a Defender row, with no fold | Two or more discovered agents are the same tool for the same people, or carry the name of an agent Defender lists, so the scan doesn't fold the Defender row into any of them. | Nothing to grant. The Defender row stays on its own. |
| "Succeeded", naming a Defender row, folded | The scan folded the Defender row into an agent that another source found, which is the same tool for the same person, or the same agent Defender lists. | Nothing to do. The agent carries the machines and people, or what Defender states about it. |
| "Succeeded", naming a sign-in account | A sign-in account matches no one directory person by account name, so it stays named by the account alone. | Check that the Entra ID source reads people, and that the person's on-premises account name or user principal name matches the account. |
| "Succeeded", with the account read among the skipped items, naming `Machine.LiveResponse` | Defender refused the live response action. The scan says: "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add the WindowsDefenderATP permission Machine.LiveResponse as an application permission and grant admin consent." | Grant `Machine.LiveResponse` as [Turn on the account read](#turn-on-the-account-read) describes. |
| "Succeeded", with the account read among the skipped items, naming `Machine.ReadWrite.All` | Defender refused the action's result. Defender requires `Machine.ReadWrite.All` to fetch a live response result. The scan says: "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add the WindowsDefenderATP permission Machine.ReadWrite.All as an application permission and grant admin consent." | Grant `Machine.ReadWrite.All` as [Turn on the account read](#turn-on-the-account-read) describes. |
| "Succeeded", with the account read among the skipped items, naming the tenant switches | Live response is turned off for the tenant, and the scan names the switches. | Turn on the tenant switches the account read needs. |
| "Succeeded", with the account read among the skipped items, naming throttling | Defender throttled the account read, which stopped there, and the scan read the rest. | Nothing to grant. The next scan asks again. |
| "Succeeded", with the machines not read among the skipped items | The scan didn't read some machines, because an action failed or timed out, its result couldn't be read, or they were past the 10 machines a scan reads, and it doesn't count them. Later days read those past the 10. | Check that both scripts are in the live response library under their names, and that no other live response session is open on the machines. |

:::warning
A refused read writes no Defender rows for that scan, so the scan clears a tool row that an earlier scan found, with the rest of the directory's records, until the read answers again. A machine or software query that Microsoft slowed down, failed on, or didn't answer is different: the scan keeps the rows the last scan found as they were until a scan reads them again.
:::

## Security notes

* The three values are the Entra ID source's, stored encrypted on that source and never shown again. The Defender for Endpoint source stores no credential of its own.
* A source connected with **Sign in with Microsoft** never receives the registration's secret.
* The secret goes only to Microsoft's token endpoint. Every read but the account read goes to graph.microsoft.com. AI Security gets the Defender token only with the account read on, and it goes only to api.securitycenter.microsoft.com.
* To revoke access, remove `ThreatHunting.Read.All` from the app registration, and the two WindowsDefenderATP permissions that the account read added if you granted them. To stop the account read alone, turn its switch off.
