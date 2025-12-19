---
title: "NetApp Data ONTAP"
description: "NetApp Data ONTAP"
sidebar_position: 30
---

# NetApp Data ONTAP

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

    - To use this option for NetApp Clustered Data ONTAP 8 or ONTAP 9, make sure that audit
      configuration has been created (with `vserver audit create` command) for the target system
      enabling audit configuration is optional.

- Manually – Native audit settings must be adjusted manually to ensure collecting comprehensive and
  reliable audit data. You can enable Auditor to continually enforce the relevant audit policies or
  configure them manually:

    - On the NetApp device:

        - CIFS Network Protocol support is required.
        - Qtree Security must be configured. The volume where the audited file shares are located
          must be set to the _"ntfs"_ or _"mixed"_ security style.
        - On Clustered Data ONTAP 8 and ONTAP 9:

            - `External Web Services: true`.

                **_RECOMMENDED:_** For security reasons, enable only SSL access.

            - Firewall policy for data interfaces must be configured to allow ONTAPI protocol
              connections.
            - Audit settings must be configured as follows:

                | Audit Setting                 | Configuration               |
                | ----------------------------- | --------------------------- |
                | Auditing State:               | true                        |
                | Log Destination Path          | /audit                      |
                | Categories of Events to Audit | file-ops, cifs-logon-logoff |
                | Log Format                    | evtx                        |
                | Log File Size Limit           | 300 MB                      |

        - On Data ONTAP 7 and Data ONTAP 8 in 7-mode:

            - The `httpd.admin.enable` or the `httpd.admin.ssl.enable` option must be set to _"on"_.
              For security reasons, it is recommended to configure SSL access and enable the
              `httpd.admin.ssl.enable` option.
            - The `cifs.audit.liveview.enable` option must be set to _"off"_.
            - The `cifs.audit.enable` and the `cifs.audit.file_access_events.enable` options must be
              set to _"on"_.
            - Unless you are going to audit logon events, the `cifs.audit.logon_events.enable` and
              the `cifs.audit.account_mgmt_events.enable` options must be set to _"off"_.
            - The Security log must be configured:

                - `cifs.audit.logsize 300 000 000 (300 MB)`
                - `cifs.audit.autosave.onsize.enable on`
                - `cifs.audit.autosave.file.extension timestamp`

        - Audit settings must be configured for CIFS File Shares. For a security principal (e.g.,
          Everyone), the following options must be set to "Success" and "Fail" in the Advanced
          Security → Auditing settings for the audited shared folders:

            - List Folder / Read Data (Files only)
            - Create Files / Write Data
            - Create Folders / Append Data
            - Write Extended Attributes
            - Delete Subfolders and Files
            - Delete
            - Change Permissions
            - Take Ownership

    - On the Auditor console computer:

        - If your file shares contain symbolic links and you want to collect state-in-time data for
          these shares, the local-to-local, local-to-remote, remote-to-local, and remote-to-remote
          symbolic link evaluations must be enabled on the computer that hosts Auditor Server.

See the following topics for additional information:

- [Configure NetApp Clustered Data ONTAP 8 and ONTAP 9 for Monitoring](#configure-netapp-clustered-data-ontap-8-and-ontap-9-for-monitoring)
- [Configure Audit Settings for CIFS File Shares](/docs/auditor/10.6/configuration/fileservers/netappcmode/cifs.md)

The following table lists the actions that can be performed on NetApp:

|                          | File | Folder | Share |
| ------------------------ | ---- | ------ | ----- |
| Added                    | +    | +      | +     |
| Add (failed attempt)     | –    | –      | –     |
| Modified                 | +    | +      | +     |
| Modify (failed attempt)  | +    | +      | –     |
| Moved                    | +\*  | +\*    | –     |
| Move (failed attempt)    | +\*  | +\*    | –     |
| Read                     | +    | -      | –     |
| Read (failed attempt)    | +    | +      | –     |
| Renamed                  | +\*  | +\*    | –     |
| Renamed (failed attempt) | +\*  | +\*    | –     |
| Removed                  | +    | +      | +     |
| Remove (failed attempt)  | +    | +      | –     |
| Copied                   | –    | –      | –     |

Actions marked with an asterisks (\*) are reported for NetApp Clustered Data ONTAP 8 and ONTAP 9
only.

## Configure NetApp Clustered Data ONTAP 8 and ONTAP 9 for Monitoring

To configure Clustered Data ONTAP 8 and ONTAP 9 for monitoring, perform the following procedures:

- [Prerequisites ](#prerequisites)
- [Configure ONTAPI\RESTAPI Web Access](/docs/auditor/10.6/configuration/fileservers/netappcmode/webaccess.md)
- [Configure System Service Firewall Policies](/docs/auditor/10.6/configuration/fileservers/netappcmode/ports.md)
- [Configure Service Policy](/docs/auditor/10.6/configuration/fileservers/netappcmode/servicepolicy.md)
- [Configure Event Categories and Log](/docs/auditor/10.6/configuration/fileservers/netappcmode/eventcategories.md)

### Prerequisites

Netwrix assumes that you are aware of basic installation and configuration steps. If not, refer to
the following administration and management guides.

| Version                  | Related documentation                                                                                                                                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Clustered Data ONTAP 8.2 | - [Clustered Data ONTAP® 8.2 File Access and Protocols Management Guide](https://library.netapp.com/ecm/ecm_download_file/ECMP1196891) - [Clustered Data ONTAP® 8.2 System Administration Guide for SVM Administrators](https://library.netapp.com/ecm/ecm_download_file/ECMP1368704) |
| Clustered Data ONTAP 8.3 | - [Clustered Data ONTAP® 8.3 System Administration Guide for Cluster Administrators](https://library.netapp.com/ecm/ecm_get_file/ECMP1636037) - [Clustered Data ONTAP® 8.3 File Access Management Guide for CIFS](https://library.netapp.com/ecm/ecm_download_file/ECMP1610207)       |
| ONTAP 9.0 - 9.10         | - [ONTAP 9 Documentation Center](http://docs.netapp.com/ontap-9/index.jsp)                                                                                                                                                                                                              |

Perform the following steps before proceeding with the audit configuration.

**Step 1 –** Configure CIFS server and make sure it functions properly.

**NOTE**: NFS file shares are not supported.

**Step 2 –** Configure System Access Control List (SACL) on your file share. See
[Configure Audit Settings for CIFS File Shares](/docs/auditor/10.6/configuration/fileservers/netappcmode/cifs.md)
topic for additional information.

**Step 3 –** Set the Security Style for Volume or Qtree where the audited file shares are located to
the _"ntfs"_ or _"mixed"_.

**Step 4 –** Configure audit manually. For 8.3, review the Auditing NAS events on SVMs with FlexVol
volumes section in
[Clustered Data ONTAP® 8.3 File Access Management Guide for CIFS.](https://library.netapp.com/ecm/ecm_download_file/ECMP1610207)

**NOTE:** The current version of Netwrix Auditor does not support auditing of Infinite Volumes.
