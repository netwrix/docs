---
title: "Version 9.2.4.33163"
description: "Version 9.2.4.33163"
sidebar_position: 7
---

# New

#### Advanced view (on web)
- It's now possible again to remove all selected legitimates from the list when changing permissions of an object.

#### Server
- The design of reports has been modernized.

#### Server Manager
- The configuration of a Syslog server now allows much more detailed settings. For example, it is now possible to specify the message format (RFC 5424 oder RFC 3164). It is also possible to connect to a Syslog server via an encrypted TCP connection now.

# Changes

#### Web app (basic and extended view)
- During login, the field for entering the user name is no longer emptied when the database name is changed.

#### Server Manager
- The old version of the Web App, displayed in the Server Manager as “Web app (Legacy)”, can no longer be created. Please use the new web app with immediate effect!

# Improvements

#### Web app (basic and extended view)
- Small visual adjustments ensure a more consistent display in the web app.

#### Server
- The performance of the software was improved in many areas.
- A third-party package containing a vulnerability was updated. We are not aware of any instances where the vulnerability was exploited.

#### Server Manager
- When adding an existing database in the Server Manager, you can now select whether the database should be activated automatically.

# Fixes
#### Extended view (on Windows & web)
- The headers in the configuration of notifications are correct again.

#### Extended view (on Windows)
- The button to open the website of a password is now disabled if no URL is configured. This also affects the offline add-on.
- We have fixed an issue where the native Windows App could become unresponsive. You no longer need to end the application via Task Manager.

#### Extended view (on web)
- When configuring the password generator in a way that is not able to generate a password, the application no longer gets unresponsive.
- When a password is revealed in the quick view, it can be entered again if a reason is required.
- The quick view no longer closes automatically when another modal, such as entering a reason, is opened.
- The browser window no longer hangs when a user's password is changed.
- Pagination in image management now works correctly.