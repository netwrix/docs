---
description: >-
  This article explains how to manually exclude a user from an untrusted domain in Netwrix Activity Monitor by adding their SID to the agent's configuration file. It addresses the limitation of the UI when no domain trust exists and highlights the importance of using correct delimiters.
keywords:
  - Netwrix Activity Monitor
  - Account
  - Exclusions
  - Multidomain
  - No Trust
products:
  - activitymonitor
sidebar_label: Account Exclusions Cannot Add User from Untrusted Domain
tags: []
title: "Netwrix Activity Monitor Account Exclusions Cannot Add User from Untrusted Domain"
---


# Netwrix Activity Monitor Account Exclusions Cannot Add User from Untrusted Domain

## Related Queries

- "Cannot select Domain2 when I need to specify account in Netwrix Activity Monitor."
- "Trying to exclude a user from Domain2 but cannot browse the account in Activity Monitor."

## Symptom

When you attempt to add an account exclusion in **Netwrix Activity Monitor**, you cannot browse or select Domain2 users in the **Account Exclusions** tab. Domain1 and the monitored host are joined, and Domain2 users do not appear in the account picker.

## Cause

The monitored host is not part of Domain2, and there is no trust relationship between Domain1 and Domain2. As a result, the Activity Monitor UI cannot resolve or validate users from Domain2. The system relies on Windows APIs for domain enumeration and account lookup, which fail without domain trust.

Additionally, if the user attempts to bypass this by editing the configuration file (`SbtFileMon.ini`), misconfigured entries—such as mixed delimiters (semicolons and commas)—may prevent exclusions from loading correctly.

## Resolution

To exclude users from an untrusted domain, use their **Security Identifier (SID)** and manually add it to the configuration file of the **agent system** collecting data from the monitored host. This method avoids the need for name resolution and is fully supported by the Activity Monitor filtering engine.

### Instructions

1. Obtain the **Domain2 user SID of** from a system that can query Domain2:
   ```powershell
   Get-ADUser -Identity username -Server domain2 -Properties SID

   # Example
   # Get-ADUser -Identity Michael.Scott -Server contoso2.com -Properties SID
   # This will output just the SID, example: S-1-5-21-3693812452-4124425045-3432912480-1163
   ```
2. On the agent server for the monitored host, open the following file: `C:\ProgramData\Netwrix\Activity Monitor\Agent\SbtFileMon.ini`.
3. Find the **[*FILE_MONITOR*]** section corresponding to the monitored host (E.g., *HOST=FILE-SERVER01*).
4. Edit the EXCSIDS line:
	- Use semicolon delimiters only. Mixed separators (e.g., comma + semicolon) will break parsing.
	- E.g., (**correct** format): `EXCSIDS=S-1-5-17;S-1-5-18;S-1-5-21-3693812452-4124425045-3432912480-1163`
	- E.g., (**incorrect** format): `EXCSIDS=S-1-5-17;S-1-5-18,S-1-5-21-3693812452-4124425045-3432912480-1163`

>**IMPORTANT:** If you mix commas and semicolons, the system may fail to load the exclusion or treat part of it as an invalid string.

5. Save the file.
6. Restart the Activity Monitor Agent service:
	1. Open **Services** (**`services.msc`**).
	2. Restart the **Netwrix Activity Monitor Agent** service.
7. Open the Account Exclusions UI again.
	- You may not see the friendly name for the SID (due to the trust issue), but it will still function correctly at runtime.

>**NOTE:** The Activity Monitor filtering engine compares user SIDs directly. No name resolution is required once the SID is loaded, which is why this method works even without domain trust.

## Related Link
- [Security Identifiers (SIDs) · Microsoft Learn](https://learn.microsoft.com/en-us/windows/security/identity-protection/access-control/security-identifiers)
