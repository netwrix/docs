---
title: "Okta Page"
description: "Okta Page"
sidebar_position: 12
---

# Okta Page

The Okta page provides a list of the Okta tenants backed up by Identity Recovery. It
displays the backup schedule settings for each added Okta tenant. You can also add and configure new Okta tenants.

Click **Configuration** in the left pane. Then click the **Okta** tab on the Configuration page
to open the Okta tenants page.

![Tenant Page](/images/identityrecovery/3.1/product/configuration/okta/okta_configuration.png)

The table displays the following information:

- Tenant – Fully-qualified name of the tenant
- Last Collection Time – The most recent time the collection (backup) occurred
- Duration – The time the collection took to complete
- Status – Collection state as idle, waiting, error, or success
- Details – Information about any errors that occurred when the last backup was performed
- Actions – Displays the icons used to collect, edit, and delete the respective domain

    - Run backup – Click the **Play** icon to start a new collection (backup) on the respective
      tenant if collection is needed outside of the configured schedule
    - Edit configuration – Edit the settings of the tenant. Click the **Edit** icon for a tenant to
      open the Edit Tenant Configuration wizard and edit the tenant's settings. See the Edit Tenant
      Configuration topic for additional information.
    - Delete configuration – Click the Delete icon for a tenant to delete it

To add a tenant, click the **Add tenant configuration** button. See the Add a Tenant topic for
additional information.

### Add a Tenant

To add a tenant, provide tenant details and configure the backup schedule.

**Step 1 –** Click the **Add tenant configuration** button on the Okta page to launch the Add
Tenant Configuration wizard.

![Add Tenant Configuration wizard - Okta page](/images/identityrecovery/3.1/product/configuration/okta/okta_configuration_page1.png)

**Step 2 –** Enter a tenant [example.tenant.com] in the Tenant field.

**Step 3 –** Enter the API key in the Secret field.

**Step 4 –** Click **Next**.

![Add Tenant Configuration wizard - Backup Schedule page](/images/identityrecovery/3.1/product/configuration/okta/okta_configuration_page2.png)

**Step 5 –** Select the days of the week in the Run the backup on section to indicate when the system will run backups.

**Step 6 –** Select a start time (UTC) in the Start the backup at field to begin the backup. The
default time is 12:00 AM.

**Step 7 –** In the Repeat every field, enter a frequency, in minutes, to set the time between the start of each backup. Consider the size of the environment when configuring this option.
Click **Next**.

:::note
If the start time is changed from the default and a frequency is selected (in minutes),
the backups will run at the frequency you want but will skip from midnight until the selected start
time.
:::

![Add Tenant Configuration wizard - Notifications page](/images/identityrecovery/3.1/product/configuration/okta/okta_configuration_page3.png)

**Step 8 –** To set notifications, select the Send email notifications checkbox and enter the
email address of one or more users and/or groups to receive the job start and end notifications. Use
a semicolon (;) to separate multiple recipients. See the [Notifications Page](/docs/identityrecovery/3.1/admin/configuration/notifications.md)
topic for additional information.

If notifications aren't desired, skip this step.

**Step 9 –** Click **Next**.

![Add Tenant Configuration wizard - Confirm page](/images/identityrecovery/3.1/product/configuration/okta/okta_configuration_page4.png)

**Step 10 –** The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click 
**Done**
to finish the wizard.

The system adds the new tenant and displays it on the Okta page.

Backups will begin as scheduled. On the first scheduled instance, the system performs a complete backup of the tenant. Then, subsequent backups only include the incremental changes that occurred since the
previous backup.

### Edit Tenant Configuration

**Step 1 –** On the Okta page, click the **Edit configuration** icon for a tenant. The Edit
Tenant Configuration wizard opens.

**Step 2 –** Modify the settings you want for the tenant configuration

**Step 3 –** The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click **Done** to finish the wizard.

The tenant configuration is updated and backups will resume as scheduled.
