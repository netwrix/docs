---
title: "Back Up and Restore GroupID Data"
description: "Back Up and Restore GroupID Data"
sidebar_position: 30
---

# Back Up and Restore GroupID Data

This topic provides instructions for backing up and restoring the data from previous versions of
GroupID. While upgrading to GroupID 11.0.

- [GroupID database on SQL Server](#groupid-database-on-sql-server)
- [Elasticsearch data](#elasticsearch-data)
- [GroupID Self-Service Portals](#groupid-self-service-portals)
- [GroupID Password Center Portals](#groupid-password-center-portals)
- [GroupID Synchronize Jobs](#groupid-synchronize-jobs)
- [GroupID Reports](#groupid-reports)

## GroupID database on SQL Server

Take a backup of the GroupID database that you will use to upgrade to GroupID 11.0.

Follow Microsoft standards to back up this SQL Server database.

Whenever this database is restored, any changes you made using GroupID 11 would be lost.

## Elasticsearch data

Before you upgrade from GroupID 10 to 11.0, take a backup of the Elasticsearch data folder. The
default folder location is:

C:/ProgramData/Imanami/GroupID 10.0/Replication/data/

```
ldifde -f c:\groupinfobeforedirectorymanager.ldf -r "(&(objectClass=group)(objectCategory=group)(|(extensionData=*)(extensionAttribute15=*)(extensionAttribute14=*)(extensionAttribute13=*)(extensionAttribute12=*)" -p Subtree -l extensionData,extensionAttribute15,extensionAttribute14,extensionAttribute13,extensionAttribute12
```

## GroupID Self-Service Portals

### Back Up

Follow these steps to back up the Self-Service portals created using GroupID 9.0, and 10.0:

1. Go to the Inetpub folder of the product for which you want to take a backup.

    - **GroupID 9** — X:\Program Files\Imanami\GroupID 9.0\SelfService\Inetpub
    - **GroupID 10** — X:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub

2. Copy the folders for each virtual server or portal.
3. Create a new folder (ideally on a different drive) and paste the copied data into that folder.

### Restore

Follow these steps to restore GroupID Self-Service portals:

1. Copy the folders containing the portals from the backup folder you created in the previous steps.
2. Go to the Inetpub\ folder of the product’s installation directory:

    - **GroupID 9** — X:\Program Files\Imanami\GroupID 9.0\SelfService\Inetpub
    - **GroupID 10** — X:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub

3. Paste the copied data in the location, replacing any existing files.

## GroupID Password Center Portals

### Back Up

Follow these steps to back up Password Center User and Helpdesk portals created using GroupID 9.0
and 10.0:

1. Go to the PasswordCenter\ folder of the product’s installation directory:

    - **GroupID 9** — X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Inetpub  
      (for Password Center User portals)
    - **GroupID 9** — X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Helpdesk\Inetpub  
      (for Password Center Helpdesk portals)
    - **GroupID 10** — X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Inetpub  
      (for Password Center User portals)
    - **GroupID 10** — X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Helpdesk\Inetpub  
      (for Password Center Helpdesk portals)

2. Copy the folders of each portal.
3. Create a new folder (on a different drive) and paste the copied data into that folder.

### Restore

Follow these steps to restore Password Center portals to GroupID:

1. Copy the folders containing the Password Center portals from the backup folder you created in the
   previous steps.
2. Go to the PasswordCenter\ folder of the product’s installation directory:

    - **GroupID 9** — X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Inetpub  
      (for Password Center User portals)
    - **GroupID 9** — X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Helpdesk\Inetpub  
      (for Password Center Helpdesk portals)
    - **GroupID 10** — X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Inetpub  
      (for Password Center User portals)
    - **GroupID 10** — X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Helpdesk\Inetpub  
      (for Password Center Helpdesk portals)

3. Paste the copied data into the location, replacing any existing files.

## GroupID Synchronize Jobs

### Back Up

Follow these steps to create a backup of jobs created with GroupID 9.0 and 10.0 Synchronize:

1. On the Windows **Run** dialog box, type one of the following paths and run the command:

    - **GroupID 9** — %ALLUSERSPROFILE%\Imanami\GroupID 9.0\Synchronize
    - **GroupID 10** — %ALLUSERSPROFILE%\Imanami\GroupID 10.0\Synchronize

2. Copy the **Jobs** folder.
3. Create a new folder (ideally on a different drive) and paste the **Jobs** folder into it.

NOTE: If some scheduled tasks are defined for Synchronize jobs, you do not need to create their
backup. On restoring, the scheduled tasks remain functional for Synchronize jobs.

### Restore

Follow these steps to restore jobs from GroupID 9.0 and 9.0:

1. Copy the **Jobs** folder from the backup folder you created in the preceding steps.
2. On the Windows **Run** dialog box, type one of the following paths and run the command:

    - **GroupID 9** — %ALLUSERSPROFILE%\Imanami\GroupID 9.0\Synchronize
    - **GroupID 10** — %ALLUSERSPROFILE%\Imanami\GroupID 10.0\Synchronize

3. Paste the **Jobs** folder into the location, replacing any existing files.

## GroupID Reports

### Back Up

Follow these steps to create a backup of GroupID 9.0 and 10.0 Reports:

1. Browse to the location where the reports generated by these products are saved. The default
   locations are:

    - **GroupID 9** — X:\ProgramData\Imanami\GroupID 9.0\Reports
    - **GroupID 10** — X:\ProgramData\Imanami\GroupID 10.0\Reports

2. Copy all data at the location.
3. Create a new folder (ideally on a different drive) and paste the copied data into that folder.

NOTE: Note: You do not need to create a backup of scheduled tasks that include report criteria. On
restoring, the scheduled tasks remain functional for these reports.

### Restore

Follow these steps to restore GroupID 9.0 and 10.0 Reports:

1. Copy the data from the backup folder you created in the previous steps.
2. On the Windows **Run** dialog box, type the path of the location where the reports are saved and
   run the command:

    - **GroupID 9** — X:\ProgramData\Imanami\GroupID 9.0\Reports
    - **GroupID 10** — X:\ProgramData\Imanami\GroupID 10.0\Reports

3. Paste the copied data in the location, replacing any existing file.

See Also

- [Uninstall GroupID](/docs/directorymanager/11.0/about/installer/uninstall.md)
- [Installation Tool](/docs/directorymanager/11.0/about/installer/install.md)
