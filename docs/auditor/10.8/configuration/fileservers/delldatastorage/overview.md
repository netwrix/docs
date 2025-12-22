---
title: "Dell Data Storage"
description: "Dell Data Storage"
sidebar_position: 10
---

# Dell Data Storage

**NOTE:** Dell VNX, VNXe, Celerra, and Unity NAS devices are collectively referred to as Dell Data
Storage.

Netwrix Auditor relies on native logs for collecting audit data. Therefore, successful change and
access auditing requires a certain configuration of native audit settings in the audited environment
and on the Auditor console computer. Configuring your IT infrastructure may also include enabling
certain built-in Windows services, etc. Proper audit configuration is required to ensure audit data
integrity, otherwise your change reports may contain warnings, errors or incomplete audit data.

**CAUTION:** Folder associated with Netwrix Auditor must be excluded from antivirus scanning. See
the
[Antivirus Exclusions for Netwrix Auditor](/docs/kb/auditor/system-administration/security-hardening/antivirus-exclusions-for-netwrix-auditor)
knowledge base article for additional information.

You can configure your IT Infrastructure for monitoring in one of the following ways:

- Automatically through a monitoring plan – This is a recommended method. If you select to
  automatically configure audit in the target environment, your current audit settings will be
  checked on each data collection and adjusted if necessary.
- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - On the Dell Data Storage device:

        - CIFS Network Protocol support is required
        - Security Event Log Maximum Size must be set to 4GB.
        - The Audit object access policy must be set to _"Success"_ and "Failure" in the Group
          Policy of the OU where the audited Dell VNX/VNXe/Unity/Celerra appliance belongs to.
        - Audit settings must be configured for CIFS File Shares. For a security principal (e.g.,
          Everyone), the following options must be set to "Success" and "Fail" in the **Advanced
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
          these shares, the local-to-local, local-to-remote, remote-to-local, and remote-to-remote
          symbolic link evaluations must be enabled on the computer that hosts Auditor Server.

First, you should decide on the objects and actions you want to track. Consider the following:

- Actions reported by Auditor vary depending on the file server type and the audited object (file,
  folder, or share).
- Besides, monitoring and reporting of the Dell Data Storage systems may not provide the results you
  expect — due to native Dell audit peculiarities. See the [File Servers](/docs/auditor/10.8/configuration/fileservers/overview.md) topic for
  additional information.

For example, the _change_ operation (in Auditor terminology) includes creation, modification, and
deletion.

## Manual Configuration

To collect comprehensive audit data, you must configure your file shares for monitoring. Consider
the following:

**Step 1 –** [Configure Security Event Log Maximum Size](/docs/auditor/10.8/configuration/fileservers/delldatastorage/securityeventlog.md) to avoid overwriting
of the security logs; it is recommended to set security log size to a maximum (4GB). Auditor does
not clean Dell Unity logs automatically, the log will start overwriting when it goes beyond the
limit. See the
[Unity Family Security Configuration Guide](https://support.emc.com/docu69321_Unity-Family-Security-Configuration-Guide.pdf?language=en_US) for
additional information on how to set logs roll over manually.

**Step 2 –** By default, the security log is set to overwrite events that are older than 10 days,
and its size is set to 512 KB. The default location for the security.evt log is **C:\security.evt**,
which corresponds to the root partition of the Data Mover. To be able to increase the security log
size, you must move it from the Data Mover root folder.

**Step 3 –** [Configure Audit Object Access Policy](/docs/auditor/10.8/configuration/fileservers/delldatastorage/objectaccess.md). Set the Audit object access
policy to "Success" and "Failure" in the Group Policy of the OU where your Dell
VNX/VNXe/Unity/Celerra appliance belongs to. For more information on VNX/VNXe/Unity/Celerra GPO
support, refer to documentation provided by Dell.

**Step 4 –** [Configure Audit Settings for CIFS File Shares on Dell Data Storage](/docs/auditor/10.8/configuration/fileservers/delldatastorage/cifss.md)
