title: Forest Recovery Management Interface
sidebar_label: Forest Recovery
description: Manage forest configuration, domain controller backups, and forest recovery operations with comprehensive forest tree structure management.

# Forest Page

The Forest page allows administrators to:

- Add forests
- Configure and manage backups for domain controllers in a forest.
- Carry out a forest recovery

Once a forest is added, you can view the domain controllers in the forest, whether backups are
enabled for the domain controllers, and the last backup time. You can also view the forest tree,
which represents the structure of the forest and its domains.

Click **Forest** in the left pane to open the Forest page.

- When no forest has been added, the Forest Configuration page is displayed.

> ![Forest Configuration page](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/add.webp)
>
> You must add a forest first. See the [Add a Forest](#add-a-forest) topic for additional
> information.

- Once a forest is added, the page is displayed as follows:

![Forest Page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/forest.webp)

The domains in the configured forests are shown in a hierarchal tree. The domain controllers for the
selected forest are shown in the adjacent pane, with information such as backup status and last
backup times.

Expand a forest to view the domains under it. On selecting a domain, the domain controllers in the
domain are displayed in the adjacent pane.

The following information is displayed for a domain controller:

- Name – Name of the domain controller
- Operating System – Operating system for the domain controller, for example, Windows Server 2019
  Standard
- Version – Version of the operating system
- Backup – Use the toggle button to enable or disable the backup for the domain controller. By
  default, it is disabled. When you enable it, the Server backup Configuration wizard is displayed.
  See the
  [Add Backup Configurations for a Domain Controller](#add-backup-configurations-for-a-domain-controller)
  topic to configure backup settings for the domain controller.
- Last Backup Time – Date and time when the last backup occurred
- Actions – Displays the following icons:

  - Start Backup – Starts a backup of the server on demand
  - Edit Configuration – Launches the Server Backup Configuration wizard, enabling you to modify
    the backup configurations for the domain controller
  - Add Domain Controller to Restore Playbook – Adds the domain controller to the recovery
    playbook. See the [Create a Recovery Playbook](/docs/recoveryforactivedirectory/2.6/forest-recovery/forest-recovery-procedures.md#create-a-recovery-playbook) topic for
    additional information.

    This is the only action displayed for a domain controller that has not been backed up.

Use the Add link to add another forest.

## Add a Forest

You must add a forest in the system to perform backup and recovery operations for it. Follow the
steps to add a forest.

**Step 1 –** On the Forest Configuration page, click the **here** link. Or on the Forest page, click
the **Add** link. The Add Forest window is displayed.

![ Add Forest window](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/addforest.webp)

**Step 2 –** In the Domain field, enter the name of the root domain in the forest
[example.domain.com].

**Step 3 –** Enter the account username [DOMAIN\USERNAME] to be used to connect to the forest in the
Account field. Ensure that the account has privileges to access the domain.

**Step 4 –** Enter the password for the account in the Password field.

**Step 5 –** Click **Save**.

The forest is added and displayed on the Forest page as a blue tab. Click it to view the domain
controllers in the forest and configure backup settings for each domain controller. See the
[Add Backup Configurations for a Domain Controller](#add-backup-configurations-for-a-domain-controller)
topic for additional information.

You can also expand a forest to view the domains under it.

## Add Backup Configurations for a Domain Controller

When you configure backup settings for a domain controller, the system automatically installs the
Netwrix Server Backup Configuration agent on that domain controller.

**NOTE:** Ensure that the domain controller has the firewall rules configured before configuring
backup settings for it. See the
[Firewall Rules for Forest Server Backups](/docs/recoveryforactivedirectory/2.6/requirements/firewall-rules.md) topic for additional
information.

Follow the steps to specify backup settings for a domain controller.

**Step 1 –** On the Forest page, select a forest to view the domain controllers in it. To locate a
domain controller in a specific domain, expand the forest in the left pane and select a domain. The
adjacent pane displays the domain controllers in that domain.

**Step 1 –** Enable the Backup toggle button for a domain controller to launch the Server Backup
Configuration wizard.

![Server Backup Configuration wizard - Server page](/img/product_docs/accessanalyzer/12.0/admin/settings/server.webp)

**Step 2 –** In the Server field, the domain controller to be backed up is displayed as read-only in
the following format: server.domain.com.

**Step 3 –** Specify an account to validate the server, install the Netwrix Server Backup
Configuration agent there, and perform server backups. This account must have read and write access
to a shared network location for storing the backups. (You will specify this network share location
on the Options page of this wizard.)

- In the Account field, enter the username of an account to write the backup data of the domain
  controller to the network share of the destination server in the following format: domain\account.
- Enter the password for the account in the Password field.

**NOTE:** The backup data is first stored locally on the server and copied to the storage location
using this account.

**Step 4 –** Click **Next**.

![Server Backup Configuration wizard - Schedule page](/img/product_docs/threatprevention/threatprevention/admin/configuration/databasemaintenance/schedule.webp)

**Step 5 –** Select the days of the week in the Run the backup on section to indicate the days when
backups will be run.

**Step 6 –** Select a start time (UTC) in the Start the backup at field to begin the backup. The
default time is 12:00 AM.

**Step 7 –** Click **Next**.

![Server Backup Configuration wizard - Options page](/img/product_docs/accessanalyzer/12.0/install/application/options.webp)

**Step 8 –** In the Specify where you would like to store the backup data field, enter a path to a
network share on the domain controller to store the backup data.

**NOTE:** The path must be a network share. Do not provide the path to a local drive for storing the
backup. Doing so will prevent the system from restoring the domain using the playbook mechanism.

**Step 9 –** The file can be encrypted by selecting the **Encrypt the generated backup data**
checkbox and entering a password.

**Step 10 –** By default, backups are compressed. Clear the Compress the generated backup data
checkbox to uncompress the generated backup file.

**Step 11 –** Click **Next**.

![Server Backup Configuration wizard - Confirm page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.webp)

**Step 12 –** The Confirm page displays a summary of the settings you provided on the pages of the
wizard. Use the Back button to return to a previous page and change any setting. Click **Complete**
to finish the wizard.

![Server Backup Configuration Saved](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/serverbackupconfiguration.webp)

**Step 13 –** The Server backup configuration has been saved. Click **OK**.

The domain controller will now be backed up according to the configured schedule. A backup can also
be initiated on demand from the Recovery Console.

## Backup Files

The backup of a domain controller is stored on a network share in the environment and includes all
essential data from the domain controller, ensuring that the entire forest can be restored in the
event of a disaster. The backup includes:

- The Active Directory database (ntds.dit)
- Log files
- System hive of the registry
- The sysvol container

## Disable Server Backup for a Domain Controller

If you do not want a domain controller to be backed up, simply disable the backup for it.

**Step 1 –** On the Forest page, select a forest to view the domain controllers in it. To locate a
domain controller in a specific domain, expand the forest in the left pane and select a domain. The
adjacent pane displays the domain controllers in that domain.

**Step 2 –** Disable the Backup toggle button for a domain controller to disable its backup.

On disabling the backup for a domain controller, all backup configuration saved earlier are lost.
However, any older backups are not deleted.

To re-enable the backup for a domain controller, you have to perform all steps of the Server Backup
Configuration wizard again.

## Domain Controller Backup History

You can view the backup history for a domain controller, which includes information on all previous
domain controller backups.

Follow the steps to view the backup history for a domain controller.

**Step 1 –** On the Forest page, select a forest to view the domain controllers in it. To locate a
domain controller in a specific domain, expand the forest in the left pane and select a domain. The
adjacent pane displays the domain controllers in that domain.

**Step 2 –** Click the arrow next to the name of a domain controller to expand it.

![Forest Server Backup History](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/serverbackuphistory.webp)

On expanding a domain controller, you can view a list of backups for it. The following information
is displayed for each backup:

- Backup Time – Date and time the backup was created
- Location – The network share path where the backup file is stored on the domain controller
- Size – The size of the backup file
- Status – Progress status of the backup; Queued, Running, or Finished
- Encrypted – Displays if the backup file is encrypted (True) or not encrypted (False)

## Forest Recovery

See the [Recover a Forest](/docs/recoveryforactivedirectory/2.6/forest-recovery/forest-recovery-procedures.md) topic for information on how to recover a forest.
