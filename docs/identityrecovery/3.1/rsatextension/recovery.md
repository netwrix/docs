---
title: "Restore an Object"
description: "Restore an Object"
sidebar_position: 20
---

# Restore an Object

The Restore feature recovers deleted objects (users, computers, groups, OUs, etc.) from the Recycle
Bin in Active Directory Users and Computers (ADUC).

## Prerequisites

The following prerequisites must be met before you can rollback or recover an object using ADUC:

- You must register the RSAT Extension on the Recovery Application Server to add the Rollback and
  Restore options to the ADUC console. See the
  [Register/Unregister the RSAT Extension](/docs/identityrecovery/3.1/install/configurationutility.md#registerunregister-the-rsat-extension)
  topic for additional information.
- At least one backup of the domain must be available in the Identity Recovery Console.
  See the [Domains Page](/docs/identityrecovery/3.1/admin/configuration/domain.md) topic for additional information.

## Restore an Object Using ADUC

Follow the steps to restore a deleted object.

**Step 1 –** Open ADUC and select the Recycle Bin.

![ADUC with the Restore option selected](/images/identityrecovery/3.1/rsatextension/aducrestore.webp)

**Step 2 –** In the Recycle Bin, right-click on the object to be restored and select **Restore** on
the menu. The Object Recovery wizard opens.

![Object Recovery Wizard - Object Backups page](/images/identityrecovery/3.1/rsatextension/objectbackups_1.webp)

**Step 3 –** On the Object Backups page, select the desired date timestamp to identify the backup
for recovery. Multiple backups may be available for a single day depending on the configured
schedule. Click **Next** to continue.

![Object Recovery Wizard - Recovery Options page](/images/identityrecovery/3.1/rsatextension/recoveryoptions.webp)

**Step 4 –** On the Recovery Options page, select the Container and Naming Conflict actions for the
recovery process.

- Container – When a container is deleted in Active Directory, all child objects are also deleted.
  Select a container restore option from the drop-down menu:

    - Only restore the container object – Restores the container object but no children
    - Restore the container object and the immediate children – Restores the container object and
      its immediate children
    - Restore the entire sub-tree – Restores the container object and all children

    :::note
    Selecting the Restore the container object and the immediate children or the Restore
    the entire sub-tree option enables the User Options page.
    :::

- Naming Conflict – A naming conflict can occur if an object was created post-deletion that has
  identical values to the original object. From the drop-down menu, select an option to implement if
  a naming conflict occurs:

    - Skip the object – If there is a conflict with naming, do not restore and skip the object
    - Automatically use alternative values – If there is a conflict with naming, a numeric value
      will be appended to the name of the object being restored to create a unique name

Click **Next**.

![Object Recovery Wizard - User Options page](/images/identityrecovery/3.1/rsatextension/useroptions.webp)

**Step 5 –** The User Options page is displayed when user objects are being restored. When a user
object is included as a child object being restored, this page is also displayed. Consider the
following configurations in ADUC before choosing the options for deleted user objects:

- Passwords are not persisted – User account is disabled and will have no password, and be disabled
  after restoration
- Passwords are persisted – User password is restored and ADUC automatically sets the _User must
  change password at next logon_ flag

Select the desired checkboxes relating to the state of a user password upon restoration:

- Enable user – Enables the user in Active Directory
- Clear 'User must change password' flag upon restoration – Restored users do not receive an alert
  to change their password upon first login after a recovery. Instead, their old password prior to
  deletion is still active.
- Set new password – Implement a new password upon recovery. Type the new password in the text box.

    :::tip
        Remember, when a new password is created, the user needs it to login the first time. The
    password should be copied and given to the restored user.
    :::


Click **Next**.

![Object Recovery Wizard - Domain Controller page](/images/identityrecovery/3.1/rsatextension/domaincontroller.webp)

**Step 6 –** On the Domain Controller page, select the Domain Controller to run the restoration
action. This page consists of two sections:

- Domain Controller

    - Use the current domain controller
    - Use any writable domain controller
    - Use the selected domain controller – Select a domain controller from the drop-down menu

- Details – Provides information about the selected domain controller

Click **Next**.

![Object Recovery Wizard - Alternate Credentials page](/images/identityrecovery/3.1/rsatextension/alternatecredentials.webp)

**Step 7 –** The account performing the operation must have Domain Admin privileges to access the
domain tree area where the object resides. On the Alternate Credentials page:

- If the account specified during domain configuration has Domain Admin privileges, click **Next**.
- If the domain account does not have Domain Admin privileges, select the **Use alternate
  credentials for the recovery operation** checkbox and enter an account with Domain Admin
  privileges, then click **Next**.

For a Least Privilege Access Model to provision an Active Directory security group with the
permissions that are necessary to perform backups, rollbacks and recovery, see the
[Least Privilege Access Model](/docs/identityrecovery/3.1/requirements/targetdomain.md#least-privilege-access-model) topic.

![Object Recovery Wizard - Confirm page](/images/identityrecovery/3.1/rsatextension/confirm_1.webp)

**Step 8 –** On the Confirm page, review the summarized object restore settings. Click **Finish** to
start the recovery.

![Recovery Success Status](/images/identityrecovery/3.1/rsatextension/recvoerysuccessful.webp)

**Step 9 –** The Recovery window displays the action status. Click **Close** to exit.

The ADUC object has been successfully recovered from the Recycle Bin.
