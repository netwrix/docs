---
title: "User-Side and Computer-Side Logs"
description: "User-Side and Computer-Side Logs"
sidebar_position: 10
---

# User-Side and Computer-Side Logs

Endpoint Policy Manager Start Screen & Taskbar Manager settings can be delivered on the User side,
Computer side, or both. Ultimately there is a single file that is created and used to deliver the
Start Screen and Taskbar layout to the user.

Here is the process the Endpoint Policy Manager client-side extension (CSE) uses when combining
policies from multiple sources:

- The Computer side is evaluated and written to an XML file.
- The User side is evaluated and written to an XML file.
- In a conflict, the Computer side wins over the User side.
- The results are combined together, and the user's final result is saved as ssmRESULTS.xml.

The resulting files are stored in

`\ProgramData\PolicyPak\PolicyPak Start Screen Manager\RSoP\User\<sid>:`

- Computer side: switched.xml
- User side: user.xml
- Final/composite XML: ssmResults.xml


