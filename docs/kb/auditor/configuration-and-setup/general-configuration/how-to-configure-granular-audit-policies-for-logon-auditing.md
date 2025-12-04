---
description: >-
  This article describes how to configure granular audit policies for Logon
  auditing on Windows Vista or later, using Local Security Policy or Group
  Policy Object (GPO). It also explains how to enable granular audit policies
  checking in Netwrix Logon Reporter.
keywords:
  - granular audit policies
  - Logon auditing
  - auditpol
  - gpupdate
  - Local Security Policy
  - Group Policy
  - Windows Server 2008 R2
  - Netwrix Logon Reporter
products:
  - auditor
sidebar_label: How to configure granular audit policies for Logon
tags: []
title: "How to configure granular audit policies for Logon Auditing"
knowledge_article_id: kA00g000000PbdSCAS
---

# How to configure granular audit policies for Logon Auditing

How to configure granular audit policies for Logon Auditing (Windows Vista or later)?

In Windows Server 2008 R2 and Server 2012, granular audit policies are integrated with the Group Policies, so you can apply them via a Group Policy Object (GPO) or Local Security Policies.

## Applying Granular Audit Policies via Local Policies

To apply granular audit policies via Local Policies, perform the following:

1. On a monitored server, open the Local Security Policy snap-in (navigate to **Start** -> **Run** and type `secpol.msc`).
2. Navigate to **Security Settings -> Local Policies -> Security Options** and locate the **Audit: Force audit policy subcategory settings (Windows Vista or later)** policy.
3. Double-click this policy and select the **Enabled** option.
4. Navigate to **Security Settings -> Advanced Audit Policy Configuration -> System Audit Policies**.
5. Set the subcategories below to Success and Failure:
   - `LogonLogoff -> Audit Other Logon/Logoff Events`
   - `LogonLogoff -> Audit Logon`
   - `LogonLogoff -> Audit Logoff`
   - `Account Management -> Audit User Account Management`
6. Update your Group Policies by executing the `gpupdate /force` command in the command line interface.

   Note: You can check your current effective settings by executing the following command:

   ```cmd
   gpupdate /force
   auditpol /get /category:*
   ```
7. In Netwrix Logon Reporter, navigate to the **Advanced** tab. Select the **Enable granular audit policies checking** option and click **Apply**.

## Applying Granular Audit Policies via Group Policies

To apply a granular audit policy configuration via a Group Policy Object (GPO), you must have a Windows Server 2008 R2 domain controller or member server with the Group Policy Management Console installed.

For instructions on how to do this, refer to the following technical article by Microsoft: [Advanced Security Audit Policy Step-by-Step Guide](http://technet.microsoft.com/en-us/library/dd408940(v=ws.10).aspx?ppud=4)
