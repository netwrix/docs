---
title: "Sources"
description: "Connect each platform your organization uses as a source so AI Security can read its agents, identities, and access, and look up what each test and scan code means."
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
4. Enter each setting. Secret settings are password fields. A platform's reference, such as "Instance address" or "Subscription ID", is either taken from a setting or read from the credential by the test. You never enter it in a field of its own.
5. Click **Connect**. The dialog saves the source, tests the connection, and shows the test's answer.
6. Click **Done**.

:::info
Where your AI Security deployment offers one-click Microsoft consent, the eight Microsoft dialogs start with **Sign in with Microsoft**. A Global Administrator or Privileged Role Administrator clicks it, accepts the permissions, and returns to the dialog's test answer with nothing pasted. **Use an app registration instead** opens the fields for an administrator who registers the application themselves.
:::

### Edit a source

AI Security never shows a stored value again. When you click **Edit** on a source, the fields start empty and say "Kept unless you enter a new one". A setting left empty keeps its stored value, and a setting you enter replaces that one value. **Clear credential** removes it. When you change where the credential is sent, such as an instance URL or a tenant ID, enter the secret again too: 1Secure never sends a saved secret to a new address.

## Test and scan codes

{/* TODO: confirm that customers see these code names on screen. If not, remove the Code column and keep the sentences. */}

A test's outcome reads "Succeeded", "Warning", or "Failed". It comes with a date and a sentence for the code. A scan's outcome for a source reads "Succeeded", "Partly scanned", "Failed", or "Not scanned". The test and the scan read "Not set up" where the tenant has nothing for the source to read. Each platform's page explains the codes that apply there.

| Code | What the screen shows | Outcome | What it means and what to do |
|------|-----------------------|---------|------------------------------|
| `credential_not_set` | "No credential is stored for this source." | Failed | Enter the credential. |
| `credential_incomplete` | "The credential is missing settings this platform needs." | Failed | A required setting is missing. The source's "Missing" line names it. Enter it. |
| `credential_cannot_be_opened` | "The stored credential can't be used. Enter it again." | Failed | Enter the credential again. |
| `probe_not_available` | "A live connection test isn't available for this platform. All required settings are entered." | "Settings checked, no live test" | The credential is complete. Run a scan to check access. |
| `probe_failed` | "The test failed on our side. Try again." | Failed | The test couldn't finish. Test again. |
| `probe_succeeded` | "The credential works." | Succeeded | The credential works and reaches what the scan reads first. |
| `read_partial` | "The credential works, but [platform] refused part of what the scan reads." Where the test names permissions, it adds "Grant the permissions listed below, then test again." | Warning | The scan reads the rest. Grant the named permissions, then test again. |
| `credential_refused` | "The platform refused the credential. It is wrong, expired or revoked." | Failed | Enter a valid credential. |
| `read_refused` | "The credential works, but access was denied. A permission is missing." | Failed | Grant the missing permission, then test again. |
| `read_unsupported` | "The platform returned a response the scanner doesn't support." | Failed | The platform answered in a form AI Security can't read. Use "Copy for support" and contact support. |
| `not_reachable` | "The platform didn't answer, or said it is down or busy." | Failed | Check that the platform is up and reachable, then test again. For the Microsoft sources, [Troubleshooting](/docs/1secureaisecurity/troubleshooting/index.md) lists the cases where a Microsoft server error gives a Warning instead. |
| `rate_limited` | "The platform slowed down the test. Wait a few minutes and test again." | Warning | Nothing in the configuration is wrong. Wait, then test again. |
| `probe_timed_out` | "The platform didn't answer in time." | Failed | Test again. |
| `service_unavailable` | "The service didn't answer. Try again shortly." | Failed | The source is connected with Sign in with Microsoft, and AI Security couldn't get a token. Nothing about the credential is known. Test again shortly. |
| `setting_refused` | "A setting is invalid. Addresses must start with https:// on the platform's domain." | Failed | Correct the address. It must use `https://` and the platform's own domain. |
| `platform_unknown` | "This platform isn't supported." | Failed | Contact support. |
| `probe_not_declared` | "No connection test exists for this platform. Run a scan to check access." | Failed | Run a scan to check the credential. |
| `credential_source_missing` | "This source uses the Microsoft Entra ID app registration. Connect Microsoft Entra ID first." | Failed | Connect the Microsoft Entra ID source. |
| `consent_outdated` | "Your tenant consented to an older permission list. Reconnect with Microsoft to grant the rest." | Warning | Click **Reconnect** and accept the permissions. |
| `permission_undeclared` | "The app registration doesn't ask for a permission this platform needs." | Warning | Signing in again grants nothing more. The test names the permissions: "The registration does not ask for [permissions]. Its owner adds them with admin consent." The app registration's owner adds them and grants admin consent. No **Reconnect** is offered. Where only optional permissions are missing, the test stays Succeeded and shows that sentence as a note. |
| `scan_signed_in` | "The last scan signed in with this credential and read what it reaches." | Succeeded | A scan signed in with the credential and read something before it failed. The scan counts as the last test and keeps the missing permissions an older test listed. |

