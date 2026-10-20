---
title: "Create a Scan GPO for Remote SAM Access"
description: "Create a GPO that lets the scan account read local Administrators group membership on Windows systems that restrict remote SAM calls."
sidebar_position: 70
---

Starting with Windows Server 2016 and Windows 10 version 1607, Microsoft restricts remote enumeration of the members of local groups, including the local Administrators group. For Netwrix Privilege Secure for Discovery to list the local administrators of these systems, the scan account must be a local administrator of the target system or must have permission to read the group remotely.

This page describes how to create a Group Policy object (GPO) that grants the scan account that permission without giving it administrator rights.

:::warning
Never apply this GPO to domain controllers. Applying it can break terminal services (remote access to endpoints) and anything that enumerates the SAM database on a domain controller. If you applied it by mistake, see [Undo the GPO on domain controllers](#undo-the-gpo-on-domain-controllers).
:::

## Applies to

The restriction is on by default on Windows Server 2016 and later, and on Windows 10 version 1607 and later, including Windows 11. Apply the GPO to the servers and workstations that Privilege Secure for Discovery manages.

## Prerequisites

- Permission to create and link GPOs in the domain.
- The name of the scan account that Privilege Secure for Discovery uses. See [Add a domain](./add-a-domain.md).

## Create the GPO

1. Open **Group Policy Management Editor** and create or open a policy for the domain. Apply the policy to the servers and workstations that Privilege Secure for Discovery manages, and not to domain controllers.
2. Go to **Computer Configuration** > **Policies** > **Windows Settings** > **Security Settings** > **Local Policies** > **Security Options**.
3. Double-click **Network access: Restrict clients allowed to make remote calls to SAM**.
4. Select **Define this policy setting**, and then select **Edit Security**.
5. Select **Add**, and then enter the scan account name.
6. Select **Check Names**, and then select **OK**.
7. ensure that **Remote Access** is set to **Allow**, and then select **OK**.

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

4. Replace `<scan-account-sid>` with the security identifier (SID) of the scan account. To find the SID, run the following command in PowerShell:

   ```powershell
   (Get-ADUser -Identity <scan-account>).SID.Value
   ```

## Verify the setting

To check the registry value on an endpoint, run the following command:

```text
reg query HKLM\SYSTEM\CurrentControlSet\Control\Lsa /v restrictremotesam
```

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
