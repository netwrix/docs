---
title: "Failback (DR to PROD)"
description: "Failback (DR to PROD)"
sidebar_position: 20
---

# Failback (DR to PROD)

Failback (DR to PROD)

# Failback (DR to PROD)

This Failback article covers the process of restoring Privilege Secure operations back to the PROD
environment from a previously completed failover to DR. This guideline is in the general flow
process and can/will be adjusted based on organizational needs or requirements. More information on
DR (Disater Recovery) can be viewed in the following topic:
[High Availability (HA) and Disaster Recovery (DR) Options](/docs/privilegesecurediscovery/requirements/haanddr.md).

![failback.jpg](/images/privilegesecure/4.2/discovery/admin/maintenance/1500001380942_failback_782x153.webp)

he above image illustrates Privilege Secure's standard 3 node PROD to 3 node DR cluster
configuration as  a visual.

## Pre-failover” Checks (Steps 1 & 2)

### Step #1: PRE-failover Backup Check

A check of the stored MongoDB backups on both PROD and DR nodes , in the /secureone/data/db/backups
directory On PROD) and /secureone/data/db/restore directory (on DR), with the below commands. There
should be 3 backups listed in the folder, all with the prefix “mongo*backup*” and ending with a
date_time stamp (example below). The newest mongo backup should have a timestamp that is within the
last 24 hours.

ls -alht /secureone/data/db/backup

```
secureone@Secure-PROD:/secureone/data/db/restore$ ll
 total 17274160
drwxrwxrwx 2 777 secureone 4096 Sep 12 00:00 ./
drwxrwxrwx 7 777 staff 4096 Sep 12 11:18 ../
-rwxrwxrwx 1 root root 5896238386 Sep 11 00:21 mongo_backup_2019-09-11_00:00:02.gz*
 -rwxrwxrwx 1 root root 5896239358 Sep 11 20:21 mongo_backup_2019-09-11_20:00:02.gz*
-rwxrwxrwx 1 root root 5896234854 Sep 12 00:21 mongo_backup_2019-09-12_00:00:02.gz*
```

```
cd into the /secureone/data/ directory 
time sudo ./backups.sh

```

This will create a new mongodump and the time of this backup/dump will depend of the size of the
Mongo database. Then the script will scp that newest mongodumop over to -DR, which is also dependent
on the size of the backup.

### Step #2: (Pre-failover Privilege Secure Services Check)

Check the replicas status of Privilege Secure services, on both PROD and DR, with the below command.
NOTE: For the “active” Privilege Secure environment (i.e. PROD), all services should have a replicas
status of 1/1, The DR or non-active Privilege Secure environment, that will be failed over to,
should have the Scanner, Worker, and Ldapsync services with a replicas status of 0/0 and all other
services showing 1/1 replica status.
`s1 status`
-or-
`sudo docker service ls`

DR (active Privilege Secure environment)

**NOTE:** The api, scanner, worker, and ldapsync services are the only services showing a 0/0
replicas status. This is the expected display in a non-active Privilege Secure environment to ensure
that this environment is not "active" with AD and LDAP, which can cause conflicts with the active
environment’s data. The API service in the screenshot is scaled to 0/0 status but can be left at 1/1
status if preferred.

![blobid3.webp](/images/privilegesecure/4.2/discovery/admin/maintenance/1500001380942_blobid3.webp)

PROD (non-active Privilege Secure environment)

**NOTE:** All services are showing a 1/1 replicas status, which is the expected display in a active
Privilege Secure environment.

![blobid2.webp](/images/privilegesecure/4.2/discovery/admin/maintenance/1500001380942_blobid2.webp)

### Step #3: (Scale down the scanner, worker, and ldapsync services)

**Here is where you will begin the first step of the failback process.** To ensure the integrity of
the mongo database a backup/dump will need to be created when there is no “live” activity being
written to the database. To complete this the below command will need to be run on -DR.

```
sudo docker service scale s1_api=0 s1_worker=0 s1_scanner=0 s1_ldapsync=0
```

