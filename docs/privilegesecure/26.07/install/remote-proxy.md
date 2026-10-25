---
title: "Install a proxy service on another server"
description: "Install the Proxy Service on a remote server and register it with the application server so the server can broker sessions across security zones."
sidebar_position: 80
---

# Install a proxy service on another server

The Netwrix Privilege Secure for Access Management (Privilege Secure) proxy brokers connections to managed systems between security zones. Users don't connect from their desktops to the managed systems, which avoids leaving credentials on desktops and avoids opening ports into secure networks. The application server includes a proxy. You can install the Proxy Service on another server to add a session proxy node, and you must install it on any server that runs another remote service. See [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md).

## Before you begin

- Find the `NPS.ProxyService.exe` installer in the **Extras** folder of the product zip file. See [Installation package contents](/docs/privilegesecure/26.07/install/components.md).
- Check the host requirements in [Additional service node and proxy server requirements](/docs/privilegesecure/26.07/requirements/service-nodes.md), and the ports in [Ports](/docs/privilegesecure/26.07/requirements/ports.md).
- Set the antivirus exclusions. See [Exclusions for Antivirus (AV) & Endpoint Software](/docs/kb/privilegesecure/installation-configuration-and-licensing/exclusions-for-antivirus-av-endpoint-software).
- Sign in to both servers as an administrator.

The examples use these placeholders. Replace them with your values.

| Placeholder | Meaning |
| --- | --- |
| `<nps-server>` | FQDN of the application server |
| `<nps-server-ip>` | IP address of the application server |
| `<proxy-server>` | FQDN of the remote proxy server |
| `<proxy-server-ip>` | IP address of the remote proxy server |
| `<proxy-install-dir>` | Folder where the Proxy Service is installed on the remote server |

## Install the Proxy Service

1. Copy `NPS.ProxyService.exe` to the remote server.
2. Right-click the installer and select **Run as administrator**. The setup wizard opens.
3. Accept the license terms.
4. To change the install location, click **Options**, click **Browse**, select a folder, and click **OK**.
5. Click **Install**.
6. When the installation completes, click **Close**.

The installer places the Proxy Service in the `ProxyService` folder under `C:\Program Files\Stealthbits\PAM`, so `sbpam-proxy.exe` is in `C:\Program Files\Stealthbits\PAM\ProxyService`. The installer adds Windows Firewall rules for ports 4422, 4489, and 6520 to 6525.

{/* TODO screenshot: Proxy Service setup wizard Options page. */}

Open `services.msc` and confirm the Proxy Service is running and set to start automatically.

## Register the remote Proxy Service

Registration has three parts. You get a hash from the application server, describe each server in an `sbpam_node.json` file, and register the remote server.

### Prepare the application server

Run these commands as administrator on the application server.

1. Create the file `C:\ProgramData\Stealthbits\PAM\ProxyService\sbpam_node.json` with the names and addresses the proxy advertises:

   ```json
   {
     "advertise": ["<nps-server>", "<nps-server-ip>"],
     "tag": []
   }
   ```

2. If the certificate file already exists, delete it so Privilege Secure regenerates it with the new values:

   ```
   del C:\ProgramData\Stealthbits\PAM\tls\certs\sbpam-node.crt
   ```

3. Get the certificate authority hash:

   ```
   "C:\Program Files\Stealthbits\PAM\ProxyService\sbpam-proxy.exe" register ca-hash
   ```

4. Copy the hash that the command returns. You need it on the remote server.

### Register the remote server

Run these commands as administrator on the remote proxy server.

1. Create `C:\ProgramData\Stealthbits\PAM\ProxyService\sbpam_node.json` with the remote server's values:

   ```json
   {
     "advertise": ["<proxy-server>", "<proxy-server-ip>"],
     "tag": []
   }
   ```

2. If `sbpam-node.crt` exists at `C:\ProgramData\Stealthbits\PAM\tls\certs`, delete it.

3. In a command prompt that you opened as an administrator, register the server:

   ```
   "<proxy-install-dir>\sbpam-proxy.exe" register -s <nps-server-ip> -u <domain>\<nps-admin> -H <ca-hash>
   ```

   For example:

   ```
   "C:\Program Files\Stealthbits\PAM\ProxyService\sbpam-proxy.exe" register -s 203.0.113.10 -u example\nps-admin -H <ca-hash>
   ```

   - `-s` is the application server address.
   - `-u` is a Privilege Secure administrator in `domain\user` format.
   - `-H` is the hash from the application server.

   If the `-s` address has no port, the command connects on port 6520.

{/* TODO screenshot: the proxy registration output. Use placeholders for the server, account, and hash. */}

The Proxy Service is now registered. Confirm it appears on the Service Nodes page of the console.

{/* TODO verify: whether Netwrix supports the token-based join for customers. The executable is `sbpam-proxy`, and the proxy code accepts a join token through the `--token` option of `node join` and the `--join-token` option of `register`, but only a Netwrix support statement settles whether to document it. */}

## Allow legacy SSH algorithms

To connect to older SSH devices, such as legacy Cisco devices, see [Configure SSH algorithms](/docs/privilegesecure/26.07/configuration/ssh-algorithms.md).
