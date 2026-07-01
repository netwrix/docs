---
title: "Version 26.6.101.34168"
description: "List of all changes introduced in Netwrix Password Secure version 26.6.101"
sidebar_position: 6
---

## Fixed
### Server
- An issue prevented permission templates and organizational unit inheritance from applying when creating a password. Only the password's creator received permissions for it. Existing passwords aren't corrupt: after you install the update, the correct permissions apply to affected passwords the next time the user logs in.

### Server Manager
- An issue caused the database wizard to fail when you created a database without selecting a template. This issue no longer occurs.

### Web application
- Early web-app calls no longer flood the server log.
- Wrong styling caused the third line of passwords, directory services, and other lists to appear incorrectly. This issue no longer occurs.
