---
title: "Nutanix"
description: "Nutanix"
sidebar_position: 40
---

# Nutanix

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

    - To allow inbound connections to Netwrix Auditor server from Nutanix File Server, a TCP port
      must be open:

        - For the first Nutanix File Server you configure for auditing, the **TCP 9898** port will
          be used.
        - For each subsequent server, a new TCP port must be open.

    - Target Nutanix File Server must be located in the same subnet as Netwrix Auditor Server and
      must be configured as described in the Nutanix section.

## Manual Configuration

To configure your Nutanix File Server for monitoring SMB shares, you will need to do the following:

**Step 1 –** Create a user account to access the Nutanix REST API. See the
[Create User Account to Access Nutanix REST API](/docs/auditor/10.8/configuration/fileservers/nutanix/useraccount.md) topic for additional information.

**Step 2 –** Open a port for inbound connections. See the [Nutanix Ports](/docs/auditor/10.8/configuration/fileservers/nutanix/ports.md) topic for
additional information.

In addition, configure the Auditor console server as a partner server for Nutanix Files, and create
a notification policy to make Netwrix Auditor aware of the Nutanix events. These operations can be
performed in any of the following ways:

- Automatically when creating a monitoring plan. For that, you should select the **Adjust audit
  settings automatically** option in the monitoring plan wizard. See the
  [Settings for Data Collection](/docs/auditor/10.8/admin/monitoringplans/create.md#settings-for-data-collection)
  topic for additional information.
- Manually, as described in the corresponding topics:
    - [Configure Partner Server](/docs/auditor/10.8/configuration/fileservers/nutanix/partnerserver.md)
    - [Create a Notification Policy](/docs/auditor/10.8/configuration/fileservers/nutanix/notificationpolicy.md)

Remember that in both cases (automatic or manual configuration) you will need to complete the steps
above to ensure that the user account for accessing REST API is created and the listening port on
Netwrix Auditor  Server is open for inbound connections.

### Nutanix Files

The following table lists the actions that can be performed with Nutanix Files:

|                          | File | Folder | Share |
| ------------------------ | ---- | ------ | ----- |
| Added                    | +    | +      | +     |
| Add (failed attempt)     | +    | +      | –     |
| Modified                 | +    | +      | +     |
| Modify (failed attempt)  | +    | +      | –     |
| Moved                    | +    | +      | –     |
| Move (failed attempt)    | –    | –      | –     |
| Read                     | +    | +      | –     |
| Read (failed attempt)    | +    | +      | –     |
| Renamed                  | +    | +      | –     |
| Renamed (failed attempt) | –    | –      | –     |
| Removed                  | +    | +      | +     |
| Remove (failed attempt)  | +    | +      | –     |
| Copied                   | –    | –      | –     |

The following considerations refer to Nutanix Files auditing and reporting:

- All changes performed on Nutanix File Shares initiated from the machine(s) where Auditor Server
  resides, will not displayed in Netwrix search and reports because Nutanix Files unable to generate
  such Activity Records for Auditor.
- Auditing of NFS file shares in not supported due to known limitations.
- Currently, not every detail about permission and attribute changes may be provided by Nutanix
  Files, so they cannot be reported by Auditor.
- As for the state-in-time data collection, note that effective permissions (as a combination of
  NTFS and Shared permissions) are not calculated properly for the local Administrator group
  members.
