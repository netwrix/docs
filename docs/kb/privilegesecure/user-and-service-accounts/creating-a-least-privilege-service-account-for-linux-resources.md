---
description: >-
  Create a least-privilege service account and sudoers.d file so Privilege
  Secure can onboard Linux resources and run workflows without root.
keywords:
  - linux
  - sudoers
  - least-privilege
  - service-account
  - Netwrix Privilege Secure
  - onboarding
  - sudo
  - troubleshooting
  - script
  - requiretty
  - NOPASSWD
  - visudo
products:
  - privilegesecure
sidebar_label: "Creating a Least Privilege Service Account for Linux Resources"
tags:
  - kb
  - user-and-service-accounts
title: "Creating a Least Privilege Service Account for Linux Resources"
knowledge_article_id: kA04u0000000HU1CAM
---

# Creating a Least Privilege Service Account for Linux Resources

## Overview

This article describes how to create a dedicated service account with a `sudoers` file so that Netwrix Privilege Secure for Access Management can onboard Linux resources. Onboarding requires a service account that can execute certain elevated commands on the Linux resource.

While you could use the root account, it is not secure and would be a drastic over-provisioning of privileges. Instead, create a dedicated service account with a `sudoers` file that only allows elevation for the commands required by Privilege Secure.

## Instructions

1. Create a new user on the Linux resource that is used as the service account such as **svc_sbpam**. On most Linux distros, this is performed with the `useradd` command, for example: `useradd svc_sbpam -m`.

   > **NOTE:** Alternatively, you may create the user interactively using the `adduser svc_sbpam` command.

2. Create a file named after the user (for example, **svc_sbpam**) in the sudoers directory of the Linux resource. Typically, this is `/etc/sudoers.d`.

3. Add the following contents to the file. They grant the service account the least amount of privilege required for Privilege Secure to onboard the Linux resource and execute workflows on it:

   ```text
   Cmnd_Alias ACT_CHKSUM = /usr/bin/find, /usr/bin/test, /usr/bin/md5sum
   Cmnd_Alias ACT_SUDOERS = /usr/bin/ls, /usr/bin/tee, /usr/bin/visudo, /usr/bin/rm, /usr/bin/mv, /usr/bin/chmod, /sbin/visudo
   Cmnd_Alias SB_PASS = /usr/bin/chpasswd, /usr/sbin/chpasswd, /usr/bin/groups, /usr/sbin/usermod, /usr/sbin/userdel, /usr/sbin/useradd, /usr/bin/gpasswd
   Cmnd_Alias SB_CMNDS = /usr/bin/grep, /usr/bin/ps, /usr/bin/kill, /usr/bin/which, /usr/bin/write, /usr/bin/who, /usr/bin/w, /usr/bin/last, /usr/bin/cat, 
   /usr/bin/uname, /usr/bin/ls, /usr/bin/yum, /usr/bin/chage, /usr/bin/rpm, /usr/share/bash-completion/completions/dpkg, /usr/bin/id, /usr/sbin/ip,
   /usr/sbin/ifconfig, /usr/bin/dpkg 

   svc_sbpam ALL = NOPASSWD: ACT_CHKSUM, ACT_SUDOERS, SB_PASS, SB_CMNDS
   Defaults:svc_sbpam !requiretty
   ```

   The `Cmnd_Alias` lines are the commands the service account needs to run on the Linux resource, while the second to last line associates those commands with the Privilege Secure service account as a sudoers rule. Additionally, `NOPASSWD` allows the service account to execute elevated commands without manually entering a password each time, and `!requiretty` allows elevated commands to be run in non-interactive shell sessions.

   > **NOTE:** The account name **svc_sbpam** is not required and can be changed. The only requirement is that the account name added as a service account in Privilege Secure must match the account name used in the `sudoers` file (anywhere **svc_sbpam** is replaced).

4. The service account is now ready to be added to Privilege Secure. You can assign it to the Linux resource when the resource is onboarded, or on the **Resources** page if the Linux resource has already been onboarded.

### Troubleshooting

You may receive the following error message when attempting to provision a session against a Linux resource using this service account:

```text
sudo: no tty present and no askpass program specified
```

To resolve this, complete the following steps:

1. Check the logs on the Linux resource for error messages involving the **svc_sbpam** account (or whatever service account name you chose) with the following command:

   ```bash
   sudo grep svc_sbpam /var/log/*
   ```

