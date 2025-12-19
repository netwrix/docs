---
description: >-
  Explains how to resolve when Audit Policy settings are not applied on a local
  domain controller due to enforced OU policies or obstructing audit.csv files.
keywords:
  - audit policy
  - domain controller
  - gpupdate
  - secpol.msc
  - audit.csv
  - Group Policy Management Console
  - Local Security Policy
  - OU enforced policies
products:
  - auditor
sidebar_label: Audit Policy settings not applied on domain contro
tags: []
title: "Audit Policy settings not applied on domain controller locally"
knowledge_article_id: kA00g000000H9UqCAK
---

# Audit Policy settings not applied on domain controller locally

The Audit policy settings have not been applied on a local domain controller (DC), though all audit settings were successfully configured by the effective DC policy.

The issue appears if an organizational unit (OU) from your domain has some enforced policies in **Group Policy Management Console**. This may prevent the audit settings from being implemented.

To resolve the issue, do the following:

1. Change all Domain Controllers policies status for the OU to be not Enforced.
2. In the **Command Prompt**, type in `gpupdate/force` command, press Enter and close the dialog after update.
3. Open Local Security Policy: go to **Start** -> **Run**, type in `secpol.msc` and click **OK**.
4. In the left pane, navigate to **Local Policies** -> **Audit Policy**.
5. Make sure the **Audit account management** and **Audit directory service access** policies are set to `Success`.

This error can also occur when an `audit.csv` file is not allowing the local security policy to be set properly. This can be fixed by removing the `audit.csv` file in the following two locations:

- `C:\Windows\system32\grouppolicy\machine\microsoft\windows nt\audit\audit.csv`
- `SYSVOL\domain\Policies\\\{GUID\}\Machine\microsoft\windows nt\Audit`
