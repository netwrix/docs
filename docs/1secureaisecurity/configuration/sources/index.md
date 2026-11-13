---
title: "Sources"
description: "Connect each platform your organization uses as a source so AI Security can read its agents, identities, and access, and look up what each test and scan result means."
sidebar_position: 1
---

# Sources

Connect each platform your organization uses as a source, so AI Security can read its agents, identities, and access. If you use Microsoft 365, Azure, or Entra ID, start with [Connect every Microsoft source](/docs/1secureaisecurity/configuration/sources/connect-every-microsoft-source.md), then open the page for each other platform in [The platforms](#the-platforms).

Each platform's page says what the connector reads and what it never touches. It also says what to create in the vendor's console and what to enter in which field. It ends with what each test result means. Every permission, role, and scope a page names is one AI Security asks for on that platform.

## Connect a source

The dialog is the same for every platform.

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter the platform's name.
3. In the platform's row, click **Connect**. The **Connect `<platform>`** dialog opens, with one field per setting. There's no name to enter: the source is named for its platform. The vendor's own words label each field.
4. Enter each setting. Secret settings are password fields.

   Some platforms need an address or ID, such as "Instance address" or "Subscription ID", that you don't enter in a field of its own. AI Security takes it from another setting or reads it from the credential during the test.
5. Click **Connect**. The dialog saves the source, tests the connection, and shows the test's answer.
6. Click **Done**.

:::info
On the eight Microsoft platforms that share one app registration, the dialog starts with **Sign in with Microsoft** if your 1Secure offers one-click consent. They are Microsoft Entra ID, Azure AI Foundry, Azure RBAC, Microsoft Copilot Studio, Agent 365, Power Platform, SharePoint Online, and SharePoint agents. [Connect every Microsoft source](/docs/1secureaisecurity/configuration/sources/connect-every-microsoft-source.md) covers them together. A Global Administrator or Privileged Role Administrator clicks it, accepts the permissions, and returns to the dialog's test answer with nothing pasted. **Use an app registration instead** opens the fields for an administrator who registers the application themselves.
:::

### Edit a source

AI Security never shows a stored value again. When you click **Edit** on a source, the fields start empty and say "Kept unless you enter a new one". A setting left empty keeps its stored value, and a setting you enter replaces that one value. **Clear credential** removes it. When you change where the credential is sent, such as an instance URL or a tenant ID, enter the secret again too: 1Secure never sends a saved secret to a new address.

## Test and scan results

A test's outcome reads "Succeeded", "Warning", or "Failed". It comes with a date and a sentence that says why. A scan's outcome for a source reads "Succeeded", "Partly scanned", "Failed", or "Not scanned". The test and the scan read "Not set up" where the tenant has nothing for the source to read. Each platform's page explains the results that apply there.

Netwrix Support may ask for the code shown under **Technical details** of a failed test, or under **Show support details** in the scan drawer. Copy it from there.

| What the screen shows | Outcome | What it means and what to do |
|-----------------------|---------|------------------------------|
| "No credential is stored for this source." | Failed | Enter the credential. |
| "The credential is missing settings this platform needs." | Failed | A required setting is missing. The source's "Missing" line names it. Enter it. |
| "The stored credential can't be used. Enter it again." | Failed | Enter the credential again. |
| "A live connection test isn't available for this platform. All required settings are entered." | "Settings checked, no live test" | The credential is complete. Run a scan to check access. |
| "The test failed on our side. Try again." | Failed | The test couldn't finish. Test again. |
| "The credential works." | Succeeded | The credential works and reaches what the scan reads first. |
| "[platform] refused part of the read. Grant the permissions below and test again." where the test names the permissions, or "The credential works, but [platform] refused part of what the scan reads." where it doesn't | Warning | The scan reads the rest. Grant the named permissions, then test again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Failed | Enter a valid credential. |
| "The credential works, but access was denied. A permission is missing." | Failed | Grant the missing permission, then test again. |
| "The platform returned a response the scanner doesn't support." | Failed | The platform answered in a form AI Security can't read. Send the support details to Netwrix Support. |
| "The platform didn't answer, or said it is down or busy." | Failed | Check that the platform is up, then test again. For the Microsoft sources, [Troubleshooting](/docs/1secureaisecurity/troubleshooting/index.md) lists the cases where a Microsoft server error gives a Warning instead. |
| "The platform slowed down the test. Wait a few minutes and test again." | Warning | Nothing in the configuration is wrong. Wait, then test again. |
| "The platform didn't answer in time." | Failed | Test again. |
| "The service didn't answer. Try again shortly." | Failed | The source is connected with Sign in with Microsoft, and AI Security couldn't get a token. Nothing about the credential is known. Test again shortly. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | Failed | Correct the address. It must use `https://` and the platform's own domain. |
| "This platform isn't supported." | Failed | Contact Netwrix Support. |
| "No connection test exists for this platform. Run a scan to check access." | Failed | Run a scan to check the credential. |
| "This source uses the Microsoft Entra ID app registration. Connect Microsoft Entra ID first." | Failed | Connect the Microsoft Entra ID source. |
| "Your tenant consented to an older permission list. Reconnect with Microsoft to grant the rest." | Warning | Click **Reconnect** and accept the permissions. |
| "The app registration doesn't ask for a permission this platform needs." | Warning | Signing in again grants nothing more. The test names the permissions: "The registration does not ask for [permissions]. Its owner adds them with admin consent." The app registration's owner adds them and grants admin consent. No **Reconnect** is offered. Where only optional permissions are missing, the test stays Succeeded and shows that sentence as a note. |
| "The last scan signed in with this credential and read what it reaches." | Succeeded | A scan signed in with the credential and read something before it failed. The scan counts as the last test and keeps the missing permissions an older test listed. |

After a scan, the source's "Last scanned" line shows one of these results.

| What the screen shows | Outcome | What it means and what to do |
|-----------------------|---------|------------------------------|
| "Scan complete." Where the scan skipped something, the counts and "[N] items skipped". | Succeeded | The scan read the source to the end. It lists anything it couldn't read, such as one missing permission, as skipped. |
| "Read. Activity still loading." | Succeeded | The scan read the source and is still reading its activity. |
| "Part of [platform] wasn't read. If it repeats, send the support details to Netwrix." | Partly scanned | The scan read most of the source and stopped short. Scan again. If it repeats, click **Show support details** and send them to Netwrix Support. |
| "[platform] refused the scan before anything was read." | Failed | Check the settings and the permissions, then scan again. |
| "Failed on our side. Try again." | Failed | Scan again. |
| "The scan took too long and was stopped. Nothing was saved from it." | Failed | Scan again. |
| "The scan was interrupted. Scan again." | Failed | Scan again. |
| "Interrupted by a service update, runs again at the next scan" | Failed | The scan runs again at the next scan. |
| "The scan was stopped before this source was scanned. No results were saved." | Not scanned | A person stopped the scan. Scan again. |
| "The scanner couldn't start." | Failed | Scan again. |
| "Scanning this platform isn't supported." | Failed | Contact Netwrix Support. |
| The same sentence as the test, for a credential that isn't stored, is missing settings, or can't be used. | Failed | Fix the credential as the matching test result says. |
| "Not scanned because the credential was refused. Fix it and test again." | Not scanned | The scan left the source out because its last test failed on the credential. The next scan reads it after a test passes. |
| "Not scanned because the Microsoft Entra ID source is disabled. Enable it and scan." | Not scanned | Enable the Microsoft Entra ID source this source reads with. |
| "Not scanned because the last test found nothing to read." | Not scanned | The source's last test found nothing it can read, so the scan left it out. Fix what the test reported, then test again. |

Start a scan with **Scan now** on a source, or **Scan all** on the **Sources** screen.

## The platforms

Four reads have no source of their own and use another source's credential. Where one has a row on the **Sources** page, selecting it opens the source whose credential it uses. The Purview audit log and Microsoft Security Copilot use Microsoft Entra ID. Azure Logic Apps and Azure Bot Service use Azure RBAC. Connect the source whose credential they use, as their pages describe.

The Beta connects the platforms 1Secure can reach over the public internet. You can't connect a server, cluster, or instance reachable only inside your network yet.

To connect all the Microsoft sources at once, use [Connect every Microsoft source](/docs/1secureaisecurity/configuration/sources/connect-every-microsoft-source.md).

The **Sources** page groups the platforms under the same headings used here.

### Microsoft 365 agents

These sources read the agents and flows that run inside Microsoft 365 and its Copilot products.

* [Agent 365](/docs/1secureaisecurity/configuration/sources/agent-365.md): the organization's agent catalog, and which agents the organization registered.
* [Microsoft Copilot Studio](/docs/1secureaisecurity/configuration/sources/microsoft-copilot-studio.md): Copilot Studio agents across the tenant, and optionally their knowledge sources.
* [SharePoint agents](/docs/1secureaisecurity/configuration/sources/sharepoint-agents.md): the .agent files in document libraries, and what each is grounded in.
* [Power Platform](/docs/1secureaisecurity/configuration/sources/power-platform.md): Power Automate cloud flows in the environments you name or it discovers.
* [Microsoft Security Copilot](/docs/1secureaisecurity/configuration/sources/microsoft-security-copilot.md): the Microsoft-built Security Copilot agents that have an Entra agent identity, labeled on the Entra ID credential.

### Custom agents

These sources read the agents, bots, and apps your organization builds on AI model platforms, and the keys and identities they use.

* [Azure AI Foundry](/docs/1secureaisecurity/configuration/sources/azure-ai-foundry.md): AI resources, their identities, and the agents inside Foundry projects.
* [Gemini Enterprise](/docs/1secureaisecurity/configuration/sources/gemini-enterprise.md): the identities and Gemini Enterprise apps in the Google Cloud projects you list, with their Agent Engine deployments and data stores.
* [Anthropic](/docs/1secureaisecurity/configuration/sources/anthropic.md): API keys in one organization, and the agents Anthropic hosts.
* [OpenAI](/docs/1secureaisecurity/configuration/sources/openai.md): projects with their keys and service accounts, and each project's agents.
* [Mistral](/docs/1secureaisecurity/configuration/sources/mistral.md): the agents in one workspace, with their tools and versions. It also reads their libraries.
* [ChatGPT Enterprise](/docs/1secureaisecurity/configuration/sources/chatgpt-enterprise.md): the GPTs and projects in one workspace, plus Codex environments, and who owns them.
* [Azure Bot Service](/docs/1secureaisecurity/configuration/sources/azure-bot-service.md): the bots in each subscription and their channels, plus the identity each runs as. It uses the Azure RBAC credential.

### Automations

These sources read the workflows that automate work in your apps, and the agents built inside those apps.

* [n8n](/docs/1secureaisecurity/configuration/sources/n8n.md): workflows, the credentials they bind, and their runs on one instance reachable from the internet.
* [Notion](/docs/1secureaisecurity/configuration/sources/notion.md): custom agents in one workspace.
* [Azure Logic Apps](/docs/1secureaisecurity/configuration/sources/azure-logic-apps.md): the Logic Apps workflows that act as agents, with their models, connectors, and runs. It uses the Azure RBAC credential.

### Coding agents

This source reads the apps, tokens, deploy keys, and Copilot use on a code platform.

* [GitHub](/docs/1secureaisecurity/configuration/sources/github.md): apps and tokens, deploy keys, Actions settings, and Copilot in one organization.

### Voice agents

This source reads the conversational voice agents in your workspace.

* [ElevenLabs](/docs/1secureaisecurity/configuration/sources/elevenlabs.md): conversational agents in one workspace.

### Servers and workstations

These sources read the AI tools that people install, run, or send data to on devices, and the workloads that run in a cluster.

* [Microsoft Defender for Endpoint](/docs/1secureaisecurity/configuration/sources/microsoft-defender-for-endpoint.md): the AI tools installed on onboarded machines and who signs in there.
* [CrowdStrike Falcon](/docs/1secureaisecurity/configuration/sources/crowdstrike-falcon.md): the AI tools Falcon Discover finds installed on each host, and who last signed in there.
* [Tanium](/docs/1secureaisecurity/configuration/sources/tanium.md): the AI tools Tanium finds on each endpoint and who last signed in there. With Threat Response, it also reads the AI tools run and the AI services called.
* [Netwrix Endpoint Protector](/docs/1secureaisecurity/configuration/sources/netwrix-endpoint-protector.md): the AI tools people sent data to, from its content-aware protection log, with the computers and people they were used from.
* [Kubernetes](/docs/1secureaisecurity/configuration/sources/kubernetes.md): the workloads and service accounts in one cluster whose API is reachable from the internet. It also reads their roles and network policies.

### Sources that link agents to people and data

These sources read the directories, roles, app grants, and audit records that tie agents to people and data.

* [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md): the directory's applications, service principals, and agent identities.
* [Purview audit log](/docs/1secureaisecurity/configuration/sources/purview-audit-log.md): the agent and Copilot runs recorded in the Microsoft Purview audit log, on the Entra ID credential.
* [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md): the Azure role assignments that service principals and managed identities hold.
* [Okta](/docs/1secureaisecurity/configuration/sources/okta.md): app integrations, their assignments and grants, and the API tokens in one Okta org.
* [SharePoint Online](/docs/1secureaisecurity/configuration/sources/sharepoint-online.md): which applications can reach which sites, and how widely each site is shared.

### Coming soon

* AWS Bedrock
* NVIDIA OpenShell
* Docker
* Atlassian
* ServiceNow
* ServiceNow AI Control Tower
* Salesforce
* Google Workspace
