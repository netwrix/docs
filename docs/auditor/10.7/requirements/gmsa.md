---
title: "Use Group Managed Service Account (gMSA)"
description: "Use Group Managed Service Account (gMSA)"
sidebar_position: 100
---

# Use Group Managed Service Account (gMSA)

Auditor supports using Group Managed Service Accounts (gMSA) for data collection and storage. This
can help you to simplify product administration, providing the following benefits:

- There is no password to manage for this account: Windows handles the password management for it.
  User interaction for password update on a regular basis is not required.
- Using the gMSA also eliminates a need in service accounts with static passwords that are set upon
  creation and then never cycled.
- The gMSA also helps to ensure that service account is only used to run a service (gMSA accounts
  cannot be used to log on interactively to domain computers).
- The gMSA is allowed to audit trusted domains using configured and validated gMSA from the target
  domain.

Currently, gMSA is supported:

- As a data collecting account for the following data sources:

    - Active Directory (including Group Policy and Logon Activity)
    - File Server (currently for Windows File Servers)
    - SQL Server
    - SharePoint
    - User Activity (including User Activity Video Recording)
    - Windows Server

    See the [Data Collecting Account](/docs/auditor/10.7/admin/monitoringplans/dataaccounts.md) topic for additional
    information about supported data sources.

    **NOTE:** If you are using a gMSA account for Active Directory collection consider that the
    Active Directory Object Restore tool will not work.

- As an account for accessing Long-Term archive. See the
  [File-Based Repository for Long-Term Archive](/docs/auditor/10.7/requirements/longtermarchive.md) topic for additional
  information.
- As an account for accessing Audit Databases. See
  [Requirements for SQL Server to Store Audit Data](/docs/auditor/10.7/requirements/sqlserver.md) topic for additional information.

    **CAUTION:** In case of accessing Audit Databases using gMSA account, SSRS-based reports will
    not work.

**_RECOMMENDED:_** Prepare a dedicated gMSA for these purposes.

The gMSA would work only within one domain, the parent domain and NA also should be joined within
the same domain. The reason is that gMSAs are designed to be scoped within a single Active Directory
domain or subdomain.

See the following Microsoft article for more information:
[Get started with Group Managed Service Accounts](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-managed-service-accounts/group-managed-service-accounts/getting-started-with-group-managed-service-accounts)

By default, the gMSA account is not a member of any domain groups. After creating gMSA account, you
need to add this account to one of the domain groups as required for the data source you are going
to audit.

## Check for a KDS Root Key

To generate password for gMSA accounts, domain controllers require a Key Distribution Services (KDS)
root key. This key is created once, so if there are any gMSA accounts in your domain, this means the
root key already exists.

Follow the steps to check whether the root key exists in your domain.

**Step 1 –** Open the **Active Directory Sites and Services** Console and select **View** > **Show
Services Node**.

**Step 2 –** Browse to **Services** > **Group Key Distribution Services** > **Master Root Keys**.

**Step 3 –** Alternatively, you can run the `Get-KdsRootKey` cmdlet. If the key does not exist, it
will not return any output.

## Create a KDS Root Key

If the KDS root key does not exist, then you can create a KDS root key as described below, or
contact your Active Directory administrator.

Follow the steps to create a KDS key (on a domain controller running Windows Server 2012 or later).

**Step 1 –** On the domain controller, run **Windows PowerShell**.

**Step 2 –** In the command prompt of Windows PowerShell Active Directory module, run the following
cmdlet:

`Add-KdsRootKey -EffectiveImmediately`

**Step 3 –** A root key will be added to the target DC which will be used by the KDS service
immediately.

**NOTE:** This requires waiting 10 hours, as other domain controllers will be able to use the root
key only after a successful replication. See the
[Create the Key Distribution Services KDS Root Key](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/create-the-key-distribution-services-kds-root-key)
Microsoft article for additional information.

**Step 4 –** Alternatively, you can use the following cmdlet:

`Add-KdsRootKey -EffectiveTime MM/DD/YYYY`

This cmdlet generates a KDS root key that will take effect on the specified date. Use the
_mm/dd/yyyy_ format, for example: `Add-KdsRootKey -EffectiveTime 02/27/21`

