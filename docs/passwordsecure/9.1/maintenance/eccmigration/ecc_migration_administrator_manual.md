---
title: "Admin Manual"
description: "Admin Manual"
sidebar_position: 10
---

# Admin Manual

## Preparation

Before you execute the migration, you must ensure that the following preparations have been made:

- Installation of the latest Netwrix Password Secure-Server, Native Client and Web Client
- Check in the
  [Database properties](/docs/passwordsecure/9.1/configuration/servermanger/databaseproperties/database_properties.md)
  if the **offline access** and the **mobile synchronization** are allowed
  If that should be the case, **contact your users and make sure that they have to synchronize the
  Offline Add-on and the mobile app**.

:::warning
If the OfflineClient or App does have not yet synchronized items, they are lost after
the migration mode is enabled!
:::


- Backup all certificates using the Netwrix Password Secure Server Manager

:::warning
Only certificate backups made through the Server Manager are valid!
:::


![Certificates](/images/passwordsecure/9.1/configuration/server_manager/ecc_migration/certificates-ac-1-en.webp)

![Export certificates](/images/passwordsecure/9.1/configuration/server_manager/ecc_migration/certificates-ac-2-en.webp)

- Delete or restore all non “permanent deleted” users
  If you have deactivated or non “permanent deleted“ users it would make sense to delete them
  permanently, otherwise the migration would never finalize. Keep in mind, that every E2EE User must
  log in, before you can complete the migration.
- Only have **one active Netwrix Password Secure-Server**
  In the case of multiple Netwrix Password Secure-Servers, you need to stop all Netwrix Password
  Secure-Server services on all servers except on one, which actually is used for the migration.
- For each Entra ID profile you have to create a new token. This token must be stored in the
  corresponding Enterprise Application under the Provisioning tag.

## Migration

NOTE: During the migration, the database is in read-only mode. So it is possible to read all records
from the database, but it is not possible to add new or edit existing records.

#### Start migration

Clicking on the icon **“Start migration”** in the databases' module to start the migration process

![start migration](/images/passwordsecure/9.1/configuration/server_manager/ecc_migration/start-migration-en.webp)

Select the database you want to migrate and enter the code-word.

Remember, The code word is “Start”. Please make sure that you have read the whole documentation.
Otherwise, data loss might occur!

![select database](/images/passwordsecure/9.1/configuration/server_manager/ecc_migration/start-migration-2-en.webp)

You should see the message, that the selected databases are now in migration mode:

![start migration](/images/passwordsecure/9.1/configuration/server_manager/ecc_migration/start-migration-3-en.webp)

As written in the message, export all required certificates via the Netwrix Password Secure Server
Manager. If you have multiple servers in use import the certificates via the Server Manager at the
end of the migration process.

:::warning
If certificates are missing the migration cannot be continued.
:::


#### Watch the migration process

In the migration process you find all information about the current process, what is already
migrated and what still needs to be migrated

![migration progress](/images/passwordsecure/9.1/configuration/server_manager/ecc_migration/migration-progress-en.webp)

After each user has logged into the database and has been successfully migrated, the migration is
complete.

![migration finished](/images/passwordsecure/9.1/configuration/server_manager/ecc_migration/migration-finished-en.webp)
