---
title: "Install the gateway and guacd"
description: "Install the Remote Access Gateway inside your network, set up guacd in Docker under WSL, and connect the gateway to Privilege Secure."
sidebar_position: 10
---

# Install the gateway and guacd

The gateway runs inside your network. It is an Internet Information Services (IIS) site that connects the portal to Netwrix Privilege Secure for Access Management (Privilege Secure) and to the Apache Guacamole daemon (guacd). guacd runs as a Docker container in Windows Subsystem for Linux (WSL) on the same server.

Complete the steps in order. Run `Configure-Gateway.ps1` only after guacd is running.

## Before you begin

- Check the server against [Remote Access Gateway requirements](/docs/privilegesecure/26.07/remote-access-gateway/requirements.md), including nested virtualization if the server is a virtual machine.
- Get the Remote Access Gateway package. It is a separate download from the main Privilege Secure package and contains `NPS.RagGateway.exe` and `NPS.RagPortal.exe`.

{/* TODO verify: where customers download the 26.07.3 Remote Access Gateway package. The 26.07.1 release notes name privilegesecure-accessmanagement-rag-26.07.1.zip; the 26.07.3 notes have no link. */}

- Sign in to the gateway server as a local administrator and run PowerShell as an administrator.

The examples use these placeholders. Replace them with your values.

| Placeholder | Meaning |
| --- | --- |
| `<nps-server>` | Fully qualified domain name (FQDN) of the Privilege Secure application server |
| `<guacd-host>` | Address of the WSL instance that runs guacd, as the Windows host sees it |

## Run the gateway installer

1. Copy `NPS.RagGateway.exe` to the gateway server.
2. Right-click the installer and select **Run as administrator**. The setup wizard opens.
3. Select **I agree to the license terms and conditions** and click **Install**.

   {/* TODO verify: that the gateway installer wizard uses the same license label as the portal installer. */}
4. When the page shows "Installation Successfully Completed", click **Close**.

{/* TODO screenshot: the gateway installer license page and the completion page. */}

The installer creates the IIS site **NPS Gateway Web Service**, which listens on HTTPS port 6550. The gateway isn't a Windows service, so it doesn't appear in `services.msc`. To confirm the binding, run:

```powershell
Get-WebBinding -Name "NPS Gateway Web Service"
```

The output lists an `https` binding on `*:6550`.

## Enable systemd in WSL

1. Run Windows Update on the server before you install WSL. If the server has no WSL distribution, run `wsl --install` and restart the server if prompted. WSL installs the default Ubuntu distribution.
2. Open the Ubuntu distribution and edit `/etc/wsl.conf` as root. Add these lines:

   ```ini
   [boot]
   systemd=true
   ```

3. In PowerShell, stop WSL so the change takes effect:

   ```powershell
   wsl --shutdown
   ```

4. Open the Ubuntu distribution again.

## Install Docker and start guacd

The gateway package includes `install-docker.sh`. It installs Docker, pulls `guacamole/guacd:1.6.0`, and starts the `guacd` container.

1. In the Ubuntu distribution, run the script as root:

   ```bash
   sudo bash "/mnt/c/Program Files/Stealthbits/PAM/NPS.RagGateway/guacd/install-docker.sh"
   ```

   {/* TODO verify: whether the script needs a line-ending conversion (dos2unix) before it runs. The lab converted it first. */}

2. List the running containers:

   ```bash
   sudo docker ps
   ```

   The output lists a container named `guacd` that publishes port 4822.

3. Find the address of the WSL instance. This is the `<guacd-host>` value for the next section.

   ```powershell
   wsl hostname -I
   ```

   Use the first address in the output.

4. In PowerShell, confirm that guacd listens on port 4822:

   ```powershell
   Test-NetConnection <guacd-host> -Port 4822
   ```

   `TcpTestSucceeded` must be `True` before you continue.

:::warning
On some Ubuntu releases, `install-docker.sh` installs a Docker engine that can't start containers, and `docker run` fails with the error `cgroups: cgroup mountpoint does not exist`. If you see this error, contact Netwrix Support.
:::

{/* TODO verify: Product to confirm a supported Docker install (PSAM-1404). Don't publish a workaround as a standard step until then. Candidate workaround from the lab notes: run `sudo apt-get remove moby-engine moby-cli moby-buildx`, run `sudo apt-get install docker.io`, remove an existing container with `sudo docker rm -f guacd`, then start guacd with `sudo docker run --name guacd --restart unless-stopped -v <config-folder>:/etc/guacamole -p 4822:4822/tcp -d guacamole/guacd:1.6.0`, where <config-folder> is the WSL path of the gateway data folder, by default /mnt/c/ProgramData/Stealthbits/PAM/RagGateway. */}

## Configure the gateway

Run the configuration script after guacd is reachable. The script generates the guacd certificate if one doesn't exist, writes the gateway settings, and writes `guacd.conf`, which turns on TLS in guacd.

:::warning
If guacd isn't reachable on port 4822, `Configure-Gateway.ps1` prints one error and exits without writing `appsettings.json` or `guacd.conf`. The gateway then runs on its default settings and sessions fail. Confirm the `Test-NetConnection` check passes before you run the script.
:::

1. In PowerShell, go to the gateway installation folder:

   ```powershell
   cd "C:\Program Files\Stealthbits\PAM\NPS.RagGateway"
   ```

2. Run the script:

   ```powershell
   .\Configure-Gateway.ps1 -NPSGuacdHost <guacd-host> -NPSHost https://<nps-server>:6500
   ```

   If `C:\ProgramData\Stealthbits\PAM\RagGateway\guacd.thumbprint` doesn't exist, the script creates `guacd.key`, `guacd.crt`, `guacd.pfx`, and `guacd.thumbprint`. It then connects to Privilege Secure, checks that port 4822 is reachable, and writes `appsettings.json` and `guacd.conf` in the same folder.

3. In the Ubuntu distribution, restart guacd so it loads the new certificate:

   ```bash
   sudo docker restart guacd
   sudo docker logs guacd
   ```

   The log includes the line "Communication will require SSL/TLS".

Ensure that the gateway server trusts the certificate on `https://<nps-server>:6500`. See [Skip certificate validation for Privilege Secure](/docs/privilegesecure/26.07/remote-access-gateway/configuration/gateway-settings.md#skip-certificate-validation-for-privilege-secure).

:::note
The script stores `<guacd-host>` in the `Guacd.Hostname` setting. The address of a WSL instance can change after a restart.
:::

{/* TODO verify: whether the WSL address in Guacd.Hostname changes after a restart, and what to do if it does. */}

## Start WSL automatically

guacd stops when WSL stops, and sessions fail until WSL runs again. The gateway package includes `Setup-WslTask.ps1` to register a scheduled task that starts WSL when the server starts. The script registers the scheduled task "Start Gaucd on WSL".

1. Sign in as the Windows user who installed WSL. Each user has a separate WSL environment.
2. Run the script from the gateway installation folder:

   ```powershell
   .\guacd\Setup-WslTask.ps1
   ```

3. When the credential dialog opens, enter the credentials of the account that runs the task. The script has no unattended mode.

{/* TODO verify: the supported way to keep WSL running after a restart. SME review is pending, so confirm that Setup-WslTask.ps1 keeps WSL and guacd running after a reboot before publishing this section as final. */}

## Verify the installation

The gateway writes `PAM-RagGateway*.log` to `C:\ProgramData\Stealthbits\PAM\Log`. The file stays empty until the gateway receives its first request.

Install the portal next. See [Install the portal](/docs/privilegesecure/26.07/remote-access-gateway/install/install-portal.md). To fix problems, see [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md).
