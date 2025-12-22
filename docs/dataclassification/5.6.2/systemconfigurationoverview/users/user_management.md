---
title: "User Management"
description: "User Management"
sidebar_position: 20
---

# User Management

This section contains information on how to configure user authentication mechanisms, their
permissions and manage existing users. Review the following for additional information:

- [Authentication Mechanisms](#authentication-mechanisms)
- [Adding/Removing Users](#addingremoving-users)
- [Permission Management](#permission-management)
- [Super Users](#super-users)

## Authentication Mechanisms

On first install the QS will be configured for Windows authentication. To setup the QS to use an
ADFS server please follow the "Installation and Configuration" guide using the section "ADFS". To
use forms based authentication please disable all other authentication methods in IIS other than:
Anonymous and Forms:

To use the authentication forms:

1.  Check that the “authentication mode” setting in conceptQS/web.config file is set as follows:

    <authentication mode="Windows"/>

    This is the default setting.

2.  Check that the Authentication settings are correct in IIS for Windows Authentication:

    The conceptQS web application should have these authentication methods enabled:

    - Anonymous Authentication
    - Windows Authentication

    All other authentication methods should be disabled.

    ![iis_thumb_0_0](/images/dataclassification/5.6.2/security/iis_thumb_0_0.webp)

3.  If you wish to allow anonymous access to the conceptQS, edit the conceptQS web.config file and
    delete (or comment out) three lines:

        <!-- The following 3 lines are required for Windows Authentication. Remove to allow anonymous access to

        the conceptQS -->

        <authorization>

        <deny users="?"/>

        </authorization>

    If these lines are present then users will be required to login using their Windows credentials.

To utilize Azure AD simply create the client application then add two new appSettings to the
web.config found in the QS directory:

- `<add key=”ida:AzureClientId” value=”NewAzureADClientID (GUID)” />`
- `<add key=”ida:AzureAuthority” value=”AzureADAuthorityValue such as: https://login.windows.net/mytenant.onmicrosoft.com” />`

The Netwrix Data Classification REST APIs also support Bearer based authentication, to enable this
mode please add one further appSetting entry into the web.config file:

- `<key=”ida:AzureTenant” value=”Tenant Name such as: netwrix.com” />`

In certain sections of the QS settings are split between Basic and Advanced. Users wishing to always
see Advanced options can enable this by:

- Selecting their username from the footer of the application
- Clicking User Preferences
- Ticking Always Show Advanced Settings
- Clicking Save

## Adding/Removing Users

More users can be added at any time from the default Users screen, as well as allowing for users to
be removed.

![adduser](/images/dataclassification/5.6.2/security/adduser.webp)

Additional Windows users can be validated using Integrated Windows Authentication. Additional
non-Windows users can only be added if the Non-Windows Authentication mode is enabled.

If the only user defined is a Super User and that user is deleted then all security is removed and
usage of the QS administrative functions reverts to unrestricted.

User accounts granted access to the REST APIs will still be restricted by their specific user
permissions. A Superuser with REST API access will be able to run any API method, any normal user
will be restricted by the same rules that govern the UI. Further API samples and documentation can
be found at: /conceptQS/_api

## Permission Management

In order to allocate granular permissions to a user (non-Super Users), simply select their username
from the main grid.

Each tab contains a top level checkbox (“Allow Access”) which defines whether or not a user has
access to each of the top level administrative areas.

When an area is enabled there are typically more granular permissions that can be enabled, such as:

- Within the Taxonomies area it is also possible to assign permissions at a specific Term Set or
  Term branch level. A full user permission summary (for all Term/Set level permissions) can be
  viewed by selecting the View Taxonomy Permissions button (shown below).
- Within the Sources area it is possible to restrict a user’s access to specific source groups, as
  shown
  below.![userpermissions_thumb_0_0](/images/dataclassification/5.6.2/security/userpermissions_thumb_0_0.webp)

Taxonomy Permissions Summary:

![viewtaxonomypermissionssummary_thumb_0_0](/images/dataclassification/5.6.2/security/viewtaxonomypermissionssummary_thumb_0_0.webp)

You can restrict permissions for a user to the following areas:

- Sources.
  [See Content Sources for more information.](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/sources_intro.md)
- Taxonomies.
  [See Taxonomies for more information.](/docs/dataclassification/5.6.2/contentconfigurationoverview/taxonomiesintro/taxonomies_intro.md)
- Workflows.
  [See Understanding Workflows for more information.](/docs/dataclassification/5.6.2/contentconfigurationoverview/workflows/workflows.md)
- Config.
  [See Configuration Options for more information.](/docs/dataclassification/5.6.2/systemconfigurationoverview/configuration/configuration.md)
- Users.
  [See Users and Security Settings for more information.](/docs/dataclassification/5.6.2/systemconfigurationoverview/users/users.md)
- Reports.
  [See Reporting Capabilities for more information.](/docs/dataclassification/5.6.2/dataanalysisoverview/reportingintro/reporting_intro.md)
- DSARs.
  [See Data Subject Access Requests for more information.](/docs/dataclassification/5.6.2/dataanalysisoverview/dsaroverview/dsar_overview.md)

## Super Users

Super Users always have access to all Query Server administrative functions.

Non-Super Users must have their access rights specifically configured and all rights are disabled by
default. See [Permission Management](#permission-management) for details about configuring the
access rights for non-Super Users.

Regardless of the authentication mode selected the usage of the QS administrative functions will
continue to be unrestricted until at least one user is added. The first user must be a Super User.
If Windows or ADFS Authentication are being used then the first user will default to the currently
logged in user, although this can be changed if required.

If Non-Windows Authentication is enabled then additional information must be entered to define the
non-Windows user.
