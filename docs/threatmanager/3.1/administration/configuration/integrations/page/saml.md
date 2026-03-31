---
title: "SAML Authentication Provider"
description: "SAML Authentication Provider"
sidebar_position: 30
---

# SAML Authentication Provider

The Security Assertion Markup Language (SAML) is an XML framework for exchanging authentication and
authorization information. It provides functions to describe and transmit security-related
information. This means that you can use one set of credentials to log in to many different
websites. It is much easier to manage one login per user than separate logins for email, Customer
Relationship Management (CRM) software, Active Directory, and more.

![Integrations interface displaying the details for a SAML authneication provider](/images/threatmanager/3.0/administration/configuration/integrations/authenticationprovider/saml.webp)

The details page for a SAML authentication provider has two tabs:

- Configuration
- Users/Groups

**Prerequisites**

For users to be able to use SAML, "SMTP" must be set up and an email address must be stored with the
respective users.

## Configuration Tab

Configure the following settings for a SAML provider on the Configuration tab:

![Configuration tab for a SAML authneication provider](/images/threatprevention/7.5/reportingmodule/configuration/integrations/authenticationprovider/configurationsaml.webp)

- Default – The default profile applied when a user is assigned multiple authentication profiles.
  When off, the profile will be determined in alphabetical order of the profile name. Toggle off and
  on as desired.
- Login URI – Login URI is a specific web address where users can authenticate themselves to access
  a web application or service
- Logout Uri – A logout URI is a specific web address where users are directed to terminate their
  authenticated session in a web application or service
- Login Type – The login type to use to log into the account. Use the drop-down menu to select one
  of the following: Sam Account Name, User Principal Name, Email Address, or Sid
- User Claim – A user claim is an assertion made by the identity provider about a user, such as
  their name, role, or email, that the service provider can use for authorization decisions
- Check Certificate – If enabled, this validates the response certificate to the certificate
  provided in the Certificate field. Use the toggle button to enable and disable this setting.
- Certificate – A certificate is a digital credential used to validate the identity of parties and
  secure communications between an Identity Provider (IdP) and a Service Provider (SP)

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

See the [User Access Page](/docs/threatmanager/3.1/administration/configuration/systemsettings/useraccess.md) topic for additional information.