2. If any of the entries reference a particular command that the service account failed to run due to insufficient sudoer privileges, note the path of the command (for example, `/sbin/ifconfig/`) and add it to the end of the `Cmnd_Alias SB_CMNDS` entries in the service account's `/etc/sudoers.d/` file.

3. Try to provision a session again, now that the necessary command alias is configured for the service account.

### Additional Troubleshooting

You may receive the following error when performing a host scan or activity:

```text
Error: 'Could not chdir to home directory /home/svc_sbpam: Not a directory sudo: a terminal is required to read the password; either use the -S option to read from 
standard input or configure an askpass helper sudo: a password is required.'
```

This indicates that your service account (such as **svc_sbpam**) is not listed in the `/etc/sudoers` file.

> **NOTE:** You can confirm this by attempting to use `sudo` as your service account.

To fix this, complete the following steps:

1. Edit your `sudoers` file, typically with the following command:

   ```bash
   sudo visudo
   ```

2. Ensure that there is an entry for your service account under the **user privilege specification** header. For example:

   ```text
   # User privilege specification
   root    ALL=(ALL:ALL) ALL
   sbpam_svc    ALL=NOPASSWD: ALL
   ```

### Using a Shell Script to Determine sudoers.d File Configuration

Instead of using the methods described in the preceding sections, you can deploy a shell script to determine the exact contents of the `/etc/sudoers.d/` file that should be created. Complete the following steps:

1. Copy the following script:

   ```bash
   #!bash
   echo "Enter the least privileged account's name:"
   read lprivacct
   append_comma=0
   cmd_alias="Cmnd_Alias ACT_CHKSUM = "
   for cmd in find test md5sum
   do
       cmd=`which ${cmd} 2>/dev/null`
       if [ ${append_comma} -eq 1 ] 
       then
           if [ "" != "${cmd}" ]
           then
               cmd_alias+=", "
           fi
       fi
       cmd_alias+="${cmd}"
       append_comma=1
   done
   append_comma=0
   echo ${cmd_alias}
   cmd_alias="Cmnd_Alias ACT_SUDOERS = "
   for cmd in ls tee visudo rm mv chmod
   do
       cmd=`which ${cmd} 2>/dev/null`
       if [ ${append_comma} -eq 1 ] 
       then
           if [ "" != "${cmd}" ]
           then
               cmd_alias+=", "
           fi
       fi
       cmd_alias+="${cmd}"
       append_comma=1
   done
   append_comma=0
   echo ${cmd_alias}
   cmd_alias="Cmnd_Alias SB_PASS = "
   for cmd in chpasswd groups usermod userdel useradd gpasswd
   do
       cmd=`which ${cmd} 2>/dev/null`
       if [ ${append_comma} -eq 1 ] 
       then
           if [ "" != "${cmd}" ]
           then
               cmd_alias+=", "
           fi
       fi
       cmd_alias+="${cmd}"
       append_comma=1
   done
   append_comma=0
   echo ${cmd_alias}
   cmd_alias="Cmnd_Alias SB_CMNDS = "
   for cmd in "grep" "ps" "kill" "which" "write" "who" "w" "last" "cat" "uname" "ls" "yum" "chage" "rpm" "dpkg" "id" "ip" "ifconfig"
   do
       cmd=`which ${cmd} 2>/dev/null`
       if [ ${append_comma} -eq 1 ] 
       then
           if [ "" != "${cmd}" ]
           then
               cmd_alias+=", "
           fi
       fi
       cmd_alias+="${cmd}"
       append_comma=1
   done
   append_comma=0
   echo ${cmd_alias}
   echo "${lprivacct} ALL = NOPASSWD: ACT_CHKSUM, ACT_SUDOERS, SB_PASS, SB_CMNDS"
   echo "Defaults: ${lprivacct} " '!requiretty'
   ```

2. Paste the script into the terminal and press Enter.

3. When prompted, enter the least privileged account's name (for example, **svc_sbpam**, or whichever account name you have chosen). The script outputs the contents of a `sudoers.d` file for a least-privilege user with the exact command paths used on your Linux server.

4. Copy the output and use it to complete the steps in [Instructions](#instructions), using the file contents you have just generated instead of those provided in that section.
