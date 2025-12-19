---
title: "Dell Isilon/PowerScale Target Requirements"
description: "Dell Isilon/PowerScale Target Requirements"
sidebar_position: 30
---

# Dell Isilon/PowerScale Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (FSAA) and/or Sensitive Data Discovery
Auditing scans on Dell Isilon/PowerScale devices. The Netwrix Activity Monitor can be configured to
monitor activity on Dell Isilon/PowerScale devices and make the event data available for Enterprise
Auditor Activity Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Enterprise Auditor scans must have the following permissions on the
target host:

- Group membership in the local Administrators group – LOCAL:System Provider
- Rights on the actual file tree or to the IFS root share

    - Share Permissions:

        - Read access

These permissions grant the credential the ability to enumerate shares, access the remote registry,
and bypass NTFS security on folders. The credential used within the assigned Connection Profile for
these target hosts requires these permissions. See the topic for instructions.

:::note
These permissions are in addition to those needed to either deploy applet scans for
running scans in proxy mode with applet or installing the File System Proxy Service Permissions for
running scans in proxy mode as a service. See the
[File System Scan Options](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.
:::


**Additional Sensitive Data Discovery Auditing Permission**

In order to execute scoped Sensitive Data Discovery Auditing scans, the credential must also have
the LOCAL:System provider selected in each access zone in which the shares to be scanned reside.

The credential must have an Authentication Provider configured for the Isilon/PowerScale device. For
example, if the credential is an Active Directory account, then the domain where the account resides
must be an Active Directory Authentication Provider. This is configured in the OneFS® Storage
Administration Console. Navigate to the Access tab, and select Authentication Providers.

## Local Administrator Group Membership for Isilon

Follow the steps assign membership in the local Administrators group through the OneFS Storage
Administration Console.

**Step 1 –** Navigate to the **Access** tab, and select **Membership & Roles** for the System Access
Zone.

![Groups tab](/images/accessanalyzer/11.6/config/dellpowerscale/groupstab.webp)

**Step 2 –** On the **Groups** tab, set the Providers to **LOCAL: System**. Then select **View /
Edit** for the Administrators group. The View Group Details window opens.

![Edit Group window](/images/accessanalyzer/11.6/config/dellpowerscale/editgroup.webp)

**Step 3 –** Click **Edit Group** and the Edit Group window opens. Click **Add Members**, and enter
the User Name and Provider in the Select a User window. Click **Select**, and then click **Save
Changes**. The Edit Group window closes.

**Step 4 –** Click **Close**. The View Group Details window closes.

Share permissions can now be granted to this credential.

## BackupAdmin Role Assignment for OneFS

Follow the steps to assign the credential to the **BackupAdmin** role through OneFS Storage
Administration Console.

**Step 1 –** Navigate to the **Access** tab > **Membership & Roles** for the System Access Zone.

![One FS Dashboard](/images/accessanalyzer/11.6/config/dellpowerscale/rolestab.webp)

**Step 2 –** On the Roles tab, select **View / Edit** for the BackupAdmin role. The View Role
Details window opens.

![One FS Role Details Window](/images/accessanalyzer/11.6/config/dellpowerscale/viewroledetails.webp)

**Step 3 –** Click **Edit** role and the Edit role details window opens.

**Step 4 –** Click **Add a member to this role**.

**Step 5 –** Enter the **User Name** and **Provider** in the Select a User window then click Search.
The user appears in the Search Results table.

**Step 6 –** Click **Select** and the Edit role window closes.

**Step 7 –** Click **Save Changes** and the successful save notification appears.

**Step 8 –** Click **Close**.

The View role details window closes.

## NFS Export Scan Requirements for Isilon/PowerScale

Enterprise Auditor supports scanning Isilon/PowerScale NFSv3 exports. The following settings need to
be configured in OneFS for the Enterprise Auditor server's IP address for each Isilon/PowerScale NFS
export to be scanned.

The Enterprise Auditor server IP needs to be added to the following fields in each NFS export's
settings, in the OneFS UI under **Protocols** > **UNIX sharing (NFS)** > **View/Edit** > **Edit
export** (per NFS export):

- Always read-only clients
- Root Clients

The NFS export to be scanned also needs to be configured so root squash is disabled, which is
performed in the same Edit export menu as the above settings.

**Step 1 –** Navigate to the export's **Root user mapping** settings.

**Step 2 –** Select **Map root users to a specified user**.

**Step 3 –** Set both User and Group to **0** (effectively mapping root client UID/GID to 0).

Both of these steps need to be performed in each NFS export's settings that a user would like to
scan.

### Troubleshooting NFSv3 Export Access

If Enterprise Auditor is not discovering the expected NFS export, it is possible that the export
policy is not properly configured to allow the Enterprise Auditor server or proxy server IP Address
to mount the NFS export. One step in troubleshooting this issue is to confirm a Unix client (or WSL
for Windows) in the same IP range as the Enterprise Auditor server or proxy server can mount the NFS
export.

Run the following command from a Unix host to verify the NFS mount is available:

```
showmount ‑e[NFS_HOSTNAME_OR_IP]
```

If the NFS export is returned as a result of the previous command, then Enterprise Auditor should
also be able to mount it.

## Access & Sensitive Data Auditing Port Requirements

The firewall ports required by Enterprise Auditor for Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing scans are based on the File System scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.

## Activity Auditing Permissions

Windows Proxy Server for Activity Agent Monitoring of Dell Isilon/PowerScale

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

**Dell Isilon/PowerScale Requirements**

Additionally, the EMC Common Event Enabler (CEE) should be installed on the Windows proxy server,
where the activity agent is deployed.

:::info
Use the latest available CEE version from the Dell Support website.
:::


EMC CEE requires .NET Framework 3.5 to be installed on the Windows proxy server in order for the EMC
CEE service to start.

See the
[Dell Isilon/PowerScale Activity Auditing Configuration](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/dellpowerscale/activity/activity.md)
topic for instructions.

**Activity Monitor Archive Location**

If the activity log files are being archived, configurable within the Netwrix Activity Monitor
Console, then the credential used by Enterprise Auditor to read the activity log files must also
have READ and WRITE permissions on the archive location.

## Activity Auditing Port Requirements

Firewall settings depend on the type of environment being targeted. The following firewall settings
are required for communication between the Agent server and the Netwrix Activity Monitor Console:

| Communication Direction          | Protocol | Ports | Description         |
| -------------------------------- | -------- | ----- | ------------------- |
| Activity Monitor to Agent Server | TCP      | 4498  | Agent Communication |

The Windows firewall rules need to be configured on the Windows server, which require certain
inbound rules be created if the scans are running in applet mode. These scans operate over a default
port range, which cannot be specified via an inbound rule. For more information, see the Microsoft
[Connecting to WMI on a Remote Computer](https://msdn.microsoft.com/en-us/library/windows/desktop/aa389290(v=vs.85).aspx)
article.

**Additional Firewall Rules for Dell Isilon/PowerScale Devices**

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell Isilon/PowerScale device:

| Communication Direction                                    | Protocol | Ports             | Description       |
| ---------------------------------------------------------- | -------- | ----------------- | ----------------- |
| Dell Isilon/PowerScale to CEE Server                       | TCP      | TCP 12228         | CEE Communication |
| CEE Server to Activity Agent Server (when not same server) | TCP      | RPC Dynamic Range | CEE Event Data    |

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
