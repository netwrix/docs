---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 20
---

# Getting Started

To get started with GroupID, it would be helpful to get an understanding of the following:

- GroupID clients
- Initial Admin Center configurations after installation
- Compatible devices and browsers
- Supported languages

## GroupID Clients

The GroupID application comprises of the following main modules or clients:

- **Admin Center** - The administrative console that enables administrators to configure settings
  and controls that are essential to the functioning of GroupID.
- **GroupID portal** - The user-facing portal that enables administrators and users to create and
  manage directory objects, sync data between providers, manage entitlements for file servers and
  SharePoint sites, and generate reports to analyze your directory.
- **GroupID mobile app** - The app provides limited functions, like searching the directory and
  joining/leaving groups. These operations can also be performed through the GroupID portal, but
  it's handy to use the app.
- **Management Shell** - This command-line interface is intended for users who are comfortable with
  scripts. Use Management Shell cmdlets to perform several group and user management functions, as
  an alternative to performing those same functions from the GroupID portal.
- **APIs** - Integrate other applications with GroupID to perform several user management and group
  management functions.

## Initial Admin Center Configurations

After installing and configuring GroupID, the Super Admin is the only user who can sign into Admin
Center. (See the [Access Admin Center](/docs/directorymanager/11.0/signin/signin.md)
topic.) This user must create an identity store and configure security roles, so that other users
can sign in and use the application. The Super Admin can choose to configure further settings or let
another admin user in an identity store do so.

The following settings must be configured in Admin Center, so that administrators and users can
perform identity and access management tasks using GroupID:

- **Create and configure identity stores** - An identity store is built on an identity provider and
  enables you to manage objects and object permissions in the provider. See the
  [Identity Stores](/docs/directorymanager/11.0/signin/identitystore/overview.md)
  topic for additional information.
- **Create data sources** - A data source is built on a provider, such as directories, databases and
  files. Data sources are used as source and destination in Synchronize jobs, in query-based
  searches, and in group membership queries. See the
  [ Data Sources](/docs/directorymanager/11.0/signin/datasource/overview.md) topic.
- **Create a GroupID portal** - Create a web-based GroupID portal and link it to an identity store,
  so that users can carry out user, group, and entitlement management tasks. See the
  [GroupID Portal](/docs/directorymanager/11.0/signin/applications/portal/overview.md) topic.
- **Create an SMS gateway account** - Using an SMS gateway account, GroupID sends text messages to
  users’ mobile numbers, which may include verification codes and password reset links. See the
  [SMS Gateway](/docs/directorymanager/11.0/signin/smsgateway/overview.md) topic.

See the
[Menu Pane](/docs/directorymanager/11.0/signin/concepts/navigation.md#menu-pane) topic
for additional information.

## Compatibility

This section lists the browsers, devices, and languages that GroupID supports.

- **Supported devices** - Admin Center and the GroupID portal can run on all modern desktop, laptop,
  and tablet devices.
- **Supported browsers** - Admin Center and the GroupID portal support the latest versions of the
  following browsers:

    - Microsoft Edge
    - Safari
    - Google Chrome
    - Mozilla Firefox

## Localization

GroupID detects the language settings of the web browser accessing Admin Center or the GroupID
portal, and attempts to serve the application’s content in that language. Supported languages are:

- Danish
- Dutch
- English (default)
- Finnish
- French
- German
- Icelandic
- Italian
- Portuguese
- Spanish
- Swedish
- Turkish

If GroupID does not support the browser’s language set or if it cannot detect it, English is used to
serve the content.

See Also

- [ Installation](/docs/directorymanager/11.0/about/about.md)
- [Access Admin Center](/docs/directorymanager/11.0/signin/signin.md)
- [Access Portal](/docs/directorymanager/11.0/welcome/login.md)
- [GroupID Management Shell](/docs/directorymanager/11.0/managementshell/overview.md)
- [GroupID APIs](/docs/directorymanager/11.0/apis/welcome.md)
