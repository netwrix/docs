---
title: "Getting Started with Admin Approval"
description: "Getting Started with Admin Approval"
sidebar_position: 10
---

# Getting Started with Admin Approval

If there’s no Endpoint Policy ManagerLeast Privilege Manager rule to automatically elevate an
application (or allow it to bypass SecureRun™), the user is prompted with a special dialog to
request access.

:::note
See the [Admin Approval demo](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/adminapproval/demo.md) video for
Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager Admin Approval mode setup and
in action.
:::


Endpoint Policy Manager (formerly PolicyPak) Least Privilege Managerr’s Admin Approval works as if
the person with the Admin Approval Tool has a shared secret, which is a secret key that is deployed
to the computer.

There are three parts to Admin Approval:

- The Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager policies, which establish
  Admin Approval and its secret key
- Securing the secret key (if using Group Policy method)
- The Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager Admin Approval Tool

:::note
The secret key must be delivered to the computer. You cannot deploy the key to the user.
You could have one secret key for all computers and all admins, or you could have a secret key for
only some computers and some admins.
:::


Admin Approval will show the user the Endpoint Policy Manager Admin Approval prompt instead of the
Windows UAC prompt when any of the following conditions are true:

- The app is marked as requiring elevation by its developer (in the app manifest). You can see these
  applications easily because they typically show a Windows shield graphic in the application’s
  icon.
- The app is a legacy installer. This is defined by both Windows and Endpoint Policy Manager as a
  32-bit app without an app manifest and with one of special "setup" keywords (such as install,
  setup, and so on) in its file info.
- The app is any installer and Endpoint Policy Manager ’s Admin Approval **Enforce Admin Approval
  for all installers** option is enabled (explained later).
- Endpoint Policy Manager SecureRun™ is enabled, and the executable is run by someone not on the
  SecureRun™ list.
- The user right-clicks a file and selects **Run with Endpoint Policy Manager**.

For complete clarity, there are times when the user will still see a standard Windows UAC prompt and
not a PolicyPak Admin Approval prompt. These instances include:

- When a COM interface used by the app requires elevation (for instance, the network settings
  dialog).
- When one process creates another process and forces Windows to show the UAC prompt, as in one of
  the following instances:

  - When a user is running Acrobat Reader as a Standard User and tries to change the upgrade
    behavior. In this case, a standard Windows UAC prompt will show.
  - If a user attempts to run an application like Procmon; this is because it’s attempting to load
    a device driver, the standard Windows UAC prompt will show.

- When an installer shows the standard UAC prompt. For instance, the Chrome installer doesn't
  require admin rights (as it can install Chrome per user into %localappdata%). Regardless, the
  Chrome installer shows a UAC prompt to see if a user can or wants to install Chrome for all users.
  To help work around this issue, we provide the **Enforce Admin Approval for all installers**
  option, which is explained later.



