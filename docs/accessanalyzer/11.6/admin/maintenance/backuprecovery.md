---
title: "Backup and Recovery"
description: "Backup and Recovery"
sidebar_position: 30
---

# Backup and Recovery

For data recovery purposes, the Enterprise Auditor does not need a complete image back up of the
Enterprise Auditor Console server. Rather a standard file level back up of a few key components is
all that is necessary. This document contains a step-by-step guide for back up and recovery. The
choice of back up utility is left to the Enterprise Auditor user.

:::note
This does not cover back up of the Enterprise Auditor database.
:::


## Steps to Back Up the Console Server

Follow these steps to back up the key components necessary for data recovery of the Enterprise
Auditor Console server.

**Step 1 –** Obtain or save the installation media for Enterprise Auditor.

**Step 2 –** Back up the following files and folders from the Enterprise Auditor folder (Typically
found at `C:\Program Files(x86)\STEALTHbits\StealthAUDIT` and can be more directly found with the
built-in environment variable `%SAINSTALLDIR%`):

- ...\STEALTHbits\StealthAUDIT\Jobs: Contains the jobs from the Enterprise Auditor jobs tree
- … \STEALTHbits\StealthAUDIT\CLU: Contains any CLU parameters
- … \STEALTHbits\StealthAUDIT\ODBCProfiles\Custom: Contains any custom ODBC connect strings
- …\STEALTHbits\StealthAUDIT\SADatabase\Views: Contains the host list definitions
- ...\ STEALTHbits\StealthAUDIT\SecurityMap: Contains all of the Connection Profiles
- ... \STEALTHbits\StealthAUDIT\GlobalOptions.XML: Contains the Global Options
- ...\ STEALTHbits\StealthAUDIT\SPProfiles.XML: Contains the Storage Profiles (SQL connection)
- ...\ STEALTHbits\StealthAUDIT\rba.conf: Contains the Role Based Access Configuration
- ...\ STEALTHbits\StealthAUDIT\StealthAUDIT.LIC: The license key

**Step 3 –** Back up all Scheduled Tasks. The method of back up is determined by the Enterprise
Auditor user. This can be as simple as copying the contents of the tasks folder from the following
two locations:

![C:\Windows\Tasks](/images/accessanalyzer/11.6/admin/maintenance/maintenance_3.webp)

- C:\Windows\Tasks

![C:\Windows\System32\Tasks](/images/accessanalyzer/11.6/admin/maintenance/maintenance_4.webp)

- C:\Windows\System32\Tasks

All key components necessary for data recovery have now been backed up.

## Steps to Restore the Console Server

Follow these steps for data recovery of the Enterprise Auditor Console server.

**Step 1 –** Confirm the prerequisites have been met on the Enterprise Auditor Console Server. See
the
[Requirements](/docs/accessanalyzer/11.6/requirements/overview.md)
topic for specific prerequisites.

**Step 2 –** Install the Enterprise Auditor application. Do not start the Enterprise Auditor
application at this time.

**Step 3 –** Restore all of the backed up files and folders from Step 2 of Steps to Back up the
Enterprise Auditor Console Server to their corresponding location.

**Step 4 –** Restore all of the backed up scheduled tasks from Step 3 of Steps to Back up the
Enterprise Auditor Console Server to the corresponding tasks folder of the operating system.

**Step 5 –** For Host Management and Host List Replication in a new host scenario, run the following
code within the SQL Studio on the Enterprise Auditor database.

- Replace `OldServer` and `NewServer` in the script below with the names of the old and new
  Enterprise Auditor servers

```
Declare @OHost varchar (128)
Declare @NHost varchar (128)
Set @OHost = 'OldServer'
Set @NHost = 'NewServer'
Update [HostMaster_SANodeFilter]
SET SA_Node = @NHost
Where SA_Node = @OHost;
Update [HostListsTbl]
SET SA_Node = @NHost
Where SA_Node = @OHost
and ListID not in (Select ListID from [HostListsTbl] where SA_Node = @NHost);
Update [QueryTbl]
SET SA_Node = @NHost
Where SA_Node = @OHost;
```

**Step 6 –** Start Enterprise Auditor and confirm all settings and jobs have been restored.

**Step 7 –** Enable Role Based Access to write the necessary registry keys:

![Role Based Access](/images/accessanalyzer/11.6/admin/maintenance/maintenance_5.webp)

- Navigate to the **Settings** > **Access** node in the Enterprise Auditor Console and select
  **Access**
- Use the **Add Access**, **Edit Member Role**, and **Delete Member Role** buttons to add, remove,
  and edit roles
- See the
  [Role Based Access](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/overview.md)
  topic for more information

The Enterprise Auditor Console Server is now restored.
