---
title: "Why won't the Endpoint Policy Manager services start, with an error like (or similar to) \"Verify that you have sufficient privileges to start system services.\"?"
description: "Why won't the Endpoint Policy Manager services start, with an error like (or similar to) \"Verify that you have sufficient privileges to start system services.\"?"
sidebar_position: 40
---

# Why won't the Endpoint Policy Manager services start, with an error like (or similar to) "Verify that you have sufficient privileges to start system services."?

If you get an error while starting the Netwrix Endpoint Policy Manager (formerly PolicyPak)
services, such as this…

```
Product: Policypak Client-Side Extension -- Error 1920. Service Policypak ' Watcher Service (64-bit)' (PPWatcherSvc64) failed to start. Verify that you have sufficient privileges to start system services.
```

It's likely your Antivirus is preventing Endpoint Policy Manager from operating. We know at least
Carbon Black will prevent Endpoint Policy Manager from running unless it's exempted.

For more information
[How must I configure my Anti-virus or system-level software to work with Endpoint Policy Manager CSE?](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/antivirus.md).

Example of error and results in Event log:

![97_1_carbonblack1](/images/endpointpolicymanager/troubleshooting/error/install/97_1_carbonblack1.webp)