**CAUTION:** This approach, however, should be used with care. Waiting up to 10 hours is a safety
measure to prevent password generation from occurring before all DCs in the environment are capable
of answering gMSA requests. For more information, refer to the following microsoft article:
[Create the Key Distribution Services KDS Root Key](https://learn.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/create-the-key-distribution-services-kds-root-key).

To make the KDS Root Key work immediately you can use the following powershell command:

Add-KDSRootKey -Effectivetime ((get-date).addhours(-10))

This command will make the KDS Root Key work immediately.

**NOTE:** This is recommended only for small environments. In large environments, it is required to
wait 10 hours for replication.

## Create a gMSA

To create a new gMSA, you will need to specify:

- New account name and FQDN
- Computer account(s) that will be allowed to make use of that gMSA. Here it will be your Auditor
  Server

    - The account must be a member of the **Administrators** group on the Auditor Server.

For example, you can create a gMSA using the `New-ADServiceAccount` PowerShell cmdlet. If so, you
should specify your Auditor Server account in the `-PrincipalsAllowedToRetrieveManagedPassword`
attribute.

Make sure you specify a valid computer object in this attribute.

If you have multiple Auditor servers, you can specify the computer accounts using a comma separated
list, or specify a security group and add the required computer accounts to that security group.

To create a new gMSA in the root domain using PowerShell:

- If you are using a single Netwrix Auditor Server, run the command as follows:

    `New-ADServiceAccount -name nagmsa -DNSHostName nagmsa.mydomain.local -PrincipalsAllowedToRetrieveManagedPassword NASrv$`

    here:

    - _name_ — new gMSA name, here **nagmsa**. Make sure the name refers to a valid computer
      objects.
    - _DNSHostName_ — FQDN of the new gMSA account, here **nagmsa.mydomain.local**
    - _PrincipalsAllowedToRetrieveManagedPassword_ — your Netwrix Auditor Server NETBIOS name ended
      with $, here __NASrv$\_\_

- If you want to specify a security group that comprises multiple Auditor  servers, run the command
  as follows:

    `New-ADServiceAccount -Name gmsagroup -DNSHostName gmsagroup.mydomain.local -PrincipalsAllowedToRetrieveManagedPassword NAServers`

    here **NAServers** — a security group with your Auditor  servers.

## Assign Required Roles and Permissions to a gMSA

Once a new gMSA account has been prepared, assign the required roles and permissions to this
account, depending on what purpose a gMSA account will be used for.

- If you are going to use a gMSA as a data collecting account in Auditor, add this account to the
  Local Admins group on the Auditor Server and assign the following rights and permissions,
  depending on the data source you want to collect data from:

    - [Permissions for Active Directory Auditing](/docs/auditor/10.7/configuration/activedirectory/permissions.md)
    - [Permissions for Group Policy Auditing ](/docs/auditor/10.7/configuration/grouppolicy/permissions.md)
    - [Permissions for Logon Activity Auditing ](/docs/auditor/10.7/configuration/logonactivity/permissions.md)
    - [Permissions for Windows File Server Auditing](/docs/auditor/10.7/configuration/fileservers/windows/permissions.md)
    - [Permissions for SharePoint Auditing](/docs/auditor/10.7/configuration/sharepoint/permissions.md)
    - [Permissions for SQL Server Auditing ](/docs/auditor/10.7/configuration/sqlserver/permissions.md)
    - [Permissions for Windows Server Auditing ](/docs/auditor/10.7/configuration/windowsserver/permissions.md)

        _Remember,_
        [Permissions for Windows Server Auditing ](/docs/auditor/10.7/configuration/windowsserver/permissions.md)

- If you are going to use a gMSA to access Long-Term archive, assign the roles and permissions
  required for a custom account:

    - [File-Based Repository for Long-Term Archive](/docs/auditor/10.7/requirements/longtermarchive.md)

        _Remember,_ that you can use custom (gMSA) account only if your Long-Term archive stored on
        a file share.

- If you are going to use a gMSA to access Audit Database, assign the required roles:

    - [Requirements for SQL Server to Store Audit Data](/docs/auditor/10.7/requirements/sqlserver.md)

        _Remember,_ that a gMSA account cannot access SSRS due to Microsoft restrictions.

- If you are going to use a gMSA as a data collection accoun for User Activity or User Activity
  Video Recording, refer to the following topics:

    - [User Activity](/docs/auditor/10.7/configuration/useractivity/overview.md)
    - [Configure Video Recordings Playback Settings](/docs/auditor/10.7/configuration/useractivity/videorecordings.md)

Now you can use a gMSA account as one of the Auditor Service Account.

## Apply a gMSA

This topic contains instructions on how to apply a gMSA as one of the Auditor Service Accounts.

- Apply a gMSA as a Data Collecting Account
- Apply gMSA to Access Long-Term Archive
- Apply gMSA to Access Audit Database

### Apply a gMSA as a Data Collecting Account

To process the corresponding monitored items using gMSA, you can specify this account in the
monitored plan properties. See the
[Create a New Monitoring Plan](/docs/auditor/10.7/admin/monitoringplans/create.md) topic for additional information.

Follow the steps to set a custom account in the monitored item properties.

**Step 1 –** Open the monitored item properties for editing.

**Step 2 –** On the **General** tab, under **Specify account for collecting data**, select **gMSA**
option.

![Monitored Item Properties page](/images/auditor/10.7/requirements/gmsa.webp)

See the
[Add Items for Monitoring](/docs/auditor/10.7/admin/monitoringplans/datasources.md#add-items-for-monitoring) topic
for additional information.

### Apply gMSA to Access Long-Term Archive

To write data to the Long-Term Archive and upload report subscriptions to shared folders, you can
specify this account as a custom account in the Long-Term Archive settings. See the
[Long-Term Archive](/docs/auditor/10.7/admin/settings/longtermarchive.md) topic for additional information.

**NOTE:** For a custom account or a gMSA one, consider that you can use the account for the
Long-Term Archive based on a file share

### Apply gMSA to Access Audit Database

To access Audit Database, generate reports and run interactive search queries, you can specify this
account under the 'Specify custom connection parameters in your common database plan settings. See
the [Fine-Tune Your Plan and Edit Settings](/docs/auditor/10.7/admin/monitoringplans/finetune.md) topic for
additional information.
