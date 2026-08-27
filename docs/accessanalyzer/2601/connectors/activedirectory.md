---
title: "Active Directory"
description: "Requirements for the Active Directory connector"
sidebar_position: 30
---

# Active Directory

The Active Directory connector reads domain controllers remotely over LDAP to collect identity data from your Active Directory domains. The connector doesn't require agent installation on domain controllers.

The connector collects:

- Users (including disabled and stale accounts)
- Groups and group memberships (including nested groups and circular membership chains)
- Domains

## Supported versions

- Windows Server 2016 and later
- Windows Server 2003 forest functional level or higher

## Requirements

### Service account

The connector authenticates using a service account with a username and password. The account must be a member of the domain you're scanning and have:

- Read access to the directory tree
- List Contents and Read Property on the Deleted Objects container

:::note
For information on granting access to the Deleted Objects container, see the Microsoft [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx) article and [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx) reference.
:::

### Ports

Open the following ports on all domain controllers you want to scan:

| Port | Protocol | Description |
|------|----------|-------------|
| 389 | TCP | LDAP |
| 636 | TCP | LDAPS (when SSL is enabled) |
| 135–139 | TCP | RPC |
| 49152–65535 | TCP | RPC dynamic ports |

## Next steps

Once requirements are met, see [Set Up Active Directory Source Group](../gettingstarted/active-directory/set-up-source-group.md) to configure your first scan.