After a scan, the source's "Last scanned" line shows one of these codes.

| Code | What the screen shows | Outcome | What it means and what to do |
|------|-----------------------|---------|------------------------------|
| `scan_succeeded` | "Scan complete." Where the scan skipped something, the counts and "[N] items skipped". | Succeeded | The scan read the source to the end. Anything it couldn't read, such as one missing permission, is listed as skipped. |
| `scan_activity_pending` | "Read. Activity still loading." | Succeeded | The scan read the source and is still reading its activity. |
| `scan_degraded` | "Part of [platform] wasn't read. If it repeats, use Copy for support." | Partly scanned | The scan read most of the source. Scan again. If it repeats, use **Copy for support**. |
| `scan_refused` | "[platform] refused the scan before anything was read." | Failed | Check the settings and the permissions, then scan again. |
| `scan_failed` | "Failed on our side. Try again." | Failed | Scan again. |
| `scan_timed_out` | "The scan took too long and was stopped. Nothing was saved from it." | Failed | Scan again. |
| `scan_interrupted` | "The scan was interrupted. Scan again." | Failed | Scan again. |
| `scan_interrupted_by_update` | "Interrupted by a service update, runs again at the next scan" | Failed | The scan runs again at the next scan. |
| `scan_cancelled` | "The scan was stopped before this source was scanned. No results were saved." | Not scanned | A person stopped the scan. Scan again. |
| `scan_not_started` | "The scanner couldn't start." | Failed | Scan again. |
| `platform_not_scanned` | "Scanning this platform isn't supported." | Failed | Contact support. |
| `credential_not_set`, `credential_incomplete`, `credential_cannot_be_opened` | The test code's sentence of the same name. | Failed | Fix the credential as the test code of the same name says. |
| `credential_refused_not_scanned` | "Not scanned because the credential was refused. Fix it and test again." | Not scanned | The scan left the source out because its last test failed on the credential. The next scan reads it after a test passes. |
| `credential_source_not_scanned` | "Not scanned because the Microsoft Entra ID source is disabled. Enable it and scan." | Not scanned | Enable the Microsoft Entra ID source this source reads with. |

Start a scan with **Scan now** on a source, or **Scan all** on the **Sources** screen.

## The platforms

Four reads have no row of their own and use another source's credential. The Purview audit log and Microsoft Security Copilot use Microsoft Entra ID. Azure Logic Apps and Azure Bot Service use Azure RBAC. Connect the source whose credential they use, as their pages describe.

Six platforms show "Coming soon" and offer no way to connect a new source. They are AWS Bedrock, Atlassian, ServiceNow, ServiceNow AI Control Tower, Salesforce, and Google Workspace. A source already connected on one of them still lists, edits, tests, and scans.

