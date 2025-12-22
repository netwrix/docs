---
title: "Best Practices and Troubleshooting"
description: "Best Practices and Troubleshooting"
sidebar_position: 60
---

# Best Practices and Troubleshooting

This topic provides general best practices and basic troubleshooting that you should take into
consideration when using the Administration Console.

## Best Practices

**Best Practice #1 – Collect What You Need, NOT Everything**

While Threat Prevention is capable of collecting many events, it is recommended to carefully scope
policies, e.g. admin group membership, finance data access, or VIP mailbox non-owner logons.
Excessive data events accumulating from monitoring everything can overwhelm the Threat Prevention
user with ‘noise', fill the Threat Prevention databases prematurely, and adversely impact
performance on the Agent server (domain controller, file server, or Exchange server).

For best results, target the at-risk, sensitive, and suspect objects and activities for auditing and
blocking:

- Financial data
- Research and development data
- Administrative accounts
- C-Level accounts and mailboxes
- Users and data that may be used or accessed suspiciously, or may be compromised

**Best Practice #2 – Database Maintenance? Use It!**

The [Database Maintenance Window](/docs/threatprevention/7.5/admin/configuration/databasemaintenance/overview.md) enables
you to set options that automatically groom the database to optimize performance.  
Whether choosing to archive or delete data, this is always a good feature to enable.

**Best Practice #3 – Analytics? Turn on One at a Time & Tune**

Analytics provide organizations with the ability to capture and analyze authentication or file
system traffic. The best way to employ analytics is to turn on one at a time and then ‘tune’ it to
the targeted environment before turning on another. Each environment generates unique authentication
or file system ‘noise’ that can be filtered out by adjusting triggers and filters. Once the analytic
is in tune with the environment, move to the next one desired.

**Best Practice #4 – Monitor before Blocking**

The lockdown event types are used to block events. When configuring a blocking policy, it is always
a best practice to configure and enable a monitoring policy with the desired filters first as a
trial run. This will allow you to ensure the filters set will block events the way they were
intended. Once the desired filters are confirmed, then the blocking policy is good-to-go.

**Best Practice #5 – File System ‘Read’ Monitoring, in Moderation**

It is recommended to limit the use of monitoring Read events within a file system to those files
containing very sensitive data (e.g. super-secret blends of herbs and spices, launch codes, etc.).
The volume of Read events in most environments can fill the Threat Prevention databases prematurely.

## Troubleshooting FAQs

The following information provides basic troubleshooting techniques and frequently asked questions
(FAQs) for the Administration Console users.

**FAQ: Microsoft just released a security bulletin that impacts LSASS. How do I know if the Microsoft KB will affect the Agent instrumentation?**

The Agent has been configured to monitor LSASS after a reboot (triggered by the Microsoft KB). If
LSASS stops shortly after a reboot (default within five minutes), then the Agent will be stopped and
the Agent service will be changed to manual start.

:::info
Reach out to [Netwrix Support](https://www.netwrix.com/support.html) prior to
restarting the Agent, as a hotfix may exist which will prevent future issues with that Microsoft
Security Bulletin.
:::


Threat Prevention sends the _LSASS process terminated_ alert when the LSASS process stops shortly
after a reboot. The Agent stops and all monitoring/blocking by that Agent stops. To resolve the
issue, either upgrade to the latest version of the Agent or simply upgrade
SI.ActiveDirectoryMonitor.dll - commonly known as ADMonitor DLL (recommended). See the
[Upgrade ADMonitor](/docs/threatprevention/7.5/admin/agents/agent-management/upgradeadmonitor.md)topic for additional information.

:::info
Activate an email notification for the _LSASS process terminated_ alert. See the
[Enable the 'LSASS Process Terminated' Email Alert](/docs/threatprevention/7.5/troubleshooting/lsass.md#enable-the-lsass-process-terminated-email-alert)
topic for additional information.
:::


**FAQ: The user interface is not displaying correctly and windows are cut off. What should I do?**

If any of the dialogs in the Administration Console have buttons or other user interface (UI)
elements hidden or partially hidden, then you are advised to reduce their Windows font size. For
example, some high resolution laptops may have their system font size set to a default of “Medium”.
In such cases it may be necessary to change this to “Small” for all dialogs in theconsole to be
displayed fully.

**FAQ: How are Active Directory and Authentication raw events handled by Threat Prevention?**

There are two streams of data with their own memory buffers: one for Active Directory and another
for Authentication traffic. This allows the Active Directory event data to flow without interruption
even if there is a flood of Authentication traffic. A flood in Authentication traffic could result
in a loss of Authentication event data. However, this will not impact Active Directory event data.

**FAQ: How can I prevent flooding the memory with authentication traffic?**

The options in the
[Event Filtering Configuration Window](/docs/threatprevention/7.5/admin/configuration/eventfilteringconfiguration.md)
provide administrators with a method of filtering out authentication event data from selected hosts
and/or accounts. These options can be configured to ignore authentication traffic from sources known
to be safe. This affects what gets sent to the Agent. It will have a direct impact on scalability
for the organization’s environment.
