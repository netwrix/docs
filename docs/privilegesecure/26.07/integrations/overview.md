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
| **BYOV** | Check out credentials from any vault, or from Privilege Secure itself, with PowerShell scripts that you provide. | [Bring Your Own Vault connector](/docs/privilegesecure/26.07/integrations/vaults/byov.md) |
| **CyberArk** | Check out credentials held in CyberArk. | [CyberArk integration](/docs/privilegesecure/26.07/integrations/vaults/cyberark.md) |
| **HashiCorp** | Check out credentials held in HashiCorp Vault. | [HashiCorp Vault integration](/docs/privilegesecure/26.07/integrations/vaults/hashicorp.md) |
| **LAPS** | Use local administrator passwords that Active Directory manages with LAPS. | [LAPS integration](/docs/privilegesecure/26.07/integrations/vaults/laps.md) |
| **Password Secure** | Check out credentials held in Netwrix Password Secure. | [Netwrix Password Secure integration](/docs/privilegesecure/26.07/integrations/vaults/password-secure.md) |
| **ServiceNow** | Validate and update ServiceNow tickets from sessions. | [ServiceNow integration](/docs/privilegesecure/26.07/integrations/itsm/servicenow.md) |
| **StealthAUDIT** | Bring Netwrix Access Analyzer data into Privilege Secure. | [Netwrix Access Analyzer integration](/docs/privilegesecure/26.07/integrations/security/access-analyzer.md) |

:::note
**StealthAUDIT** is the default template for a new connector. It keeps that name in the console and maps to Netwrix Access Analyzer. If you create a connector for another system, change **Connector Template** before you fill in the other fields.
:::

The **Password Secure** template is available by default. The console hides it when the `password_secure` feature flag is turned off.

## Integrations by kind

### Vaults

Vault connectors let activities use passwords that another vault holds. See [Third-party vault connectors](/docs/privilegesecure/26.07/integrations/vaults/vault-connectors.md) for how activities use them.

- [Bring Your Own Vault connector](/docs/privilegesecure/26.07/integrations/vaults/byov.md)
- [CyberArk integration](/docs/privilegesecure/26.07/integrations/vaults/cyberark.md)
- [HashiCorp Vault integration](/docs/privilegesecure/26.07/integrations/vaults/hashicorp.md)
- [LAPS integration](/docs/privilegesecure/26.07/integrations/vaults/laps.md)
- [Netwrix Password Secure integration](/docs/privilegesecure/26.07/integrations/vaults/password-secure.md)

### Ticketing

- [ServiceNow integration](/docs/privilegesecure/26.07/integrations/itsm/servicenow.md) validates a ticket number when a user requests a session, and adds work notes to the ticket as the session progresses.

### Security

- [Netwrix Access Analyzer integration](/docs/privilegesecure/26.07/integrations/security/access-analyzer.md)

### Event forwarding

Event forwarding doesn't use an integration connector. You add a SIEM server instead.

- [Forward events to a SIEM](/docs/privilegesecure/26.07/integrations/siem/siem-servers.md)
- [SIEM templates and event fields](/docs/privilegesecure/26.07/integrations/siem/siem-templates.md)

### Identity providers

Identity provider settings are under **Configuration** > **Authentication**, not under **Integration Connectors**.

- [Sign in with Okta using OpenID Connect](/docs/privilegesecure/26.07/integrations/identity/okta-oidc.md)

### REST API

The REST API lets scripts and other products call Privilege Secure.

- [REST API overview](/docs/privilegesecure/26.07/integrations/api/api-overview.md)
- [Authenticate to the API](/docs/privilegesecure/26.07/integrations/api/api-authentication.md)
