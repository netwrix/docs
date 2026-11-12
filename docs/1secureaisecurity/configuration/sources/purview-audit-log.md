---
title: "Purview audit log"
description: "Turn on the Purview audit read so AI Security can read Microsoft Copilot and agent runs from the Microsoft Purview unified audit log."
sidebar_position: 20
---

# Purview audit log

Turn on the Purview audit read so AI Security can read the runs of your Microsoft agents from the Microsoft Purview unified audit log: each time a person used Microsoft 365 Copilot, a Copilot Studio agent, a SharePoint agent, or an Agent 365 agent. It has no card of its own. It reads with the Microsoft Entra ID source's app registration, and runs wherever that source runs, so you connect Microsoft Entra ID, grant the permissions in this page, and this read comes with it.

This read finds no agents. It files each run on an agent another Microsoft read already listed, so it adds the runs on the **Activity** tab for Copilot Studio, SharePoint agents, and Agent 365. It reads no sensitivity labels: the Purview sensitivity labels on the sites agents reach come with SharePoint Online. See [Sensitivity labels](/docs/1secureaisecurity/configuration/sources/sharepoint-online.md#sensitivity-labels).

## Before you start

* Connect Microsoft Entra ID first, or at least create its app registration. See [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md).
* Check that Purview Audit is on for the tenant, in the Microsoft Purview portal under **Audit**.
* Have a Global Administrator or Privileged Role Administrator grant the admin consent.

## Turn on the Purview audit read

### Grant the permission in Microsoft Entra

1. Open the Entra ID source's app registration in the Microsoft Entra admin center.
2. Open **API permissions**, and click **Add a permission**.
3. Select **Microsoft Graph**, then **Application permissions**.
4. Add `AuditLogsQuery.Read.All`. Add `Sites.Read.All` too, unless the registration already holds it, so each site grant the audit log recorded names its site.
5. Click **Grant admin consent for** your tenant, then click **Yes**. The row's status turns to "Granted".

### Check the source in AI Security

1. In AI Security, select **Sources**.
2. Check that the Microsoft Entra ID row is connected. If it isn't, connect it as the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) page describes.
3. Run a scan.

:::info
The Entra ID source's test doesn't reach the audit log, so a missing permission or license shows only after a scan.
:::

Select the Microsoft Entra ID row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | As on the Microsoft Entra ID source. |
| Last test | As on the Microsoft Entra ID source. |
| Last scanned | On the Microsoft Entra ID source, "Succeeded", and runs appear on the **Activity** tab under the Microsoft agents they belong to. |

A search can take minutes. The scan waits for the searches for a limited time. A search still running then carries over to the next scan, which reads it before it makes a new one, so no span of time is skipped.

## What this connector reads

AI Security keeps its audit searches few, because Microsoft limits how many searches a tenant can make a day, and your own Purview and security information and event management (SIEM) searches share that allowance. Each search starts a little before the last scan ended, because the audit log can deliver a record late. A record read twice lands on the run it made the first time. The first scan searches the last 3 days, or the Activity window the organization chose under **Settings**. A later scan starts where the last one ended, and catches up on no more than the last 14 days, or the Activity window where the organization chose a longer one. No scan reaches back further than Audit (Standard) keeps a record.

* Records for five operations: `CopilotInteraction`, and the Agent 365 operations `AIInvokeAgent`, `AIExecuteTool`, `AIInferenceCall`, and `AIGuardrail`. The scan reads `CopilotInteraction` unless the organization turned off the source's switch **Read Microsoft 365 Copilot interactions**, which is on by default. With it off, the scan searches only the four Agent 365 operations, which shortens large scans, and loses the files each Copilot answer touched, the jailbreak flag, and the per-person runs of the agents used in Copilot.
* From each record, one run on the agent it names: who, by user principal name and directory object ID. Also when, from which IP address, in which host application, the agent's ID, name, and version, the plugins and models it used, and the files, sites, and items it touched, by ID, site address, file name, type, sensitivity label ID, and action.
* Whether a message in the interaction was flagged as a jailbreak, and whether a touched resource was flagged for cross-prompt injection. A guardrail record is a run Purview stopped, and reads as denied.
* The SharePoint and OneDrive shares `AnonymousLinkCreated`, `CompanyLinkCreated`, `AddedToSecureLink`, `SharingSet`, and `SharingInvitationCreated` made by an agent's application acting as itself, or on a record that names its agent. Each is one share on that agent: the operation, the time, the identity, the file's address and name, the site, and who can now open it, anyone, the company, or the person or group named. AI Security doesn't keep the link itself, and it doesn't read a share a person made.
* In a second search over the same days, `FileUploaded` and `FileModified` on `.agent` files, the files SharePoint agents are. Each is one change on that agent, saying who last saved its file: the person by user principal name and directory object ID, or an application acting as itself, by its application ID. It also records when, the file's name and site, and from which IP address. A save of the file by an application, such as SharePoint's own media processing, is no change to the agent, so the last save by a person stays the agent's last change. Microsoft logs no agent operation for a SharePoint agent, so the record says the file was saved and nothing of what changed inside it. A file whose name only carries the word agent is left out.
* The changes the log names as changes to an agent. From the Microsoft 365 admin center, `DeployedAgent`, an administrator publishing an agent to everyone or to some people, and `UpdatedAgent`, an administrator updating it. Each is one change on the agent the record names: the administrator by user principal name and directory object ID, when, the agent's ID and name, and whether it went to everyone.
* The Copilot Studio maker operations: `BotCreate`, `BotUpdateOperation-BotPublish`, `BotUpdateOperation-BotNameUpdate`, `BotUpdateOperation-BotAuthUpdate`, `BotComponentCreate`, `BotComponentUpdate`, `BotComponentDelete`, `AIPluginOperationCreate`, and `AIPluginOperationUpdate`. Each is one change on the Copilot Studio agent: the maker, when, and the component's ID and name. A publish is a version published. A component added or changed is a tool when it's an action, such as a Model Context Protocol (MCP) server, a knowledge source when knowledge or a file is added, and the agent's definition otherwise. AI Security keeps the names of the properties that changed, never the values. A model change isn't named apart from another change to the agent's instructions, so it reads as the definition saved.
* In a third search over the same days, Power Automate's records (`microsoftFlow`) and SharePoint's Sites.Selected grants (`sharePointAppPermissionOperation`). A flow created or edited is one change on that flow: the maker, when, and the connectors the flow listed. A permission change and a trial aren't read. Environment auditing must be on for Power Automate to log these.
* In the same third search, SharePoint's Sites.Selected grants and removals: one event per grant, role change, or removal, naming the application that received it, the role, the site, and who made it. It says what was granted and when, never what the application holds now.

AI Security drops and counts a record that names no agent another read listed, such as Security Copilot or Copilot in Fabric. Microsoft publishes no record layout for the four Agent 365 operations, so AI Security reads them on the field names the Copilot interaction records use, and doesn't read a field they name differently.

Microsoft bills interactions with third-party AI apps pay as you go, and AI Security doesn't read them here.

### What it never touches

* Prompts, responses, messages, and transcripts. AI Security keeps only the fields listed on this page and drops every other field, whatever Microsoft adds later.
* Display names of touched resources, because for a mail or a chat the name is a subject line. The scan names a file from its address alone.
* The prompt behind a request, whether blocked or not. It isn't in the audit record.
* Creating the audit search is the one write. It adds a search to the list Purview keeps and changes nothing else. Every other call is a read.

## Permissions

| Microsoft Graph application permission or license | What AI Security reads with it | Scan without it |
|---------------------------------------------------|--------------------------------|-----------------|
| `AuditLogsQuery.Read.All` | The audit search and its records. | No Microsoft agent run reaches the **Activity** tab, while the scan still reads agents and grants. |
| `Sites.Read.All` | The site list, so each site grant the audit log recorded names its site. | The scan lists the site grants without their sites, and warns that it didn't read the site list and names `Sites.Read.All`. |
| Microsoft Purview Audit (Standard), turned on for the tenant | The Copilot and agent records themselves. | The same as for the previous permission, and the scan says the license is missing. |
| Agent 365 on the tenant | The four Agent 365 operations. | The scan finds only Copilot interaction records. |

## Troubleshooting

### If the test fails

The Purview audit read has no source and no test of its own. The test that covers it is the Microsoft Entra ID source's test, because this read uses that source's app registration. That test reads the directory and doesn't reach the audit log, so it passes without `AuditLogsQuery.Read.All` and without Purview Audit.

If the Microsoft Entra ID source's test fails, follow "If the test fails" on the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md#if-the-test-fails) page. A missing permission or license for this read shows only after a scan, as the table in the next section describes.

### If the scan skips something or warns

A scan that read to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| Skipped reads "Microsoft agent and Copilot runs from the Purview audit log, because the app registration lacks AuditLogsQuery.Read.All." | Microsoft refused the audit search. The line says what to do: "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add AuditLogsQuery.Read.All as an application permission and grant admin consent, and turn on Purview Audit." | Grant the permission as the earlier steps describe, and check that Audit is on. |
| Skipped reads "Microsoft agent and Copilot runs from the Purview audit log, because Purview Audit is off or not licensed for this tenant." | Microsoft refused the search on the tenant's license, or because auditing is off. No permission fixes it. Where no search read a record, the scan doesn't count the audit log as read. The line says what to do: "Turn on Purview Audit in the Microsoft Purview portal, on a plan that includes Audit (Standard), such as Microsoft 365 E3 or E5." | Turn on Audit in the Microsoft Purview portal, on a plan that includes Audit (Standard). |
| Skipped reads "Microsoft agent runs, because this tenant has no Purview audit." | Microsoft answered that the tenant has no Purview audit to search. No permission fixes it. The line says: "This tenant has no Purview audit, so there is nothing to read here." | Nothing, unless you want these runs read: then add a plan that includes Audit (Standard) and turn on Audit in the Microsoft Purview portal. |
| Skipped reads "AI use events, because Purview auditing appears to be off in this tenant." | Every audit search over the days read succeeded with no records, the search for people's sign-ins too, while the directory logged activity in the same days. That is what a tenant with auditing off answers, so the scan doesn't report it as no activity. The line says what to do: "Turn on auditing in the Purview portal." | Turn on Audit in the Microsoft Purview portal, then scan again. |
| Skipped reads "Part of the Microsoft agent runs, because Microsoft slowed the audit search down." | Microsoft throttled the search. Where Microsoft asks for a short wait, the scan waits it out. The line says what to do: "Wait for the next scan, which searches the same days again." | Nothing. The next scan reads the same span. |
| Skipped reads "Microsoft agent runs, because this tenant's allowance of audit searches is used up for now." | Microsoft asked for a long wait, so the scan stopped searching at once, or the scans of this Microsoft tenant already made their searches for the day, so the search wasn't sent. The allowance is shared with your own Purview searches, and AI Security leaves the rest of it to you. No permission fixes it. The line says what to do: "Wait for the next scan, which searches the same days again." | Nothing. The next scan reads the same span. |
| Skipped reads "The rest of a long list, because the scanner reached the most it reads in one scan." | The search reached the most one scan reads. The scan keeps the records it read, and leaves the later ones to the next scan. The line says what to do: "Set Run scans to Every day under Settings, Scan schedule, so each scan reads a shorter span." | Scan every day, so each scan reads a shorter span. |
| Skipped reads "Microsoft agent runs, because the audit search failed or did not finish in time." | The search didn't finish while the scan waited, or Purview ended it. The next scan reads a search still running. The line says what to do: "Wait for the next scan, or scan more often so each search covers fewer days." | Scan more often, so each search covers less time. |
| Skipped reads "Microsoft agent runs, because Microsoft turned away the scanner's audit search." | Microsoft refused the search request. The line says what to do: "Send the support details to Netwrix Support, because the scanner may need an update." | Contact Netwrix Support with the support details. |

A scan that skips any of these, or stops short, leaves the next scan starting where this one started, so no span is skipped.

## Security notes

* The credential is the Microsoft Entra ID source's, held as the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) page describes.
* The token goes only to graph.microsoft.com.
* To stop this read, remove `AuditLogsQuery.Read.All` from the app registration. The other Microsoft reads continue to work.
