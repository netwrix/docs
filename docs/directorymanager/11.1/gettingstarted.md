---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 3
---

# Getting Started

To get started with Directory Manager, it would be helpful to get an understanding of the following:

- Directory Manager clients
- Initial Admin Center configurations after installation
- Compatible devices and browsers
- Supported languages

## Clients 

The Directory Manager application comprises of the following main modules or clients:

**Admin Center**

Admin Center is the administrative console that enables administrators to configure settings and
controls that are essential to the functioning of Directory Manager.

**Directory Manager portal**

This is the user-facing portal that enables administrators and users to create and manage directory
objects, sync data between providers, manage entitlements for file servers and SharePoint sites, and
generate reports to analyze the directory.

**Self-Service Password Reset portal (SSPR)**

This portal enables users to manage their directory account passwords, i.e., the password for the
account they use to access their workstations and other Microsoft services. Users can change and
reset their passwords, as well as unlock their accounts. They can also enroll their accounts in
Directory Manager and link accounts in different identity stores.

**Management Shell**

This command-line interface is intended for users who are comfortable with scripts. Use Management
Shell cmdlets to perform several group and user management functions, as an alternative to
performing those same functions from the Directory Manager portal.

**APIs**

Integrate other applications with Directory Manager to perform several user management and group
management functions.

## Initial Admin Center Configurations

After installing and configuring Directory Manager, the Super Admin is the only user who can sign
into Admin Center (see the [Access Admin Center](/docs/directorymanager/11.1/admincenter/signin.md) topic for additional
information). This user must create an identity store and configure security roles, so that other
users can sign in and use the application. The Super Admin can choose to configure further settings
or let another admin user in an identity store do so.

The following settings must be configured in Admin Center, so that administrators and users can
perform identity and access management tasks using Directory Manager:

- Create and configure identity stores - An identity store is built on an identity provider and
  enables you to manage objects and object permissions in the provider. See the
  [Identity Stores](/docs/directorymanager/11.1/admincenter/identitystore/overview.md) topic for additional information.
- Create data sources - A data source is built on a provider, such as directories, databases and
  files. Data sources are used as source and destination in Synchronize jobs, in query-based
  searches, and in group membership queries. See the
  [ Data Sources](/docs/directorymanager/11.1/admincenter/datasource/overview.md) topic for additional information.
- Create a portal - Create a web-based Directory Manager portal and link it to an identity store, so
  that users can carry out user, group, and entitlement management tasks. See the
  [ Directory Manager Portal](/docs/directorymanager/11.1/admincenter/applications/portal/overview.md) topic for additional information.
- Create an SMS gateway account - Using an SMS gateway account, Directory Manager sends text
  messages to users’ mobile numbers, which may include verification codes and password reset links.
  See the [SMS Gateway](/docs/directorymanager/11.1/admincenter/smsgateway/overview.md) topic for additional information.

## Compatibility

This section lists the browsers, devices, and languages that Directory Manager supports.

- Directory Manager can run on all modern desktop, laptop, and tablet devices.
- -Directory Manager supports the latest versions of the following browsers:

    - Microsoft Edge
    - Safari
    - Google Chrome
    - Mozilla Firefox

## Localization

Directory Manager Admin Center and the portals detect the language settings of the web browser
accessing them, and attempt to serve content in that language. Supported languages are:

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

If Directory Manager does not support the browser’s language set or if it cannot detect it, English
is used to serve the content.
