---
title: "Install the PostgreSQL Database Application"
description: "Install the PostgreSQL Database Application"
sidebar_position: 10
---

# Install the PostgreSQL Database Application

The PostgreSQL database application can be installed on the same server as the application or a
different server. If it is installed on a different server, the location of the database server must
be provided while installing the application.

Follow the steps to install the PostgreSQL database application.

:::warning
The PostgreSQL database application must be installed before the application.
:::


:::note
These steps assume you have launched the installer through the Netwrix Setup Launcher
`(Netwrix_Setup.exe`). If you are not using the launcher, right-click on `NetwrixPostgreSQL14.exe`
and select Run as administrator. Then skip to Step 2.
:::


![Netwrix Setup Launcher](/images/threatmanager/3.0/install/setuplauncher.webp)

**Step 1 –** Click PostgreSQL Setup. The Netwrix PostgreSQL Setup wizard opens.

![Netwrix PostgreSQL Setup wizard](/images/threatmanager/3.0/install/installdb1.webp)

**Step 2 –** Click Install.

![Netwrix PostgreSQL Setup wizard on the EULA page](/images/activitymonitor/8.0/install/eula.webp)

**Step 3 –** Read the End User License Agreement and select the I accept the license agreement
checkbox. Click Next.

![Netwrix PostgreSQL Setup wizard on the Folder Location page](/images/threatprevention/7.5/install/reportingmodule/folder.webp)

**Step 4 –** By default, the installation directories are set to:

- Install Folder – C:\Program Files\Stealthbits\PostgresSQL14
- Data Folder – C:\ProgramData\Stealthbits\PostgresSQL14

Optionally, enter a new path or use the **Browse** buttons to modify as desired. Click Next.

![Netwrix PostgreSQL Setup wizard on the Successfully Installed page](/images/threatprevention/7.5/install/reportingmodule/completed.webp)

**Step 5 –** The installation begins and the installer displays a Setup Progress window. Click Exit
when the installation is successful. The Netwrix PostgreSQL Setup wizard closes.

![Netwrix Setup Launcher showing PostgreSQL Setup completed](/images/threatmanager/3.0/install/postgresqlcheck.webp)

The PostgreSQL database application is now installed. Now you can install the Threat Manager
application. See the [Install the Threat Manager Application](/docs/threatmanager/3.0/install/application.md) topic for additional
information.

## Optionally Configure the Postgres.conf File

PostgreSQL has some unique memory management features that need to be configured specifically based
on the specifications of the database server. PostgreSQL can easily be starved of resources and
enter a failed state if careful consideration and configuration of the `postgres.conf` file is not
taken under consideration. For larger environments or for those experiencing issues with PostgreSQL,
the following changes are suggested.

:::note
When setting values, specifically when using a Memory unit, case sensitivity is required.
:::


The table displays `Postgres.conf` settings and their suggested values.

| Setting                         | Suggested Value                                                                                        | Notes                                                        |
| ------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| effective_cache_size            | Total Server Memory (MBs) \* .75                                                                       |                                                              |
| shared_buffers                  | totalMemory / 4                                                                                        | shared_buffers on windows needs to be limited to 512MB       |
| wal_buffers                     | 3% of shared_buffers with a min of 32kB and a max of 16MB                                              |                                                              |
| checkpoint_timeout              | checkpoint_timeout = 30min                                                                             |                                                              |
| max_wal_size                    | 2048MB                                                                                                 |                                                              |
| min_wal_size                    | 1024MB                                                                                                 |                                                              |
| checkpoint_completion_target    | 0.7                                                                                                    |                                                              |
| work_mem                        | work_mem = ((totalMemory - shared_buffers) / (max_connections \* 3) / max_parallel_workers_per_gather) | Limit to 64kB                                                |
| max_connections                 | 100                                                                                                    |                                                              |
| maintenance_work_mem            | maintenance_work_mem = totalMemory / 16                                                                | cap maintenance memory at 2GB on servers with lots of memory |
| default_statistics_target       | 100                                                                                                    |                                                              |
| random_page_cost                | if ( disk_is_hdd ) `{ random_page_cost = 4 }` else `{ random_page_cost = 1.1 }`                        |                                                              |
| max_parallel_workers            | max_parallel_workers = cpuNum                                                                          |                                                              |
| max_worker_processes            | 8                                                                                                      |                                                              |
| max_parallel_workers_per_gather | 2                                                                                                      |                                                              |
| max_locks_per_transaction       | 300                                                                                                    |                                                              |
