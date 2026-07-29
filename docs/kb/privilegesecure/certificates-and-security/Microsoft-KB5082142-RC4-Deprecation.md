---
description: >-
  KB5082142, released by Microsoft on April 14, 2026, changes a core default in how Active Directory's Kerberos Key Distribution Center (KDC) issues authentication tickets. Specifically, it changes the default value of DefaultDomainSupportedEncTypes so that any account without an explicit encryption-type configuration is now assumed to support AES-SHA1 encryption only, rather than falling back to the legacy RC4-HMAC cipher.
keywords:
  - KB5082142
  - RC4
  - AES
  - Kerberos
  - Authentication
  - RDP
products:
  - privilege-secure-access-management
sidebar_label: Microsoft KB5082142 RC4 Deprecation
tags: []
title: "Microsoft KB5082142 RC4 Deprecation"
knowledge_article_id: 
---

# What KB5082142 Does, and Why

KB5082142, released by Microsoft on April 14, 2026, changes a core default in how Active Directory's Kerberos Key Distribution Center (KDC) issues authentication tickets. Specifically, it changes the default value of DefaultDomainSupportedEncTypes so that any account without an explicit encryption-type configuration is now assumed to support AES-SHA1 encryption only, rather than falling back to the legacy RC4-HMAC cipher.

This change is part of Microsoft's phased response to CVE-2026-20833, a Kerberos information disclosure vulnerability. The underlying risk is that RC4-encrypted service tickets can be captured by an authenticated attacker and cracked offline—a technique known as Kerberoasting—to recover the plaintext password of the account the ticket was issued for. Because service accounts are frequently privileged and rarely rotated, they have historically been an attractive target for this style of attack. Removing RC4 as an implicit fallback closes that avenue for any account that hasn't been explicitly configured to require it.

The rollout has been staged deliberately: an audit-only phase beginning in January 2026 to surface RC4 dependencies without breaking anything, followed by the April 2026 default change addressed in KB5082142, with full enforcement arriving in July 2026.

# Why Microsoft Expects Minimal Impact

Microsoft's stated rationale for expecting this change to affect a small minority of accounts is straightforward: Windows has generated and stored an AES key alongside the RC4 key for any account automatically since Windows Server 2008, whenever that account's password is set or changed. In other words, the AES key material has quietly existed in Active Directory for the large majority of accounts in any reasonably current environment—this update simply changes which key the KDC prefers by default, rather than requiring new key generation for most accounts.

For any account whose password has been set or reset at any point since AES support was introduced, this change should be invisible. The login or service authentication continues to work exactly as before, just using AES instead of RC4 under the hood.

# Where Accounts Can Still Be Stuck on RC4

Despite the above, a subset of accounts and devices can still end up without a usable AES key, or without AES support at all. The most common causes we see are:

-   **Accounts predating Windows Server 2008 that have never had a password reset.** If an account was created prior to AES support being introduced and its password has genuinely never been changed since, no AES key was ever generated for it. This is rare for interactive user accounts (which typically rotate on a policy), but common for service accounts configured with "password never expires," and for old administrative or break-glass accounts that were created once and left untouched.

-   **Legacy or third-party devices that only support RC4.** Some non-Windows Kerberos clients—older network appliances, embedded devices, older Unix/Linux Kerberos implementations, and similar hardware—were never built with AES-SHA1 support in the first place. These devices aren't a matter of an unrotated password; they structurally cannot generate or use an AES key, and will need an explicit exception or a hardware/software upgrade path.

# Considerations Specific to NPS

For customers running Netwrix Privilege Secure Access Manager (NPS-AM), it's worth walking through where RC4 dependency could realistically surface, since NPS involves several distinct account types plus its own service identity.

## Login accounts in NPS fall into three categories—none of which should be the source of the issue:

-   **Requestor accounts** are not expected to be a source of RC4-related issues. If a requestor's own account had a stale RC4-only key, that account would typically already be experiencing broader authentication problems elsewhere in the environment well before it reached the point of interacting with NPS—so this isn't a scenario where NPS itself is the first place the issue would surface.

-   **Ephemeral accounts** should also not be affected. These accounts are created dynamically at session time, which means they are created after KB5082142 and the corresponding domain default are already in effect. As a result, any key material generated for them is generated under the new AES-default behavior from the outset—there's no legacy RC4-only key for these accounts to be carrying forward.

-   **Managed accounts** should also not be affected, despite being long-lived. NPS rotates the password on managed accounts at both the beginning and the end of a session, which means these accounts get a fresh password—and therefore a fresh AES key—on a regular, ongoing basis as part of normal NPS operation. Even an old managed account that predates KB5082142 will have picked up AES key material through this rotation well before the update was ever installed.

In short: all three NPS login account types have a built-in reason not to be carrying a stale RC4-only key, so if you're troubleshooting a post-KB5082142 authentication issue in NPS, the login accounts themselves are an unlikely place to focus first.

## The more probable identities causing an issue:

-   **The domain service account NPS uses to communicate with Active Directory.** This account follows the same risk profile as any other service account: if it was provisioned long ago and configured with a non-expiring password, it may still be carrying only an RC4-derived key regardless of how recently NPS itself was upgraded or reconfigured. Conveniently, this account is easy to rule in or out: if it's stuck on RC4 and can no longer authenticate under an AES-only policy, NPS won't just show a subtle symptom—it will typically fail to perform an AD sync entirely. A failed or failing AD sync immediately after KB5082142 was installed is a strong, direct signal to check this account's PasswordLastSet and msDS-SupportedEncryptionTypes values first.

