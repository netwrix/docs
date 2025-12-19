---
title: "Microsoft Entra ID Connection Profile & Host List"
description: "Microsoft Entra ID Connection Profile & Host List"
sidebar_position: 20
---

# Microsoft Entra ID Connection Profile & Host List

The AzureADInventory Data Collector requires a custom Connection Profile and host list to be created
and assigned to the job or job group conducting the data collection. The host inventory option
during host list creation makes it necessary to configure the Connection Profile first.

## Connection Profile

Creating the Connection Profile requires having the Client ID and Key that was generated when
Enterprise Auditor was registered as a web application with Microsoft Entra ID. See the
[Microsoft Entra ID Auditing Configuration](/docs/accessanalyzer/11.6/requirements/entraid/entraid/access.md)
for additional information.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Azure Active Directory
- Client ID – Application (client) ID of the Enterprise Auditor application registered with
  Microsoft Entra ID. See the
  [Identify the Client ID](/docs/accessanalyzer/11.6/requirements/entraid/entraid/access.md#identify-the-client-id)
  topic for additional information.
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/docs/accessanalyzer/11.6/admin/settings/application/overview.md)
  topic for additional information.)
- Key – Client secret value for the Enterprise Auditor application registered with Microsoft Entra
  ID. See the
  [Generate the Client Secret Key](/docs/accessanalyzer/11.6/requirements/entraid/entraid/access.md#generate-the-client-secret-key)
  topic for additional information.

Once the Connection Profile is created, it is time to create the custom host list. See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

## Custom Host List

The custom host list should include:

- All Microsoft Entra ID tenants to be targeted. If there are multiple tenants, the Connection
  Profile should contain a credential for each.
- The host name must be the domain name of the tenant, for example `company.onmicrosoft.com`. See
  the
  [Identify the Client ID](/docs/accessanalyzer/11.6/requirements/entraid/entraid/access.md#identify-the-client-id)
  topic for additional information.

See the
[Add Hosts](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/add.md)
topic for instructions on creating a custom static host list.
