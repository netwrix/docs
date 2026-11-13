---
title: "Netwrix 1Secure AI Security Documentation"
description: "Find AI agents and non-human identities across your platforms, connect sources, run a scan, and work the results in 1Secure."
sidebar_position: 1
---

# Netwrix 1Secure AI Security Documentation

:::note
This is pre-release documentation for the 1Secure AI Security Beta.
:::

AI Security finds the AI agents and the non-human identities working across the platforms your organization uses. You connect each platform as a source, run a scan, and work the results on the AI Security pages in 1Secure.

![AI Security Overview page with the Agents, High risk, Open issues, and Shadow AI cards, the Last scanned line, and the headline with View issues](/images/1secureaisecurity/misc/ai-security-overview-page.webp)

## What AI Security finds

- **Agents.** Things that act on their own: Copilot Studio agents, Azure AI Foundry agents, Power Automate flows, n8n workflows, SharePoint agents, and the agents on the other platforms you connect.
- **Identities.** The service principals, app registrations, managed identities, and keys that agents run as or use, and the other non-human identities beside them.
- **What each agent can reach.** The data, the services, and the other agents it can get to through its own grants and through the identities it acts as.
- **Issues.** What is wrong now: an agent without an owner, an identity with more access than its agent needs, data shared outside the company.
- **Shadow AI.** AI tools and apps that people use and no connected platform accounts for.

## How AI Security reads your platforms

AI Security reads each platform with read-only access. It never changes, deletes, or sends anything on a platform it scans. Microsoft sources connect through one Microsoft sign-in or through an app registration you create, the identity in Microsoft Entra ID that 1Secure reads with. Every other platform takes a credential, such as an API key or token, that you create in that platform's console. [Key concepts](/docs/1secureaisecurity/getting-started/key-concepts.md) explains these terms.

A scan reads each connected source and reports what it couldn't read. A figure that wasn't read shows as **Not measured**, never as zero, so a smaller answer is never mistaken for a smaller estate.

## Which platforms the Beta connects

The Beta connects the platforms 1Secure can reach over the public internet. A server, cluster, or instance reachable only inside your network can't be connected yet.

Eight platforms show **Coming soon** on the **Sources** page and offer no way to connect a source yet: AWS Bedrock, Atlassian, ServiceNow, ServiceNow AI Control Tower, Salesforce, Google Workspace, Docker, and OpenShell.

## Where to start

1. Read [Key concepts](/docs/1secureaisecurity/getting-started/key-concepts.md) for the words the pages use.
2. Check the [Requirements](/docs/1secureaisecurity/requirements/index.md), then follow [Configuration](/docs/1secureaisecurity/configuration/index.md) to connect your first sources and run your first scan.
3. Use [Sources](/docs/1secureaisecurity/configuration/sources/index.md) to see what each platform needs granted.

