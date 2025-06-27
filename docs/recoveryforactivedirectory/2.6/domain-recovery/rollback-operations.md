title: Active Directory Rollback Operations
sidebar_label: Rollback Operations
description: Revert Active Directory objects to previous states including user accounts, groups, and organizational units with step-by-step procedures.

# Rollback Objects

You can revert an Active Directory object to its previous state.

Follow the steps to roll back an Active Directory object, including user accounts, groups, and
organizational units.

**Step 1 –** Click Active Directory in the left pane to open the
[Active Directory Page](/docs/recoveryforactivedirectory/2.6/domain-recovery/index.md).

**Step 2 –** Select and expand a domain in the left pane and locate the object you want to rollback.

**Step 3 –** Do one of the following:

- Select the object to rollback and click the **Rollback** button.
- Right-click the object and select **Rollback** on the shortcut menu.

The Object Rollback wizard opens.

![Object Rollback wizard - Object Backup page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/objectbackups.webp)

**Step 4 –** In the Backup Date section, select a backup to use for the rollback operation. Then
select the checkbox(es) for the attributes you want to roll back. Click **Next**.

![Object Rollback wizard - Options page](/img/product_docs/accessanalyzer/12.0/install/application/options.webp)

**Step 5 –** Select a domain controller where the rollback changes will get affected. Options are:

- Use any writable domain controller – The system picks any writable domain controller in the domain
  for the rollback operation
- Use a specific domain controller – Select a domain controller from the drop-down menu for the
  rollback operation

**Step 6 –** Click **Next**.

![Object Rollback wizard - Credentials page](/img/product_docs/activitymonitor/activitymonitor/install/agent/credentials.webp)

**Step 7 –** The account preforming the operation must have Domain Admin privileges to access the
domain tree area where the object resides. On the Credentials page:

- If the account specified during domain configuration has Domain Admin privileges, click **Next**.
- If the domain account does not have Domain Admin privileges, select the **Use alternate
  credentials to perform the object rollback** checkbox and enter an account with Domain Admin
  privileges, then click **Next**.

For a Least Privilege Access Model to provision an Active Directory security group with the
permissions that are necessary to perform backups, rollbacks and recovery, see the
[Least Privilege Access Model](/docs/recoveryforactivedirectory/2.6/requirements/target-domain-requirements.md#least-privilege-access-model)
topic.

![Object Rollback wizard - Confirm page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.webp)

**Step 8 –** The Confirm page displays a summary of the settings you provided on the pages of the
wizard. Use the Back button to return to a previous page and change any setting. Click **Complete**
to finish the wizard.

![Object Rollback Sucessful message](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/activedirectory/objectrollbackcompleted.webp)

**Step 9 –** A completed message is displayed when the rollback is successful. Click **OK**.

The object has been rolled back.
