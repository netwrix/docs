---
title: "Active Directory Scanning Overview"
description: "Overview of Active Directory scanning capabilities and prerequisites in Access Analyzer"
sidebar_position: 1
---

# Active Directory Scanning Overview

Access Analyzer scans Active Directory to inventory users, groups, and group memberships across one or more domains. It detects security risks including stale accounts, privileged account exposure, excessive group nesting, and accounts with unusual delegation settings. Findings surface in the AD Scan Summary dashboard, giving security teams a clear picture of their identity posture and the data they need to prioritize remediation.

## Prerequisites

Before setting up an Active Directory source group, confirm that your environment meets the requirements below. The source group wizard connects to your domain controllers over LDAP or LDAPS, so the Access Analyzer server must be able to reach them on the network and a domain service account must be available with the appropriate read permissions.

### Service account

Access Analyzer uses a domain service account to authenticate against your Active Directory domain controllers and read directory objects. The account must be a member of the domain you're scanning and have read access to the directory tree.

See [Username and Password](../../configurations/service-accounts/username-password.md) to create the service account and [Active Directory Connector Requirements](../../connectors/activedirectory.md) for the full list of required permissions.

### Network requirements

| Port | Protocol | Destination |
| --- | --- | --- |
| 389 | TCP | Domain controllers in the source group (LDAP) |
| 636 | TCP | Domain controllers in the source group (LDAPS, if using SSL) |
| 135–139 | TCP | Domain controllers in the source group (RPC) |
| 49152–65535 | TCP | Domain controllers in the source group (RPC dynamic ports) |

### Before you begin

- The fully qualified domain name (FQDN) of each domain controller you plan to add. IP addresses aren't supported — DIGEST-MD5 authentication requires a resolvable hostname and will fail if an IP address is provided.
- A Username and Password service account created in Access Analyzer with Read access to the domain.
- Network connectivity from the Access Analyzer server to port 389 or 636 on each domain controller confirmed.
