---
description: >-
  Shows how to enable automatic archiving of the Windows Security event log
  centrally for all domain controllers using Group Policy, and how to adjust
  retention settings for the archived logs on the Netwrix Auditor server.
keywords:
  - Windows Security log
  - auto-archive
  - event log
  - Group Policy
  - Netwrix Auditor
  - archive retention
  - CleanAutoBackupLogs
  - domain controllers
  - gpupdate
products:
  - auditor
sidebar_label: Auto-archiving Windows Security log
tags: []
title: "Auto-archiving Windows Security log"
knowledge_article_id: kA04u000000Pcx6CAC
---

# Auto-archiving Windows Security log

To prevent data overwrites, you can increase the maximum size of the Security event log and set the retention method for this log to **Overwrite events as needed**. However, if the **Overwrite** option is not enough to meet your data retention requirements, you can use the *auto-archiving* option for the Security event log. This will allow you to preserve historical event data in the archive files. This option can be enabled centrally for all domain controllers, using the procedure described below. In such a scenario, the logs will be automatically archived when necessary (no events will be overwritten).

## To enable Security log auto-archiving centrally for all domain controllers

1. Open the Group Policy Management console on any domain controller in the target domain: navigate to **Start → Windows Administrative Tools** (Windows Server 2016 and higher) or **Administrative Tools** (Windows 2012) → **Group Policy Management**.
2. In the left pane, navigate to Forest: **`&lt;forest_name&gt;` → Domains → `&lt;domain_name&gt;` → Domain Controllers**.
3. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
4. Navigate to **Computer Configuration → Policies**.
5. Right-click **Administrative Templates: Policy definition**s and select **Add / Remove templates**.
6. Click **Add** in the dialog that opens.
7. In the **Policy Templates** dialog, navigate to ` %Netwrix Auditor Server installation folder%/Active Directory Auditing`, select the `Log Autobackup.adm` file (if the product is installed on a different computer, copy this file to the domain controller), and click **Open** to add the template.
8. Navigate to **Computer Configuration → Policies → Administrative Templates: Policy Definitions → Windows Component → Event Log Service → Security**.
9. Check the following:
   - For Windows Server 2012 and later, the following options must be enabled:
     - **Back up log automatically when full**
     - **Control Event Log behavior when the log file reaches its maximum size**
   - For Windows Server 2008 / 2008 R2, the following options must be enabled:
     - **Back up log automatically when full**
     - **Retain old events**
10. Open the command prompt, type `gpupdate /force` and press Enter. The group policy will be updated.

With the automatic log backup enabled, you may want to adjust the retention settings for log archives (backups). The default retention period for these files is **50 hours**; when it expires, log archives are deleted. To adjust this setting, follow the procedure described below.

## To adjust retention settings for log archives

1. On the computer where Netwrix Auditor is installed, open Registry Editor.
2. Navigate to `HKEY_LOCAL_MACHINE → SOFTWARE → Wow6432Node → Netwrix Auditor → AD Change Reporter`.
3. In the right-pane, right-click and select **New → DWORD (32-bit Value)**.
4. For the backup logs retention functionality to work properly, you need to specify the `CleanAutoBackupLogs` name for the newly created registry value.
5. Double-click `CleanAutoBackupLogs`. The **Edit DWORD Value** dialog will open.
6. This value defines the time period (in hours) after which security event logs archives will be automatically deleted from the domain controllers. By default, it is set to `50` (decimal). Modify this value, if necessary, and click **OK** to save the changes.

**NOTE:** If the `CleanAutoBackupLogs` registry value is set to `0`, you will have to remove the old automatic backups manually, otherwise you may run out of space on your hard drive.
