---
title: "SharePoint Custom Connection Profile & Host List"
description: "SharePoint Custom Connection Profile & Host List"
sidebar_position: 20
---

# SharePoint Custom Connection Profile & Host List

The SPAA Data Collector requires a custom Connection Profile and a custom host list to be created
and assigned to the job conducting the data collection. The host inventory option during host list
creation makes it necessary to configure the Connection Profile first. While SharePoint on-premises
uses the Active Directory account type for the credential within a Connection Profile, it is
necessary for online credentials to be listed first in the credentials list within a Connection
Profile housing credentials to both environments.

## SharePoint Farm

This section describes the process to configure the Connection Profile and custom host list for
scanning SharePoint On-Premises.

### SharePoint Farm Credential for a Connection Profile

The provisioned credential used should be an Active Directory account.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Active Directory Account
- Domain – Drop-down menu with available trusted domains displays. Either type the short domain name
  in the textbox or select a domain from the menu.
- User name – Type the user name
- Password Storage – Choose the for credential password storage:
    - Application – Uses Access Analyzer’s configured Profile Security setting as selected at the
      **Settings** > **Application** node
    - CyberArk – Uses the CyberArk Enterprise Password Vault
- Password – Type the password
- Confirm – Re-type the password

Once the Connection Profile is created, it is time to create the custom host list. See the
[Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional information.

### SharePoint Farm Host in a Custom Host List

The custom host list should include:

- One application server per farm
- Host name without a domain suffix, this means the host name should not contain a period character

See the [Add Hosts](/docs/accessanalyzer/12.0/admin/hostmanagement/actions/add.md) section for instruction on creating a
custom static host list.

## SharePoint Online

This section describes the process to configure the Connection Profile and custom host list for
scanning SharePoint Online using Modern Authentication.

### SharePoint Online Credential for a Connection Profile using Modern Authentication

The provisioned credential should be an Microsoft Entra ID Application. See the
[SharePoint Online Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/12.0/requirements/sharepoint/sharepoint/sharepointonline/access.md)
topic for instructions on registering and provisioning the Microsoft Entra ID Application manually
or via the SP_RegisterAzureAppAuth Instant Job.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Azure Active Directory
- Client ID – Application (client) ID of the Access Analyzer application registered with Microsoft
  Entra ID
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md)
  topic for additional information.)
- Key – The comma delimited string containing the path to the certificate PFX file, certificate
  password, and the Microsoft Entra ID environment identifier (
  `CertPath,CertPassword,AzureEnvironment`)

    The `AzureEnvironment` is typically 0 for the default Azure Production Environment. Other
    possible values are:

    - 1 – PPE
    - 2 – China
    - 3 – Germany
    - 4 – US Government
    - 5 – US Government-High
    - 6 – US Government-DoD

    An example string matching the configuration from above is:

    C:\Program Files
    (x86)\STEALTHbits\StealthAUDIT\PrivateAssemblies\spaa_cert_myorg.pfx,PasswordGoesHere,0

    :::note
    `PasswordGoesHere` should be replaced with the password used when generating the
    self-signed X.509 certificate if the Microsoft Entra ID Application was Registered and
    Provisioned manually or the $appPassword parameter used in the SP_RegisterAzureAppAuth Instant
    Job if that method was used.
    :::


Once the Connection Profile is created, it is time to create the custom host list. See the
[Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional information.

### SharePoint Online Host in a Custom Host List

The custom host list should include:

- Web or cloud hosts should be specified using the full web DNS part of the site URL, for example an
  Office 365 site with the URL http://TestSite.sharepoint.com should be added as a host with name
  TestSite.sharepoint.com
- Do not use the admin site, for example TestSite-admin.sharepoint.com
- Do not use IP Addresses
- Host name must be in DNS format

See the [Add Hosts](/docs/accessanalyzer/12.0/admin/hostmanagement/actions/add.md) topic for instructions on creating a custom
static host list.
