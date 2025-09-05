---
title: "Permissions for Active Directory Auditing"
description: "Permissions for Active Directory Auditing"
sidebar_position: 110
---

# Permissions for Active Directory Auditing

Before you start creating a monitoring plan to audit your Active Directory, plan for the account
that will be used for data collection – it should meet the requirements listed in this topic. Then
you will provide this account in the monitoring plan wizard (or in the monitored item settings).

## Account Requirements

The account used for data collection must meet the following requirements:

- Member of the Domain Admins group on the target server.

    **NOTE:** This covers all the required permissions below and is a mandatory setting if you want
    to use network traffic compression for data collection.

- Local Admin on the Netwrix Auditor server.
- The combination of the following rights and permissions if you plan to disable network traffic
  compression for your monitoring plan or, for some reasons, do not want to add this account to the
  Domain Admins group:

    - The "Manage auditing and security log" policy must be defined for this account.
      See the Configure the Manage Auditing and Security Log Policy topic for additional
      information.
    - If you plan to process the Active Directory Deleted Objects container, Read permission on this
      container are required. See the Grant Permissions for the Deleted Objects Container topic for
      additional information.

If the account selected for data collection is not a member of the Domain Admins group, see the
[Assign Permission To Read the Registry Key](/docs/auditor/10.8/configuration/windowsserver/permissions.md) topic.

## Additional Configuration to Review Changes Made via Exchange Server

If you have an on-premises Exchange server in your Active Directory domain, consider that some
changes can be made via that Exchange server. To be able to audit and report who made those changes,
you should make sure that the account used for data collection has any of the following:

- Membership in the **Organization Management** or **Records Management** group.

