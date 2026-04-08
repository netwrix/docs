---
title: "Windows File Servers"
description: "Windows File Servers"
sidebar_position: 70
---

# Windows File Servers

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

## Configuration Overview

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - On the Windows file server:

        - For a security principal (e.g., Everyone), the following options must be configured in the
          Advanced Security > Auditing settings for the audited shared folders:

            | Advanced Security Option                                    | Setting              |
            | ----------------------------------------------------------- | -------------------- |
            | List Folder / Read Data (Files only)                        | "Success" and "Fail" |
            | List Folder / Read Data (This folder, subfolders and files) | "Fail"               |
            | Create Files / Write Data\*                                 | "Success" and "Fail" |
            | Create Folders / Append Data\*                              | "Success" and "Fail" |
            | Write Extended Attributes\*                                 | "Success" and "Fail" |
            | Delete Subfolders and Files\*                               | "Success" and "Fail" |
            | Delete\*                                                    | "Success" and "Fail" |
            | Change Permissions\*                                        | "Success" and "Fail" |
            | Take Ownership\*                                            | "Success" and "Fail" |

            \* Select "Fail" only if you want to track failure events, it is not required for
            success events monitoring.

            **NOTE:** If you want to get only state-in-time snapshots of your system configuration,
            limit your settings to the permissions marked with \* and set it to "Success" (Apply
            onto: This folder, subfolders and files).

        - The following Advanced audit policy settings must be configured:

            - The Audit: Force audit policy subcategory settings (Windows 7 or later) security
              option must be enabled.
            - **NOTE:** If you want to get only state-in-time snapshots of your system
              configuration, limit your audit settings to the following policies:

                | Advanced Audit Policy                     | Setting   |
                | ----------------------------------------- | --------- |
                | Object Access > Audit File Share          | "Success" |
                | Object Access > Audit Handle Manipulation | "Success" |
                | Policy Change > Audit Audit Policy Change | "Success" |

        - The following legacy policies can be configured instead of advanced:

            - Audit object access policy must set to "Success" and "Failure."
            - Audit logon events policy must be set to "Success."
            - Audit system events policy must be set to "Success."
            - Audit policy change must be set to "Success."

        - The Security event log maximum size must be set to 4GB. The retention method of the
          Security event log must be set to _“Overwrite events as needed”_.
        - The Remote Registry service must be started.
        - The following inbound Firewall rules must be enabled:

            - Remote Event Log Management (NP-In)\*
            - Remote Event Log Management (RPC)\*
            - Remote Event Log Management (RPC-EPMAP)\*
            - Windows Management Instrumentation (ASync-In)
            - Windows Management Instrumentation (DCOM-In)
            - Windows Management Instrumentation (WMI-In)
            - Network Discovery (NB-Name-In)
            - File and Printer Sharing (NB-Name-In)
            - File and Printer Sharing (Echo Request - ICMPv4-In)
            - File and Printer Sharing (Echo Request - ICMPv6-In)

                **NOTE:** The rules marked with \* are required only if you do not want to use
                network traffic compression for auditing.

            - If you plan to audit Windows Server 2019 or Windows 10 Update 1803 without network
              compression service, make sure the following inbound connection rules are enabled:

                - Remote Scheduled Tasks Management (RPC)
                - Remote Scheduled Tasks Management (RPC-EMAP)

    - On the Auditor console computer:

        - If your file shares contain symbolic links and you want to collect state-in-time data for
          these shares, the local-to-local, local-to-remote, remote-to-local, and remote-to-remote
          symbolic link evaluations must be enabled on the computer that hosts Auditor Server.

Consider the following:

