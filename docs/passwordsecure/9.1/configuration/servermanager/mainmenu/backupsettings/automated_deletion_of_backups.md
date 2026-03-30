---
title: "Automatic backup cleanup"
description: "Automatic backup cleanup"
sidebar_position: 20
---

# Automatic backup cleanup

It is possible to delete backups automatically after a certain period of time. This can be useful if
you append date and time to the backups and thus generate new files daily.

![automatic cleanup](/images/passwordsecure/9.1/configuration/server_manager/main_menu/backup_settings/automatic_backup_cleanup/automated-deletion-of-backups-en.webp)

###### Requirement

:::warning
It must be ensured that the user who sets up the automated deletion has sysadmin
privileges on the SQL server.
:::


###### Furnishing

To be able to use the automatic cleanup, it must be activated first.

For a proper function of the automatic deletion, the following must be defined:

- the age of the backups which have to be deleted
- the SQL instance
- all paths where the automatic cleanup of the backup files is to be performed.

![setup automatic backup cleanup](/images/passwordsecure/9.1/configuration/server_manager/main_menu/backup_settings/automatic_backup_cleanup/automated-deletion-of-backups-2-en.webp)
