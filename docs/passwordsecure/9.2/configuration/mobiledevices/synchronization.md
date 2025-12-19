---
title: "Synchronization"
description: "Synchronization"
sidebar_position: 40
---

# Synchronization

The synchronization of data between the mobile database and the server database is extremely
important. On the whole, you don't have to worry about synchronization, because the data is
automatically synchronized in the background.

Synchronization logic

First of all, it is important to note how the synchronization has been configured in the
[Settings](/docs/passwordsecure/9.2/configuration/mobiledevices/settings_mobileapp.md). A prerequisite for successful synchronization is that
the configured connection is available. This is done via https port 443, which must be enabled on
the server side. Once the prerequisites have been met, there are the following triggers for
synchronization:

- A login to the app takes place
- Swipe down in the app
- The synchronization is started in the settings of the app.
- A data record is changed in one of the two databases

Which dataset is being synchronized?

In Netwrix Password Secure, each field in a record has a timestamp. During a synchronization
synchronization, these timestamps are checked and the newer field is written to the other database.

Example:

Assuming in a record the field "Username" is changed in the Advanced view and the field "Password"
is changed in the App. "password" is changed in the app, you will have different data statuses on
both devices. After a synchronization, you will receive the changed user name and the new password
on both devices.

Settings for synchronization

The configuration is described in the chapter [Settings](/docs/passwordsecure/9.2/configuration/mobiledevices/settings_mobileapp.md)
