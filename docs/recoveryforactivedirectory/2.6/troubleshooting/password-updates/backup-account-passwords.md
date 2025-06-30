title: Update Backup Account Passwords
sidebar_label: Backup Accounts
description: Update passwords for domain controller backup accounts including changing account credentials and specifying different backup accounts.

# Update Domain Controller Backup Account Password

While adding backup configurations for a domain controller on the Forest page, an account is
provided for performing domain controller backups. You can update the password for this account or
even specify a different account.

Follow the steps to update the backup account password for a domain controller.

**Step 1 –** Click **Forest** in the left pane to open the Forest page.

![Forest Page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/forest.webp)

**Step 2 –** On the Forest page, select a forest to view the domain controllers in it. To locate a
domain controller in a specific domain, expand the forest in the left pane and select a domain. The
adjacent pane displays the domain controllers in that domain.

**Step 3 –** Click the **Edit** button for a domain controller, which is available in the far right
of the domain controller row. The Server Backup Configuration wizard opens.

![Server Backup Configuration Wizard - Server page](/img/product_docs/accessanalyzer/12.0/admin/settings/server.webp)

**Step 4 –** On the Server page, the fields are populated with the information you provided when
configuring the domain controller backup. See the
[Add Backup Configurations for a Domain Controller](/docs/recoveryforactivedirectory/2.6/forest-recovery/index.md#add-backup-configurations-for-a-domain-controller)
topic for additional information.

Enter the new password in the Password field and click **Next**. The next server backup will take
into account the new password.

![Server Backup Configuration wizard - Schedule page](/img/product_docs/threatprevention/threatprevention/admin/configuration/databasemaintenance/schedule.webp)

**Step 5 –** Modify the schedule if needed, then click **Next**.

![Server Backup Configuration wizard - Options page](/img/product_docs/accessanalyzer/12.0/install/application/options.webp)

**Step 6 –** Modify the options if needed, then click **Next**.

![Server Backup Configuration wizard - Confirm page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.webp)

**Step 7 –** The Confirm page displays a summary of the settings you provided on the pages of the
wizard. Use the Back button to return to a previous page and change any setting. Click **Complete**
to finish the wizard.

![Server Backup Configuration has been Saved](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/serverbackupconfiguration.webp)

**Step 8 –** Click **OK**.

The backup account password for the domain controller has been updated and saved.
