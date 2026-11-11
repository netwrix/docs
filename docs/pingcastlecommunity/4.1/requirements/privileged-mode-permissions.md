---
sidebar_position: 2
sidebar_label: Privileged Mode Permissions
description: Assign least-privilege permissions to a dedicated service account so PingCastle can run privileged mode checks without domain administrator rights.
---
# Configuring least-privilege access for privileged mode

PingCastle runs most of its checks with a standard, unprivileged domain user account. A small number of rules need extra access to read data that standard users can't see. These rules only run in privileged mode.

This guide explains how to give a dedicated service account exactly the access those rules need. You don't need to add the account to Domain Admins, Enterprise Admins or the local Administrators group.

## Rules that use privileged mode

| Rule | Description | What PingCastle reads | Where |
|---|---|---|---|
| A-CertTempCustomSubject (ESC1) | Certificate template vulnerability check | CA security descriptor (Enroll and Manage CA permissions) and enrollment agent restrictions | Remote registry on each Enterprise CA server |
| A-CertTempAnyPurpose (ESC2) | Certificate template any purpose check | CA security descriptor (Enroll and Manage CA permissions) and enrollment agent restrictions | Remote registry on each Enterprise CA server |
| S-Vuln-MS14-068 | Kerberos vulnerability check | Installed hotfixes (`Win32_QuickFixEngineering`) | Remote WMI on each domain controller |
| S-Vuln-MS17_010 | EternalBlue/SMB vulnerability check | Installed hotfixes (`Win32_QuickFixEngineering`) | Remote WMI on each domain controller |

If PingCastle can't read this data, the scan still completes. PingCastle reports the affected rules with reduced accuracy instead of failing the scan.

## Prepare the service account

1. Create a dedicated domain user account for PingCastle, for example `svc-pingcastle`. Don't reuse a personal or administrative account.
2. Optionally, create a domain security group, for example `PingCastle-Privileged-Readers`, and add the account to it. Granting permissions to the group makes them easier to review and remove later. The following steps refer to "the account", which can be either.

## Check hotfixes on domain controllers (MS14-068, MS17-010)

PingCastle connects to `root\cimv2` on each domain controller over WMI (DCOM), using packet privacy, and runs a read-only query against `Win32_QuickFixEngineering`.

### Allow remote DCOM access

Add the account to the built-in domain group **Distributed COM Users**.

Domain controllers don't have local groups, so this one change applies to every domain controller in the domain.

```powershell
Add-ADGroupMember -Identity "Distributed COM Users" -Members "svc-pingcastle"
```

### Grant WMI namespace permissions

Repeat on every domain controller:

1. Run `wmimgmt.msc`.
2. Right-click **WMI Control (Local)** and select **Properties**.
3. Open the **Security** tab, expand **Root** and select **CIMV2**.
4. Click **Security**, then **Add**, and add the account.
5. Allow only **Enable Account** and **Remote Enable**. Leave all other permissions cleared.
6. Click **Advanced**, edit the new entry and set **Applies to** to **This namespace only**.
7. Click **OK** to save.

### Allow network access

From the machine running PingCastle to each domain controller, allow:

- TCP 135 (RPC endpoint mapper)
- The RPC dynamic port range (TCP 49152-65535 by default)

On the domain controllers, enable the Windows Defender Firewall rule group **Windows Management Instrumentation (WMI)**.

### Verify hotfix access

From the PingCastle machine, running as the service account:

```powershell
Get-CimInstance -ComputerName <dc-name> -ClassName Win32_QuickFixEngineering |
    Select-Object -First 5 HotFixID, InstalledOn
```

If this returns hotfixes, PingCastle can read them too.

## Check certificate authorities (ESC1, ESC2)

PingCastle opens the remote registry on each Enterprise CA server and reads two values under:

```
HKLM\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration\<CA name>
```

- `Security` - the CA permissions, used to find low-privileged principals with Enroll or Manage CA rights
- `EnrollmentAgentRights` - the enrollment agent restrictions

PingCastle writes nothing to the registry.

### Ensure the Remote Registry service is running

Repeat on every CA server:

```powershell
Set-Service -Name RemoteRegistry -StartupType Automatic
Start-Service -Name RemoteRegistry
```

### Allow remote registry access for the account

By default, Windows only lets administrators connect to the registry remotely. The `winreg` key controls this.

Repeat on every CA server:

1. Run `regedit`.
2. Go to `HKLM\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg`.
3. Right-click **winreg** and select **Permissions**.
4. Add the account and allow **Read** only.

### Check read access to the CA configuration key

Go to `HKLM\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration\<CA name>` and confirm that the account (or a group it belongs to, such as **Users**) has **Read**. If not, grant **Read** on this key only.

### Allow network access

From the PingCastle machine to each CA server, allow TCP 445 (SMB). Remote registry uses the `winreg` named pipe over SMB.

### Verify registry access

From the PingCastle machine, running as the service account:

```powershell
reg query "\\<ca-server>\HKLM\SYSTEM\CurrentControlSet\Services\CertSvc\Configuration\<CA name>" /v Security
```

If this returns a binary value, PingCastle can read it too.

## Run PingCastle in privileged mode

Run the scan as the service account with the `--privileged` argument:

```
PingCastle.exe --healthcheck --server <domain> --privileged
```

In interactive mode, choose **Yes** when PingCastle asks "Do you want to use privileged mode?".

## Remove the access

To remove the access, reverse each step:

1. Remove the account from **Distributed COM Users**.
2. Remove the account from the `root\CIMV2` WMI namespace security on each domain controller.
3. Remove the account from the `winreg` key permissions on each CA server, and from the CA configuration key if you added it.
4. Return the Remote Registry service to its previous startup type if you changed it.

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| `Access denied when querying Win32_QuickFixEngineering` | Missing **Distributed COM Users** membership or **Remote Enable** on `root\CIMV2` |
| `RPC server unavailable` | Firewall is blocking TCP 135 or the dynamic RPC range |
| `Could not connect to the HKLM hive` | Remote Registry service is stopped, TCP 445 is blocked, or the account has no permission on the `winreg` key |
| `Registry key not found` | The CA name doesn't match the registry key name, or the account can't read the key |
