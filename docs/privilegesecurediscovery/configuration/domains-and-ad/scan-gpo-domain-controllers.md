---
title: "Create a scan GPO for remote SAM access"
description: "Create a GPO that lets the scan account read local Administrators group membership on Windows systems that restrict remote SAM calls, and verify that it works."
sidebar_position: 70
---

Netwrix Privilege Secure for Discovery reads the members of the local Administrators group through the remote Security Account Manager (SAM) interface over Server Message Block (SMB). Starting with Windows Server 2016 and Windows 10 version 1607, Microsoft restricts remote enumeration of the members of local groups, including the local Administrators group. For the product to list the local administrators of these systems, the scan account must be a local administrator of the target system or must have permission to read the group remotely.

This page describes how to create a Group Policy object (GPO) that grants the scan account that permission without giving it administrator rights.

:::warning
Never apply this GPO to domain controllers. Applying it can break terminal services (remote access to endpoints) and anything that enumerates the SAM database on a domain controller. If you applied it by mistake, see [Undo the GPO on domain controllers](#undo-the-gpo-on-domain-controllers).
:::

## Applies to

The restriction is on by default on Windows Server 2016 and later, and on Windows 10 version 1607 and later, including Windows 11. By default, only the local Administrators group can make remote calls to the SAM on these systems. Apply the GPO to the servers and workstations that Privilege Secure for Discovery manages.

## Prerequisites

- Permission to create and link GPOs in the domain.
- The name of the scan account that Privilege Secure for Discovery uses. See [Add a domain](./add-a-domain.md).

## Create the GPO

1. Open **Group Policy Management Editor** and create or open a policy for the domain. Apply the policy to the servers and workstations that Privilege Secure for Discovery manages, and not to domain controllers.
2. Go to **Computer Configuration** > **Policies** > **Windows Settings** > **Security Settings** > **Local Policies** > **Security Options**.
3. Double-click **Network access: Restrict clients allowed to make remote calls to SAM**.
4. Select **Define this policy setting**, and then select **Edit Security**.
5. ensure that the **Administrators** group stays in the list with **Remote Access** set to **Allow**. Defining the policy replaces the default, so removing the group blocks the administrators.
6. Select **Add**, and then enter the scan account name.
7. Select **Check Names**, and then select **OK**.
8. ensure that **Remote Access** is set to **Allow** for the scan account, and then select **OK**.

For more information, see [Network access: Restrict clients allowed to make remote calls to SAM](https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/network-access-restrict-clients-allowed-to-make-remote-sam-calls) in the Microsoft documentation.

## Set the registry value with Group Policy Preferences

You can set the same permission with a registry item in Group Policy Preferences instead of the security policy setting.

1. In the GPO, go to **Computer Configuration** > **Preferences** > **Windows Settings** > **Registry**.
2. Right-click **Registry**, and then select **New** > **Registry Item**.
3. Enter the following values:

   | Field | Value |
   | --- | --- |
   | **Hive** | `HKEY_LOCAL_MACHINE` |
   | **Key Path** | `SYSTEM\CurrentControlSet\Control\Lsa` |
   | **Value name** | `RestrictRemoteSam` |
   | **Value type** | `REG_SZ` |
   | **Value data** | `O:BAG:BAD:(A;;RC;;;BA)(A;;RC;;;<scan-account-sid>)` |

   The value is a security descriptor. The `(A;;RC;;;BA)` entry keeps the access of the Administrators group.

4. Replace `<scan-account-sid>` with the security identifier (SID) of the scan account. To find the SID, run the following command in PowerShell:

   ```powershell
   (Get-ADUser -Identity <scan-account>).SID.Value
   ```

## Verify the setting

To check the registry value on an endpoint, run the following command:

```text
reg query HKLM\SYSTEM\CurrentControlSet\Control\Lsa /v restrictremotesam
```

To find out whether the setting blocks the scan account, check the **System** log on the endpoint in Event Viewer. Windows writes events 16962 to 16969 with the source **Directory-Service-SAM**. Event 16965 shows that Windows denied a remote call to the SAM, and it lists the SID and the network address of the client. If it lists the scan account, the account isn't in the policy.

## Test the policy before you enforce it

Windows can log the calls that the policy would deny without blocking them. This audit-only mode helps you find other tools that read the SAM remotely, before you enforce the policy. Create the following registry value on a test system:

| Field | Value |
| --- | --- |
| **Key Path** | `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Lsa` |
| **Value name** | `RestrictRemoteSamAuditOnlyMode` |
| **Value type** | `REG_DWORD` |
| **Value data** | `1` |

In audit-only mode, event 16968 lists each client that Windows would deny. Remove the value, or set it to `0`, to enforce the policy. Windows doesn't need a restart.

## Undo the GPO on domain controllers

If you applied the policy to domain controllers by mistake, remove the setting.

1. Undo the GPO changes:
   - If you created a new GPO, unlink it from the location where it can apply to domain controllers.
   - If you edited an existing GPO that applies to domain controllers, undo the change.
2. On the domain controllers, force a Group Policy update:

   ```text
   gpupdate /force
   ```

3. Delete the following registry value from all affected domain controllers:

   ```text
   HKLM\SYSTEM\CurrentControlSet\Control\Lsa\restrictremotesam
   ```

## Related topics

- [Domain controllers in Privilege Secure for Discovery](./domain-controllers-overview.md)
