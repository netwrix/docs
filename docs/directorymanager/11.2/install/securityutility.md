---
title: "Directory Manager Security Utility"
description: "Restrict IP access to Directory Manager services, generate a secure service password, and transfer the password and passphrase between servers."
keywords:
  - directory manager security utility
  - restrict ip addresses
  - iis ip security rule
  - secure password generation
  - password transfer utility
sidebar_position: 40
---

# Directory Manager Security Utility

Use the NDM11-ADV-2025-014 utility to do the following:

- Restrict the IP addresses that can access Directory Manager services.
- Generate and encrypt the password for the `GROUPID` user account, which is a hard-coded account hidden from end users. The Security service uses this account to authenticate with the Replication service, Email service, and Scheduler service.

**Downloads**

- [Download NDM11-ADV-2025-014-Utility](https://releases.netwrix.com/products/groupid/11.1/NDM11-ADV-2025-014-Utility.zip)
- [Download GroupIDPasswordTransferUtility](https://releases.netwrix.com/products/groupid/11.1/GroupIDPasswordTransferUtility.zip)
- [Download the Passphrase Utility](https://releases.netwrix.com/resources/directory-manager/directory-manager-passphrase-utility-1.0.zip)

## Restrict IP addresses

The NDM11-ADV-2025-014 utility adds an IIS IP security rule to prevent remote access to internal Directory Manager services. The utility does the following:

- Defines 127.0.0.1, ::1, and the host's primary public address as an IIS IP security rule.
- Detects whether DHCP provides the primary public address and warns that dynamically assigned addresses may cause operational problems. Use a DHCP reservation or a statically configured IP address for the Directory Manager server.
- Supports adding addresses for remote Directory Manager servers.
- Applies the IP rule to the following services and virtual directories:

  - `GroupIDDataService`
  - `GroupIDEmailService`
  - `GroupIDReplicationService`
  - `GroupIDSchedulerService`

To restrict Directory Manager service access to specific IP addresses:

1. On the Directory Manager server, run the `NDM11-ADV-2025-014-Utility.exe` utility from the command line as an administrator. The utility provides the following options:

   - `AddIpSecurity` — Enables the IIS IP Security feature on the Directory Manager server
   - `GenerateSecurePassword` — Generates a secure password for the `GROUPID` user account
   - `--help` — Displays details about a specific command
   - `version` — Displays the NDM11-ADV-2025-014-Utility version

2. Run the `NDM11-ADV-2025-014-Utility.exe AddIpSecurity` cmdlet. The cmdlet enables the IIS IP Security feature in Directory Manager and asks whether any machine other than the local one accesses `GroupIDDataService`. If one does, enter the IP address of that machine and press Enter.

   For multiple machines, separate the IP addresses with commas and no spaces.

   ![Command prompt showing the AddIpSecurity prompt for additional IP addresses](/images/directorymanager/11.2/install/iprestrict.webp)

   :::info
   Use a static IP address for the Directory Manager server and for the additional IP addresses that you specify here for the IP security rules.
   :::

3. After successful configuration, the utility displays the following message.

   ![Command prompt showing the IP security configuration success message](/images/directorymanager/11.2/install/success.webp)

If you have a Directory Manager multi-instance deployment, run the previous steps on each Directory Manager server in your environment.

:::note
If you deploy a new Directory Manager server or instance, add the IP address of the new server to the allowed list of the primary server's IP security rule. Run the NDM11-ADV-2025-014 utility on the primary server to add the additional IP. Do this before the new server connects to the Data service on the primary server (the new server needs this connection during configuration). After you configure the new server, you can remove its IP address from the primary server's allowed list.
:::

## Generate a secure password

To generate and encrypt the password for the `GROUPID` user account:

1. On the Directory Manager server, run the `NDM11-ADV-2025-014-Utility.exe` utility from the command line as an administrator.

2. Run the `NDM11-ADV-2025-014-Utility.exe GenerateSecurePassword` cmdlet.

3. Provide the database configurations in the following cmdlet according to your environment:

   `NDM11-ADV-2025-014-Utility.exe GenerateSecurePassword -s "SQLSERVER" -i -u "sa" -d "NetwrixGroupIDDatabase"`

4. Enter the database connection password when the utility prompts for it. The utility then updates the password for the `GROUPID` user account with the generated password.

   ![Command prompt showing the password generation and update message](/images/directorymanager/11.2/install/passwordgeneration.webp)

## Export/Import the new password

If you have multiple Directory Manager servers or distributed portals, you must also run the `GroupIDPasswordTransferUtility.exe` utility to securely transfer the password to the distributed Directory Manager systems. When done, restart IIS on those systems.

:::note
You also use the `GroupIDPasswordTransferUtility.exe` utility to copy the `GROUPID` account password to a new server when you set up a multi-instance deployment. In that case, you don't generate a new password. Skip the Generate a secure password steps, which apply only to upgrades from GroupID 10 SR2 or earlier Directory Manager 11 versions, and start with the following steps on the primary server.
:::

To export the generated password from the primary Directory Manager server to a secondary server or instance:

1. On the Directory Manager server, run the `GroupIDPasswordTransferUtility.exe` utility from the command line as an administrator.

2. Run the `GroupIDPasswordTransferUtility.exe export -o "directory\filename"` cmdlet to export the encrypted password from the primary server.

3. Copy the encrypted password that the command displays in the command prompt.

4. Copy the file created at the directory path that you specified in the cmdlet and place it on another instance of Directory Manager.

5. To import the encrypted password, run the following cmdlet on the instance where you placed the file.

   `GroupIDPasswordTransferUtility.exe import -i "path to the file" -p "encrypted password copied in step 3"`

6. Restart IIS on this server.

Repeat steps 3-6 on all Directory Manager servers to eliminate the hard-coded password for the `GROUPID` user account on all servers.

## Delete the GroupIDSSUser account

You must delete the `GroupIDSSUser` account from each Directory Manager server. Delete the account in the Computer Management console.

![Computer Management console showing the GroupIDSSUser account to delete](/images/directorymanager/11.2/install/computermanagement.webp)

## Export/Import the passphrase

If you have multiple Directory Manager servers, all of them must use the same passphrase. To export the passphrase from the primary server and import it on the secondary servers, see the [Directory Manager Passphrase Utility](/docs/directorymanager/11.2/install/passphraseutility.md) topic.
