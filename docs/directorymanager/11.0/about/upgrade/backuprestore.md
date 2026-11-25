---
title: "Back Up and Restore Data for a Directory Manager Upgrade"
description: "Back up and restore the database, Elasticsearch data, portals, Synchronize jobs, and reports from Directory Manager 9 and 10 before you upgrade to 11.0."
keywords:
  - directory manager upgrade backup
  - back up Elasticsearch data
  - restore Self-Service portals
  - restore Password Center portals
  - back up Synchronize jobs
sidebar_position: 30
---

# Back Up and Restore Data for a Directory Manager Upgrade

This topic explains how to back up and restore data from previous versions of
Directory Manager when you upgrade to Directory Manager 11.0.

- [Directory Manager Database on SQL Server](#directory-manager-database-on-sql-server)
- [Elasticsearch Data](#elasticsearch-data)
- [Directory Manager Self-Service Portals](#directory-manager-self-service-portals)
- [Directory Manager Password Center Portals](#directory-manager-password-center-portals)
- [Directory Manager Synchronize Jobs](#directory-manager-synchronize-jobs)
- [Directory Manager Reports](#directory-manager-reports)

## Directory Manager Database on SQL Server

Back up the Directory Manager database that you use to upgrade to Directory Manager 11.0.

Follow Microsoft standards to back up this SQL Server database.

Whenever you restore this database, you lose any changes that you made using Directory Manager 11.

## Elasticsearch Data

Before you upgrade from Directory Manager 10 to Directory Manager 11.0, back up the Elasticsearch data folder. The
default folder location is:

`C:/ProgramData/Imanami/GroupID 10.0/Replication/data/`

```
ldifde -f c:\groupinfobeforedirectorymanager.ldf -r "(&(objectClass=group)(objectCategory=group)(|(extensionData=*)(extensionAttribute15=*)(extensionAttribute14=*)(extensionAttribute13=*)(extensionAttribute12=*)" -p Subtree -l extensionData,extensionAttribute15,extensionAttribute14,extensionAttribute13,extensionAttribute12
```

## Directory Manager Self-Service Portals

### Back Up

To back up the Self-Service portals created using Directory Manager 9 and 10, follow these steps:

1. Go to the Inetpub folder of the product for which you want to create a backup.

    - **Directory Manager 9** — X:\Program Files\Imanami\GroupID 9.0\SelfService\Inetpub
    - **Directory Manager 10** — X:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub

2. Copy the folders for each virtual server or portal.
3. Create a new folder (ideally on a different drive) and paste the copied data into that folder.

### Restore

To restore Directory Manager Self-Service portals, follow these steps:

1. Copy the folders containing the portals from the backup folder you created in the previous steps.
2. Go to the Inetpub\ folder of the product’s installation directory:

    - **Directory Manager 9** — X:\Program Files\Imanami\GroupID 9.0\SelfService\Inetpub
    - **Directory Manager 10** — X:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub

3. Paste the copied data in the location, replacing any existing files.

## Directory Manager Password Center Portals

### Back Up

To back up Password Center User and Helpdesk portals created using Directory Manager 9
and 10, follow these steps:

1. Go to the PasswordCenter\ folder of the product’s installation directory:

    - **Directory Manager 9** — X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Inetpub  
      (for Password Center User portals)
    - **Directory Manager 9** — X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Helpdesk\Inetpub  
      (for Password Center Helpdesk portals)
    - **Directory Manager 10** — X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Inetpub  
      (for Password Center User portals)
    - **Directory Manager 10** — X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Helpdesk\Inetpub  
      (for Password Center Helpdesk portals)

2. Copy the folders of each portal.
3. Create a new folder (on a different drive) and paste the copied data into that folder.

### Restore

To restore Password Center portals to Directory Manager, follow these steps:

1. Copy the folders containing the Password Center portals from the backup folder you created in the
   previous steps.
2. Go to the PasswordCenter\ folder of the product’s installation directory:

    - **Directory Manager 9** — X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Inetpub  
      (for Password Center User portals)
    - **Directory Manager 9** — X:\Program Files\Imanami\GroupID 9.0\PasswordCenter\Helpdesk\Inetpub  
      (for Password Center Helpdesk portals)
    - **Directory Manager 10** — X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Inetpub  
      (for Password Center User portals)
    - **Directory Manager 10** — X:\Program Files\Imanami\GroupID 10.0\PasswordCenter\Helpdesk\Inetpub  
      (for Password Center Helpdesk portals)

3. Paste the copied data into the location, replacing any existing files.

## Directory Manager Synchronize Jobs

### Back Up

To back up jobs created with Directory Manager 9 and 10 Synchronize, follow these steps:

1. In the Windows **Run** dialog box, type one of the following paths and run the command:

    - **Directory Manager 9** — %ALLUSERSPROFILE%\Imanami\GroupID 9.0\Synchronize
    - **Directory Manager 10** — %ALLUSERSPROFILE%\Imanami\GroupID 10.0\Synchronize

2. Copy the **Jobs** folder.
3. Create a new folder (ideally on a different drive) and paste the **Jobs** folder into it.

:::note
If scheduled tasks are defined for Synchronize jobs, you don't need to back them
up. After you restore the jobs, the scheduled tasks remain functional.
:::

### Restore

To restore jobs from Directory Manager 9 and 10, follow these steps:

1. Copy the **Jobs** folder from the backup folder you created in the preceding steps.
2. In the Windows **Run** dialog box, type one of the following paths and run the command:

    - **Directory Manager 9** — %ALLUSERSPROFILE%\Imanami\GroupID 9.0\Synchronize
    - **Directory Manager 10** — %ALLUSERSPROFILE%\Imanami\GroupID 10.0\Synchronize

3. Paste the **Jobs** folder into the location, replacing any existing files.

## Directory Manager Reports

### Back Up

To back up Directory Manager 9 and 10 reports, follow these steps:

1. Browse to the location where the reports generated by these products are saved. The default
   locations are:

    - **Directory Manager 9** — X:\ProgramData\Imanami\GroupID 9.0\Reports
    - **Directory Manager 10** — X:\ProgramData\Imanami\GroupID 10.0\Reports

2. Copy all data at the location.
3. Create a new folder (ideally on a different drive) and paste the copied data into that folder.

:::note
You don't need to back up scheduled tasks that include report criteria. After you restore the
reports, the scheduled tasks remain functional.
:::

### Restore

To restore Directory Manager 9 and 10 reports, follow these steps:

1. Copy the data from the backup folder you created in the previous steps.
2. In the Windows **Run** dialog box, enter the path of the location where the reports are saved and
   run the command:

    - **Directory Manager 9** — X:\ProgramData\Imanami\GroupID 9.0\Reports
    - **Directory Manager 10** — X:\ProgramData\Imanami\GroupID 10.0\Reports

3. Paste the copied data in the location, replacing any existing files.

See Also

- [Uninstall Directory Manager](/docs/directorymanager/11.0/about/installer/uninstall.md)
- [Install Directory Manager](/docs/directorymanager/11.0/about/installer/install.md)