Once the above command completes, run the `sudo docker service ls` command to confirm that the 4
services are showing a replicas status of 0/0

### Step#4 (Backup and sCP the db)

To start, the mongo backup will need to be created by running the
[failback.sh](https://remediant.quip.com/RAD4AZfebK9M#failbacksh) script, on -DR, with the below
command from inside the /secureone/data directory.

```
sudo ./failback.sh
```

### Step #5: (Scale up services on DR)

The services on DR will all need to be displaying a replicas status of 1/1 to allow for continued
use of Privilege Secure while DR is the active Privilege Secure environment. . The below command
will need to be run to complete this step.

The command `sudo docker service ls` should show that the api, ldapsync, scanner, and worker
services have a replicas status of 0/0. Once this is confirmed, run the below command:

```
sudo docker service scale s1_api=1 s1_ldapsync=1 s1_scanner=1 s1_worker=1
```

Run `sudo docker service ls` to confirm all services are now showing a replicas status of 1/1. Note,
it can take 30-60 seconds after the above command completes for them to “start” and show the 1/1
replicas status. If after 60 seconds the services are showing 0/0 or 0/1 a check of the services
running status will need to be complete with the `sudo docker service ps` command described below.

**Service Status Check**: The `sudo docker service ls` command only shows the replicas status. To
see if a service is “running”, execute the command `sudo docker service ps s1_<SERVICE>`. The
`<SERVICE>` variable in the command will need to be replaced with the service that you want to check
the status for. Example to check the running status of the API service, the command would be
`sudo docker service ps s1_api`.

### Step #6: (failback_restore.sh)

Due to the process of the failback being intentionally manual, you will need to run the
[failback_restore.sh](https://remediant.quip.com/RAD4AZfebK9M#failback_restoresh) script on PROD,
which will restore the database that was just backed up and SCP’d over to PROD in the above step #3.
First confirm the backup created on -DR has been SCP'd over to PROD, in the
/secureone/data/db/failback directory. The top file will be the newest file created with the below
command.

```
ls -alht /secureone/data/db/failback
```

Once the above has been confirmed cd into the /secureone/data directory, on PROD, and run the below
command to restore that backup on PROD:

```
sudo ./failback_restore.sh
```

**NOTE:** The output of the above script will display what mongo file has been restored. This file
name should match the most recent of the mongo backups that was confirmed at the beginning of this
step. If this is not the case, re-check the list of files in the /secureone/data/db/restore
directory on -DR and compare that to the list of files in the /secureone/data/db/failback directory
on node PROD to make sure:

- The most recent backup has a timestamp with the last few minutes (server time).
- The list of files in both directories, on both nodes match.

If there is an issue with any of the above please reach out to Support. Once the script is
completed, a “done” message will display in the terminal.

### Step #7: (DNS Cutover)

Once the restore has been completed and all services are showing a replicas status of 1/1, the DNS
for [secureone.catalent.com](http://secureone.catalent.com) will need to be cutover/pointed from the
PROD environment to the DR environment. The steps for this are listed above at this section
[Catalent’s INTERNAL DNS Update “Cutover”: Failover-Failback Procedure v 1.0](https://remediant.quip.com/j8eLA7FIMaft#catalents-internal-dns-update-cutover-failover-failback-procedure-v-10).
This DNS update, once completed, should take about 15-30 mins to “push” out to the network and
update each endpoints DNS resolution. This can be done manually by clearing a machines DNS cache via
the Windows terminal command `ipconfig /flushdns.`

At this point the failover process has been completed and you should be able to:

- Access Privilege Secure (for the PROD site). From there, log into Privilege Secure successfully.
- Once DNS has successfully resolved to DR’s environment, you can access Privilege Secure through
  the normal URL [https://secureone.catalent.com](https://secureone.catalent.com) with users SSO
  credentials.
- Lastly, users should be able to search, load, and request access to systems that you have access
  to via the Access > Grant Access page. Once access has been granted, confirm you can RDP/SSH into
  the Windows/Linux machines.
