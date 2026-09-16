---
title: "Configure Events and Log"
description: "Configure Events and Log"
sidebar_position: 30
---

# Configure Events and Log

Perform the following procedures to configure audit:

- To configure auditing state, event categories and log
- To configure logs retention period

To configure auditing state, event categories and log

Configure audit settings in the context of Cluster or Storage Virtual Machine (SVM). All examples in
the procedure below apply to SVM.

**Step 1 –** Create audit. For more information on audit configuration, refer to NetApp documentation. For
example:
```
vserver audit create -destination /audit -vserver svm1
```

In the example above, the creates audit configuration for `svm1` on the volume `/audit`
Netwrix Auditor accesses audit logs via file shares. Ensure the volume you specified is
mounted on SVM and shared (e.g., `audit$` or `c$\audit` and its path is `/audit`).

**Step 2 –** Enable audit:
```
vserver audit enable -vserver sm1
```

**Step 3 –** Add categories of events to be audited:
- For ONTAPI 9.0 or later
```
vserver audit modify -events file-ops, file-share -vserver svm1
```

- For ONTAPI 8.3 and below
```
vserver audit modify -events file-ops -vserver svm1
```

**Step 4 –** Check the following options:

    | Option                          | Setting                                                                                                                                                                                                                                                                                                            |
    | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `Auditing State`                | `true`                                                                                                                                                                                                                                                                                                             |
    | `Categories of Events to Audit` | `file-ops` Only required if you use Clustered Data ONTAP 8.3, ONTAP 9.0, ONTAP 9.1 or later. You cannot select event categories if you use Clustered Data ONTAP 8.2. For ONTAP 9.0 and later, also check the following options: `file-ops, file-share, audit-policy-change`. For ONTAP 8.3, just check `file-ops`. |
    | Log Format                      | "XML" or "EVTX"                                                                                                                                                                                                                                                                                                    |

**Step 5 –** Modify the log file size limit—set to 300 MB. Execute:
```
vserver audit modify -rotate-size 300MB -vserver svm1
```

300MB is the recommended maximum log size proceeding from performance evaluations. Ensure
there is enough disk space allocated for the security logs archives. Depending on the file
access activity, audit data may grow rapidly, and the location specified for the security log
(and security log auto archives) must be large enough to hold data until it is processed by
Netwrix Auditor. You can customize your security log by configuring log rotation schedule. For
detailed information, review the Planning the auditing configuration section in the
[Clustered Data ONTAP® 8.3 File Access Management Guide for CIFS.](https://library.netapp.com/ecm/ecm_download_file/ECMP1610207)

**Step 6 –** After configuration, double-check your settings.
```
vserver audit show -instance -vserver svm1
``` 

    |                                     |                             |
    | ----------------------------------- | --------------------------- |
    | Auditing State:                     | true                        |
    | Log Destination Path:               | /audit                      |
    | Categories of Events to Audit:      | file-ops, cifs-logon-logoff |
    | Log Format:                         | evtx                        |
    | Log File Size Limit:                | 300MB                       |
    | Log Rotation Schedule: Month:       | —                           |
    | Log Rotation Schedule: Day of Week: | —                           |
    | Log Rotation Schedule: Day:         | —                           |
    | Log Rotation Schedule: Hour:        | —                           |
    | Log Rotation Schedule: Minute:      | —                           |
    | Rotation Schedules:                 | —                           |
    | Log Files Rotation Limit:           | 0                           |

**NOTE:** For ONTAP 9.0 and later, also check the following settings:
`file-ops, file-share, audit-policy-change`.

For ONTAP 8.3, just check `file-ops`.
To configure logs retention period

**NOTE:** This instruction is only effective for NetApp versions older than 8.2.1.

1. On the computer where Auditor Server resides, open Registry Editor: navigate to **Start** **→
   Run** and type _"regedit"_.
2. Navigate to **HKEY_LOCAL_MACHINE → SOFTWARE → Wow6432Node → Netwrix Auditor → File Server Change
   Reporter**.
3. In the right-pane, right-click and select New → DWORD (32-bit Value).

For the backup logs retention functionality to work properly, you need to specify the
CleanAutoBackupLogs name for the newly created registry value.

[manualconfig_fileserver_netapp_createregistryvalue_2016](/images/auditor/10.7/configuration/fileservers/netappcmode/manualconfig_fileserver_netapp_createregistryvalue_2016.webp)

4. Double-click **CleanAutoBackupLogs**. The **Edit DWORD Value** dialog will open.
5. This value defines the time period (in hours) after which security event logs archives will be
automatically deleted. By default, it is set to _"0"_ (decimal). Modify this value, if necessary,
and click **OK** to save the changes.

![manualconfig_retentionperiodbackuplog_winserver2016](/images/auditor/10.7/configuration/fileservers/netappcmode/manualconfig_retentionperiodbackuplog_winserver2016.webp)

6. **NOTE:** If the **CleanAutoBackupLogs** registry value is set to _"0"_, you will have to remove
   the old logs manually, or you may run out of space on your hard drive.
