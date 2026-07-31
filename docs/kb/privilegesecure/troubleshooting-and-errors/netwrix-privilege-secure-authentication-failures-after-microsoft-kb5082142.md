---
description: >-
  Provides the Netwrix Privilege Secure for Access Management-specific causes
  and resolutions for authentication failures after Microsoft KB5082142
  changes the default Kerberos encryption type to AES-only.
keywords:
  - KB5082142
  - RC4
  - AES
  - Kerberos
  - Authentication
  - RDP
  - Kerberoasting
  - msDS-SupportedEncryptionTypes
  - NPS-AM
  - Domain Service Account
  - Computer Account
products:
  - privilegesecure
sidebar_label: Netwrix Privilege Secure Authentication Failures After Microsoft KB5082142
tags: [kb, troubleshooting-and-errors]
title: "Netwrix Privilege Secure Authentication Failures After Microsoft KB5082142"
knowledge_article_id:
---

# Netwrix Privilege Secure Authentication Failures After Microsoft KB5082142

For background on what Microsoft KB5082142 changes and why most environments are unaffected, see [Understanding the Microsoft KB5082142 RC4-to-AES Encryption Change](/docs/kb/privilegesecure/certificates-and-security/understanding-the-microsoft-kb5082142-rc4-to-aes-encryption-change.md).

## Symptom

Netwrix Privilege Secure for Access Management (NPS-AM) shows an authentication-related failure after Microsoft KB5082142 is installed. Depending on which identity is affected, this can include:

-   Active Directory (AD) sync fails to complete.
-   RDP Session Fails
      [WRN]Failed to verify RDP X509 certificate
      [WRN]Unexpected RDP Thumbprint
      [WRN]ERRCONNECT_AUTHENTICATION_FAILED

## Cause

For customers running NPS-AM, RC4 dependency is most likely to affect one of two identities: the domain service account NPS-AM uses to communicate with Active Directory, or the NPS-AM resource's own computer account.

### The Domain Service Account NPS-AM Uses to Communicate with Active Directory

This account follows the same risk profile as any other service account: if an administrator provisioned it long ago and configured it with a non-expiring password, it may still be carrying only an RC4-derived key regardless of how recently NPS-AM itself was upgraded or reconfigured. Conveniently, this account is easy to rule in or out: if it is stuck on RC4 and can no longer authenticate under an AES-only policy, NPS-AM will not just show a subtle symptom—it will typically fail to perform an AD sync entirely. A failed or failing AD sync immediately after KB5082142 was installed is a strong, direct signal to check this account's `PasswordLastSet` and `msDS-SupportedEncryptionTypes` values first.

### The NPS-AM Resource Computer Account

This is the most likely culprit. Like any domain-joined machine, the NPS-AM resource has a computer account in Active Directory, and computer account passwords do rotate automatically—by default, roughly every 30 days. But because that rotation depends on the machine being online, having a healthy secure channel to a domain controller, and not having been cloned or restored from an old snapshot without proper de-provisioning, it is the identity most prone to silently falling out of its normal rotation cycle. If the NPS-AM server itself has been offline for an extended stretch, was provisioned from an older template or image, or has had secure channel issues in the past, its computer account is the first place to check for a stale RC4-only key.

> **NOTE:** NPS-AM's own login accounts—requestor, ephemeral, and managed—are unlikely sources of this issue. A stale requestor account would typically cause broader authentication failures elsewhere in the environment first; ephemeral accounts are always created after KB5082142 takes effect, so they get AES key material from the outset; and managed accounts have their password (and AES key) rotated by NPS-AM at the start and end of every session.

## Resolution

If you are experiencing authentication issues that align with the above, here are the paths forward, from most targeted to most broad.

### Step 1 — Identify the Specific Accounts Involved

1. Check the Windows Security Event Log on your domain controllers for KDC audit events (Event IDs 201, 202, 206, and 207 during the audit/warning phase; 208 and 209 once a domain controller is enforcing AES-only behavior). These events identify exactly which accounts or devices are requesting or requiring RC4.
2. Query an account's current encryption support:

   ```powershell
   Get-ADUser -Identity <account> -Properties msDS-SupportedEncryptionTypes, PasswordLastSet
   Get-ADComputer -Identity <account> -Properties msDS-SupportedEncryptionTypes, PasswordLastSet
   ```

