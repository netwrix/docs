---
title: "Action Service Install"
description: "Action Service Install"
sidebar_position: 20
---

# Action Service Install

The NPS Action Service is installed on the application server as part of Privilege Secure install.
It can also be installed on additional servers. This provides the option to run actions from
different locations within an organization.

The NPS Proxy Service installer is in the Extras folder of the ZIP file downloaded from the Netwrix
Customer portal. See the [Install Components & Methods](/docs/privilegesecure/25.12/install/components.md) topic for additional
information.

:::note
Before you begin, the NPS Proxy Service must be registered with a corresponding
application server on the server you will be installing the Action Service prior to installation.
The Proxy Service is installed as part of the Action Service installation package. See the
[Proxy Service Install](/docs/privilegesecure/25.12/install/servicesonadditional/proxyservice.md) topic for installation instructions.
:::


Follow the steps to install the NPS Action Service on another server.

**Step 1 –** Make sure that you have configured the Antivirus exclusions according to the following
Netwrix knowledge base article: [Exclusions for Antivirus (AV) & Endpoint Software](/docs/kb/privilegesecure/installation-configuration-and-licensing/exclusions-for-antivirus-av-endpoint-software)

**Step 2 –** Move the NPS.ActionService.exe installation package to the desktop of the remote
server.

**Step 3 –** Open the NPS.ActionService.exe and the Netwrix Privilege Secure Action Service Setup
wizard will open.

![licenseagreement](/images/privilegesecure/25.12/accessmanagement/install/licenseagreement_3.webp)

**Step 4 –** To install the Action Service in an alternate location, click **Options**.

![installlocation](/images/privilegesecure/25.12/accessmanagement/install/installlocation.webp)

**Step 5 –** Enter the destination folder for installation and click OK.

**Step 6 –** Read the End User License Agreement and check the I accept the terms in the License
Agreement checkbox.

**Step 7 –** Click Install to begin the installation. The setup wizard displays the installation
progress.

![installcomplete](/images/privilegesecure/25.12/accessmanagement/install/installcomplete.webp)

**Step 8 –** When the installation is complete, click Close to exit the installer.

The Privilege Secure Action Service is now installed on a remote server.

## Register the Remote Action Service with Privilege Secure

If the Action Service is installed on a remote machine, it must be configured to register with the
Privilege Secure server. This configuration is done by supplying the Privilege Secure server and
credentials in a command line utility.

Follow the steps to configure the key exchange.

**Step 1 –** On the application server, run **cmd** as Administrator.

**Step 2 –** Type the following commands to export the encryption keys for the secondary:


Encryption Key Export

```
cd C:\Program Files\Stealthbits\PAM\KeyTools
.\SbPAM.RotateKey.exe export -n keys.exp
```

**Step 3 –** Take note of the password for the export file.

:::warning
This temporary password protects the NPS-AM encryption keys during copying. Do not save
it to digital media or transmit it with the encryption key package.
:::


**Step 4 –** Copy the export file to "C:\Program Files\Stealthbits\PAM\KeyTools" on the secondary
server.

**Step 5 –** On the (Action/Scheduler/Siem) service server, run cmd as Administrator.

**Step 6 –** Type the following commands to import the encryption keys:


Encryption Key Import

```
cd C:\Program Files\Stealthbits\PAM\KeyTools
.\SbPAM.RotateKey.exe import -n keys.exp
```

**Step 7 –** Enter the password when prompted.

**Step 8 –** Delete the export file from both the primary and secondary servers.

The key exchange is now configured.

Follow the steps to configure the Action Service.

**Step 1 –** Open a command prompt as an administrator.

**Step 2 –** Change the directory path to the location of the Privilege Secure Action Service. The
default path is:

C:\Program Files\Stealthbits\PAM\ActionService\

**Step 3 –** Run the following command to automatically register the action service. Enter the Admin
password when prompted:

- The `[PrivilegeSecureServer]` parameter is the Host Name, IP, FQDN or URL
- The default `[Port]` parameter is 6500
- The [admin] should be an NPS administrator in "DOMAIN\username" format

ActionService.exe –register -u admin [PrivilegeSecureServer:Port]

- For installations without a trusted https certificate on the Privilege Secure server, the “-I”
  parameter must be added:

ActionService.exe –register -u admin -I [PrivilegeSecureServer:Port]

- The command prompt will show if the configuration was successful.

**Step 4 –** Exit the command prompt.

The remote Action Service is now registered with Privilege Secure.
