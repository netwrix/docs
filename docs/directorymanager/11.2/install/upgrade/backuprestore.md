---
title: "Back Up and Restore Data for a Directory Manager Upgrade"
description: "Back up and restore the database, Elasticsearch data, portals, Synchronize jobs, and reports from GroupID 10 SR2 before you upgrade to Directory Manager 11.2."
keywords:
  - directory manager upgrade backup
  - back up Elasticsearch data
  - restore Self-Service portals
  - restore Password Center portals
  - back up Synchronize jobs
sidebar_position: 30
---

# Back Up and Restore Data for a Directory Manager Upgrade

Back up and restore the following GroupID 10 SR2 data when you upgrade to Directory Manager 11.2:

- Database on SQL Server
- Elasticsearch data
- GroupID Self-Service portals
- GroupID Password Center portals
- Synchronize jobs
- Reports

## Database on SQL Server

Back up the GroupID database that you use to upgrade to Directory Manager 11.2. Follow Microsoft standards to back up this SQL Server database.

If you restore this database, you lose any changes that you made using Directory Manager 11.2.

## Elasticsearch data

Before you upgrade from GroupID 10 SR2 to Directory Manager 11.2, back up the Elasticsearch data folder. The default folder location is:

`C:/ProgramData/Imanami/GroupID 10.0/Replication/data/`

```
ldifde -f c:\groupinfobeforedirectorymanager.ldf -r "(&(objectClass=group)(objectCategory=group)(|(extensionData=*)(extensionAttribute15=*)(extensionAttribute14=*)(extensionAttribute13=*)(extensionAttribute12=*)" -p Subtree -l extensionData,extensionAttribute15,extensionAttribute14,extensionAttribute13,extensionAttribute12
```

## GroupID Self-Service portals

### Back up

To back up the Self-Service portals created using GroupID 10 SR2:

1. Go to the `Inetpub` folder of the product for which you want to create a backup.

   - GroupID 10 — `X:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub`

2. Copy the folders for each virtual server or portal.
3. Create a new folder, ideally on a different drive, and paste the copied data into that folder.

### Restore

To restore GroupID Self-Service portals:

1. Copy the folders containing the portals from the backup folder you created in the previous steps.
2. Go to the `Inetpub` folder of the product's installation directory.

   - GroupID 10 — `X:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub`

3. Paste the copied data in the location, replacing any existing files.

## GroupID Password Center portals

### Back up

To back up Password Center User and Helpdesk portals created using GroupID 10 SR2:

1. Go to the `PasswordCenter` folder of the product's installation directory.

   - GroupID 10 — `X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Inetpub`  
     (for Password Center User portals)
   - GroupID 10 — `X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Helpdesk\Inetpub`  
     (for Password Center Helpdesk portals)

2. Copy the folders of each portal.
3. Create a new folder on a different drive and paste the copied data into that folder.

### Restore

To restore Password Center portals to Directory Manager:

1. Copy the folders containing the Password Center portals from the backup folder you created in the previous steps.
2. Go to the `PasswordCenter` folder of the product's installation directory.

   - GroupID 10 — `X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Inetpub`  
     (for Password Center User portals)
   - GroupID 10 — `X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Helpdesk\Inetpub`  
     (for Password Center Helpdesk portals)

3. Paste the copied data into the location, replacing any existing files.

## Synchronize jobs

### Back up

To back up jobs created with GroupID 10 SR2 Synchronize:

1. In the Windows Run dialog box, enter the following path and run the command.

   - GroupID 10 — `%ALLUSERSPROFILE%\Imanami\GroupID 10.0\Synchronize`

2. Copy the **Jobs** folder.
3. Create a new folder, ideally on a different drive, and paste the **Jobs** folder into it.

:::note
If scheduled tasks are defined for Synchronize jobs, you don't need to back them up. After you restore the jobs, the scheduled tasks remain functional.
:::

### Restore

To restore jobs from GroupID 10 SR2:

1. Copy the **Jobs** folder from the backup folder you created in the preceding steps.
2. In the Windows Run dialog box, enter the following path and run the command.

   - GroupID 10 — `%ALLUSERSPROFILE%\Imanami\GroupID 10.0\Synchronize`

3. Paste the **Jobs** folder into the location, replacing any existing files.

## Reports

### Back up

To back up GroupID 10 SR2 reports:

1. Browse to the location where the product saves the reports it generates. The default location is:

   - GroupID 10 — `X:\ProgramData\Imanami\GroupID 10.0\Reports`

2. Copy all data at the location.
3. Create a new folder, ideally on a different drive, and paste the copied data into that folder.

:::note
You don't need to back up scheduled tasks that include report criteria. After you restore the reports, the scheduled tasks remain functional.
:::

### Restore

To restore GroupID 10 SR2 reports:

1. Copy the data from the backup folder you created in the previous steps.
2. In the Windows Run dialog box, enter the path of the location where the reports are saved and run the command.

   - GroupID 10 — `X:\ProgramData\Imanami\GroupID 10.0\Reports`

3. Paste the copied data in the location, replacing any existing files.