An account showing a blank or unset `msDS-SupportedEncryptionTypes` value combined with an old `PasswordLastSet` date is a strong candidate for the issue described in [Cause](#cause).

### Step 2 — Reset the Password for Accounts That Can Support AES but Have Not Rotated

Reset the password on any account that can support AES but has not rotated since before AES was introduced. This generates a new AES key immediately, and the account authenticates normally under the new default going forward. For the NPS-AM domain service account or any managed account fitting this profile, this is the recommended fix rather than permanently exempting the account from AES.

For the NPS-AM server's computer account specifically—the most likely culprit identified in [The NPS-AM Resource Computer Account](#the-nps-am-resource-computer-account)—choose one of the following options depending on scale:

-   **Single machine:** Run the following PowerShell command (as administrator) directly on the NPS-AM resource to force an immediate password rotation:

    ```powershell
    Reset-ComputerMachinePassword
    ```

-   **Remote PowerShell:** Run `Reset-ComputerMachinePassword` against every machine via PowerShell remoting:

    ```powershell
    $computers = Get-ADComputer -Filter * | Select-Object -ExpandProperty Name

    Invoke-Command -ComputerName $computers -ScriptBlock {
        Reset-ComputerMachinePassword
    } -ErrorAction SilentlyContinue
    ```

    This requires WinRM enabled on target machines (usually already true in a managed domain) and the machines to be online. Pull the target list from Step 1, or filter AD directly by OU, staleness, or similar criteria, rather than triggering rotation across the whole domain at once.

-   **Multiple machines / fleet-wide:** Rather than touching each machine individually, temporarily lower the domain policy for computer account password age so that every online machine rotates on its own during its next check-in.

    In Group Policy, navigate to `Computer Configuration > Policies > Windows Settings > Security Settings > Local Policies > Security Options > Domain member: Maximum machine account password age`.

    This defaults to 30 days. Temporarily setting it to 1 day causes every online, domain-joined machine to rotate its password on its next Netlogon check-in—typically within about an hour of the GPO refreshing. Once you have confirmed the affected machines have rotated, set the value back to 30 (or your normal policy) to avoid unnecessary ongoing churn.

    > **NOTE:** Use this option when you do not need the rotation to happen instantly and would rather let it happen naturally across many machines at once. It still requires each machine to be online and able to reach a domain controller. A machine that is offline during this window rotates the next time it checks in, once it is back online.

### Step 3 — Configure an Explicit Exception for Accounts or Devices That Genuinely Cannot Support AES

Set the account's own `msDS-SupportedEncryptionTypes` attribute to include RC4 (a common value used for this is `28`, i.e., RC4 + AES128 + AES256). This restores that account's ability to authenticate using RC4 without changing the domain-wide default—everything else in the domain continues to benefit from the AES-only default introduced by KB5082142.

```powershell
Set-ADUser -Identity <account> -Replace @{"msDS-SupportedEncryptionTypes" = 28}
Set-ADComputer -Identity <account> -Replace @{"msDS-SupportedEncryptionTypes" = 28}
```

Treat this as a documented, deliberate, and ideally temporary exception—not a permanent configuration—with a plan to retire or upgrade the underlying legacy dependency where possible.

### Step 4 — Temporarily Roll Back the Domain-Wide Default as a Last Resort

Set `DefaultDomainSupportedEncTypes` in the registry on all domain controllers to a value that includes RC4 (commonly `0x1C`). This restores the pre-KB5082142 fallback behavior for every account without an explicit override, while keeping the security update itself installed. This is a supported and fully reversible configuration, but it is intentionally broad: it re-exposes every account in the domain that lacks an explicit `msDS-SupportedEncryptionTypes` value, not just the specific ones causing trouble. It will also generate a recurring audit event (Event ID 205) on every domain controller restart or KDC service restart as a reminder that the configuration is insecure. This option is best used only to stabilize an environment quickly while the affected accounts identified in Step 1 are remediated individually, and should be reverted once that remediation is complete.

## Resolution
AD Sync completes
RDP Session successful

> **NOTE:** If you continue to see authentication failures after working through the steps above, contact [Netwrix Support](https://www.netwrix.com/support.html) with the specific account name(s), the relevant Event IDs from your domain controller logs, and confirmation of the `msDS-SupportedEncryptionTypes` and `PasswordLastSet` values for the accounts involved—this will help pinpoint the cause more quickly.
