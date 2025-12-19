---
title: "Configure Advanced Audit Policies"
description: "Configure Advanced Audit Policies"
sidebar_position: 40
---

# Configure Advanced Audit Policies

Configuring advanced audit will help you limit the range of events tracked and recorded by the
product, thus preventing your AuditArchive and the Security event log from overfilling. Perform
procedures below instead of the
[Configure Local Audit Policies](/docs/auditor/10.6/configuration/fileservers/windows/localpolicy.md).

## Configure Security Options

Using both basic and advanced audit policies settings may lead to incorrect audit reporting. To
force basic audit policies to be ignored and prevent conflicts, enable the Audit: Force audit policy
subcategory settings to override audit policy category settings option.

Follow the steps to configure security options.

**Step 1 –** On the audited server, open the **Local Security Policy** snap-in and navigate to
Start > Windows Administrative Tools **> Local Security Policy**.

**Step 2 –** Navigate to **Security Settings > Local Policies > Security Options** and locate the
**Audit: Force audit policy subcategory settings** policy.

![manualconfig_fileserver_graudit_secpol2016](/images/auditor/10.6/configuration/fileservers/windows/manualconfig_fileserver_graudit_secpol2016.webp)

**Step 3 –** Double-click the policy and enable it.

## Configure Advanced Audit Policy on Windows Server 2016 and Above

In Windows Server 2016 audit policies are not integrated with the Group Policies and can only be
deployed using logon scripts generated with the native Windows **auditpol.exe** command line tool.
Therefore, these settings are not permanent and will be lost after server reboot.

The procedure below explains how to configure Advanced audit policy for a single server. If you
audit multiple servers, you may want to create logon scripts and distribute them to all target
machines via Group Policy. Refer to the
[Create System Startup / Shutdown and User Logon / Logoff Scripts](https://technet.microsoft.com/en-us/library/dd630947.aspx)
Microsoft article for more information.

**Step 1 –** On an audited server, navigate to Start > Run and type "cmd".

**Step 2 –** Disable the Object Access, Account Management, and Policy Change categories by
executing the following command in the command line interface:

```
auditpol /set /category:"Object Access" /success:disable /failure:disable
auditpol /set /category:"Account Management" /success:disable /failure:disable
auditpol /set /category:"Policy Change" /success:disable /failure:disable
```

**Step 3 –** Enable the following audit subcategories:

| Audit subcategory     | Command                                                                             |
| --------------------- | ----------------------------------------------------------------------------------- |
| Handle Manipulation   | `auditpol /set /subcategory:"Handle Manipulation" /success:enable /failure:enable`  |
| File System           | `auditpol /set /subcategory:"File System" /success:enable /failure:enable`          |
| File Share            | `auditpol /set /subcategory:"File Share" /success:enable /failure:disable`          |
| Audit Policy Change   | `auditpol /set /subcategory:"Audit Policy Change" /success:enable /failure:disable` |
| Security State Change | `auditpol /set /subcategory:"Security State Change" /success:enable`                |
| Logon                 | `auditpol /set /subcategory:"Logon" /success:enable`                                |
| Logoff                | `auditpol /set /subcategory:"Logoff" /success:enable`                               |

It is recommended to disable all other subcategories unless you need them for other purposes. You
can check your current effective settings by executing the following commands:

```
auditpol /set /category:"Object Access" 
auditpol /set /category:"Account Management" 
auditpol /set /category:"Policy Change" 
```

## Configure Advanced Audit Policy on Windows Server 2016 and Above

In Windows Server 2016 and above, Advanced audit policies are integrated with Group Policies, so
they can be applied via Group Policy Object or Local Security Policies. The procedure below
describes how to apply Advanced policies via Local Security Policy console.

**Step 1 –** On the audited server, open the **Local Security Policy** snap-in and navigate to
Start > Windows Administrative Tools > Local Security Policy.

**Step 2 –** In the left pane, navigate to Security Settings > Advanced Audit Policy Configuration >
System Audit Policies.

**Step 3 –** Configure the following audit policies.

| Policy Subnode              | Policy Name                                     | Audit Events                                                                  |
| --------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- |
| Object Access               | - Audit File System - Audit Handle Manipulation | "Success" and/or "Failure" depending on the type of events you want to track. |
| - Audit Detailed File Share | "Failure"                                       |                                                                               |
| - Audit File Share          | "Success"                                       |                                                                               |
| Policy Change               | - Audit Policy Change                           | "Success"                                                                     |
| Logon/Logoff                | - Logon                                         | "Success"                                                                     |
| - Logoff                    | "Success"                                       |                                                                               |
| System                      | - Security State Change                         | "Success"                                                                     |
