---
description: >-
  Explains what Microsoft KB5082142 changes in Kerberos encryption defaults,
  why most environments are unaffected, and where accounts can still be
  relying on RC4.
keywords:
  - KB5082142
  - RC4
  - AES
  - Kerberos
  - Authentication
  - Kerberoasting
  - CVE-2026-20833
  - Domain Controller
  - Encryption Types
  - Windows Server
products:
  - privilegesecure
sidebar_label: Understanding the Microsoft KB5082142 RC4-to-AES Encryption Change
tags: [kb]
title: "Understanding the Microsoft KB5082142 RC4-to-AES Encryption Change"
knowledge_article_id:
---

# Understanding the Microsoft KB5082142 RC4-to-AES Encryption Change

## Question

What does Microsoft KB5082142 change, and should you be concerned about it in your environment?

## Answer

### What KB5082142 Does, and Why

Microsoft released KB5082142 on April 14, 2026. It changes a core default in how Active Directory's Kerberos Key Distribution Center (KDC) issues authentication tickets. Specifically, it changes the default value of `DefaultDomainSupportedEncTypes` so that the KDC now assumes any account without an explicit encryption-type configuration supports AES-SHA1 encryption only, rather than falling back to the legacy RC4-HMAC cipher.

This change is part of Microsoft's phased response to CVE-2026-20833, a Kerberos information disclosure vulnerability. The underlying risk is that an authenticated attacker can capture RC4-encrypted service tickets and crack them offline—a technique known as Kerberoasting—to recover the plaintext password of the account for which the ticket was issued. Service accounts have historically been an attractive target for this style of attack, because they are frequently privileged and rarely rotated. Removing RC4 as an implicit fallback closes that avenue for any account that has not been explicitly configured to require it.

Microsoft staged the rollout deliberately: an audit-only phase beginning in January 2026 to surface RC4 dependencies without breaking anything, followed by the April 2026 default change addressed in KB5082142, with full enforcement arriving in July 2026.

### Why Microsoft Expects Minimal Impact

Microsoft's stated rationale for expecting this change to affect a small minority of accounts is straightforward: Windows has generated and stored an AES key alongside the RC4 key for any account automatically since Windows Server 2008, whenever that account's password is set or changed. In other words, the AES key material has quietly existed in Active Directory for the large majority of accounts in any reasonably current environment—this update changes which key the KDC prefers by default, rather than requiring new key generation for most accounts.

For any account whose password has been set or reset at any point since AES support was introduced, this change should be invisible. The login or service authentication continues to work exactly as before, using AES instead of RC4.

### Where Accounts Can Still Be Stuck on RC4

Despite this, a subset of accounts and devices can still end up without a usable AES key, or without AES support at all. The most common causes are:

-   **Accounts predating Windows Server 2008 that have never had a password reset.** If an administrator created the account before AES support existed and its password has genuinely never been changed since, Windows never generated an AES key for it. This is rare for interactive user accounts (which typically rotate on a policy), but common for service accounts configured with "password never expires," and for old administrative or break-glass accounts that were created once and left untouched.

-   **Legacy or third-party devices that only support RC4.** Some non-Windows Kerberos clients—older network appliances, embedded devices, older Unix/Linux Kerberos implementations, and similar hardware—were never built with AES-SHA1 support. These devices structurally cannot generate or use an AES key, regardless of password rotation, and need an explicit exception or a hardware/software upgrade path.

If you use Netwrix Privilege Secure for Access Management (NPS-AM) and are troubleshooting an authentication issue after installing this update, see [NPS-AM Authentication Failures After Microsoft KB5082142](/docs/kb/privilegesecure/troubleshooting-and-errors/netwrix-privilege-secure-authentication-failures-after-microsoft-kb5082142).