- To collect data from 32-bit operating systems, network traffic compression must be disabled.
- To collect data from Windows Failover Cluster, network traffic compression must be enabled.
- Scale-Out File Server (SOFS) cluster is not supported.
- Auditing of files and folders placed directly into the DFS namespace root is not supported, as
  such configuration is not recommended by Microsoft. (See the Microsoft
  [Placing files directly in the namespace share](https://learn.microsoft.com/en-us/archive/blogs/askds/common-dfsn-configuration-mistakes-and-oversights#placing-files-directly-in-the-namespace-share)
  article for additional information.) Make sure the UNC path of a shared folder is placed within a
  share targeted by a DFS folder.

## Configuration Steps

Follow the steps to configure Windows File Servers for auditing:

**Step 1 –** Check requirements. Make sure the Windows File Servers you want to monitor meet the
requirements.

**Step 2 –** Decide on audit data to collect.

- Review the list of objects and attributes that can be monitored by Auditor: See the
  [File Servers](/docs/auditor/10.8/configuration/fileservers/overview.md)topic for additional information.
- Plan for the file servers and shares you want to audit:
-   - If you have multiple file shares frequently accessed by a significant number of users, it is
      reasonable to audit object changes only. Tracking all events may result in too much data
      written to the audit logs, whereas only some part of it may be of any interest.
    - Audit flags must be set on every file share you want to audit.
    - If your file shares are stored within one folder (or disk drive), you can configure audit
      settings for this folder only. As a result, you will receive reports on all required access
      types applied to all file shares within this folder. It is not recommended to configure audit
      settings for system disks.
    - By default, Auditor will monitor all shares stored in the specified location, except for
      hidden shares (both default and user-defined). If you want to monitor user-defined hidden
      shares, select the related option in the monitored item settings.
    - Administrative hidden shares like default system root or Windows directory (_ADMIN$_), default
      drive shares (_D$, E$_), etc. will not be monitored, unless explicitly added as a share Item.

**Step 3 –** Review considerations and limitations:

**The following considerations and limitations refer to data collection:**

- To collect data from 32-bit operating systems, network traffic compression must be disabled.
- To collect data from Windows Failover Cluster, network traffic compression must be enabled.
- Scale-Out File Server (SOFS) cluster is not supported.
- Several constraints apply to DFS auditing. See the DFS-Related Constraints topic for additional
  information.

**The following considerations and limitations refer to reporting:**

- In the reports and search results, in some cases, Auditor displays not the actual time when the
  event occurred but data collection time.
- Auditor may report on several unexpected changes with _who_ (initiator's account) reported as
  _system_ due to the native Windows File Servers audit peculiarities. If you do not want to see
  these changes, exclude them from the audit. See the [File Servers](/docs/auditor/10.8/configuration/fileservers/overview.md) topic for
  additional information. For example - mass file removals, when target Windows server generates too
  many events at a time and the product is unable to parse their sequences correctly.
- Due to Windows limitations, the _copy/rename/move_ actions on remote file shares may be reported
  as two sequential actions: copying – as adding a new file and reading the initial file;
  renaming/moving – as removing the initial file and adding a new file with the same name.
- To report on _copy_ actions on remote file shares, make sure that audit of successful read
  operations is enabled. See the [Configure Object-Level Access Auditing](/docs/auditor/10.8/configuration/fileservers/windows/objectlevel.md) topic for
  additional information.

**Step 4 –** Apply required audit settings.

Depending on your auditing requirements, you may need to audit your file server objects for:

- Successful read attempts
- Successful modifications
- Failed read and modification attempts
- Failed modification attempts

For that, object-level audit settings and appropriate audit policies should be set up. Besides, the
following should be configured for your Windows file servers:

- Windows Event log size and retention settings
- Remote registry service
- Inbound connection rules for Windows firewall

You can apply required audit settings to your Windows file servers in one of the following ways:

- **Automatically** when creating a monitoring plan.

    In this case, the audit settings will be applied automatically, then they will be periodically
    checked and adjusted if necessary. See the
    [Create a New Monitoring Plan](/docs/auditor/10.8/admin/monitoringplans/create.md) topic for additional
    information.

- **Manually.** To configure your Windows File Servers for monitoring manually, perform the
  following procedures:

    - [Configure Object-Level Access Auditing](/docs/auditor/10.8/configuration/fileservers/windows/objectlevel.md)
    - [Configure Local Audit Policies](/docs/auditor/10.8/configuration/fileservers/windows/localpolicy.md) or
      [Configure Advanced Audit Policies](/docs/auditor/10.8/configuration/fileservers/windows/advancedpolicy.md)
    - [Configure Event Log Size and Retention Settings](/docs/auditor/10.8/configuration/fileservers/windows/eventlog.md)
    - [Enable Remote Registry Service](/docs/auditor/10.8/configuration/fileservers/windows/remoteregistryservice.md)
    - [Windows File Server Ports](/docs/auditor/10.8/configuration/fileservers/windows/ports.md)

With automatically applied settings, initial SACL configuration for DFS replication links may take
longer than with manual configuration — however, automatic configuration will help to minimize the
impact on the DFS backlog and replication process in general.

**Step 5 –** Configure Data Collecting Account. See the
[Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/dataaccounts.md) topic for additional
information.

**Step 6 –** Configure required protocols and ports. Set up protocols and ports. See the
[Dell Data Storage Ports](/docs/auditor/10.8/configuration/fileservers/delldatastorage/ports.md) topic for additional information.

## DFS-Related Constraints

Perform the following steps if planning to audit DFS files and folders:

**Step 1 –** Auditor supports auditing of DFS and clustered file servers if Object Access Auditing
is enabled on DFS file shares or on every cluster node.

**Step 2 –** When adding a cluster file server for auditing, it is recommended to specify a server
name of the **Role** server or a UNC path of the shared folder located on the **Role** server.

**Step 3 –** When adding a DFS file share for auditing, specify a Windows file share item and
provide the UNC path of the whole namespace or UNC path of the DFS link (folder). For example:

- _"\\domain\dfsnamespace\"_ (domain-based namespace)
- _"\\server\dfsnamespace\"_ (in case of stand-alone namespace);

Auditing of files and folders placed directly into the DFS namespace root is not supported, as such
configuration is not recommended by Microsoft. See the
[Placing files directly in the namespace share](https://docs.microsoft.com/en-us/archive/blogs/askds/common-dfsn-configuration-mistakes-and-oversights#placing-files-directly-in-the-namespace-share)
section of the Microsoft article for additional information. Make sure the UNC path of a shared
folder is placed within a share targeted by a DFS folder.

For recommendations on configuring DFS replication, refer to the following Netwrix knowledge base
article:
[Why did loss of performance occur when configuring audit settings for Windows File Servers?](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/auditing-distributed-file-systems-with-replication-in-netwrix-auditor).
Remember that replication of namespace roots is not supported.

## File Servers and Antivirus

It is strongly recommended that you add the following executables to the list of exclusions for 
your antivirus on the audited targets when 'Enable network traffic compression' is checked 
in the MP UI configuration:

- C:\Windows\SysWOW64\NwxExeSvc\NwxExeSvc.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxEventCollectorAgent.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxFsAgent.exe
- C:\Windows\SysWOW64\NwxExeSvc\NwxSaclTunerAgent.exe

Otherwise, significant delays and performance issues may occur while collecting data.

This happens because these executables access a large number of file server objects (files,
folders), fetching audit data — and your antivirus may treat this as a suspicious behavior.

For some antiviruses (for example, Trend Micro) you may need to specify the folders to exclude, that
is, **C:\Windows\SysWOW64\NwxExeSvc**. Refer to your antivirus documentation for details.

## Monitored Objects

The following table lists the actions that can be performed with Windows-Based File Shares:

|                          | File | Folder | Share |
| ------------------------ | ---- | ------ | ----- |
| Added                    | +    | +      | +     |
| Add (failed attempt)     | +    | +      | –     |
| Modified                 | +    | +      | +     |
| Modify (failed attempt)  | +    | +      | +     |
| Moved                    | +    | +      | –     |
| Move (failed attempt)    | –    | –      | –     |
| Read                     | +    | –      | –     |
| Read (failed attempt)    | +    | +      | +     |
| Renamed                  | +    | +      | –     |
| Renamed (failed attempt) | –    | –      | –     |
| Removed                  | +    | +      | +     |
| Remove (failed attempt)  | +    | +      | –     |
| Copied                   | +    | –      | –     |
