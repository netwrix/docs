---
title: "What is the supported list of BLOCKED script types for Endpoint Policy Manager SecureRun™ ?"
description: "What is the supported list of BLOCKED script types for Endpoint Policy Manager SecureRun™ ?"
sidebar_position: 40
---

# What is the supported list of BLOCKED script types for Endpoint Policy Manager SecureRun™ ?

The official list is as follows and might increase without notice.

- BAT
- CMD
- JS
- JSE
- VBS
- VBE
- .PS1
- .JAR (not technically a script; but also blocked)

:::note
For .PS1, in order to enable Powershell at all, you need to make an express (ALLOW rule
for powershell.exe). That rule can be found in
[When Endpoint Policy Manager SecureRun(TM) is turned on, PowerShell won't run. How can I re-enable this?](/docs/endpointpolicymanager/components/endpointprivilegemanager/technotes/tipssecurerun/enablepowershell.md)

:::