- The **Audit Logs** management role (see the
  [Assigning Management Roles](/docs/auditor/10.8/configuration/exchange/permissions.md#assign-management-roles) topic for
  additional information).

You will also need to configure Exchange Administrator Audit Logging (AAL) settings. See the
[Exchange Administrator Audit Logging Settings](/docs/auditor/10.8/configuration/exchange/auditlog.md) topic for additional
information.

## Additional Configuration for Domain Controller's Event Logs Auto-backup

The following is required if auto-backup is enabled for the domain controller event logs:

- Permissions to access the HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\EventLog\Security
  registry key on the domain controllers in the target domain. See the
  [Assign Permission To Read the Registry Key](/docs/auditor/10.8/configuration/windowsserver/permissions.md) topic for additional
  information.
- Membership in one of the following groups: **Administrators**, **Print Operators**, **Server
  Operators**.
- Read/Write share permission and Full control security permission on the logs backup folder.

## Considerations for gMSA Account

If you are using gMSA for data collection, consider that AAL event data collection from your
on-premise Exchange server will not be possible.

Thus, changes made to your Active Directory domain via that Exchange server will be reported with
_`domain\Exchange_server_name$`_ instead of the initiator (user) name in the "_Who_" field of
reports, search results and activity summaries.

### Target Domain

If you plan to use network traffic compression for data processing, consider the following:

- If network traffic compression will be _enabled_, then the account must belong to the Domain
  Admins group.
- If network traffic compression will be _disabled_, and the account you plan to use for data
  collection is not a member of the Domain Admins group, then the **Manage auditing and security
  log** policy must be defined for this account.
  See the Configure the Manage Auditing and Security Log Policy topic for more information.

If you need to process Active Directory **Deleted Objects** container, consider the following:

- Read permission on this container is required. See the Grant Permissions for the Deleted Objects
  Container topic for additional information.
- Grant this permission only if the account you plan to use for data collection is not a member of
  the Domain Admins group.

If auto-backup is _enabled_ for the domain controller event logs:

- Permissions to access the _HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\EventLog\Security_
  registry key on the domain controllers in the target domain. See the
  [Assign Permission To Read the Registry Key](/docs/auditor/10.8/configuration/windowsserver/permissions.md) topic for additional
  information.
- Membership in any of the following groups: Administrators, Print Operators, Server Operators
- Read/Write share permission and Full control security permission on the logs backup folder.

**NOTE:** Grant these permissions only if the account you plan to use for data collection is not a
member of the **Domain Admins** group.

If you have an on-premises Exchange server in your Active Directory domain, consider that some
changes can be made via that Exchange server. To be able to audit and report who made those changes,
you should make sure that the account used for data collection has any of the following:

- Membership in the **Organization Management** or **Records Management** group.
- The **Audit Logs** management role (see the
  [Assigning Management Roles](/docs/auditor/10.8/configuration/exchange/permissions.md#assign-management-roles) topic for
  additional information).

You will also need to configure Exchange Administrator Audit Logging (AAL) settings. See the
[Exchange Administrator Audit Logging Settings](/docs/auditor/10.8/configuration/exchange/auditlog.md) topic for additional
information.

If you are using gMSA for data collection, consider that AAL event data collection from your
on-premise Exchange server will not be possible.

Thus, changes made to your Active Directory domain via that Exchange server will be reported with
_`domain\Exchange_server_name$`_ instead of the initiator (user) name in the "_Who_" field of
reports, search results and activity summaries.

## Configure the Manage Auditing and Security Log Policy

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group.

Follow the steps to configure the Manage Auditing and Security Log Policy.

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
Administrative Tools (Windows 2012) **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`**
**> Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the
**Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** In the **Group Policy Management Editor** dialog, expand the **Computer Configuration**
node on the left and navigate to **Policies > Windows Settings > Security Settings > Local
Policies.**

**Step 4 –** On the right, double-click the **User Rights Assignment** policy.

**Step 5 –** Locate the **Manage auditing and security log** policy and double-click it.

**Step 6 –** In the **Manage auditing and security log Properties** dialog, click **Add User or
Group**, specify the user that you want to define this policy for.

**Step 7 –** Run the following command to update group policy: `gpupdate /force`

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 9 –** Ensure that new GPO settings applied on any audited domain controller.

## Grant Permissions for the Deleted Objects Container

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group.

Follow the steps to grant permissions for the Deleted Objects Container.

**Step 1 –** Log on to any domain controller in the target domain with a user account that is a
member of the **Domain Admins** group.

**Step 2 –** Navigate to **Start > Run** and type _"cmd"_.

**Step 3 –** Input the following command: `dsacls <deleted_object_dn> /takeownership`

where `deleted_object_dn` is the distinguished name of the deleted directory object.

For example: `dsacls "CN=Deleted Objects,DC=Corp,DC=local" /takeownership`

**Step 4 –** To grant permission to view objects in the **Deleted Objects** container to a user or a
group, type the following command:

`dsacls <deleted_object_dn> /G <user_or_group>:<Permissions>`

where `deleted_object_dn` is the distinguished name of the deleted directory object
and` user_or_group` is the user or group for whom the permission applies, and `Permissions` is the
permission to grant.

For example, `dsacls "CN=Deleted Objects,DC=Corp,DC=local" /G Corp\jsmith:LCRP`

In this example, the user CORP\jsmith has been granted **List Contents** and **Read Property**
permissions for the **Deleted Objects** container in the **corp.local** domain. These permissions
let this user view the contents of the **Deleted Objects** container, but do not let this user make
any changes to objects in this container. These permissions are equivalent to the default
permissions that are granted to the **Domain Admins** group.

## Define the Log On As a Service Policy

On the Logon Activity monitoring plan creation, the Log on as a service policy is automatically
defined for the Data Processing Account as a local security policy. However, if you have the Deny
log on as a service policy defined locally or on the domain level, the local Log on as a service
policy will be reset. In this case, redefine the Deny log on as a service policy through the Local
Security Policy console on your computer or on the domain level through the Group Policy Management
console.

Follow the steps to define the Log On As a Service policy.

**Step 1 –** On the computer where Auditor Server is installed, open the **Local Security Policy**
snap-in: navigate to Start > Windows Administrative Tools and select Local Security Policy.

**Step 2 –** Navigate to **Security Settings > Local Policies > User Rights Assignment** and locate
the **Log on as a service** policy.

**Step 3 –** Double-click the **Log on as a service** policy, and click **Add User or Group**.

**Step 4 –** Specify the account that you want to define this policy for.

## Define the Log On As a Batch Job Policy

When you create a Logon Activity monitoring plan, the Log on as a batch job policy is automatically
defined for the Data Processing Account as a local security policy. However, if you have the Deny
log on as a batch job policy defined locally or on the domain level, the local Log on as a batch job
policy will be reset. In this case, redefine the Deny log on as a batch job policy through the Local
Security Policy console on your computer or on the domain level through the Group Policy Management
console.

You can configure this policy via the **Local Security Policy** snap-in or using the Group Policy
Management console.

### Configure the Log On As a Batch Job policy via Local Security Policy Snap-in

Follow the steps to configure the Log On As a Batch Job policy via Local Security Policy snap-in.

**Step 1 –** On any domain controller in the target domain, open the **Local Security Policy**
snap-in: navigate to Start > Windows Administrative Tools and select Local Security Policy.

**Step 2 –** In the **Local Security Policy** snap-in, navigate to **Security Settings** > **Local
Policies > User Rights Assignment** and locate the **Log on as a batch job** policy.

![manualconfig_ws_logonasbatch](/images/1secure/admin/datacollection/activedirectory/manualconfig_ws_logonasbatch.webp)

**Step 3 –** Double-click the **Log on as a batch job** policy, and click **Add User or Group**.
Specify the account that you want to define this policy for.

### Configure the Log On As a Batch Job Policy Using the Group Policy Management Console

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group.

Follow the steps to configure the Log On As a Batch Job policy using the Group Policy Management
Console.

**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools
(Windows 2012 R2 and below) > Group Policy Management.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` >
Domain Controllers. Right-click the effective domain controllers policy (by default, it is the
Default Domain Controllers Policy), and select Edit.

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Local Policies.

**Step 4 –** On the right, double-click the User Rights Assignment policy.

**Step 5 –** Locate the Log on as a batch job policy and double-click it.

**Step 6 –** In the Log on as a batch job Properties dialog, click Add User or Group and specify the
user that you want to define this policy for.

**Step 7 –** Navigate to Start > Run and type `cmd`. Input the `gpupdate /force` command and press
Enter. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 9 –** Ensure that new GPO settings applied on any audited domain controller.
