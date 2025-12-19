---
title: "Exchange Custom Connection Profile & Host List"
description: "Exchange Custom Connection Profile & Host List"
sidebar_position: 10
---

# Exchange Custom Connection Profile & Host List

The ExchangePS Data Collector requires a custom Connection Profile and host list to be created and
assigned to the job conducting the data collection. The host inventory option during host list
creation makes it necessary to configure the Connection Profile first.

:::note
It is not possible to target both Exchange Online and on-premises Exchange environments
from the same job. Therefore, the Connection Profile should only contain the credentials for one
type of environment.
:::


## Exchange On-Premises

This section describes the process to configure the Connection Profile and host list for Exchange
on-premises environments.

### Exchange On-Premise Credential for a Connection Profile

The provisioned credential used should be an Active Directory account. Create a Connection Profile
and set the following information on the User Credentials window:

- Select Account Type – Active Directory Account
- Domain – Drop-down menu with available trusted domains will appear. Either type the short domain
  name in the textbox or select a domain from the menu.
- User name – Type the user name
- Password Storage – Choose the for credential password storage:

    - Application – Uses the configured Profile Security setting as selected at the **Settings** >
      **Application** node
    - CyberArk – Uses the CyberArk Enterprise Password Vault

- Password – Type the password
- Confirm – Re-type the password

### Exchange On-Premise Host List

The ExchangePS Data Collector should be set to run against:

- Local host

## Exchange Online

This section describes the process to configure the Connection Profile and custom host list for
Exchange Online.

### Exchange Online Credential for a Connection Profile

The provisioned credential must be created with the Exchange Modern Authentication account type.
Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Exchange Modern Authentication
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/docs/accessanalyzer/11.6/admin/settings/application/overview.md)
  topic for additional information.)
- Organization – The primary domain name of the Microsoft Entra tenant being leveraged to make the
  connection. See the
  [Identify the Tenant's Name](/docs/accessanalyzer/11.6/requirements/exchange/exchangeonline/access.md#identify-the-tenants-name)
  topic for additional information.
- Email Address – The email address for the mailbox to be leveraged in Exchange Online environment
  scans. The mailbox must belong to the primary domain used in the Organization field.
- AppID – Application (client) ID of the Enterprise Auditor application registered with Microsoft
  Entra ID. See the
  [Identify the Client ID](/docs/accessanalyzer/11.6/requirements/exchange/exchangeonline/access.md#identify-the-client-id)
  topic for additional information.
- Certificate Thumbprint – The thumbprint value of the certificate uploaded to the Microsoft Entra
  ID application. See the
  [Upload Self-Signed Certificate](/docs/accessanalyzer/11.6/requirements/exchange/exchangeonline/access.md#upload-self-signed-certificate)
  topic for additional information.

### Exchange Online Host List

Exchange Online requires a custom host list. The host list should include the tenant name of the
Microsoft Entra tenant used to connect to Exchange Online.

- The host name must be the domain name of the tenant, for example `company.onmicrosoft.com`. See
  the
  [Identify the Tenant's Name](/docs/accessanalyzer/11.6/requirements/exchange/exchangeonline/access.md#identify-the-tenants-name)
  topic for additional information.

See the
[Add Hosts](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/add.md)
topic for instructions on creating a custom host list.
