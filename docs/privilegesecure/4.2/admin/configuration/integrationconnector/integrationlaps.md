---
title: "LAPS Integration"
description: "LAPS Integration"
sidebar_position: 40
---

# LAPS Integration

Privilege Secure contains a built-in vault for credential management, but can uniquely map to a LAPS
vault. The Local Administrator Password Solution (LAPS) provides management of local account
passwords of domain joined computers. Passwords are stored in Active Directory. The LAPS vault
connector can be used for connecting as a service account for host scans, and for activities where
the local Administrator account is required.

## Install LAPS in Your Active Directory Domain

Install LAPS in your Active Directory domain and configure the desired hosts to connect to with
Privilege Secure to use LAPS. LAPS limits which users have access to the password attributes that
are contained in Active Directory. Make sure to create an account for Privilege Secure to use that
has appropriate rights. Set the rights for a user with the Set-AdmPwdReadPasswordPermission cmdlet.
This cmdlet is included in the LAPS installation package which can be downloaded from the
[Microsoft website](https://www.microsoft.com/en-us/download/details.aspx?id=46899).

## Add a Vault Connector for LAPS

Follow the steps to add a vault connector for LAPS.

**Step 1 –** Navigate to the Configuration > Integration Connectors.

**Step 2 –** In the Integration Connector list, click the Add Integration Connector icon.

![Add a LAPS Vault connector](/images/privilegesecure/4.2/accessmanagement/admin/configuration/add/addlaps.webp)

**Step 3 –** Enter the following information:

- Connector Name – Enter a name to uniquely identify the connector
- Connector Description (Optional) – Enter a brief description to identify the service account
- Connector Template – A selection of templates for connector configurations. Select LAPS from the
  drop-down list.
- Service Account – The service account to use when requesting passwords for a computer managed by
  LAPS
- Domain Name – The full qualified domain name of the Active Directory domain to use when looking up
  passwords for computers managed by LAPS

**Step 4 –** Click the Save icon to create the new integration connector.

The connector is added.
