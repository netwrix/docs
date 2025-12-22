---
title: "Permissions for SharePoint Auditing"
description: "Permissions for SharePoint Auditing"
sidebar_position: 20
---

# Permissions for SharePoint Auditing

Before you start creating a monitoring plan to audit your SharePoint farm, plan for the account that
will be used for data collection – it should meet the requirements listed below. Then you will
provide this account in the monitoring plan wizard.

Starting with version 9.96, you can use group Managed Service Accounts (gMSA) as data collecting
accounts.

For more information on gMSA, refer to
[Use Group Managed Service Account (gMSA)](/docs/auditor/10.7/requirements/gmsa.md)[Microsoft documentation](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview).

These group Managed Service Accounts should meet the related requirements.

**On the target SharePoint farm:**

1. On the SharePoint server where the Netwrix Auditor Core Service will be deployed: the account
   must be a member of the local Administrators group.  
   To learn more about Netwrix Auditor Core Services, refer to
   [Installation](/docs/auditor/10.7/install/overview.md) topic.
2. On the SQL Server hosting SharePoint database: the SharePoint_Shell_Access role.  
   See the Assigning 'SharePoint_Shell_Access' Role topic for additional information.
3. If you plan to collect state-in-time data from a SharePoint farm, the account should also meet
   the requirements below:
    - For site collection processing — lock status for this account must differ from _No access_
    - For web application processing — the following permissions must be assigned to this account:
        - Open items
        - View items
        - Browse directories
        - View pages
        - Browse user information
        - Open
        - Enumerate permissions

## Assigning 'SharePoint_Shell_Access' Role

The account that runs Netwrix Auditor for SharePoint Core Service installation must be granted the
SharePoint_Shell_Access role on SharePoint SQL Server configuration database. If you select to
deploy the Netwrix Auditor for SharePoint Core Service automatically when configuring auditing in
Netwrix Auditor, the installation will be performed under the account specified for data collection.

1. In your SharePoint server, click Start → Microsoft SharePoint Products `<version>` SharePoint
   Management Shell.
2. Execute the following command:

    ```
    Add-SPShellAdmin –UserName <domain\user>
    ```

## Define Log On As a Service Policy

On the SharePoint monitoring plan creation, the Log on as a service policy is automatically defined
for the Data Processing Account as a local security policy. However, if you have the Deny log on as
a service policy defined locally or on the domain level, the local Log on as a service policy will
be reset. In this case, redefine the Deny log on as a service policy through the Local Security
Policy console on your computer or on the domain level through the Group Policy Management console.

Follow the steps to define log on as a service policy:

**Step 1 –** On the computer where Auditor Server is installed, open the **Local Security Policy**
snap-in: navigate to Start > Windows Administrative Tools and select Local Security Policy.

**Step 2 –** Navigate to **Security Settings > Local Policies > User Rights Assignment** and locate
the **Log on as a service** policy.

**Step 3 –** Double-click the **Log on as a service** policy, and click **Add User or Group**.
Specify the account that you want to define this policy for.

The Log On is now defined as a policy.
