---
title: "4.Group Policy Job Group"
description: "4.Group Policy Job Group"
sidebar_position: 40
---

# 4.Group Policy Job Group

The 4.Group Policy Job Group audits GPOs and their settings, and provides in depth analysis of
conditions such as where GPOs have been linked, misconfigurations that can cause security or
operational issues, and redundant GPOs that can be consolidated.

![4.Group Policy Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/activedirectory/grouppolicy/jobstree.webp)

The following components comprise the 4.Group Policy Job Group:

- [AD_CPassword Job](/docs/accessanalyzer/11.6/solutions/activedirectory/grouppolicy/ad_cpassword.md)
  – Identifies passwords that are stored in Group Policy Preferences which present a security risk
  allowing attackers access to these passwords. Microsoft published the AES private key, which can
  be used to decrypt passwords stored in Group Policy Preferences. See the Microsoft
  [2.2.1.1.4 Password Encryption](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-gppref/2c15cbf0-f086-4c74-8b70-1f2fa45dd4be)
  article for additional information. Since Authenticated Users have read access to SYSVOL, any
  malicious insider or attacker can search for the cPassword file inside XML files shared through
  SYSVOL to decrypt them. GPOs can be stored in the `%ProgramData%\Microsoft\Group Policy\History`
  folder on each machine, meaning any results found by this job should be deleted off every computer
  once this policy has been removed.
- [AD_GroupPolicy Job](/docs/accessanalyzer/11.6/solutions/activedirectory/grouppolicy/ad_grouppolicy.md)
  – Audits all Group Policies that are present on the Domain Controller, and provides details on the
  containers they are linked to and the settings that are configured
- [AD_OverlappingGPOs Job](/docs/accessanalyzer/11.6/solutions/activedirectory/grouppolicy/ad_overlappinggpos.md)
  – Identifies conflicting and redundant GPO settings based on link location. These GPO settings
  should be cleaned up or consolidated.
- [AD_PasswordPolicies Job](/docs/accessanalyzer/11.6/solutions/activedirectory/grouppolicy/ad_passwordpolicies.md)
  – Identifies fine-grained domain password policies that are stored within the Password Settings
  Container. Fine-Grained password policies allow AD administrators to apply different password
  policies within a single domain.
