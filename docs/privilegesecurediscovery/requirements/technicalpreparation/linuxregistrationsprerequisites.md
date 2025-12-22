---
title: "Linux Registrations Prerequisites"
description: "Linux Registrations Prerequisites"
sidebar_position: 110
---

# Linux Registrations Prerequisites

Linux Registrations Prerequisites

# Linux Registrations Prerequisites

**CAUTION:** Always back up the /etc/sudoers file prior to scanning or enabling Scan Mode on any
system in NPS-D. Scanning, regardless of Protect Mode setting, a Liunx system will result in a
flattening of the /etc/sudoers file. This will pull in all permissions from other sources (e.g:
files locate in /etc/sudoers.d) into the /etc/sudoers file, and disable sudo permissions being
acquired from those sources.

In order for Linux machines to register successfully in Privilege Secure, see the following
requirements:

- SSH connectivity, machine accessible via DNS (DNS resolution is successful via a ping to the FQDN
  which resolves to an IP address).

    - If SSH access is being limited by users or groups, add allowance for the Privilege Secure
      service account, default "secureone", to connect via SSH.

- Create a temporary user account with admin (sudo) privileges,

    - This account needs to be in the /etc/sudoers file  on the Linux system(s) being registered.
    - If requiring a password for sudo command, make sure sudo prompts for the user password, not
      the root password.
    - Example, for SUSE Linux Server 12, comment out these lines with `sudo visudo`:

        - Defaults targetpw # ask for the password of the target user i.e. root  
          ALL ALL=(ALL) ALL # WARNING! Only use this together with 'Defaults targetpw'!

    - This account can be removed from the sudoers file, or removed from the system after
      registration.

- If Python 2 is installed by default as part of the linux OS, please ensure it is version 2.7.1+

    - [https://www.python.org/download/releases/2.7/](https://www.python.org/download/releases/2.7/)
    - This is typically installed by default.  If not, as with RHEL 8.1+, python 2.7.1+ should be
      installed.

- If Python 3 family is installed, version 3.5 or greater is recommended.

    - [https://www.python.org/downloads/release/python-368/](https://www.python.org/downloads/release/python-368/)
    - Ensure /usr/bin/python3 is linked to the python3.5 interpreter.
    - If python 3.5 is not readily available as a package install for a version of linux, and it has
      a default install of python 3.4, that **_might_** work with if python 2.7.1+ is also installed
      by default.  If python 3.5 is required, registration will present an error indicating such.

Additional Python version downloads can be accessed here:
[https://www.python.org/downloads/](https://www.python.org/downloads/)

Of these 3 items, the only one which tends to cause confusion is the requirement that Python 2.7 be
installed, due to Python 3 being more widely utilized, particularly as newer Linux operating
systems/kernels either a) do not come with Python pre-installed, or b) DO come with Python 3
installed, but not 2.7.  When this happens, certain path variables can cause the Ansible backend to
fail, because it is looking for the 'python' variable, which may be assigned to Python3 by default.

One way to resolve this issue is to create a symbolic link to the Python 2.7 binaries - though
utilize this with care as it may not be the best solution for a specific environment.  Check the
current version of python with command below which should return the output/version:

```
secureone@ip-10-100-11-192:~$ python -V
```

To create a symbolic link directly to the Python 2.7 binaries, use the following command on the
Linux endpoint:

```
sudo ln --symbolic /usr/bin/python2.7 /usr/bin/python
```

**NOTE:** Linux passwords and usernames are case sensitive. Any of the credentials used whether
through AD light bridging or locally on the Linux endpoint will need to match exactly the case
sensitivity that they were created as.

Below are some specific distributions and pre-check items have be confirmed so far. Note that there
are more distributions of Linux supported by Privilege Secure. The full list is here
[Supported OS's](https://remediant.zendesk.com/hc/en-us/articles/360021006414)

| Distribution of Linux | Pre-checks                                                                                                                                                                                                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Debian                | - v7+ - Default Python installed (2.7+ or 3.5+)                                                                                                                                                                                                                                                                                         |
| RHEL CentOS           | - SELinux disabled - v7 and below: Default Python installed (2.7+ or 3.5+) - v8+: Install Python 2.7+ or 3.5+ Installed - [https://www.python.org/download/releases/2.7/](https://www.python.org/download/releases/2.7/) - [https://www.python.org/downloads/release/python-368/](https://www.python.org/downloads/release/python-368/) |
| SUSE                  | - Default Python installed (2.7+ or 3.5+) - sudo commands should request registration user password, not root.  Or provide registration account no password sudo for all commands. - /tmp directory exists with open permissions                                                                                                        |
| Ubuntu                | - Default Python installed (2.7+ or 3.5+) - SSH installed on the endpoint - For Ubuntu 22.04+, add the following line:`   PubkeyAcceptedKeyTypes +ssh-rsa   ` - To the bottom of:  /etc/ssh/sshd_config - Restart sshd: `sudo systemctl restart sshd`                                                                                   |

Guide on registering linux system with Postman (using API)

- [Postman Linux Registration](/docs/privilegesecurediscovery/requirements/technicalpreparation/postmanlinuxregistration.md)

Guide on registering linux system with QuickStart

- [Linux Simplified - 2.18+](/docs/privilegesecurediscovery/administration/configuration/linuxsimplified2.18+.md)
