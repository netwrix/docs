---
title: "Active Directory: automatic configuration"
description: "Active Directory: automatic configuration"
sidebar_position: 20
---

# Active Directory: automatic configuration

This is a recommended method of applying Active Directory audit settings required by Netwrix 1Secure
to monitor your AD domain. With this approach, 1Secure checks your current audit settings at each
data collection session and adjusts them if necessary.

To adjust audit settings automatically, do any of the following:

- When connecting Active Directory in the connect wizard, select **Let 1Secure manage audit policy**. It turns on auditing on your domain controllers so that 1Secure's reports and alerts have data. Turn it off if you manage audit policy yourself, for example with Netwrix Auditor.

- For the existing organization, modify data collection settings for Active Directory, selecting
  **Adjust audit settings automatically** option. Netwrix will continuously enforce the relevant audit policies in your environment.

The audit policy option is available for the following connectors:

- Active Directory Activity
- Active Directory Logons
- Group Policy Activity
- File Server Activity
- File Server State
- Windows Server Activity

See also:

- [Configure Domain for Monitoring Active Directory](/docs/1secure/configuration/admanual/admanual.md)
- [Active Directory: manual configuration](/docs/1secure/configuration/admanual/cfgmanual.md)