* [Every Microsoft source](/docs/1secureaisecurity/configuration/sources/connect-every-microsoft-source.md): one checklist of every grant, role, and test to connect all the Microsoft sources.
* [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md): the directory's applications, service principals, and agent identities.
* [Azure AI Foundry](/docs/1secureaisecurity/configuration/sources/azure-ai-foundry.md): AI resources, their identities, and the agents inside Foundry projects.
* [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md): the Azure role assignments that service principals and managed identities hold.
* [Azure Logic Apps](/docs/1secureaisecurity/configuration/sources/azure-logic-apps.md): the Logic Apps workflows that act as agents, with their models, connectors, and runs. It uses the Azure RBAC credential.
* [Azure Bot Service](/docs/1secureaisecurity/configuration/sources/azure-bot-service.md): the bots in each subscription and their channels, plus the identity each runs as. It uses the Azure RBAC credential.
* [Purview audit log](/docs/1secureaisecurity/configuration/sources/purview-audit-log.md): the agent and Copilot runs recorded in the Microsoft Purview audit log, on the Entra ID credential.
* [Microsoft Security Copilot](/docs/1secureaisecurity/configuration/sources/microsoft-security-copilot.md): the Microsoft-built Security Copilot agents that have an Entra agent identity, labeled on the Entra ID credential.
* [Microsoft Copilot Studio](/docs/1secureaisecurity/configuration/sources/microsoft-copilot-studio.md): Copilot Studio agents across the tenant, and optionally their knowledge sources.
* [Agent 365](/docs/1secureaisecurity/configuration/sources/agent-365.md): the organization's agent catalog, and which agents the organization registered.
* [Microsoft Defender for Endpoint](/docs/1secureaisecurity/configuration/sources/microsoft-defender-for-endpoint.md): the AI tools installed on onboarded machines and who signs in there.
* [CrowdStrike Falcon](/docs/1secureaisecurity/configuration/sources/crowdstrike-falcon.md): the AI tools Falcon Discover finds installed on each host, and who last signed in there.
* [Tanium](/docs/1secureaisecurity/configuration/sources/tanium.md): the AI tools Tanium finds on each endpoint and who last signed in there. With Threat Response, it also reads the AI tools run and the AI services called.
* [Netwrix Endpoint Protector](/docs/1secureaisecurity/configuration/sources/netwrix-endpoint-protector.md): the AI tools people sent data to, from its content-aware protection log, with the computers and people they were used from.
* [Power Platform](/docs/1secureaisecurity/configuration/sources/power-platform.md): Power Automate cloud flows in the environments you name or it discovers.
* [SharePoint Online](/docs/1secureaisecurity/configuration/sources/sharepoint-online.md): which applications can reach which sites, and how widely each site is shared.
* [SharePoint agents](/docs/1secureaisecurity/configuration/sources/sharepoint-agents.md): the .agent files in document libraries, and what each is grounded in.
* [Okta](/docs/1secureaisecurity/configuration/sources/okta.md): app integrations, their assignments and grants, and the API tokens in one Okta org.
* [ElevenLabs](/docs/1secureaisecurity/configuration/sources/elevenlabs.md): conversational agents in one workspace.
* [Mistral](/docs/1secureaisecurity/configuration/sources/mistral.md): the agents in one workspace, with their tools and versions. It also reads their libraries.
* [ChatGPT Enterprise](/docs/1secureaisecurity/configuration/sources/chatgpt-enterprise.md): the GPTs and projects in one workspace, plus Codex environments, and who owns them.
* [n8n](/docs/1secureaisecurity/configuration/sources/n8n.md): workflows, the credentials they bind, and their runs on one instance.
* [NVIDIA OpenShell](/docs/1secureaisecurity/configuration/sources/nvidia-openshell.md): the agents in the sandboxes on one gateway, with their credentials and policy.
* [Kubernetes](/docs/1secureaisecurity/configuration/sources/kubernetes.md): the workloads in one cluster and the service accounts they run as. It also reads their roles and network policies.
* [Docker](/docs/1secureaisecurity/configuration/sources/docker.md): the containers on one Docker host and their images. It also reads their credentials, mounts, and host access.
* [Atlassian](/docs/1secureaisecurity/configuration/sources/atlassian.md): the API tokens in one Atlassian organization, and optionally Confluence spaces.
* [Notion](/docs/1secureaisecurity/configuration/sources/notion.md): custom agents in one workspace.
* [ServiceNow](/docs/1secureaisecurity/configuration/sources/servicenow.md): the Now Assist AI agents and their tools on one instance.
* [ServiceNow AI Control Tower](/docs/1secureaisecurity/configuration/sources/servicenow-ai-control-tower.md): which agents your governance inventory on that instance registers.
* [Salesforce](/docs/1secureaisecurity/configuration/sources/salesforce.md): the Agentforce agents in one org and their actions, plus the users they run as.
* [Anthropic](/docs/1secureaisecurity/configuration/sources/anthropic.md): API keys in one organization, and the agents Anthropic hosts.
* [OpenAI](/docs/1secureaisecurity/configuration/sources/openai.md): projects with their keys and service accounts, and each project's agents.
* [AWS Bedrock](/docs/1secureaisecurity/configuration/sources/aws-bedrock.md): Bedrock and AgentCore agents and their knowledge bases, plus who can invoke models in one account.
* [GitHub](/docs/1secureaisecurity/configuration/sources/github.md): apps and tokens, deploy keys, Actions settings, and Copilot in one organization.
* [Google Workspace](/docs/1secureaisecurity/configuration/sources/google-workspace.md): third-party app access and delegation in one domain, and optionally its Google Cloud service accounts.
* [Gemini Enterprise](/docs/1secureaisecurity/configuration/sources/gemini-enterprise.md): the identities and Gemini Enterprise apps in the Google Cloud projects you list, with their Agent Engine deployments and data stores.
