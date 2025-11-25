---
title: "Adjust Security Event Log Size and Retention"
description: "Adjust Security Event Log Size and Retention"
sidebar_position: 80
---

# Adjust Security Event Log Size and Retention

Defining the Security event log size is essential for change auditing. If the log size is
insufficient, overwrites may occur before data is written to the Long-Term Archive and the Audit
Database, and some audit data may be lost.

To prevent overwrites, you can increase the maximum size of the Security event log and set retention
method for this log to “_Overwrite events as needed_”.

To adjust your Security event log size and retention method, follow the procedure described below.

To read about event log settings recommended by Microsoft, refer to the following article:
[Event Log](https://support.microsoft.com/en-us/help/957662/recommended-settings-for-event-log-sizes-in-windows).

To increase the maximum size of the Security event log and set its retention method

1. Open the **Group Policy Management** console on any domain controller in the target domain:
   navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
   Administrative Tools (Windows 2012) **Group Policy Management.**
2. In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`** **> Domain
   Controllers**. Right-click the effective domain controllers policy (by default, it is the
   **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
3. Navigate to **Computer Configuration > Policies > Windows Settings > Security Settings > Event
   Log** and double-click the **Maximum security log size** policy.

    ![manualconfig_grouppolicymaxsecuritysizewinserver2016](/images/1secure/configuration/logonactivity/manualconfig_grouppolicymaxsecuritysizewinserver2016.webp)

4. In the Maximum security log size Properties dialog, select **Define this policy setting** and set
   maximum security log size to **4194240** kilobytes (4GB).
5. Select the **Retention method for security log** policy. In the Retention method for security log
   Properties dialog, check **Define this policy** and select **Overwrite events as needed**.
6. Run the following command to update group policy:

    `gpupdate /force`

If "Overwrite" option is not enough to meet your data retention requirements, you can use
_auto-archiving_ option for Security event log to preserve historical event data in the archive
files. With that option enabled, you may want to adjust the retention settings for log archives
(backups). Related procedures are described in the
[Auto-archiving Windows Security log](/docs/kb/auditor/configuration-and-setup/windows-server-monitoring/auto-archiving-windows-security-log)
Netwrix Knowledge Base article.
