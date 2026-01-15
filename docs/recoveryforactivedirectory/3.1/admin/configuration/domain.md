---
title: "Domains Page"
description: "Domains Page"
sidebar_position: 10
---

# Domains Page

The Domains page provides a list of the domains backed up by Identity Recovery. It
displays the backup schedule settings for each added domain. You can also add and configure new
domains.

Click **Configuration** in the left pane. Then click the **Domains** tab on the Configuration page
to open the Domains page.

![Domains Page](/images/recoveryforactivedirectory/3.1/product/configuration/active_directory/active_directory_configuration.png)

The table displays the following information:

- Domain – Fully-qualified name of the domain
- Last Collection Time – The most recent time the collection (backup) occurred
- Duration – The time the collection took to complete
- Status – Collection state as idle, waiting, error, or success
- Details – Information about any errors that occurred when the last backup was performed
- Actions – Displays the icons used to collect, edit, and delete the respective domain

    - Run backup – Click the **Play** icon to start a new collection (backup) on the respective
      domain if collection is needed outside of the configured schedule
    - Edit configuration – Edit the settings of the domain. Click the **Edit** icon for a domain to
      open the Edit Domain Configuration wizard and edit the domain's settings. See the Edit Domain
      Configuration topic for additional information.
    - Delete configuration – Click the Delete icon for a domain to delete it

To add a domain, click the **Add domain configuration** button. See the Add a Domain topic for
additional information.

### Add a Domain

To add a domain, provide domain details and configure the backup schedule. For a list of the
supported Windows Servers, see the [Target Domains](/docs/recoveryforactivedirectory/3.1/requirements/targetdomain.md) topic.

Follow the steps to add a domain.

**Step 1 –** Click the **Add domain configuration** button on the Domains page to launch the Add
Domain Configuration wizard.

![Add Domain Configuration wizard - Domain page](/images/recoveryforactivedirectory/3.1/product/configuration/active_directory/active_directory_configuration_page1.png)

**Step 2 –** Enter a domain [example.domain.com] in the Domain field.

**Step 3 –** Enter the account username [DOMAIN\USERNAME] to be used for backups, rollbacks, and
recoveries in the Account field.

**Step 4 –** Enter the password for the account in the Password field.

:::note
The account must have Domain Admin privileged access to read and write object data in
order to back up, rollback, and restore objects in Active Directory. If the account has read rights
only, it will be able to back up the domain but unable to rollback and restore objects. In this
case, alternate credentials with read and write access to objects will have to be provided on the
Credentials page of the Object Rollback and Object Restore wizards. See the
[Rollback Objects](/docs/recoveryforactivedirectory/3.1/admin/activedirectory/rollback.md) and
[Recover an Object](/docs/recoveryforactivedirectory/3.1/admin/activedirectory/recover.md#recover-an-object) topics for information on the wizards.
:::

For a Least Privilege Access Model to provision an Active Directory security group with the
permissions that are necessary to perform backups, rollbacks and recovery, see the
[Least Privilege Access Model](/docs/recoveryforactivedirectory/3.1/requirements/targetdomain.md#least-privilege-access-model)
topic.

**Step 5 –** Click **Next**.

![Add Domain Configuration wizard - Backup Schedule page](/images/recoveryforactivedirectory/3.1/product/configuration/active_directory/active_directory_configuration_page2.png)

**Step 6 –** Select the days of the week in the Run the backup on section to indicate the days when
backups will be run.

**Step 7 –** Select a start time (UTC) in the Start the backup at field to begin the backup. The
default time is 12:00 AM.

**Step 8 –** In the Repeat every field, enter a frequency, in minutes, to set the time between the
start of each domain backup. Keep in mind the size of the environment when configuring this option.
Click **Next**.

:::note
If the start time is changed from the default and a frequency is selected (in minutes), the backups
will run at the desired frequency but will skip from midnight until the selected start time.
:::

![Add Domain Configuration wizard - Options page](/images/recoveryforactivedirectory/3.1/product/configuration/active_directory/active_directory_configuration_page3.png)

**Step 9 –** (_Optional_) Select the **Collect GPOs** checkbox to enable GPO rollback and recovery.
This setting requires Group Policy Management Console (GMPC). If GPO collection is not desired, skip
to Step 10.

**Step 10 –** If the Collect GPOs checkbox is selected, the Store the Group Policy Object backups in
the following location field is enabled. Specify the save location for the GPO backup here.

:::note
The path must be a network share. Do not provide the path to a local drive for storing the
backup.
:::

**Step 11 –** Click **Next**.

![Add Domain Configuration wizard - Notification page](/images/recoveryforactivedirectory/3.1/product/configuration/active_directory/active_directory_configuration_page4.png)

**Step 12 –** To set notifications, select the Send email notifications check box and enter the
email address of one or more users and/or groups to receive the job start and end notifications. Use
a semicolon (;) to separate multiple recipients. See the [Notifications Page](/docs/recoveryforactivedirectory/3.1/admin/configuration/notifications.md)
topic for additional information.

If notifications are not desired, skip this step.

**Step 13 –** Click **Next**.

![Add Domain Configuration wizard - Confirm page](/images/recoveryforactivedirectory/3.1/product/configuration/active_directory/active_directory_configuration_page5.png)

**Step 14 –** The Confirm page displays a summary of the settings you provided on the pages of the
wizard. Use the Back button to return to a previous page and change any setting. Click **Complete**
to finish the wizard.

A new domain backup configuration is added and displayed on the Domains page.

Backups will begin as scheduled. On the first scheduled instance, a complete backup of the domain is performed. Then, subsequent backups only include the incremental changes that occurred since the previous backup.

### Edit Domain Configuration

Follow the steps to edit a domain backup configuration.  Editing a domain follows the same steps as adding a domain backup configuration.

**Step 1 –** On the Domains page, click the **Edit configuration** icon for a domain. The Edit
Domain Configuration wizard opens.

**Step 2 –** Modify the desired settings for the domain backup configuration

**Step 3 –** The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click **Complete** to finish the wizard.

The domain configuration is updated and backups will resume as scheduled.