-   **The NPS resource computer account.** This is the most likely culprit. Like any domain-joined machine, the NPS resource has a computer account in Active Directory, and computer account passwords do rotate automatically—by default, roughly every 30 days. But because that rotation depends on the machine being online, having a healthy secure channel to a domain controller, and not having been cloned or restored from an old snapshot without proper de-provisioning, it's the identity most prone to silently falling out of its normal rotation cycle. If the NPS server itself has been offline for an extended stretch, was provisioned from an older template or image, or has had secure channel issues in the past, its computer account is the first place to check for a stale RC4-only key.

# Solutions

If you're experiencing authentication issues that align with the above, here are the paths forward, from most targeted to most broad.

## 1. Identify the specific accounts involved

Check the Windows Security Event Log on your domain controllers for KDC audit events (Event IDs 201, 202, 206, and 207 during the audit/warning phase; 208 and 209 once a domain controller is enforcing AES-only behavior). These events identify exactly which accounts or devices are requesting or requiring RC4. You can also directly query an account's current encryption support:

```powershell
Get-ADUser -Identity <account> -Properties msDS-SupportedEncryptionTypes, PasswordLastSet
Get-ADComputer -Identity <account> -Properties msDS-SupportedEncryptionTypes, PasswordLastSet
```

An account showing a blank or unset msDS-SupportedEncryptionTypes value combined with an old PasswordLastSet date is a strong candidate for the issue described above.

## 2. Reset the password for accounts that can support AES but haven't rotated

This is the fix for the "old account, no reset since before AES" scenario. Resetting the password generates a new AES key immediately, and the account will authenticate normally under the new default going forward. For the NPS domain service account or any managed account fitting this profile, this is the recommended fix rather than permanently exempting the account from AES.

For the NPS server's computer account specifically—the most likely culprit identified above—you have two options depending on scale:

-   **Single machine:** run the following Powershell command (as administrator) directly on the NPS resource to force an immediate password rotation:

```powershell
Reset-ComputerMachinePassword
```

-   **Remote PowerShell:** Run Reset-ComputerMachinePassword against every machine via PowerShell remoting:

```powershell
$computers = Get-ADComputer -Filter * | Select-Object -ExpandProperty Name

Invoke-Command -ComputerName $computers -ScriptBlock {
    Reset-ComputerMachinePassword
} -ErrorAction SilentlyContinue
```

This requires WinRM enabled on target machines (usually already true in a managed domain) and the machines to be online. You'd typically pull the target list from step 1 or in this example, AD (filtered by OU, staleness, etc.) rather than blasting the whole domain at once.

-   **Multiple machines / fleet-wide:** rather than touching each machine individually, you can temporarily lower the domain policy for computer account password age so that every online machine rotates on its own during its next check-in. In Group Policy, this is:

*Computer Configuration > Policies > Windows Settings > Security Settings > Local Policies > Security Options > "Domain member: Maximum machine account password age"*

This defaults to 30 days. Temporarily setting it to 1 day will cause every online, domain-joined machine to rotate its password on its next Netlogon check-in—typically within about an hour of the GPO refreshing. Once you've confirmed the affected machines have rotated, set the value back to 30 (or your normal policy) to avoid unnecessary ongoing churn. This is the lower-effort option when you don't need the rotation to happen instantly and would rather let it happen naturally across many machines at once, but note it still requires each machine to be online and able to reach a domain controller—a machine that's offline during this window will simply rotate the next time it checks in, once it's back online.

## 3. Configure an explicit exception for accounts or devices that genuinely cannot support AES

Setting the account's own msDS-SupportedEncryptionTypes attribute to include RC4 (a common value used for this is 28, i.e., RC4 + AES128 + AES256) restores that account's ability to authenticate using RC4 without changing the domain-wide default. Everything else in the domain continues to benefit from the AES-only default introduced by KB5082142.

```powershell
Set-ADUser -Identity <account> -Replace @{"msDS-SupportedEncryptionTypes" = 28}
Set-ADComputer -Identity <account> -Replace @{"msDS-SupportedEncryptionTypes" = 28}
```

This should be treated as a documented, deliberate, and ideally temporary exception—not a permanent configuration—with a plan to retire or upgrade the underlying legacy dependency where possible.

## 4. As a last resort, temporarily roll back the domain-wide default

Setting DefaultDomainSupportedEncTypes in the registry on all domain controllers to a value that includes RC4 (commonly 0x1C) restores the pre-KB5082142 fallback behavior for every account without an explicit override, while keeping the security update itself installed. This is a supported and fully reversible configuration, but it is intentionally broad: it re-exposes every account in the domain that lacks an explicit msDS-SupportedEncryptionTypes value, not just the specific ones causing trouble. It will also generate a recurring audit event (Event ID 205) on every domain controller restart or KDC service restart as a reminder that the configuration is insecure. This option is best used only to stabilize an environment quickly while the affected accounts identified in Step 1 are remediated individually, and should be reverted once that remediation is complete.

*If you continue to see authentication failures after working through the steps above, please contact Netwrix Support with the specific account name(s), the relevant Event IDs from your domain controller logs, and confirmation of the msDS-SupportedEncryptionTypes and PasswordLastSet values for the accounts involved—this will let us help you pinpoint the cause more quickly.*
