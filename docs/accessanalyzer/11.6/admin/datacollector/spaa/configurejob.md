---
title: "SharePoint Custom Connection Profile & Host List"
description: "SharePoint Custom Connection Profile & Host List"
sidebar_position: 20
---

# SharePoint Custom Connection Profile & Host List

The SPAA Data Collector requires you to create a custom Connection Profile and a custom host list
and assign them to the job conducting the data collection. The host inventory option during host
list creation makes it necessary to configure the Connection Profile first. While SharePoint
on-premises uses the Active Directory account type for the credential within a Connection Profile,
you must list online credentials first in the credentials list within a Connection Profile housing
credentials to both environments.

## SharePoint Farm

This section describes the process to configure the Connection Profile and custom host list for
scanning SharePoint On-Premises.

### SharePoint Farm Credential for a Connection Profile

The provisioned credential used should be an Active Directory account.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Active Directory Account
- Domain – dropdown menu with available trusted domains displays. Either enter the short domain name
  in the textbox or select a domain from the menu.
- User name – Enter the user name
- Password Storage – Choose the for credential password storage:
    - Application – Uses Enterprise Auditor’s configured Profile Security setting as selected at the
      **Settings** > **Application** node
    - CyberArk – Uses the CyberArk Enterprise Password Vault
- Password – Enter the password
- Confirm – Re-enter the password

After you create the Connection Profile, create the custom host list. See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

### SharePoint Farm Host in a Custom Host List

The custom host list should include:

- One application server per farm
- Host name without a domain suffix, this means the host name shouldn't contain a period character

See the
[Add Hosts](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/add.md)
section for instruction on creating a custom static host list.

## SharePoint Online

This section describes the process to configure the Connection Profile and custom host list for
scanning SharePoint Online using Modern Authentication.

### SharePoint Online Credential for a Connection Profile using Modern Authentication

The provisioned credential should be an Microsoft Entra ID Application. See the
[SharePoint Online Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/requirements/sharepoint/sharepoint/sharepointonline/access.md)
topic for instructions on registering and provisioning the Microsoft Entra ID Application manually
or via the SP_RegisterAzureAppAuth Instant Job.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Azure Active Directory
- Client ID – Application (client) ID of the Enterprise Auditor application registered with
  Microsoft Entra ID
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/docs/accessanalyzer/11.6/admin/settings/application/overview.md)
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

    An example string matching the preceding configuration is:

    C:\Program Files
    (x86)\STEALTHbits\StealthAUDIT\PrivateAssemblies\spaa_cert_myorg.pfx,PasswordGoesHere,0

    :::note
    Replace `PasswordGoesHere` with the password used when generating the
    self-signed X.509 certificate if the Microsoft Entra ID Application was Registered and
    Provisioned manually, or with the $appPassword parameter used in the SP_RegisterAzureAppAuth
    Instant Job if that method was used.
    :::


After you create the Connection Profile, create the custom host list. See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

### SharePoint Online Host in a Custom Host List

The custom host list should include:

- Specify web or cloud hosts using the full web DNS part of the site URL. For example, add an
  Office 365 site with the URL http://TestSite.sharepoint.com as a host named
  TestSite.sharepoint.com
- Don't use the admin site, for example TestSite-admin.sharepoint.com
- Don't use IP Addresses
- Host name must be in DNS format

See the
[Add Hosts](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/add.md)
topic for instructions on creating a custom static host list.
