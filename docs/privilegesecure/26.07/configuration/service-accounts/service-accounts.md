---
title: "Service accounts"
description: "Find the service account each platform needs, and add, edit, or delete the service accounts that Privilege Secure uses to manage resources."
sidebar_position: 10
---

# Service accounts

A service account is the credential that Privilege Secure uses to connect to a resource, directory, or database and manage its accounts. Each resource, domain, database, and Microsoft Entra ID tenant uses one service account. This page lists what each platform needs and how to add one.

Open the list from **Configuration** > **Service Accounts** in the left navigation.

## Service account requirements by platform

Each platform needs different permissions. The permissions are the minimum the service account must hold on the target. For the full list, see [Target environments](/docs/privilegesecure/26_07/requirements/target-environments).

| Platform | Account the service account represents | Notes |
| --- | --- | --- |
| Active Directory | A domain account in the Domain Administrators group of the target domains. | Set **Domain** and **Username**. |
| Windows | A domain account, or a local account in the local Administrators group on each server or desktop. | A server outside a domain can reject remote PowerShell. See [Target environments](/docs/privilegesecure/26_07/requirements/target-environments). |
| Linux | A local account on each server, or a central domain account for hosts bridged to Active Directory. The account is root, or has delegated sudo permissions. | Authenticate with a password, an SSH certificate, or both. For a least-privilege account, see [Creating a least privilege service account for Linux resources](/docs/kb/privilegesecure/user-and-service-accounts/creating-a-least-privilege-service-account-for-linux-resources). |
| Cisco | An account with Level 15 Privileged EXEC access, or a lower-level account with an **Enable Password** that raises it to Privileged EXEC mode. | The **Enable Password** field applies to Cisco accounts. |
| Microsoft Entra ID | An app registration with Microsoft Graph application permissions and Entra roles. | Enter the application ID and secret. See [Register an app in Microsoft Entra ID](/docs/privilegesecure/26_07/configuration/service-accounts/entra-id-app-registration). |
| Microsoft SQL Server | An account with `sysadmin` privileges. | See the note on Windows logins that follows. |
| Oracle | An account with `SYSDBA` privileges. | |
| BSD | | |
| Palo Alto PAN-OS | | The platform needs SSH access and the PAN-OS API. |

{/* TODO verify: service account requirements for BSD and PAN-OS targets. */}

{/* TODO verify: which value to enter in Enable Password when a Cisco device has both an enable secret and an enable password (447467) */}

{/* TODO verify: that a Cisco account at privilege level 1 to 15 works with an Enable Password */}

:::note
Release 26.07.3 fixes SQL Server actions that created local SQL logins instead of Active Directory (Windows authentication) logins for domain users.
:::

{/* TODO verify: customer-facing wording for the SQL Server Windows-login fix (447790), and the service account setup for SQL Server Windows authentication. */}

## Add a service account

1. Select **Configuration** > **Service Accounts**.
1. Click the **+** button above the list. The tooltip reads **Add Service account**.
1. Enter a name in **Enter Service Account Name**, for example `svc-ad-sync`.
1. Enter a **Description**.
1. Select the **Platform**. The default is **None Specified**.
1. Enter the **Domain** and **Username**\*.
1. Enter the **Password**\*. Select the eye icon to show the value you typed.
1. To check the credential out of a vault, select a **Vault Connector**. The list holds `<none>` and one entry for each integration connector.
1. Click **Save**.

The account appears in the list. Select a name in the list to see and edit the details. Click **Save** to keep an edit, or **Cancel** to discard it.

{/* TODO screenshot: the Add Service account form with the Platform list open */}

{/* TODO verify: the add form was captured in the 26.07.3 lab with the base fields only. The 26.03 page and the web UI code show more fields that appear for some platforms (listed below). Confirm each one on a 26.07.3 form. */}

## Service account fields

| Field | Applies to | Description |
| --- | --- | --- |
| **Name** | All | The name shown in the list. |
| **Description** | All | A description of the account. |
| **Platform** | All | **None Specified**, **Active Directory**, **BSD**, **Cisco**, **Entra ID**, **Linux**, **Microsoft SQL Server**, **Oracle**, or **Palo Alto PanOS**. |
| **Domain** | All except Entra ID | The domain of the account. |
| **Username** | All except Entra ID | The account name. |
| **Password** | All except Entra ID | The account password. |
| **Vault Connector** | All | The integration connector that supplies the credential. See [Vault connectors](/docs/privilegesecure/26_07/integrations/vaults/vault-connectors). |
| **App ID** | Entra ID | The application (client) ID of the app registration. |
| **App Secret** | Entra ID | The client secret of the app registration. |
| **Elevation Command** | Linux | The command that raises the account's privileges on the host, such as `sudo`, `pbrun`, `pmrun`, or `dzdo`. |
| **Authentication Method** | Linux | **Password**, **SSH Certificate**, or **SSH Certificate and Password**. |
| **Private Key** and **SSH Passphrase** | Linux with an SSH certificate method | The key and passphrase for certificate authentication. |
| **Enable Password** | Cisco | Raises the account to `Privileged EXEC` mode. The account can be any Cisco user at privilege level 1 to 15. Release 26.07.1 and later support Cisco devices that are configured with both an enable secret and an enable password. |
| **Address**, **Safe**, and **Folder** | CyberArk vault connector | The CyberArk address, and the safe and folder that hold the login account. |
| **Library** | HashiCorp vault connector | The library that holds the login account. |

## Delete a service account

Point to the account in the list and click the trash icon. Confirm the deletion.

Check which resources use the account first. Use **Change Service Account** on the **Resources** page to move them to another account.

## Managed service accounts

Privilege Secure can also manage a service account. A chip on the account shows **Service Account is Managed by Netwrix Privilege Secure**. See [Credentials](/docs/privilegesecure/26_07/admin/credentials/overview).

{/* TODO verify: the Netwrix Password Secure internal account that the lab shows in the list, and what it is for. */}
