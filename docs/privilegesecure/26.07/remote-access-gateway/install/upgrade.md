---
title: "Upgrade the Remote Access Gateway"
description: "Upgrade the Remote Access Gateway, the portal, and guacd to 26.07.3 with a backup of nginx.conf and a guacd 1.6.0 container."
sidebar_position: 30
---

# Upgrade the Remote Access Gateway

The Remote Access Gateway installs from its own package, separate from the Netwrix Privilege Secure for Access Management (Privilege Secure) installer. Upgrading the Privilege Secure application server doesn't upgrade the gateway or the portal. Upgrade each component of the Remote Access Gateway on its own server.

{/* TODO verify: the full upgrade procedure. The lab didn't run an upgrade of an existing gateway or portal. Confirm each step, the outage time, and what the installers keep. */}

{/* TODO verify: where customers download the Remote Access Gateway package for 26.07.3. The release notes for 26.07.1 link a package named privilegesecure-accessmanagement-rag-26.07.1.zip, and the 26.07.3 release notes have no link. */}

## Before you upgrade

- Get the Remote Access Gateway package for the release that you are upgrading to.
- Plan to upgrade the gateway, the portal, and guacd together. The 26.07.3 portal expects guacd 1.6.0. If guacd runs a different version, remote desktop colors can display incorrectly. See [Match the guacd version](#match-the-guacd-version).
- Back up `C:\ProgramData\Stealthbits\PAM\RagGateway\appsettings.json` on the gateway server.
- Back up `nginx.conf` on the portal server. See [Upgrade the portal](#upgrade-the-portal).

{/* TODO verify: whether the gateway, the portal, and Privilege Secure must all be on the same 26.07 release, and the supported range. */}

## Upgrade the gateway

1. On the gateway server, run `NPS.RagGateway.exe` from the new package.
2. Follow the installer pages and wait for "Installation Successfully Completed."
3. Confirm that `appsettings.json` still holds your settings. See [Gateway settings reference](/docs/privilegesecure/26_07/remote-access-gateway/configuration/gateway-settings).

{/* TODO verify: whether the gateway installer keeps appsettings.json and the guacd certificate files, and whether Configure-Gateway.ps1 must be run again. */}

## Upgrade the portal

Back up `nginx.conf` before you upgrade the portal. Before 26.07.3, the portal installer could delete `nginx.conf` or fail to replace `nginx.exe` during an upgrade. 26.07.3 fixes this. Back up the file anyway.

1. On the portal server, copy `C:\Program Files\Stealthbits\PAM\NPS.RagPortal\nginx\conf\nginx.conf` to a safe location.
2. Run `NPS.RagPortal.exe` from the new package.
3. Follow the installer pages and wait for "Installation Successfully Completed."
4. Compare `nginx.conf` with your backup. If the upstream address or certificate paths are missing, restore them from the backup.
5. Confirm that the **NPS Rag Portal** service is running, that nginx listens on ports 80 and 443, and that the portal opens in a browser:

   ```powershell
   Get-Service SbPAMRagPortal
   Get-NetTCPConnection -State Listen -LocalPort 80,443
   ```

{/* TODO verify: whether to document the portal start-up fix in 26.07.0 and later. It is a start-up registration fix that is not specific to upgrades, and the version it first shipped in is disputed. If confirmed, it belongs in the release notes, not in an upgrade step. */}

{/* TODO verify: the 26.07.3 installer keeps nginx.conf, and whether the service needs a restart after you restore it. */}

## Match the guacd version

The 26.07.3 portal expects guacd 1.6.0. guacd must run the image `guacamole/guacd:1.6.0`. An older version, or an untagged image that resolves to another version, can display red and blue colors swapped in remote desktop sessions.

1. In the Windows Subsystem for Linux (WSL) distribution on the gateway server, list the running containers:

   ```bash
   sudo docker ps
   ```

2. Find the `guacd` container and check the **IMAGE** column. It must read `guacamole/guacd:1.6.0`.
3. If the image is a different version, stop the container, remove it, and create it again with the same command that `install-docker.sh` uses:

   ```bash
   sudo docker stop guacd
   sudo docker rm guacd
   sudo docker pull guacamole/guacd:1.6.0
   sudo docker run --name guacd --restart unless-stopped \
     -v /mnt/c/ProgramData/Stealthbits/PAM/RagGateway:/etc/guacamole \
     -p 4822:4822/tcp -d guacamole/guacd:1.6.0
   ```

   The volume maps the gateway folder, which holds `guacd.conf`, `guacd.crt`, and `guacd.key`, to `/etc/guacamole` in the container.
4. In PowerShell, confirm that guacd listens on port 4822, and check the guacd log:

   ```powershell
   Test-NetConnection <guacd-host> -Port 4822
   ```

   ```bash
   sudo docker logs guacd
   ```

   The log includes the line "Communication will require SSL/TLS".

{/* TODO verify: the supported way to upgrade guacd on an existing WSL host, and that stop, remove, and run keeps the certificates. The lab didn't run this upgrade. */}

{/* TODO verify: that docker inspect or docker ps is the supported check of the running guacd version. */}

After you create the container, start a session from the portal and confirm that the colors in the remote desktop look correct.

## Related topics

- [Install the gateway and guacd](/docs/privilegesecure/26_07/remote-access-gateway/install/install-gateway)
- [Install the portal](/docs/privilegesecure/26_07/remote-access-gateway/install/install-portal)
- [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26_07/remote-access-gateway/troubleshooting)
