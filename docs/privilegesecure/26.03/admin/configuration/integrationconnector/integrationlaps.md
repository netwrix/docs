---
title: "LAPS Integration"
description: "Install LAPS and add a LAPS vault connector so Privilege Secure can use local administrator passwords."
sidebar_position: 40
---

# LAPS Integration

Privilege Secure contains a built-in vault for credential management, but can uniquely map to a LAPS
vault. The Local Administrator Password Solution (LAPS) provides management of local account
passwords of domain joined computers. Passwords are stored in Active Directory. The LAPS vault
connector is useful for connecting as a service account for host scans, and for activities where
the local Administrator account is required.

## Install LAPS in your Active Directory domain

Install LAPS in your Active Directory domain and configure the hosts you want to connect to with
Privilege Secure to use LAPS. LAPS limits which users have access to the password attributes that
are contained in Active Directory. Ensure to create an account for Privilege Secure to use that
has appropriate rights. Set the rights for a user with the `Set-AdmPwdReadPasswordPermission` cmdlet.
This cmdlet is included in the LAPS installation package which can be downloaded from the
[Microsoft website](https://www.microsoft.com/en-us/download/details.aspx?id=46899).

## Add a vault connector for LAPS

To add a vault connector for LAPS.

1. Navigate to the **Configuration** > **Integration Connectors**.
2. In the Integration Connector list, click the **Add Integration Connector** icon.

   ![Add a LAPS Vault connector](/images/privilegesecure/26.03/accessmanagement/admin/configuration/add/addlaps.webp)

3. Enter the following information:

   - **Connector Name** — Enter a name to uniquely identify the connector
   - **Connector Description (Optional)** — Enter a brief description to identify the service account
   - **Connector Template** — A selection of templates for connector configurations. Select **LAPS** from the
     dropdown list.
   - **Service Account** — The service account to use when requesting passwords for a computer managed by
     LAPS
   - **Domain Name** — The full qualified domain name of the Active Directory domain to use when looking up
     passwords for computers managed by LAPS

4. Click the **Save** icon to create the new integration connector.

The connector is added.
