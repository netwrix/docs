---
title: "EDR integrations overview"
sidebar_label: "Overview"
description: "Learn how Netwrix Privilege Secure for Discovery uses an EDR provider to manage Windows systems, and how to assign or delete a provider configuration."
sidebar_position: 5
---

An endpoint detection and response (EDR) integration lets Netwrix Privilege Secure for Discovery scan Windows systems and manage local administrator access through the agent that your EDR provider already runs on the endpoint. The product doesn't need a direct network connection to the endpoint, and the endpoint doesn't need to be on the domain.

## Supported providers

| Provider | Guide |
| --- | --- |
| Carbon Black Cloud | [Configure the Carbon Black Cloud integration](./carbonblack.md) |
| CrowdStrike Falcon | [Configure the CrowdStrike Falcon integration](./crowdstrike.md) |
| SentinelOne | [Configure the SentinelOne integration](./sentinelone.md) |
| Tanium Cloud | [Configure the Tanium Cloud integration](./tanium.md) |

## How the integration works

For a system that uses an EDR configuration, the product scans through the provider first. If that scan fails, it tries a direct connection. To change access on a device, the product runs its management script through the provider. Each provider guide describes the exact mechanism.

You create a provider configuration under **Configure** > **Server** > **EDR Provider Configuration**. A configuration has no effect until you assign it to a domain or to systems. You can create more than one configuration, for example one for each provider tenant, and assign each one to different systems.

## Assign a configuration

You can assign a configuration in three places:

- To a domain: Select **Configure** > **Server**, edit the domain, and select the configuration in **EDR Configuration** under **Default Policies**. New systems that the domain discovers use this configuration.
- To one system: Select **Access** > **Grant Access**, select the Windows system, and choose the configuration in the **EDR Integration** list. Only administrators see this list.
- To many systems: Use the **Set EDR Configuration** bulk action. See [Bulk actions](../../admin/systems/bulk-actions.md).

The **EDR Integration** list appears on a system only when the provider configuration has **Remote Systems Management** enabled.

## Delete a configuration

You can't delete a configuration while a domain or a system uses it. The product shows `You cannot delete this EDR configuration as it is in use on one or more domains` (or `systems`, or `Microsoft Entra ID domains`). Assign a different configuration or **Disabled** to those domains and systems, and then delete the configuration.

## Provider tokens that expire

SentinelOne and Tanium Cloud use API tokens that expire. The provider list shows a warning label when a token expires within 14 days and a red label within 5 days. Administrators also see an alert after sign-in when a token expires within 5 days. Generate a new token and update the configuration before the old one expires.

## Related information

- [Configure endpoint operations for Microsoft Entra ID](../microsoft-entra-id/endpoint-operations.md)
- [Start and manage JITA sessions](../../admin/systems/start-and-manage-jita-sessions.md)
