---
title: "Target Unix Requirements, Permissions, and Ports"
description: "Target Unix Requirements, Permissions, and Ports"
sidebar_position: 10
---

# Target Unix Requirements, Permissions, and Ports

The Access Analyzer for Unix Solution provides the ability to audit Unix servers. It scans:

- AIX® 4+
- Solaris™ 8+
- Red Hat® Enterprise Linux® 4+
- Red Hat® Linux® 5.2+
- HP-UX® 11+
- CentOS® 7+
- SUSE® 10+

**Data Collectors**

This solution employs the following data collectors to scan the target environment:

- [NIS Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/nis/overview.md)
- [Unix Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/unix/overview.md)

## Permissions

**For NIS Data Collector Prerequisite**

- No special permissions are needed aside from access to a NIS server

**For Unix Data Collector**

- Root permissions in Unix/Linux

If the Root permission is unavailable, a least privileged model can be used. See the
[Least Privilege Model](#least-privilege-model) topic additional information.

## Ports

The following firewall ports are needed:

**For NIS Data Collector Prerequisite**

- TCP 111 or UDP 111
- Randomly allocated high TCP ports

**For Unix Data Collector**

- TCP 22
- User configurable

## Least Privilege Model

Access Analyzer for Unix collects information from Unix devices by running commands or executing
scripts on your Unix hosts (if configured properly our tool can SCP scripts to your hosts before
execution). Therefore, the domain or local user credentials entered in the Connection Profile within
the Access Analyzer must be capable of running the necessary commands, executing the necessary
scripts or, in some cases, have rights to SCP scripts to the host.

### Connecting to Unix Hosts

Access Analyzer for Unix connects to your host in two ways:

- Plink – This mechanism is leveraged during our tools Host Inventory to test connectivity to a host
  and to collect basic details about a host (Host Name, OS Type, etc.)
- Implementation of the SSH2 protocol built into Access Analyzer – This is how the Unix Data
  Collector interacts with and pulls information from your environment

**Authentication Methods**

- SSH Login Required
- SSH Private Key

    - Supported Key Types

        - Open SSH
        - PuTTY Private Key

**Device Connectivity**

- SSH port opened in software and hardware firewalls. Default is 22.

    - If you do not use Port 22, you can specify your SSH port in the Connection Profile

### Commands for Non-Root Accounts

We recommend using the root account to run Access Analyzer against a Unix system. However, if that
is not acceptable all the commands we leverage in the solution set are below and can be used to
implement least privilege:

All Perl scripts require the account to be able to execute the following commands:

```
scp [script] to a target location: /tmp/[script]
```

```
perl [script]
```

```
rm -f [script]
```

#### UX_UsersAndGroups Job Requirements

The 1.Users and Groups > 0.Collection > UX_UsersAndGroups Job requires permissions in the Unix
environment to run the following commands:

**Commands Used**

- `grep`
- `egrep`
- `uname`
- `cat /etc/passwd` (read access)
- `cat /etc/group` (read access)
- `cat /etc/security/user` (read access)
- `cat /etc/shadow`

    - Requires root or customization to job to utilize sudo without password prompt (:NOPASSWD)

- `egrep /etc/security/user` (read access)
- `egrep /etc/login.defs` (read access)
- `egrep /etc/default/passwd` (read access)
- `cat /etc/security/passwd` (read access)

**Perl Scripts Used**

```
SA_UX_AIX_User.pl
```

```
SA_UX_AIX_UserLastUpdate.pl
```

#### UX_MakeDirectory Job Requirements

The 2.PrivilegedAccess > Sudoers > 0.Collection > UX_MakeDirectory Job requires permissions in the
Unix environment to run the following commands:

**Commands Used**

- `mkdir /tmp/Stealthbits/`

#### UX_ParseSudoers Job Requires

The 2.PrivilegedAccess > Sudoers > 0.Collection > UX_ParseSudoers Job requires permissions in the
Unix environment to run the following commands:

:::note
To parse sudoers we either need root or an account that has access to use sudo without
password prompt (:NOPASSWD)
:::


**Commands Used**

- `sudo chmod 500 SA_UX_ParseSudoers.pl`
- `sudo ./SA_UX_ParseSudoers.pl`
- `sudo rm SA_UX_ParseSudoers.pl`
- `sudo rmdir /tmp/Stealthbits/`

**Perl Scripts Used**

```
SA_UX_ParseSudoers.pl
```

This grants read access to  `/etc/sudoers`

#### UX_CriticalFiles Job Requires

The 2.PrivilegedAccess > UX_Critical Files Job requires permissions in the Unix environment to run
the following commands:

**Commands Used**

- `ls -al /etc/`
- `ls -al /etc/samba/`
- `ls -al /etc/sysconfig`

#### UX_NFSConfiguration Job Requires

The 3.Sharing > 0.Collection > UX_NFSConfiguration Job requires permissions in the Unix environment
to run the following commands:

**Perl Scripts Used**

```
SA_UX_NFSConfiguration.pl
```

This grants:

- read access to `/etc/exports`
- read access to `/etc/dfs/dfstab`

#### UX_SambaConfiguration Job Requires

The 3.Sharing > 0.Collection > UX_SambaConfiguration Job requires permissions in the Unix
environment to run the following commands:

**Perl Scripts Used**

```
SA_UX_SambaConfiguration.pl
```

This grants:

- read access to `/etc/sfw/smb.conf`
- read access to `/etc/samba/smb.conf`
