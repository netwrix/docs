---
title: "Privilege Secure and Linux"
description: "Privilege Secure and Linux"
sidebar_position: 270
---

# Privilege Secure and Linux

Privilege Secure and Linux

# Privilege Secure and Linux

**CAUTION:** Always back up the /etc/sudoers file prior to scanning or enabling Scan Mode on any
system in NPS-D. Scanning, regardless of Protect Mode setting, a Liunx system will result in a
flattening of the /etc/sudoers file. This will pull in all permissions from other sources (e.g:
files locate in /etc/sudoers.d) into the /etc/sudoers file, and disable sudo permissions being
acquired from those sources.

This topic covers the processes surrounding Privilege Secure with Linux systems. Specifically
covering:

- Privilege Secure’s **Linux Registration** process, via API calls, through Postman or QuickStart.
- Privilege Secure’s general **JITA Request for Linux** using the bridged AD accounts
- **Protect Modes** JITA+DENY with the applied modifications to sudoers.d directory
- **“Under the Hood”**, what Privilege Secure is doing with the 3 reference files used for Privilege
  Secure’s inventory and visibility of Linux systems

### Linux Registration Setup

Similar to registering Windows systems, there is some prep work that is needed to allow Privilege
Secure processes to complete on the newly registered Linux machines. Here are the outlined items to
be completed prior registering Linux systems.

- A service account will be required to register/enroll the system within Privilege Secure. This
  account will need to have sudo permissions on the Linux endpoint(s).
- Adding a sudo user:

    - For users experienced with Linux, add line to /etc/sudoers file with the permissions for user,
      ‘example_user’ show here: `example_user ALL=(ALL) NOPASSWD: ALL`
    - [Linux: Add Sudo User to Ubuntu System](/docs/privilegesecurediscovery/administration/systemmanagement/linuxaddsudouser.md)

### Linux Registration - (pre 2.18.0)

The below Zendesk support article, which covers the fields sent during the registration process
including the admin account(s) that will be added to the Linux endpoint and used for JITA access.  
Linux registration can be completed via either of the below methods. The Postman option will allow
for a single system registration and the QuickStart option will allow for bulk systems registration.

- Postman program (used for individual system registration) -
  [Postman Linux Registration](/docs/privilegesecurediscovery/requirements/technicalpreparation/postmanlinuxregistration.md)
- QuickStart script (used for bulk system registration) -
  [QuickStart Script](/docs/privilegesecurediscovery/administration/configuration/quickstartscript.md)

## JITA Request for Linux Systems

- Domain Account: This account will be “linked” to the local Linux account on the end point, and
  displayed in the Privilege Secure inventory.
- Local Linux Account: Local account that was added to the Linux system to allow JITA SSH access.

Linux JITA Session Behavior

- User requests JITA for a Linux system.
- If it is the first time a user is requesting access to Linux system, Privilege Secure creates a
  local account on the Linux machine, using AD credentials.

    - Example entry into /etc/passwd for user ‘s1_user’:
      `s1_user:x:1005:1005:PrivilegeSecure AD Bridged Account:/home/s1_user:/bin/sh`
    - User can then SSH to the linux box with just username (case sensitive), no domain required.

- Privilege Secure also create an entry for that account in the `/etc/sudoers/` providing sudo
  capabilities.
- Once the JITA session expires:

    - The entry created for the user in the `/etc/sudoers/` directory is removed, removing sudo
      capability.
    - The password set on the account is scrambled.
    - The AD account created remains in /etc/passwd.

## Protect Modes

Privilege Secure users should be using a provisioned domain account to get JITA access to the linux
system. Protect Modes apply to accounts that have been added locally to the /etc/sudoers file or
/etc/sudoers.d directory.

Always backup the original sudoers file before placing a system into a Protect mode.   Example of
command to use on the system to be protected:

sudo cp /etc/sudoers /etc/sudoers.orig

Protect Mode: JITA

- Permanent access could be granted by setting the account to persistent. This could be done for a
  service account that needs to have access to the system at all times.
- Privilege Secure recognizes newly added local accounts to the /etc/sudoers file or /etc/sudoers.d
  directory
- The accounts recognized are added to Privilege Secure’s inventory, with the policy persistent: No
  and on Host:No.
- The account is removed from the /etc/sudoers file or /etc/sudoers.d directory

Protect Mode: DENY

- The only different from Protect Mode: JITA is the discovered local account is not added
  toPrivilege Secure’s inventory. So these accounts can not be set to persistent.

## Under the Hood

3 files/locations that Privilege Secure focuses on with the associated permission

- /etc/sudoers.d directory- Read and Write
- /etc/passwd file- Read and Write
- /etc/sudoers file- Read and Write

What we are not doing yet is looking at what users are in the “sudo” group. The sudo group is
referenced to the “wheel” group in some flavors of Linux.

```
# Allow members of group sudo to execute any command
%sudo    ALL=(ALL:ALL) ALL

```

Privilege Secure’s visibility of whether an account exist for a Linux system is done via the
/etc/passwd file, this file doesn’t show/define permissions.

Privilege Secure reads the sudoers file, within the /etc directory, to check for user and group
privilege specifications.

During JITA sessions and expirations Privilege Secure will modify the /etc/sudoers file.
