---
title: "Back Up and Restore Data"
description: "Back Up and Restore GroupID Data"
sidebar_position: 30
---

# Back Up and Restore Directory Manager Data

This topic provides instructions for backing up and restoring the data from previous versions of
GroupID when upgrading to Directory Manager 11.1.

- Database on SQL Server
- Elasticsearch Data
- GroupID Self-Service Portals
- GroupID Password Center Portals
- Synchronize Jobs
- Reports

## Database on SQL Server

Take a backup of the GroupID database that you will use to upgrade to Directory Manager 11.0.

Follow Microsoft standards to back up this SQL Server database.

Whenever this database is restored, any changes you made using Directory Manager 11.1 would be lost.

## Elasticsearch Data

Before you upgrade from GroupID 10 to Directory Manager 11.1, take a backup of the Elasticsearch
data folder. The default folder location is:

`C:/ProgramData/Imanami/GroupID 10.0/Replication/data/`

```
ldifde -f c:\groupinfobeforedirectorymanager.ldf -r "(&(objectClass=group)(objectCategory=group)(|(extensionData=*)(extensionAttribute15=*)(extensionAttribute14=*)(extensionAttribute13=*)(extensionAttribute12=*)" -p Subtree -l extensionData,extensionAttribute15,extensionAttribute14,extensionAttribute13,extensionAttribute12
```

## GroupID Self-Service Portals

### Back Up

Follow these steps to back up the Self-Service portals created using GroupID 9.0, and 10.0.

Step 1 – Go to the `Inetpub `folder of the product for which you want to take a backup.

- GroupID 9 — X:\Program Files\Imanami\GroupID 9.0\SelfService\Inetpub
- GroupID 10 — X:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub

Step 2 – Copy the folders for each virtual server or portal.

Step 3 – Create a new folder (ideally on a different drive) and paste the copied data into that
folder.

### Restore

Follow these steps to restore GroupID Self-Service portals.

Step 1 – Copy the folders containing the portals from the backup folder you created in the previous
steps.

Step 2 – Go to the `Inetpub `folder of the product’s installation directory:

- GroupID 9 — `X:\Program Files\Imanami\GroupID 9.0\SelfService\Inetpub`
- GroupID 10 —` X:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub`

Step 3 – Paste the copied data in the location, replacing any existing files.

## GroupID Password Center Portals

### Back Up

Follow these steps to back up Password Center User and Helpdesk portals created using GroupID 9.0
and 10.0.

Step 1 – Go to the `PasswordCenter` folder of the product’s installation directory:

- GroupID 9 — `X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Inetpub`  
  (for Password Center User portals)
- GroupID 9 — `X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Helpdesk\Inetpub`  
  (for Password Center Helpdesk portals)
- GroupID 10 —` X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Inetpub`  
  (for Password Center User portals)
- GroupID 10 — `X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Helpdesk\Inetpub`  
  (for Password Center Helpdesk portals)

Step 2 – Copy the folders of each portal.

Step 3 – Create a new folder (on a different drive) and paste the copied data into that folder.

### Restore

Follow these steps to restore Password Center portals to Directory Manager.

Step 1 – Copy the folders containing the Password Center portals from the backup folder you created
in the previous steps.

Step 2 – Go to the `PasswordCenter `folder of the product’s installation directory:

- GroupID 9 — `X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Inetpub`  
  (for Password Center User portals)
- GroupID 9 —` X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Helpdesk\Inetpub`  
  (for Password Center Helpdesk portals)
- GroupID 10 —` X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Inetpub`  
  (for Password Center User portals)
- GroupID 10 —` X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Helpdesk\Inetpub`  
  (for Password Center Helpdesk portals)

Step 3 – Paste the copied data into the location, replacing any existing files.

## Synchronize Jobs

### Back Up

Follow these steps to create a backup of jobs created with GroupID 9.0 and 10.0 Synchronize.

Step 1 – On the Windows Run dialog box, type one of the following paths and run the command:

- GroupID 9 — `%ALLUSERSPROFILE%\Imanami\GroupID 9.0\Synchronize`
- GroupID 10 — `%ALLUSERSPROFILE%\Imanami\GroupID 10.0\Synchronize`

Step 2 – Copy the Jobs folder.

Step 3 – Create a new folder (ideally on a different drive) and paste the **Jobs** folder into it.

:::note
If some scheduled tasks are defined for Synchronize jobs, you do not need to create their
backup. On restoring, the scheduled tasks remain functional for Synchronize jobs.
:::


### Restore

Follow these steps to restore jobs from Directory Manager 9.0 and 9.0.

Step 1 – Copy the **Jobs** folder from the backup folder you created in the preceding steps.

Step 2 – On the Windows Run dialog box, type one of the following paths and run the command:

- GroupID 9 —` %ALLUSERSPROFILE%\Imanami\GroupID 9.0\Synchronize`
- GroupID 10 — `%ALLUSERSPROFILE%\Imanami\GroupID 10.0\Synchronize`

Step 3 – Paste the **Jobs** folder into the location, replacing any existing files.

## Reports

### Back Up

Follow these steps to create a backup of Directory Manager 9.0 and 10.0 Reports:

Step 1 – Browse to the location where the reports generated by these products are saved. The default
locations are:

- GroupID 9 —` X:\ProgramData\Imanami\GroupID 9.0\Reports`
- GroupID 10 — `X:\ProgramData\Imanami\GroupID 10.0\Reports`

Step 2 – Copy all data at the location.

Step 3 – Create a new folder (ideally on a different drive) and paste the copied data into that
folder.

Note: You do not need to create a backup of scheduled tasks that include report criteria. On
restoring, the scheduled tasks remain functional for these reports.
:::


### Restore

Follow these steps to restore Directory Manager 9.0 and 10.0 Reports:

Step 1 – Copy the data from the backup folder you created in the previous steps.

Step 2 – On the Windows Run dialog box, type the path of the location where the reports are saved
and run the command:

- GroupID 9 — `X:\ProgramData\Imanami\GroupID 9.0\Reports`
- GroupID 10 —` X:\ProgramData\Imanami\GroupID 10.0\Reports`

Step 3 – Paste the copied data in the location, replacing any existing file.
