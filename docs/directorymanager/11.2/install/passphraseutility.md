---
title: "Passphrase Utility"
description: "Export the passphrase from the primary Directory Manager server and import it on secondary servers in a multi-instance deployment."
sidebar_position: 45
---

# Passphrase Utility

In a multi-instance deployment, all Directory Manager servers must use the same passphrase. Use the
passphrase utility, `directory-manager-passphrase-utility.exe`, to export the passphrase from the
primary server and import it on each secondary server.

**Download**

- [Download the Passphrase Utility](https://releases.netwrix.com/resources/directory-manager/directory-manager-passphrase-utility-1.0.zip)

## Export the Passphrase

Step 1 – On the primary Directory Manager server, open a command prompt as an administrator.

Step 2 – Run the following command:

```powershell
.\directory-manager-passphrase-utility.exe export -o "<path_to_file>"
```

- `-o` – The path of the file to create.

The utility creates the file and displays a password. Save this password, because you need it to
import the file.

Step 3 – Copy the file to each secondary server.

## Import the Passphrase

Step 1 – On the secondary Directory Manager server, open a command prompt as an administrator.

Step 2 – Run the following command:

```powershell
.\directory-manager-passphrase-utility.exe import -i "<path_to_file>" -p "<password>"
```

- `-i` – The path of the exported file.
- `-p` – The password that the export displayed.

Repeat these steps on every secondary server.

For the other secrets that all servers in a multi-instance deployment share, see the
[Signing Key Utility](/docs/directorymanager/11.2/admincenter/service/securityservice/signkeyutility.md)
and [Security Utility](/docs/directorymanager/11.2/install/securityutility.md) topics.
