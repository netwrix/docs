---
title: "Auditing Settings"
description: "Auditing Settings"
sidebar_position: 20
---

# Auditing Settings

Using Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager to remove admin rights or
turn on SecureRun™ is going to make your machines more secure. However, that also means that some
users might not be able to perform some actions with these two security measures in place. To
mitigate this, you may need to do some research to find out just what privileges your users require.
Endpoint Policy Manager Global Settings Policy lets you set up auditing to find out what
applications require extra privileges from standard users. There are four choices:

- Audit applications requiring elevation - Help you learn, in advance of a transition, which items
  require rules and what items will need rules to overcome UAC prompts.
- Audit elevated applications - Help you learn, after a transition, which items still need rules to
  overcome UAC prompts.
- Audit untrusted applications - Help you learn, in advance or after a transition, which items that
  would be automatically blocked by SecureRun™ are, in fact, blocked by SecureRun™ and will need
  rules to overcome.
- Audit unsigned applications - Help you learn, in advance or after a transition, which items that
  would be automatically blocked by SecureRun™ if trapping for unsigned applications.

To begin the discovery process you will add a New Global Settings Policy, which can be done on
either user or computer side.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/auditingsettings/auditing_settings.webp)

When you create a Global Settings Policy, you can choose to turn on the settings shown here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/auditingsettings/auditing_settings_1.webp)

Enabling these settings will write special events to the event logs.

- Audit applications requiring elevation - Makes an audit log entry when a process is not elevated,
  but Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager sees that it requires
  elevation. We can detect Applications that specify "require elevation" in the manifest and if the
  application is a Legacy Installer (that is, a 32-bit app without a manifest and with a
  keyword—e.g. Install, Setup, etc.—in the file info). It should be noted that Endpoint Policy
  Manager (formerly PolicyPak) Least Privilege Manager does not support detection of dynamically
  elevated processes.
- Audit elevated applications - Makes audit log entries for processes that runelevated (i.e.,
  successful runs after applications are elevated). This creates an event, regardless of the reason
  why the application runs elevated. Examples scenarios for this case could include apps that always
  require elevation, apps that require elevation only when run by an admin (e.g. regedit), or
  situations in which a user selected to run a file as an administrator. It should be noted that the
  only time this setting will not write an event to the event log (as an AUDIT event) is when there
  is a Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager rule in place to perform
  the elevation, in which case it would get its own event ID type.
- Audit untrusted applications - Discovers rules needed when SecureRun™ is turned on. If an
  application is attempted, but the item’s file owner is not in the SecureRun™ list, then the
  application will be blocked when SecureRun is turned on.
- Audit unsigned applications - Discovers rules needed when SecureRun™ is turned on and the “Block
  all unsigned” option would block unsigned applications.

We'll discuss each of these auditing events in the next sections.



