---
title: "Action Service Install"
description: "Install the NPS Action Service on another server and register it with the Privilege Secure server."
keywords:
  - NPS Action Service
  - NPS.ActionService.exe
  - key exchange
  - encryption keys
  - register action service
  - remote server
sidebar_position: 20
---

# Action Service Install

The NPS Action Service is installed on the application server as part of Privilege Secure install.
It can also be installed on additional servers. This provides the option to run actions from
different locations within an organization.

The NPS Proxy Service installer is in the Extras folder of the ZIP file downloaded from the Netwrix
Customer portal. See the [Install Components & Methods](/docs/privilegesecure/25.12/install/components.md) topic for additional
information.

:::note
Before you begin, the NPS Proxy Service must be registered with a corresponding
application server on the server you are installing the Action Service before installation.
The Proxy Service is installed as part of the Action Service installation package. See the
[Proxy Service Install](/docs/privilegesecure/25.12/install/servicesonadditional/proxyservice.md) topic for installation instructions.
:::

To install the NPS Action Service on another server.

1. ensure that you have configured the Antivirus exclusions according to the following
   Netwrix knowledge base article: [Exclusions for Antivirus (AV) & Endpoint Software](/docs/kb/privilegesecure/installation-configuration-and-licensing/exclusions-for-antivirus-av-endpoint-software)
2. Move the `NPS.ActionService.exe` installation package to the desktop of the remote
   server.
3. Open the `NPS.ActionService.exe` and the Netwrix Privilege Secure Action Service Setup
   wizard opens.

   ![Action Service Setup wizard on the license agreement page](/images/privilegesecure/25.12/accessmanagement/install/licenseagreement_3.webp)

4. To install the Action Service in an alternate location, click **Options**.

   ![Action Service Setup wizard install location options](/images/privilegesecure/25.12/accessmanagement/install/installlocation.webp)

5. Enter the destination folder for installation and click **OK**.
6. Read the End User License Agreement and accept the license terms.
7. Click **Install** to begin the installation. The setup wizard displays the installation
   progress.

   ![Action Service Setup wizard installation status](/images/privilegesecure/25.12/accessmanagement/install/installcomplete.webp)

8. When the installation is complete, click **Close** to exit the installer.

The Privilege Secure Action Service is now installed on a remote server.

## Register the remote Action Service with Privilege Secure

If the Action Service is installed on a remote machine, it must be configured to register with the
Privilege Secure server. This configuration is done by supplying the Privilege Secure server and
credentials in a command line utility.

To configure the key exchange.

1. On the application server, run **cmd** as Administrator.
2. Enter the following commands to export the encryption keys for the secondary:

   Encryption Key Export

   ```powershell
   cd C:\Program Files\Stealthbits\PAM\KeyTools
   .\SbPAM.RotateKey.exe export -n keys.exp
   ```

3. Take note of the password for the export file.

   :::warning
   This temporary password protects the Netwrix Privilege Secure for Access Management (NPS-AM) encryption keys during copying. don't save
   it to digital media or transmit it with the encryption key package.
   :::

4. Copy the export file to "`C:\Program Files\Stealthbits\PAM\KeyTools`" on the secondary
   server.
5. On the (Action/Scheduler/Siem) service server, run **cmd** as Administrator.
6. Enter the following commands to import the encryption keys:

   Encryption Key Import

   ```powershell
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

   `C:\Program Files\Stealthbits\PAM\ActionService\`

3. Run the following command to automatically register the action service. Enter the Admin
   password when prompted:

   - The `[PrivilegeSecureServer]` parameter is the Host Name, IP, FQDN, or URL
   - The default `[Port]` parameter is 6500
   - The [admin] should be an NPS administrator in "DOMAIN\username" format

   `ActionService.exe –register -u admin [PrivilegeSecureServer:Port]`

   - For installations without a trusted https certificate on the Privilege Secure server, the `-I`
     parameter must be added:

     `ActionService.exe –register -u admin -I [PrivilegeSecureServer:Port]`

   - The command prompt shows if the configuration was successful.

4. Exit the command prompt.

The remote Action Service is now registered with Privilege Secure.
