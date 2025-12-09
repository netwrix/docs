---
description: >-
  Shows how to create a least-privilege service account and configure a
  sudoers.d file so you can onboard Linux resources into Netwrix Privilege
  Secure and run workflows without using root.
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
products:
  - privilege-secure-access-management
sidebar_label: Creating a Least Privilege Service Account for Lin
tags: []
title: "Creating a Least Privilege Service Account for Linux Resources"
knowledge_article_id: kA04u0000000HU1CAM
---

# Creating a Least Privilege Service Account for Linux Resources

## Overview

To onboard Linux resources into Netwrix Privilege Secure (NPS), a service account is required that can execute certain elevated commands on the Linux resource.

While one could simply use the root account, it is not secure and would be a drastic over-provisioning of privileges. Instead, create a dedicated service account with a `sudoers` file that only allows elevation for the commands required by Netwrix Privilege Secure.

## Instructions

1. Create a new user on the Linux resource that will be used as the service account such as **svc_sbpam**. On most Linux distros, this will be performed with the `useradd` command, for example: `useradd svc_sbpam -m`.

   > NOTE: Alternatively, you may create the user interactively using the `adduser svc_sbpam` command.

2. Create a file named after the user (e.g., **svc_sbpam**) in the Linux resource's sudoers directory. Typically, this is: `/etc/sudoers.d`.

3. The contents of the file should be as follows, which will grant the service account the least amount of privilege required for Netwrix Privilege Secure to onboard the Linux resource and execute workflows on it:

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

The `Cmnd_Alias` lines are the commands the service account needs to run on the Linux resource, while the second to last line associates those commands with the Netwrix Privilege Secure service account as a sudoers rule. Additionally, `NOPASSWD` allows the service account to execute elevated commands without manually entering a password each time, and `!requiretty` allows elevated commands to be run in non-interactive shell sessions.

> NOTE: The account name **svc_sbpam** is not required and can be changed. The only requirement is that the account name added as a service account in Netwrix Privilege Secure (NPS) must match the account name used in the `sudoers` file (anywhere **svc_sbpam** is replaced).

4. The service account is now ready to be added to Netwrix Privilege Secure and can be assigned to the Linux resource when it is onboarded or via the Resources page if the Linux resource has already been onboarded.

## Troubleshooting

You may receive the following error message when attempting to provision a session against a Linux resource using this service account:

```text
sudo: no tty present and no askpass program specified
```

To resolve this, perform the following steps:

1. Check the logs on the Linux resource for error messages involving the **svc_sbpam** account (or whatever service account name you chose) via the below steps:

```bash
sudo grep svc_sbpam /var/log/*
```

2. If any of the entries reference a particular command that the service account failed to run due to insufficient sudoer privileges, be sure to note the path of the command (for example, `/sbin/ifconfig/`) and add it to the end of the `Cmnd_Alias SB_CMNDS` entries in the service account's `/etc/sudoers.d/` file.

3. You should then reattempt to provision a session now that the necessary command alias is configured for the service account.

## Additional Troubleshooting

You may receive the following error when performing a host scan or activity:

```text
Error: 'Could not chdir to home directory /home/svc_sbpam: Not a directory sudo: a terminal is required to read the password; either use the -S option to read from 
standard input or configure an askpass helper sudo: a password is required.'
```

This would indicate that your service account (such as **svc_sbpam**) is not listed in the `/etc/sudoers` file.

> NOTE: This can easily be confirmed by attempting to use `sudo` as your service account.

To fix this, you may refer to the following steps:

1. Edit your `sudoers` file, typically with the below command:

```bash
sudo visudo
```

2. Then, ensure that there is an entry for your service account under the **user privilege specification** header. For example:

```text
# User privilege specification
root    ALL=(ALL:ALL) ALL
sbpam_svc    ALL=NOPASSWD: ALL
```

## Using a Shell Script to Determine sudoers.d File Configuration

Instead of using the methods described in the above sections, a shell script can be deployed that will determine the exact contents of the `/etc/sudoers.d/` file that should be created. Please refer to the following steps:

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

2. Paste the script into the terminal and hit enter.

3. When prompted, enter the least privileged account's name (for example, **svc_sbpam**, or whichever account name you have chosen).

4. The script will output the contents of a `sudoers.d` file for a least-privilege user with the exact command paths used on your Linux server.

5. Copy the output and use it to complete the steps in the Instructions, using the file contents you have just generated instead of those provided in the Instructions section.
