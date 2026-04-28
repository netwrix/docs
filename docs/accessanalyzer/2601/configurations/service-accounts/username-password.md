---
title: "Username and Password"
description: "Username and password service accounts for Active Directory and file server source groups"
sidebar_position: 2
---

# Username and Password

The Username and Password credential type is used by Active Directory and file server source groups. Both require a domain account whose credentials Access Analyzer uses to connect and authenticate during scans.

## Create a Username/Password service account

1. Navigate to **Configuration** > **Service Accounts**.
2. Click **Add Service Account**.
3. In the **Name** field, enter a descriptive name for this service account.
4. From the **Service account type** drop-down, select **Username/Password**.

   ![Add service account form showing Username/Password fields: name, username, and password](/images/accessanalyzer/2601/configurations/add-service-account-username-password.png)

5. In the **Username** field, enter the domain account in `DOMAIN\username` or `username@domain` format.
6. In the **Password** field, enter the account password.
7. Click **Add account**.

## Fields

| Field | Description |
| --- | --- |
| **Name** | A display name that identifies this service account in Access Analyzer. |
| **Username** | The domain user account in `DOMAIN\username` or `username@domain` format. |
| **Password** | The password for the domain account. |

## Active Directory

Active Directory source groups use the service account to connect to domain controllers over LDAP or LDAPS and read directory objects. The account must have Read access to the Active Directory directory tree.

For full permission requirements, see [Active Directory Connector Requirements](../../connectors/activedirectory.md).

## File Server

File server source groups use the service account to connect to Windows file servers over SMB and enumerate shares, permissions, and file contents. The account must be a member of the same domain as the target file servers. The specific permissions required depend on the scan types you enable — access scanning and sensitive data scanning have different requirements.

For full permission requirements, see [CIFS / SMB File Share](../../connectors/file-servers/cifs.md).
