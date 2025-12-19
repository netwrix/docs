---
title: "Mobile Service"
description: "Mobile Service"
sidebar_position: 10
---

# Mobile Service

The Mobile service enables the GroupID mobile app to communicate with the GroupID server, enabling
it to work on smartphones.

NOTE: The GroupID app can connect with the Mobile service over HTTP and HTTPS. For HTTPS, a security
certificate from a trusted certification authority is required.

The app enables users to manage the following in an identity store from their smartphones:

- Search the directory
- Validate their directory profile
- Enroll their identity store accounts
- Join and leave semi-private and public groups
- View the groups they own and the groups they are members of
- Approve and deny workflow requests
- Make phone calls and send emails to users and contacts
- Change their identity store account password
- Reset their identity store account password
- Unlock their identity store account

Actions performed in the app are logged in Admin Center history. See the
[History in GroupID](/docs/directorymanager/11.0/signin/concepts/history.md) topic.

To secure access to the app, the administrator can enable the following for an identity store:

- Second factor authentication: applies when users sign into the app.
- Multifactor authentication: applies when users change their identity store passwords, reset their
  passwords, or unlock their accounts using the app.

## Installation and Configuration

By default, one Mobile service is created in Admin Center. You can create and deploy one or more
Mobile services in native IIS, remote IIS, and Docker. You can also create multiple instances of the
same service. For more info, refer to
the [Host a Portal](/docs/directorymanager/11.0/signin/applications/portal/create.md#host-a-portal)
topic.

After creating a Mobile service, you can configure the following for it:

**In Admin Center**

- [Server Settings](/docs/directorymanager/11.0/signin/service/mobileservice/server/overview.md),
  that control deployment settings and file logging.
- [Design Settings](/docs/directorymanager/11.0/signin/service/mobileservice/design/overview.md),
  that control what users can view and do in an identity store using the app.

**On a smartphone**

The Android, Windows, and iOS versions of the GroupID app are available on Google Play, Windows
Store, and App Store respectively. To install and configure the app, see the
[Install and Configure the GroupID App](/docs/directorymanager/11.0/signin/service/mobileservice/phonesetup.md)
topic.

See Also

- [GroupID Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Services](/docs/directorymanager/11.0/signin/service/overview.md)
