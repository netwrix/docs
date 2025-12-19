---
title: "Settings"
description: "Settings"
sidebar_position: 70
---

# Settings

As soon as you are logged in to the **Netwrix Password Secure App**, you can access the **settings**
via the three dots at the very top left of the screen. These will be briefly explained here.

![MobileApp - settings](/images/passwordsecure/9.2/configuration/mobiledevices/settings/settings-ma-en.webp)
![MobileApp - settings](/images/passwordsecure/9.2/configuration/mobiledevices/settings/settings-2-ma-en.webp)

#### General

Hide personal tab

In some use cases personal passwords are not needed on the mobile device. If this is the case you
can hide the tab with the personal passwords.

Show all passwords in search tab

If this option is deactivated, a search will always refer to the opened tab only. This can be useful
if there are several records in the database which have the same name and can only be distinguished
by the affiliation to an organizational unit.

#### Security

Touch ID / Face ID

Here the login via Face ID or Touch ID can be activated and deactivated.

Automatic logout

Automatic logout from the app can be enabled and configured here.

#### Synchronization

Automatic synchronization

How to synchronize with the main database is configured here. The following options are available:

- **Any type of connection:** as long as there is a connection, synchronization will take place. No
  matter if it is a WLAN connection or a connection via the mobile network.
- **Only for WLAN connection:** Synchronization only takes place if there is a connection via WLAN.
- **Disabled:** It is not synchronized

NOTE: Costs may be incurred for synchronization via the mobile network!

Synchronize now

Starts the synchronization. This can also be started outside the settings at any time by simply
swiping down. More information can also be found in the chapter
[Synchronization](/docs/passwordsecure/9.3/configuration/mobiledevices/synchronization.md).

Fix sync errors

This menu item first checks for errors caused by the synchronization. If there are such errors you
get the possibility to repair them or to overwrite them with the current state of the server
database.

#### Logging

Logging

Here you can activate or deactivate the logging.

Show log file

If logging is active, the log file can be displayed here.

Delete log file

Logs that are no longer needed can be deleted here.
