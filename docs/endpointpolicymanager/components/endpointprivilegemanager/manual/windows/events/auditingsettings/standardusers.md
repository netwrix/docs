---
title: "Discovery for Elevated Apps with Standard Users"
description: "Discovery for Elevated Apps with Standard Users"
sidebar_position: 20
---

# Discovery for Elevated Apps with Standard Users

Using the Audit applications requiring elevation setting is useful after you have removed local
admin rights and users are running as Standard Users. At this point, even though you have created
rules to overcome UAC scenarios, there will still be occasions when a user attempts to perform a
scenario which requires UAC prompts, but there is no rule yet in place to overcome that UAC prompt.

Here, you can see what happens when a Standard User attempts to run **Turn Windows features on or
off**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/auditingsettings/discovery_for_elevated_apps_1.webp)

:::note
At this time, Endpoint Policy Manager (formerly PolicyPak) Least Privilege Managerr
Discovery cannot detect some scenarios that may trigger UAC prompts which should be recorded. These
items are (a) COM elevation, used by network adapters, date & time, etc. (b) Windows Installers, and
(c) apps that use ShellExecute or RunAs, such as ProcMon or TreeSizeFree.

:::



