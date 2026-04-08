---
title: "Permissions for Group Policy Auditing"
description: "Permissions for Group Policy Auditing"
sidebar_position: 20
---

# Permissions for Group Policy Auditing

The account used for data collection must meet the following requirements:

- Member of the local Administrators group on the target server.
- Member of the Domain Admins group on the target server.

    **NOTE:** This covers all the required permissions below and is a mandatory setting if you want
    to use network traffic compression for data collection.

    OR

- The combination of the following rights and permissions if you plan to disable network traffic
  compression for your monitoring plan or, for some reasons, do not want to add this account to the
  **Domain Admins** group:

    - **Manage auditing and security log** policy must be defined for this account.
    
    - If you plan to process Active Directory **Deleted Objects** container, **Read** permission on
      this container is required. 

## Additional Configuration for Domain Controller's Event Logs Auto-backup

The following is required if auto-backup is _enabled_ for the domain controller event logs:

- Permissions to access the _HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\EventLog\Security_
  registry key on the domain controllers in the target domain. See the Assign Permission to Read the
  Registry Key topic for additional information.
- Membership in one of the following groups: **Administrators**, **Print Operators**, **Server
  Operators**.
- Read/Write share permission and Full control security permission on the logs backup folder.

## Assign Permission to Read the Registry Key

This permission is required only if the account selected for data collection is not a member of the
Domain Admins group.

This permission should be assigned on each domain controller in the audited domain, so if your
domain contains multiple domain controllers, it is recommended to assign permissions through Group
Policy, or automatically using

To assign permissions manually, use the Registry Editor snap-in or the Group Policy Management
console.

### Assign Permission Via the Registry Editor Snap-in

Follow the steps to assign permission via the Registry Editor snap-in:

**Step 1 –** On your target server, open Registry Editor: navigate to **Start > Run** and type
_"regedit"_.

**Step 2 –** In the left pane, navigate to _HKEY_LOCAL_MACHINE\SYSTEM\CurrentControl
Set\Services\EventLog\Security_.

**Step 3 –** Right-click the **Security** node and select **Permissions** from the pop-up menu.

**Step 4 –** Click **Add** and enter the name of the user that you want to grant permissions to.

**Step 5 –** Check **Allow** next to the **Read** permission.

**Step 6 –** For auditing Logon Activity, you also need to assign the Read permission to the
_HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv_ registry key.

### Assign Permission Using the Group Policy Management Console

Follow the steps to assign permission using the Group Policy Management console:

**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools
(Windows 2012 R2 and below) > Group Policy Management.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` >
Domain Controllers. Right-click the effective domain controllers policy (by default, it is the
_Default Domain Controllers Policy_), and select Edit.

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Registry.

**Step 4 –** Right-click in the pane and select Add Key.

**Step 5 –** Navigate to `HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv` and click OK.

**Step 6 –** Click Add and enter the name of the user that you want to grant permissions to and
press Enter.

**Step 7 –** Check Allow next to the _"Read"_ permission and click OK

**Step 8 –** In the pop-up window, select Propagate inheritable permissions to all subkeys and click
OK.

**Step 9 –** Repeat the steps 4-8 for keys below:

- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg`;
- `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security`.

**Step 10 –** Close Group Policy Management console.

**Step 11 –** Navigate to Start > Run and type "_cmd_". Input the `gpupdate /force` command and
press Enter. The group policy will be updated.

**Step 12 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 13 –** Ensure that new GPO settings were applied to the domain controllers.

## Service Account Best Practices

When configuring the service account for Group Policy auditing in 1secure:

1. **Use Dedicated Accounts**: Create dedicated service accounts specifically for 1secure data collection
2. **Follow Least Privilege**: Grant only the minimum permissions required for data collection
3. **Regular Password Rotation**: Implement regular password rotation policies for service accounts
4. **Monitor Account Usage**: Regularly monitor service account usage and access patterns
5. **Document Permissions**: Maintain documentation of all granted permissions and their purposes

## Troubleshooting Permissions

If you encounter permission-related issues:

1. **Verify Group Membership**: Ensure the service account is a member of required groups
2. **Check Registry Permissions**: Verify registry key permissions are correctly configured
3. **Test Connectivity**: Use tools like `gpupdate /force` to test Group Policy connectivity
4. **Review Event Logs**: Check Windows Event Logs for authentication and authorization errors
5. **Validate GPO Settings**: Ensure Group Policy settings are properly applied across domain controllers

## Security Considerations

When implementing Group Policy auditing permissions:

- **Principle of Least Privilege**: Grant only necessary permissions
- **Regular Audits**: Periodically review and audit service account permissions
- **Secure Storage**: Store service account credentials securely
- **Network Security**: Ensure secure communication channels between components
- **Compliance**: Ensure permission configurations meet organizational compliance requirements