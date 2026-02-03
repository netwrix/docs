---
title: "Object Rollback"
description: "Object Rollback"
sidebar_position: 10
---

# Object Rollback

The Rollback feature in the Active Directory Users and Computers (ADUC) console allows you to revert
an Active Directory object to a previous state of a Identity Recovery backup.

## Prerequisites

The following prerequisites must be met before you can rollback or recover an object using ADUC:

- You must register the RSAT Extension on the Recovery Application Server to add the Rollback and
  Restore options to the ADUC console. See the
  [Register/Unregister the RSAT Extension](/docs/identityrecovery/3.1/install/configurationutility.md#registerunregister-the-rsat-extension)
  topic for additional information.
- At least one backup of the domain must be available in the Identity Recovery Console.
  See the [Domains Page](/docs/identityrecovery/3.1/admin/configuration/domain.md) topic for additional information.

## Rollback an Object Using ADUC

Follow the steps to roll back an Active Directory object, including user accounts, groups, and
organizational units.

:::note
Repeat these steps as needed after a multi-select for rolling back multiple objects.
:::

**Step 1 –** Open ADUC and select one or more objects to rollback. Right-click on the object(s) and
select **Rollback** on the menu.

![Rollback selection in ADUC](/images/identityrecovery/3.1/rsatextension/aducrollback.webp)

The Object Rollback wizard opens.

![Object Rollback wizard - Object Backups Page](/images/identityrecovery/3.1/rsatextension/objectbackups.webp)

**Step 2 –** On the Object Backups page, select a backup date and then select the object and
attribute(s) to rollback. This page consists of two sections:

- Objects – Lists the objects selected for rollback
- Backups – Lists the backup(s) with their respective details

    - Backup Date – Select the desired date timestamp to identify the backup for rollback. Multiple
      backups may be available for a single day depending on the configured schedule.
    - Attribute List – Select the attribute(s) to rollback. The table displays the current value and
      backup value. Attributes where these two values are different are highlighted in blue.
    - Only show attributes that have changed – Select this option to display only blue highlighted
      attributes that were changed when the selected backup was performed

You can click on different backup dates to see attribute values for each of those points in time.
However, only one backup date can be selected in order to select attributes for rollback.

Click **Next**.

![Object Rollback wizard - Domain Controller Page](/images/identityrecovery/3.1/rsatextension/domiancontroller.webp)

**Step 3 –** On the Domain Controller page, select the Domain Controller to run the rollback action.
This page consists of two sections:

- Domain Controller

    - Use the current domain controller
    - Use any writable domain controller
    - Use the selected domain controller – Select a domain controller from the drop-down menu

- Details – Provides information about the selected domain controller

Click **Next**.

![Object Rollback wizard - Alternate Credentials Page](/images/identityrecovery/3.1/rsatextension/alternatecredentials.webp)

**Step 4 –** The account performing the operation must have Domain Admin privileges to access the
domain tree area where the object resides. On the Alternate Credentials page:

- If the account specified during domain configuration has Domain Admin privileges, click **Next**.
- If the domain account does not have Domain Admin privileges, select the **Use alternate
  credentials for the rollback operation** checkbox and enter an account with Domain Admin
  privileges, then click **Next**.

For a Least Privilege Access Model to provision an Active Directory security group with the
permissions that are necessary to perform backups, rollbacks and recovery, see the
[Least Privilege Access Model](/docs/identityrecovery/3.1/requirements/targetdomain.md#least-privilege-access-model) topic.

![Object Rollback wizard - Confirm Page](/images/identityrecovery/3.1/rsatextension/confirm.webp)

**Step 5 –** On the Confirm page, review the object information, changes, and the domain controller
selection. Click **Finish** to rollback the object.

![Successful Rollback window](/images/identityrecovery/3.1/rsatextension/rollbacksuccessful.webp)

**Step 6 –** The Rollback window displays the action status. Click **Close** to exit.

The ADUC object has been successfully rolled back to a previous state.
