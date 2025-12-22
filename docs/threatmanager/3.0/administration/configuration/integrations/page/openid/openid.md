---
title: "OpenID Authentication Provider"
description: "OpenID Authentication Provider"
sidebar_position: 20
---

# OpenID Authentication Provider

OpenID is an open standard for authentication that allows users to log into multiple websites using
a single set of credentials, eliminating the need for multiple usernames and passwords. Unlike
traditional authentication methods, OpenID delegates authentication to a third-party provider,
allowing users to authenticate with their chosen identity provider.

Follow the instructions to integrate the OpenID authentication provider with Threat Manager.

![Integrations interface displaying the details for an OpenID authneication provider](/images/threatmanager/3.0/administration/configuration/integrations/authenticationprovider/openid.webp)

The details page for an OpenID authentication provider has two tabs:

- Configuration
- Users/Groups

## Configuration Tab

Configure the following settings for an OpenID provider on the Configuration tab:

![Configuration tab for an OpenID authneication provider](/images/threatprevention/7.5/reportingmodule/configuration/integrations/authenticationprovider/configurationopenid.webp)

- Default – The default profile applied when a user is assigned multiple authentication profiles.
  When off, the profile will be determined in alphabetical order of the profile name. Toggle off and
  on as desired.
- Authority – The OpenId Connect provider authority URI. Out-going redirection requires the correct
  Authority path to be set. Incorrect settings will generally result in a 404 error.
- Client Id – The ID assigned to an application that allows it to request authentication and
  interact with the identity provider
- Login Type – The login type to use to log into the account. Use the drop-down menu to select one
  of the following: Sam Account Name, User Principal Name, Email Address, or Sid
- User Source – The source type to use to validate the user from the token. Use the drop-down menu
  to select one of the following: Introspection, User Info, Token Parse, or Id Token Parse
- User Source Field – The field in the token to use for validating the user

Click Save to commit the configuration settings.

## Users/Groups Tab

The Users/Groups tab displays users and groups that are currently assigned to this authentication
profile. To give access to the application to new users, click the New Access button, which opens
the Add Console Access window. To assign this authentication provider to existing users, go to
System Settings > User Access Page.

![UserGroups tab for an authneication provider](/images/threatmanager/3.0/administration/configuration/integrations/authenticationprovider/usersgroupssamltab.webp)

The table displays the following information:

- Access rule type – Indicates the access type as _Allow_, which enables console access, or _Deny_,
  which disables console access
- Login name – The NTStyle domain name for the user or group account
- Display name – The display name for the user or group account
- Domain name – Name of the domain. This may be either the domain DNS name or domain controller
  hostname.
- Role – The role assigned to the user or group for accessing this application
- Authentication Type – Type of MFA authentication assigned to the user or group
- Action – This column has the following icons for conducting actions on the user or group:

    - Edit icon – Allows you to edit the columns in the selected row by enabling drop-down menus.
      The edit icon changes to a save icon while in edit mode.
    - Trash icon – Opens a Warning window to confirm the action of deleting the user or group.
      Removing a user or group removes console access for it.
    - Reset MFA button – Forces the user or every user in the group to reconfigure MFA on the next
      login. This option is only available if an MFA authentication type is applied to the user or
      group.

See the [User Access Page](/docs/threatmanager/3.0/administration/configuration/systemsettings/useraccess.md) topic for additional information.
