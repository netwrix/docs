---
title: "Integrations overview"
description: "See which systems Privilege Secure connects to, grouped by kind, and find the page that sets up each integration."
sidebar_position: 10
---

# Integrations overview

Netwrix Privilege Secure for Access Management connects to other systems to get credentials, ticket data, and identity information, and to send events out. This page lists each integration, what it does, and where to set it up.

## Integration connectors

Most integrations use an integration connector. A connector stores the address and credentials that Privilege Secure uses to reach another system.

To create a connector:

1. Select **Configuration** > **Integration Connectors**.
2. Click **+** above the list.
3. Enter a name and a description.
4. In **Connector Template**, select the template for the system. The remaining fields depend on the template.
5. Click **Save**.

The **Connector Template** list has 7 values:

| Template | Use it to | Page |
|---|---|---|
| **BYOV** | Check out credentials from any vault, or from Privilege Secure itself, with PowerShell scripts that you provide. | [Bring Your Own Vault connector](vaults/byov.md) |
| **CyberArk** | Check out credentials held in CyberArk. | [CyberArk integration](vaults/cyberark.md) |
| **HashiCorp** | Check out credentials held in HashiCorp Vault. | [HashiCorp Vault integration](vaults/hashicorp.md) |
| **LAPS** | Use local administrator passwords that Active Directory manages with LAPS. | [LAPS integration](vaults/laps.md) |
| **Password Secure** | Check out credentials held in Netwrix Password Secure. | [Netwrix Password Secure integration](vaults/password-secure.md) |
| **ServiceNow** | Validate and update ServiceNow tickets from sessions. | [ServiceNow integration](itsm/servicenow.md) |
| **StealthAUDIT** | Bring Netwrix Access Analyzer data into Privilege Secure. | [Netwrix Access Analyzer integration](security/access-analyzer.md) |

:::note
**StealthAUDIT** is the default template for a new connector. It keeps that name in the console and maps to Netwrix Access Analyzer. If you create a connector for another system, change **Connector Template** before you fill in the other fields.
:::

{/* TODO verify: whether the Password Secure template appears in every installation. A feature flag named password_secure controls it and is on by default. */}

## Integrations by kind

### Vaults

Vault connectors let activities use passwords that another vault holds. See [Third-party vault connectors](vaults/vault-connectors.md) for how activities use them.

- [Bring Your Own Vault connector](vaults/byov.md)
- [CyberArk integration](vaults/cyberark.md)
- [HashiCorp Vault integration](vaults/hashicorp.md)
- [LAPS integration](vaults/laps.md)
- [Netwrix Password Secure integration](vaults/password-secure.md)

### Ticketing

- [ServiceNow integration](itsm/servicenow.md) validates a ticket number when a user requests a session, and adds work notes to the ticket as the session progresses.

### Security

- [Netwrix Access Analyzer integration](security/access-analyzer.md)

### Event forwarding

Event forwarding doesn't use an integration connector. You add a SIEM server instead.

- [Forward events to a SIEM](siem/siem-servers.md)
- [SIEM templates and event fields](siem/siem-templates.md)

### Identity providers

Identity provider settings are under **Configuration** > **Authentication**, not under **Integration Connectors**.

- [Sign in with Okta using OpenID Connect](identity/okta-oidc.md)

### REST API

The REST API lets scripts and other products call Privilege Secure.

- [REST API overview](api/api-overview.md)
- [Authenticate to the API](api/api-authentication.md)
