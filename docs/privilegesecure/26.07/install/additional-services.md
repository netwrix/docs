---
title: "Install services on additional servers"
description: "Install the Action, Host Scan, Scheduler, Email, or SIEM service on another server, move the encryption keys, and register the service with the application server."
sidebar_position: 70
---

# Install services on additional servers

The application server runs the Action, Host Scan, Scheduler, Email, and SIEM services. You can also install each one on another server to run work from different locations in your organization. Each remote server is a service node. For host requirements, see [Additional service node and proxy server requirements](/docs/privilegesecure/26.07/requirements/service-nodes.md).

The procedure is the same for every service:

1. Install the service.
2. Copy the encryption keys from the application server.
3. Register the service with the application server.

## Before you begin

- Install and register the Proxy Service on the remote server first. See [Install a proxy service on another server](/docs/privilegesecure/26.07/install/remote-proxy.md).
- To install the Host Scan Service, install the Action Service on the same server first. The Host Scan Service depends on the Action Service worker.
- Set the antivirus exclusions on the remote server. See [Exclusions for Antivirus (AV) & Endpoint Software](/docs/kb/privilegesecure/installation-configuration-and-licensing/exclusions-for-antivirus-av-endpoint-software).
- Find the installer in the **Extras** folder of the product zip file. See [Installation package contents](/docs/privilegesecure/26.07/install/components.md).

{/* TODO verify: whether the Action Service installer also installs the Proxy Service. The 26.03 page said it did, but the 26.07 bundle for the Action Service chains only the .NET Hosting Bundle and the Action Service package. */}

| Service | Installer |
| --- | --- |
| Action | `NPS.ActionService.exe` |
| Host Scan | `NPS.HostScanService.exe` |
| Scheduler | `NPS.SchedulerService.exe` |
| Email | `NPS.EmailService.exe` |
| SIEM | `NPS.SiemService.exe` |

{/* TODO verify: the file names of the Host Scan, Email, and SIEM installers in the product zip. The 26.03 page named the Host Scan installer NPS.HostScanService.msi, but the 26.07 code builds it as a bundle with the same options as the other services. */}

## Install the service

1. Copy the installer to the remote server.
2. Run the installer as an administrator. The setup wizard opens. The installer adds the .NET 10 Hosting Bundle if the server doesn't have it.
3. To install to a different folder, click **Options**, enter the folder, and click **OK**.
4. Accept the license terms and click **Install**.
5. When the installation completes, click **Close**.

{/* TODO screenshot: a service setup wizard with the Options page. Use one service as the example. */}

## Copy the encryption keys

The remote service must use the same encryption keys as the application server.

1. On the application server, open a command prompt as an administrator and export the keys:

   ```
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe export -n keys.exp
   ```

2. Record the password that the command displays for the export file.

   :::warning
   The password protects the encryption keys while you copy them. Don't save it to digital media, and don't send it with the key file.
   :::

3. Copy `keys.exp` to `C:\Program Files\Stealthbits\PAM\KeyTools` on the remote server.
4. On the remote server, open a command prompt as an administrator and import the keys:

   ```
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe import -n keys.exp
   ```

5. Enter the password when prompted.
6. Delete `keys.exp` from both servers.

{/* TODO verify: that the KeyTools folder and SbPAM.RotateKey.exe exist on a remote service host. The code ships RotateKey only in the main NPS.exe bundle. */}

For more about key management, see [Encryption key management](/docs/privilegesecure/26.07/configuration/encryption-keys/encryption-keys.md).

## Register the service

1. On the remote server, open a command prompt as an administrator.
2. Change to the service folder. For example, for the Action Service:

   ```
   cd "C:\Program Files\Stealthbits\PAM\ActionService"
   ```

3. Register the service with the application server. Enter the password when prompted:

   ```
   ActionService.exe -register -u <domain>\<nps-admin> https://<nps-server>:6500
   ```

   - `-register` registers the service with the application server. If you omit the URL, the command prompts for it and offers `https://localhost:6500`.
   - `-u` is a Privilege Secure administrator in `domain\user` format.
   - The last value is the application server host name, IP address, FQDN, or URL. The default port is 6500.

4. If the application server doesn't have a certificate that the remote server trusts, add `-I`:

   ```
   ActionService.exe -register -u <domain>\<nps-admin> -I https://<nps-server>:6500
   ```

The command prompt shows whether registration succeeded.

{/* TODO verify: -register (26.03 docs) vs -Config (service config helper code) as the registration verb, and whether -u has a default. */}

{/* TODO verify: the service folder, executable name, and exact registration syntax for the Host Scan, Scheduler, Email, and SIEM services. The 26.03 pages used NPS.SchedulerService.exe in C:\Program Files\Stealthbits\PAM\NPS.SchedulerService and ran the Host Scan .msi as the registration command, which can't be correct. */}

## Verify the service

Open the Service Nodes page in the console and confirm the service node is online. See [Monitor service nodes](/docs/privilegesecure/26.07/admin/service-nodes/service-nodes.md).
