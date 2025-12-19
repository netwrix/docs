---
title: "HIBP Updater"
description: "HIBP Updater"
sidebar_position: 90
---

# HIBP Updater

Password Policy Enforcer can be configured to use the Have I Been Pwnd (HIBP) database. A copy of
this database is hosted on the Netwrix website. The HIBP database contains a list of the hashes of
known compromised passwords. During password change operations, the application can be configured to
reject passwords with a hash that matches a hash in the HIBP database. See the Password Policy
Enforcer [Compromised Password Check](/docs/passwordpolicyenforcer/11.1/admin/compromisedpasswordcheck.md) topic for HIBP database
information and configuration options.

The HIBP database must be initially deployed to a server or workstation with an internet connection
that can retrieve and format the file. Once the database is formatted, you can distribute the HIBP
database to your domain controllers so the Password Policy Enforcer server can check passwords
against the HIBP database.

## Considerations When Deploying the HIBP Database

Prior to deploying the HIBP database, consider the pros and cons when choosing its deployment
location.

- The HIBP database takes up additional space on the machine where it is copied (approximately 13
  GB, but subject to change)
- A network connection to the application server is not required to check passwords against the HIBP
  database

## Installation and Configuration

The HIBP Updater is installed when you install the Password Policy Enforcer Configuration Console.

:::info
Only run this from one server.
:::


**Step 1 –** To access the HIBP Updater, navigate to the installation location:

**...\Program Files\Password Policy Enforcer\HIBP\**

![hibpfolder](/images/passwordpolicyenforcer/11.1/administration/hibpfolder.webp)

**Step 2 –** Click HIBPWINUpdater.

### Passwords Hash Database

Password Policy Enforcer utilizes the Passwords Hash database to check if users’ new and pending
password (i.e. during a password reset) matches the hash of a compromised password from a data
breach.

:::note
First-time configuration of this window requires downloading the HIBP database from the
Netwrix website.
:::


![HIBP Updater](/images/passwordpolicyenforcer/11.1/administration/hibpupdater.webp)

:::warning
Ensure the initial update of the database occurs during non-office hours. Due to the
size of the hash file, this download takes up a significant amount of CPU and download time.
:::


- Passwords Hash Database Folder – Central location of the Pwned database on the application server.
  The default path is:

**…\HIBP\DB**

- Update Type:

    - Full Download – Download all data from the HIBP database hosted on the Netwrix website
    - Incremental Update – Download updates from the HIBP database hosted on the Netwrix website
      instead of downloading the full HIBP database. This option is enabled after a full download of
      the HIBP database has completed.

        :::note
        Only the full HIBP database file obtained from the Netwrix website has version
        information. That full HIBP database file can be obtained using the Website option.
        Alternately, the HIBP database can be obtained outside of the application by downloading it
        directly from the Netwrix website using an FTP connection:
        :::


        - [https://releases.netwrix.com/resources/stealthintercept/stealthintercept-hibp-database-1.0.0.zip](https://releases.netwrix.com/resources/stealthintercept/stealthintercept-hibp-database-1.0.0.zip)
        - [https://releases.netwrix.com/resources/stealthintercept/stealthintercept-hibp-database-1.0.0.zip.sha256.txt](https://releases.netwrix.com/resources/stealthintercept/stealthintercept-hibp-database-1.0.0.zip.sha256.txt)

        Then, the File option can be used and incremental updates will be enabled.

- Location:

    - File – If the application server does not have internet access, you can manually download the
      HIBP database and select the **File** radio button to browse to your local copy of the
      database
    - Web Site – This option points to the Netwrix website that hosts a copy of the latest HIBP
      database. This is the default option and the preferred method if the application server has
      internet access.

- Apply:

    - If Website is selected, then clicking **Apply** downloads the HIBP database from the Netwrix
      website and then processes the database for use by the application
    - If File is selected, then clicking **Apply** will process the local copy of the (manually
      obtained) database for use by the application

### Hash File Replication

Password Policy Enforcer does not distribute hash file updates to other computers, but you can use
the Windows Distributed File System to ensure that all domain controllers have the latest hash
files. Copy the hash files into the Sysvol share on one domain controller, and the Distributed File
System will copy the files into the Sysvol share of all other domain controllers. Configure the
Compromised rule to read the files from:

**\\127.0.0.1\sysvol\your.domain\filename.db**

See the [Compromised Rule](/docs/passwordpolicyenforcer/11.1/admin/manage-policies/rules/compromised_rule.md) topic for additional information.

The path above only works if the computer has a Sysvol share. This will not be the case if you are
using a workstation for policy testing, or if you are using Password Policy Enforcer to enforce
local policies. If you are using Password Policy Enforcer for local policies and want all computers
to receive hash file updates, then use the Sysvol share for file replication and a script or
scheduled task to copy the file to a local folder.

:::warning
%SystemRoot%. hash files should only be read from a local disk. Using shared hash files
degrades performance, and could jeopardize security.
:::


## Scheduler

Password Policy Enforcer administrators can use the Scheduler portion of the HIBP Updater to
automate the tool to retrieve and/or prepare the HIBP dataset. The Scheduler utilizes Microsoft Task
Scheduler technology to execute the process.

### How to Schedule a Task

Follow the steps to schedule a task.

**Step 1 –** Click **Scheduler** in the HIBP Updater.

**Step 2 –** Click **Add Schedule**. An Edit Schedule window appears that looks similar to the HIBP
Updater window.

![editschedule](/images/passwordpolicyenforcer/11.1/administration/editschedule.webp)

**Step 3 –** Enter the Name and Description of the schedule.

**Step 4 –** Select **Add Trigger** to add the interval that you wish to have the schedule run.

- You can add as many triggers as you want to a schedule.

**Step 5 –** Select the Update Type and Location to get the update.

**Step 6 –** Once you have setup your schedule, click **OK** to save the schedule.

The HIBP database will be updated according to the configurations.

### Schedule List

The Schedule List window shows the names, run times, next run times, and whether the schedule is
enabled or not.

![schedulelist](/images/passwordpolicyenforcer/11.1/administration/schedulelist.webp)

Use this window to Add, Edit, or Delete schedules for the HIBP Updater.
