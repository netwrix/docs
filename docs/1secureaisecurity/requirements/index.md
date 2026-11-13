---
title: "Requirements"
description: "Check the roles you need in 1Secure, Microsoft, and your other platforms before you connect sources and run a scan."
sidebar_position: 1
---

# Requirements

Check these roles, licenses, and network limits before you connect your first source.

## Roles

- **Your role in 1Secure.** Only an organization administrator, a 1Secure user who can administer your organization, can connect sources, start a scan, or change settings. Other users can review issues and Shadow AI.
- **Your role in Microsoft.** To connect Microsoft sources with one sign-in, sign in as a Global Administrator or Privileged Role Administrator of the directory.
- **Roles for optional grants.** Some grants need a role of their own, held by whoever signs in for that grant:
  - Owner or User Access Administrator on each Azure subscription, and on each Azure AI Foundry project, that 1Secure reads.
  - Power Platform administrator or Global Administrator, to register the Power Platform management application, read the Power Platform policies, or add 1Secure as an application user.
  - System Administrator of each Power Platform environment that 1Secure is added to.
  - An owner of each SharePoint site you approve one at a time.
- **Your other platforms.** For each other platform, have its admin console open and the role its connector page names. [Sources](/docs/1secureaisecurity/configuration/sources/index.md) lists every platform.

## Licenses

Some Microsoft sources read only with a license: sign-ins need Microsoft Entra ID P1, the Agent 365 catalog needs a Microsoft Agent 365 license, and Copilot Studio agents need Copilot Studio or Microsoft 365 Copilot. [Known limitations](/docs/1secureaisecurity/troubleshooting/known-limitations.md) lists them.

{/* TODO: confirm which Microsoft 365 plans to list as supported. */}

## Network reach

The Beta connects the platforms 1Secure can reach over the public internet. A server, cluster, or instance reachable only inside your network can't be connected yet. AWS Bedrock, Atlassian, ServiceNow, ServiceNow AI Control Tower, Salesforce, Google Workspace, Docker, and OpenShell show **Coming soon** and can't be connected yet.

:::info
If **AI Security** is missing from the 1Secure sidebar, it isn't turned on for your organization. Only a Netwrix administrator turns it on, so contact Netwrix Support.
:::

For the permissions each source asks for, see the [permission reference](/docs/1secureaisecurity/configuration/reference.md).
