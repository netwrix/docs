---
title: "Dell Data Storage"
description: "Dell Data Storage"
sidebar_position: 10
---

# Dell Data Storage

:::note
Dell Data Storage collectively refers to Dell VNX, VNXe, Celerra, and Unity NAS devices.
:::

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. You must configure auditing properly to ensure audit data
integrity; otherwise, your change reports may contain warnings, errors, or incomplete audit data.

:::warning
You must exclude the folder associated with Netwrix Auditor from antivirus scanning. See the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.
:::

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, Auditor checks your current audit
  settings on each data collection and adjusts them if necessary.
- Manually – You must adjust native audit settings manually to collect comprehensive and reliable
  audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - On the Dell Data Storage device:

        - Enable CIFS Network Protocol support.
        - Set the security event log maximum size to 4 GiB (4294901760 bytes).
        - Set the Audit object access policy to _"Success"_ and "Failure" in the Group Policy of
          the OU that contains the audited Dell VNX/VNXe/Unity/Celerra appliance.
        - Configure audit settings for CIFS File Shares. For a security principal (e.g.,
          Everyone), set the following options to "Success" and "Fail" in the **Advanced
          Security** > **Auditing** settings for the audited shared folders:

            - List Folder / Read Data (Files only)
            - Create Files / Write Data
            - Create Folders / Append Data
            - Write Attributes
            - Write Extended Attributes
            - Delete Subfolders and Files
            - Delete
            - Change Permissions
            - Take Ownership

    - On the Auditor console computer:

        - If your file shares contain symbolic links and you want to collect state-in-time data for
          these shares, you must enable the local-to-local, local-to-remote, remote-to-local, and
          remote-to-remote symbolic link evaluations on the computer that hosts Auditor Server.

First, decide on the objects and actions you want to track. Consider the following:

- The actions Auditor reports vary depending on the file server type and the audited object (file,
  folder, or share).
- Monitoring and reporting of the Dell Data Storage systems may not provide the results you expect,
  because Dell's native auditing doesn't record every action Auditor can report on. See the
  [File Servers](/docs/auditor/10.8/configuration/fileservers/overview.md) topic for additional
  information.

For example, the _change_ operation (in Auditor terminology) includes creation, modification, and
deletion.

## Manual Configuration

To collect comprehensive audit data, you must configure your file shares for monitoring. Consider
the following:

By default, the security log overwrites events older than 10 days, and its size is 512 KB. The
default location for the security.evt log is **C:\security.evt**, which corresponds to the root
partition of the Data Mover. To increase the security log size, you must move it from the Data
Mover root folder.

**Step 1 –** [Configure Security Event Log](/docs/auditor/10.8/configuration/fileservers/delldatastorage/securityeventlog.md) to set the log path, maximum size, and retention so that the log holds enough events between data collections. Auditor
doesn't clean Dell Unity logs automatically, so the log starts overwriting when it exceeds the
limit. See the
[Unity Family Security Configuration Guide](https://support.emc.com/docu69321_Unity-Family-Security-Configuration-Guide.pdf?language=en_US) for
additional information about configuring log rollover manually.

**Step 2 –** [Configure Audit Object Access Policy](/docs/auditor/10.8/configuration/fileservers/delldatastorage/objectaccess.md). Set the Audit object access
policy to "Success" and "Failure" in the Group Policy of the OU that contains your Dell
VNX/VNXe/Unity/Celerra appliance. For more information on VNX/VNXe/Unity/Celerra GPO support, refer
to the documentation Dell provides.

**Step 3 –** [Configure Audit Settings for CIFS File Shares on Dell Data Storage](/docs/auditor/10.8/configuration/fileservers/delldatastorage/cifss.md)
