---
title: "Get Started with Directory Manager"
description: "Learn about the Directory Manager clients, the initial Admin Center configuration, supported browsers and devices, and supported languages."
keywords:
  - Directory Manager clients
  - Admin Center configuration
  - identity store setup
  - supported browsers
  - language support
sidebar_position: 3
---

# Get Started with Directory Manager

This page introduces the following:

- Directory Manager clients
- Initial Admin Center configuration after installation
- Compatible devices and browsers
- Supported languages

## Clients

Directory Manager includes these main modules, called clients:

- **Admin Center**: The administrative console. Administrators use it to configure the settings and controls that Directory Manager needs to function.
- **Directory Manager portal**: The user-facing portal. Administrators and users create and manage directory objects, sync data between providers, manage entitlements for file servers and SharePoint sites, and generate reports to analyze the directory.
- **Self-Service Password Reset portal (SSPR)**: Users manage their directory account passwords with this portal. A directory account password is the password for the account they use to access their workstations and other Microsoft services. Users can change and reset their passwords and unlock their accounts. They can also enroll their accounts in Directory Manager and link accounts in different identity stores.
- **Management Shell**: A command-line interface for users who are comfortable with scripts. Use Management Shell cmdlets to perform several group and user management functions as an alternative to the Directory Manager portal.
- **APIs**: Integrate other applications with Directory Manager to perform several user management and group management functions.

## Initial Admin Center configuration

After you install and configure Directory Manager, the Super Admin is the only user who can sign in to Admin Center. For more information, see the [Sign In to Directory Manager Admin Center](/docs/directorymanager/11.1/admincenter/signin.md) topic.

The Super Admin must create an identity store and configure security roles so that other users can sign in and use the application. The Super Admin can configure further settings or let another admin user in an identity store do so.

Configure these settings in Admin Center so that administrators and users can perform identity and access management tasks in Directory Manager:

- **Create and configure identity stores**: An identity store is built on an identity provider. It lets you manage objects and object permissions in the provider. For more information, see the [Identity Stores in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/overview.md) topic.
- **Create data sources**: A data source is built on a provider, such as directories, databases, and files. Data sources serve as the source and destination in Synchronize jobs, in query-based searches, and in group membership queries. For more information, see the [Data Sources in Directory Manager](/docs/directorymanager/11.1/admincenter/datasource/overview.md) topic.
- **Create a portal**: Create a web-based Directory Manager portal and link it to an identity store. Users can then carry out user, group, and entitlement management tasks. For more information, see the [Directory Manager Portal](/docs/directorymanager/11.1/admincenter/applications/portal/overview.md) topic.
- **Create an SMS gateway account**: Directory Manager uses an SMS gateway account to send text messages to users' mobile numbers. The messages can include verification codes and password reset links. For more information, see the [SMS Gateway Support in Directory Manager](/docs/directorymanager/11.1/admincenter/smsgateway/overview.md) topic.

## Compatibility

This section lists the browsers, devices, and languages that Directory Manager supports.

- Directory Manager runs on all modern desktop, laptop, and tablet devices.
- Directory Manager supports the latest versions of these browsers:

  - Microsoft Edge
  - Safari
  - Google Chrome
  - Mozilla Firefox

## Localization

Directory Manager supports these languages:

- English, United States (default)
- French (Password Center, Portal)

Directory Manager detects the language setting in your web browser and displays content in that language when available. Some services or features might not be fully localized in your language. These parts display in English. If your browser's language isn't supported or can't be detected, all content displays in English.
