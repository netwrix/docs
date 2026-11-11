---
title: "Scheduler Service Install"
description: "Install the Scheduler Service on a remote server, then exchange encryption keys and register it with the Privilege Secure server."
keywords:
  - Scheduler Service
  - NPS.SchedulerService.exe
  - register scheduler service
  - key exchange
  - encryption keys
  - remote server
sidebar_position: 30
---

# Scheduler Service Install

The Scheduler Service is installed with Privilege Secure and can also be installed remotely on other
servers. This provides the option to run scheduled tasks defined in the console from different
locations within an organization. The Scheduler Service installer is in the zip file with the
Privilege Secure Console installer. It is also available for download from the Stealthbits website
if required.

:::note
Before you begin, the Proxy Service must be installed on any server running services for
Privilege Secure. See the [Proxy Service Install](/docs/privilegesecure/25.12/install/servicesonadditional/proxyservice.md) topic for installation
instructions.
:::

To install the Scheduler Service.

1. Ensure that you have configured the Antivirus exclusions according to the following
   Netwrix knowledge base article:
   [Exclusions for Antivirus (AV) & Endpoint Software](/docs/kb/privilegesecure/installation-configuration-and-licensing/exclusions-for-antivirus-av-endpoint-software)
2. Move the `NPS.SchedulerService.exe` installation package to the desktop of the remote
   server.
3. Open the `NPS.SchedulerService.exe` and the Privilege Secure Scheduler Service Setup
   wizard opens.

   ![Scheduler Service Setup wizard on the license agreement page](/images/privilegesecure/25.12/accessmanagement/install/licenseagreement_4.webp)

4. To install the Scheduler Service in an alternate location, click **Options**.

   ![Scheduler Service Setup wizard Options page for the installation folder](/images/privilegesecure/25.12/accessmanagement/install/scheduleoptions.webp)

5. Enter the destination folder for installation and click **OK**.
6. Read the End User License Agreement and accept the license terms.
7. Click **Install** to begin the installation. The setup wizard displays the installation
   progress.

   ![Scheduler Service Setup wizard showing the installation progress](/images/privilegesecure/25.12/accessmanagement/install/installcompleted.webp)

8. When the installation is complete, click **Close** to exit the installer.

The Privilege Secure Scheduler Service is now installed on a remote server.

## Register the remote Scheduler Service with Privilege Secure

If the Scheduler Service is installed on a remote machine, it must be configured to register with
the Privilege Secure server. This configuration is done by supplying the Privilege Secure server and
credentials in a command line utility. Both the key exchange and action service need to be
configured.

To configure the key exchange.

1. On the application server, run **cmd** as Administrator.
2. Enter the following commands to export the encryption keys for the secondary:

   Encryption Key Export

   ```text
   cd C:\Program Files\Stealthbits\PAM\KeyTools
   .\SbPAM.RotateKey.exe export -n keys.exp
   ```

3. Take note of the password for the export file.

   :::warning
   This temporary password protects the Netwrix Privilege Secure for Access Management (NPS-AM) encryption keys during copying. Don't save
   it to digital media or transmit it with the encryption key package.
   :::

4. Copy the export file to "C:\Program Files\Stealthbits\PAM\KeyTools" on the secondary
   server.
5. On the (Action/Scheduler/Siem) service server, run **cmd** as Administrator.
6. Enter the following commands to import the encryption keys:

   Encryption Key Import

   ```text
   cd C:\Program Files\Stealthbits\PAM\KeyTools
   .\SbPAM.RotateKey.exe import -n keys.exp
   ```

7. Enter the password when prompted.
8. Delete the export file from both the primary and secondary servers.

The key exchange is now configured.

To configure the Action Service.

1. Open a command prompt as an administrator.
2. Change the directory path to the location of the Privilege Secure Action Service. The
   default path is:

   `C:\Program Files\Stealthbits\PAM\NPS.SchedulerService\`

3. Run the following command to automatically register the scheduler service. Enter the
   Admin password when prompted:

   - The `[Privilege Secure]` parameter is the Host Name, IP, FQDN, or URL
   - The default `[Port]` parameter is 6500

   `NPS.SchedulerService.exe –register -u admin [PrivilegeSecureServer:Port]`

   - For installations without a trusted https certificate on the Privilege Secure server, the `-I`
     parameter must be added:
     - `NPS.SchedulerService.exe –register -u admin -I [PrivilegeSecureServer:Port]`
   - The command prompt shows if the configuration was successful.

4. Exit the command prompt.

The remote Scheduler Service is now registered with Privilege Secure.
