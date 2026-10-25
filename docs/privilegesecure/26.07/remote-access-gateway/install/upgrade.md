---
title: "Upgrade the Remote Access Gateway"
description: "Upgrade the Remote Access Gateway, the portal, and guacd to 26.07.3 with a backup of nginx.conf and a guacd 1.6.0 container."
sidebar_position: 30
---

# Upgrade the Remote Access Gateway

The Remote Access Gateway installs from its own package, separate from the Netwrix Privilege Secure for Access Management (Privilege Secure) installer. Upgrading the Privilege Secure application server doesn't upgrade the gateway or the portal. Upgrade each component of the Remote Access Gateway on its own server.

Both installers upgrade an existing installation in place and refuse to install over a newer version.

{/* TODO verify: how long the gateway and the portal are unavailable during an upgrade. This is runtime behavior that the installer code doesn't show. */}

## Before you upgrade

- Get the Remote Access Gateway package for the release that you are upgrading to from the Netwrix Customer Portal.
  The file is named `privilegesecure-accessmanagement-rag-<version>.zip`.
  {/* TODO verify: the folder of the package on the Customer Portal. */}
- Plan to upgrade the gateway, the portal, and guacd together. The 26.07.3 portal expects guacd 1.6.0. If guacd runs a different version, remote desktop colors can display incorrectly. See [Match the guacd version](#match-the-guacd-version).
- Back up `C:\ProgramData\Stealthbits\PAM\RagGateway\appsettings.json` on the gateway server.
- Back up `nginx.conf` on the portal server. See [Upgrade the portal](#upgrade-the-portal).

{/* TODO verify: the supported combinations of gateway, portal, and Privilege Secure releases when they aren't all the same 26.07 release. */}

## Upgrade the gateway

1. On the gateway server, run `NPS.RagGateway.exe` from the new package.
2. Follow the installer pages and wait for "Installation Successfully Completed."
3. Confirm that `appsettings.json` still holds your settings. See [Gateway settings reference](/docs/privilegesecure/26.07/remote-access-gateway/configuration/gateway-settings.md).

The gateway installer doesn't contain `appsettings.json`, `guacd.conf`, or the guacd certificate files, so it leaves them in `C:\ProgramData\Stealthbits\PAM\RagGateway`. It replaces `appsettings.default.json` and keeps an existing `appsettings.log.json`. You don't need to run `Configure-Gateway.ps1` again unless the guacd address changes.

## Upgrade the portal

Back up `nginx.conf` before you upgrade the portal. Before 26.07.3, the portal installer could delete `nginx.conf` or fail to replace `nginx.exe` during an upgrade. 26.07.3 fixes this. Back up the file anyway.

1. On the portal server, copy `C:\Program Files\Stealthbits\PAM\NPS.RagPortal\nginx\conf\nginx.conf` to a safe location.
2. Run `NPS.RagPortal.exe` from the new package.
3. Follow the installer pages and wait for "Installation Successfully Completed."
4. Compare `nginx.conf` with your backup. The 26.07.3 installer replaces `nginx.exe` and leaves `nginx.conf` in place. If the upstream address or certificate paths are missing, restore them from the backup, then restart the service so nginx reads the file:

   ```powershell
   Restart-Service SbPAMRagPortal
   ```
5. Confirm that the **NPS Rag Portal** service is running, that nginx listens on ports 80 and 443, and that the portal opens in a browser:

   ```powershell
   Get-Service SbPAMRagPortal
   Get-NetTCPConnection -State Listen -LocalPort 80,443
   ```

## Match the guacd version

The 26.07.3 portal expects guacd 1.6.0. guacd must run the image `guacamole/guacd:1.6.0`. An older version, or an untagged image that resolves to another version, can display red and blue colors swapped in remote desktop sessions.

1. In the Windows Subsystem for Linux (WSL) distribution on the gateway server, list the running containers:

   ```bash
   sudo docker ps
   ```

2. Find the `guacd` container and check the **IMAGE** column, which shows the image that the container was created from. It must read `guacamole/guacd:1.6.0`.
3. If the image is a different version, stop the container, remove it, and create it again with the same command that `install-docker.sh` uses:

   ```bash
   sudo docker stop guacd
   sudo docker rm guacd
   sudo docker pull guacamole/guacd:1.6.0
   sudo docker run --name guacd --restart unless-stopped \
     -v /mnt/c/ProgramData/Stealthbits/PAM/RagGateway:/etc/guacamole \
     -p 4822:4822/tcp -d guacamole/guacd:1.6.0
   ```

   The volume maps the gateway folder, which holds `guacd.conf`, `guacd.crt`, and `guacd.key`, to `/etc/guacamole` in the container. The files stay in the Windows folder, so the new container uses the same certificate and you don't run `Configure-Gateway.ps1` again.
4. In PowerShell, confirm that guacd listens on port 4822, and check the guacd log:

   ```powershell
   Test-NetConnection <guacd-host> -Port 4822
   ```

   ```bash
   sudo docker logs guacd
   ```

   The log includes the line "Communication will require SSL/TLS".

After you create the container, start a session from the portal and confirm that the colors in the remote desktop look correct.

## Related topics

- [Install the gateway and guacd](/docs/privilegesecure/26.07/remote-access-gateway/install/install-gateway.md)
- [Install the portal](/docs/privilegesecure/26.07/remote-access-gateway/install/install-portal.md)
- [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md)
