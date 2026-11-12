---
title: "Requirements"
description: "Check the roles you need in 1Secure, Microsoft, and your other platforms before you connect sources and run a scan."
sidebar_position: 1
---

# Requirements

Check these roles before you connect your first source.

- **Your role in 1Secure.** Only an organization administrator can start a scan.
- **Your role in Microsoft.** To connect Microsoft sources with one sign-in, sign in as a Global Administrator or Privileged Role Administrator of the directory.
- **Your other platforms.** For each other platform, have its admin console open and the role its connector page names. [Sources](/docs/1secureaisecurity/configuration/sources/index.md) lists every platform.
- **Microsoft licenses.** Some Microsoft sources read only with a license: sign-ins need Microsoft Entra ID P1, the Agent 365 catalog needs a Microsoft Agent 365 license, and Copilot Studio agents need Copilot Studio or Microsoft 365 Copilot. [Known limitations](/docs/1secureaisecurity/troubleshooting/known-limitations.md) lists them.

  {/* TODO: confirm which Microsoft 365 plans to list as supported. */}
- **Reachable platforms.** The Beta connects the platforms 1Secure can reach over the public internet. A server, cluster, or instance reachable only inside your network can't be connected yet. AWS Bedrock, Atlassian, ServiceNow, ServiceNow AI Control Tower, Salesforce, Google Workspace, Docker, and OpenShell show **Coming soon** and can't be connected yet.

:::info
If **AI Security** is missing from the 1Secure sidebar, it isn't turned on for your organization. Ask your 1Secure administrator.
:::

For the permissions each source asks for, see the [permission reference](/docs/1secureaisecurity/configuration/reference.md).
