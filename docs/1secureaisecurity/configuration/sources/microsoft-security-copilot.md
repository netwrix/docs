---
title: "Microsoft Security Copilot"
description: "Learn how AI Security labels the Entra agent identities that Microsoft Security Copilot agents run as, using the Microsoft Entra ID source."
sidebar_position: 18
---

# Microsoft Security Copilot

AI Security labels the agent identities that Microsoft Security Copilot agents run as. Microsoft Security Copilot isn't a separate source. It has no card of its own and no credential of its own, and AI Security reads it through the Microsoft Entra ID source. You connect Microsoft Entra ID, and this label comes with it.

## Before you start

* Connect Microsoft Entra ID, or at least create its app registration. See [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md).
* The label needs no further permission or license.

## Check the app registration in Microsoft Entra

There's nothing to create. The Microsoft Entra ID source's app registration, with the permissions that [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) lists, is the credential.

## Check the source in 1Secure

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Microsoft Entra ID".
3. Check that the Microsoft Entra ID row is connected. If it isn't, connect it as [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) describes.
4. Select the Microsoft Entra ID row, and click **Scan now**.

| Line | What it shows |
|------|---------------|
| Credential | As on the Microsoft Entra ID source. |
| Last test | As on the Microsoft Entra ID source. |
| Last scanned | As on the Microsoft Entra ID source. |

AI Security lists each labeled agent on the platform "Microsoft Security Copilot", as a "Security Copilot agent (Microsoft built)" published by Microsoft, tied to the Entra agent identity it is. It runs on a schedule or on an alert rather than in a conversation, so AI Security classes it as a workflow. It reads as running or switched off, depending on whether its agent identity is enabled.

## What this connector reads

AI Security labels an agent identity that Microsoft created for a Security Copilot agent as a Security Copilot agent. It uses what the Microsoft Entra ID read already lists, and it makes no other call.

* An agent identity is labeled a Security Copilot agent on either of two routes: its blueprint's application ID is one of Security Copilot's own application IDs, or its blueprint is a Microsoft-owned service principal whose display name contains "security copilot".
* Each labeled agent keeps its Entra agent identity's name, its blueprint's application ID and display name, the route that labeled it, and whether its agent identity is enabled.
* Security Copilot has no list API. The agents Microsoft builds for it, such as Phishing Triage, Conditional Access Optimization, Vulnerability Remediation, and DLP Alert Triage, leave one trace in the directory: the Entra agent identity an administrator can choose for one at setup. AI Security finds those agents from that trace.

Microsoft publishes neither the application IDs nor the display names of the Security Copilot blueprints, so the label rests on a mapping Microsoft doesn't publish, and every scan that labels an agent says so. Check a labeled agent against the Security Copilot portal if the label matters.

:::info
Agents set up on a user account, custom agents, and partner agents run as a person and leave no such trace, so the scan can't discover them. Wherever the directory shows Security Copilot at all, the scan says so rather than letting their absence read as none.
:::

The Purview audit log read files no run on a Security Copilot agent. It drops and counts a record that names Security Copilot. See [Purview audit log](/docs/1secureaisecurity/configuration/sources/purview-audit-log.md).

### What it never touches

* It makes no call of its own. It reads only what the Microsoft Entra ID source already read.
* It never writes, and it reaches nothing in Security Copilot itself.

## Permissions

| Microsoft Graph application permission | What AI Security reads with it | Scan without it |
|----------------------------------------|--------------------------------|-----------------|
| `Application.Read.All` | The service principal list, which holds the agent identities and their blueprints. | The Entra ID scan can't run, so nothing is labeled. |

## Troubleshooting

### If the test fails

Microsoft Security Copilot has no test of its own. The label rests on the Microsoft Entra ID read, so its test is the Microsoft Entra ID source's test, which reads one service principal and one delegated permission grant. If that test fails, the Entra ID scan can't run and nothing is labeled.

1. Fix what the Microsoft Entra ID test names, as the test table on [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md#if-the-test-fails) says.
2. Open the Microsoft Entra ID source, and in its drawer's menu click **Test**.

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with the scan naming the agent identities labeled Security Copilot agents | The scan labeled one or more agent identities as Security Copilot agents. The scan says the agent identities were "labeled Security Copilot agents on a mapping Microsoft does not publish: the label rests on the Security Copilot application ids and on a Microsoft owned blueprint whose display name contains 'security copilot'". | Nothing. Check a labeled agent against the Security Copilot portal if the label matters. |
| "Succeeded", with the scan naming the Security Copilot agents that aren't discoverable | The directory shows Security Copilot. The scan says: "Security Copilot agents set up on a user account, custom agents and partner agents run as a person and have no list API, so they are not discoverable; only Microsoft built agents given an Entra agent identity are shown". | Nothing. AI Security can't read those agents. |

## Security notes

* The credential is the Microsoft Entra ID source's, held as [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) describes.
* The label sends nothing anywhere. It applies to what the Entra read already holds.
