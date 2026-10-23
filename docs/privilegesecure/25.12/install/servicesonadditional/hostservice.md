---
title: "Host Scan Service Install"
description: "Install the NPS Host Scan Service on another server and register it with the Privilege Secure server."
sidebar_position: 20
---

# Host Scan Service Install

The NPS Host Scan Service is installed on the application server as part of Privilege Secure install.
It can also be installed on additional servers. This provides the option to run host scans from
different locations within an organization.

The NPS Host Scan Service installer is in the Extras folder of the ZIP file downloaded from the Netwrix
Customer portal. See the [Install Components & Methods](/docs/privilegesecure/25.12/install/components.md) topic for additional
information.

:::note
Before you begin, the NPS Proxy Service must be registered with a corresponding
application server on the server you are installing the Host Scan Service before installation. See the
[Proxy Service Install](/docs/privilegesecure/25.12/install/servicesonadditional/proxyservice.md) topic for installation instructions.

Additionally, you must install the Action Service on the same server that you plan to add the Host Scan service. This is because the Host Scan service relies on the Action Service Worker. See [Action Service Install](/docs/privilegesecure/25.12/install/servicesonadditional/actionservice.md)
:::

To install the NPS Host Scan Service on another server.

1. ensure that you have configured the Antivirus exclusions according to the following
   Netwrix knowledge base article: [Exclusions for Antivirus (AV) & Endpoint Software](/docs/kb/privilegesecure/installation-configuration-and-licensing/exclusions-for-antivirus-av-endpoint-software)
2. Move the `NPS.HostScanService.msi` installation package to the desktop of the remote
   server.
3. Open the `NPS.HostScanService.msi` and the Netwrix Privilege Secure Host Scan Service Setup
   wizard opens. Click **Next**.
4. Read the End User License Agreement and accept the license terms.

   ![Host Scan Service Setup wizard on the license agreement page](/images/privilegesecure/25.12/accessmanagement/install/licenseagreement_scan.png)

5. Enter the destination folder for installation and click **OK**. (Default usually easiest)

   ![Host Scan Service Setup wizard destination folder page](/images/privilegesecure/25.12/accessmanagement/install/installlocation_scan.png)

6. Click **Install** to begin the installation. The setup wizard displays the installation
   progress.

   ![Host Scan Service Setup wizard showing installation progress](/images/privilegesecure/25.12/accessmanagement/install/installbegin_scan.png)

7. When the installation is complete, click **Close** to exit the installer.

The Privilege Secure Host Scan Service is now installed on a remote server.

## Register the remote Host Scan Service with Privilege Secure

If the Host Scan Service is installed on a remote machine, it must be configured to register with the
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
4. Copy the export file to "`C:\Program Files\Stealthbits\PAM\KeyTools`" on the remote
   server.
5. On the remote server, run **cmd** as Administrator.
6. Enter the following commands to import the encryption keys:

   Encryption Key Import

   ```powershell
   cd C:\Program Files\Stealthbits\PAM\KeyTools
   .\SbPAM.RotateKey.exe import -n keys.exp
   ```

7. Enter the password you got from the exporting the keys in the application server when prompted.
8. Delete the export file from both the primary and secondary servers.

   :::warning
   Delete the "keys.exp" file from both servers and the temporary password wherever you may have saved it.
   :::

The key exchange is now configured.

To configure the Host Scan Service.

1. Open a command prompt as an administrator.
2. Change the directory path to the location of the Privilege Secure Host Scan Service. The
   default path is:

   `C:\Program Files\Stealthbits\PAM\HostScanService\`

3. Run the following command to automatically register the achost scan service. Enter the Admin
   password when prompted:

   - The `[PrivilegeSecureServer]` parameter is the Host Name, IP, FQDN, or URL
   - The default `[Port]` parameter is 6500
   - The [admin] should be an NPS administrator in "DOMAIN\username" format

   `NPS.HostScanService.msi –register -u admin [PrivilegeSecureServer:Port]`

   - For installations without a trusted https certificate on the Privilege Secure server, the `-I`
     parameter must be added:

     `NPS.HostScanService.msi –register -u admin -I [PrivilegeSecureServer:Port]`

   - The command prompt shows if the configuration was successful.

4. Exit the command prompt.

The remote Host Scan Service is now registered with Privilege Secure.
