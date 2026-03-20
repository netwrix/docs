---
title: "Connection Setup"
description: "Configuring the Active Directory LDAP connection"
sidebar_position: 10
---

# Connection Setup

Configure the Active Directory connector to synchronize users and groups from your on-premises directory.

## Prerequisites

- A domain service account with read access to directory objects — see [Active Directory Requirements](/docs/accessanalyzer/1_0/requirements/connectors/activedirectory)
- Network connectivity from the Access Analyzer VM to a domain controller on port 389 (LDAP) or 636 (LDAPS)

## Create a Service Account

1. Navigate to **Service Accounts** in the sidebar
2. Click **Add Service Account**
3. Enter a **Name** (for example, `AD Read-Only Service Account`)
4. Select **Username/Password** as the type
5. Enter the **Username** in `DOMAIN\username` or `user@domain.com` format
6. Enter the **Password**
7. Click **Add service account**

## Add Active Directory as a Source

1. Navigate to **Configuration** > **Sources**
2. Click **Add Source**
3. Select **IAM Source** as the category
4. Select **Active Directory** as the source type
5. Select the service account created above
6. Enter the **Host** (domain controller hostname or IP)
7. Enter the **Port** (`389` for LDAP, `636` for LDAPS)
8. Enter the **Domain** (for example, `corp.example.com`)
9. Click **Test Connection** to verify connectivity
10. After a successful test, click **Create Source**

## Test Connection

The test connection validates:

- Network connectivity to the domain controller
- LDAP bind with the provided credentials
- Ability to query directory objects

If the test fails, verify the domain controller is reachable on the specified port and the credentials are correct.
