---
description: >-
  Configure PostgreSQL high availability (HA) with NPS.HaMgr.exe, and upgrade
  an HA server pair and remote service nodes, including encryption keys.
keywords:
  - high availability
  - HA
  - PostgreSQL
  - NPS.HaMgr
  - Netwrix Privilege Secure
  - upgrade
  - remote services
  - encryption keys
  - pg_hba.conf
  - failover
  - SbPAM.RotateKey
products:
  - privilegesecure
sidebar_label: "Configuring and Upgrading in High Availability Mode and Using Remote Services Configurations"
tags:
  - kb
  - high-availability-and-clustering
title: "Configuring and Upgrading in High Availability Mode and Using Remote Services Configurations"
knowledge_article_id: kA04u0000000K8ICAU
---

# Configuring and Upgrading in High Availability Mode and Using Remote Services Configurations

## Overview

This article describes how to configure PostgreSQL high availability (HA) for Netwrix Privilege Secure for Access Management using the `NPS.HaMgr.exe` (NPS HA Configuration Tool). It also includes steps to upgrade an existing HA server pair and to upgrade remote service nodes. The `NPS.HaMgr.exe` tool is available in the **Extras** folder of the Privilege Secure download directory.

This implementation of HA is active/passive. If the primary server becomes unavailable, you must perform a manual failover to switch to the secondary database. For the steps, see [HA Upgrade Instructions](#ha-upgrade-instructions). All applications and services remain active on their respective servers, but both write only to the primary database. After you establish the HA pair, use the primary Privilege Secure server. The database on the secondary server runs in read-only mode.

> **IMPORTANT:** Reboot all Privilege Secure servers after both initial installations and upgrades.

## Instructions

### Initial Configuration

Complete the following steps to configure an HA pair:

1. Verify that both `5432` (PostgreSQL) and `6500` (Privilege Secure Web Services) ports are open between the servers.
   - If either port was modified, open the corresponding port instead.
   - The HA tool creates exclusion rules for Windows Firewall, but your network firewall may still block these ports.
2. Copy the HA tool from the **Extras** folder to the following folder on both primary and secondary servers:
   ```text
   C:\Program Files\Stealthbits\PAM\HA Tools
   ```
   If required, replace the default installation path with a custom one.
3. On both the primary and secondary servers, open the HA tool and click the folder icon to the right of the `PgDataDir` path to open the **Postgres** folder. Locate the **Archive** folder, and delete its contents.
4. Run the HA tool on the primary server. Specify the primary server IP address in the **Primary IP** field. The field registers only IP addresses, not FQDNs or localhost (`127.0.0.1`). Allow the tool to process the IP to then fill the **Port** value. A green checkmark appears in the **Primary Node** section.
5. Specify the secondary server IP in the **Secondary IP** field. Specify the **Port** value (`5432` by default for PostgreSQL). After specifying the values, click any white space in the window of the HA tool to process the secondary IP and port. Do not proceed to the next step until both servers have a green check mark in the HA Manager.

    > **NOTE:** Some errors and warnings can be ignored during the initial setup:
    >
    > - The `%Secondary_IP% not found in pg_hba.conf` error indicates no established connection between the PostgreSQL databases. This behavior is expected.
    > - The `Firewall Port Not Open` warning does not get updated after the HA tool creates a firewall rule.

6. Follow the instructions in [Configuring Encryption Keys in Multiple NPS Server Environments](/docs/kb/privilegesecure/high-availability-and-clustering/how-to-configure-encryption-keys-in-multiple-nps-server-environments.md) to export the encryption keys from the primary server to the secondary server.
7. On the primary server, locate the `appsettings.json` file at `C:\ProgramData\Stealthbits\PAM\HA\appsettings.json` and copy it to the same path on the secondary server.
8. Run the HA tool on the secondary server. Specify the **Primary IP**, **Primary Port**, and **Secondary IP**. The HA tool might prompt errors and warnings after you enter the values. This behavior is expected. Do not update or refresh any of the fields.
9. Close the HA tool on both the primary and secondary servers.
10. Run the HA tool on the primary server and verify the IP address and port fields. Click **Update** in the **Secondary Node** section to update the `pg_hba.conf` file.
11. Run the HA tool on the secondary server. Allow the tool to initialize—a **Configure HA Secondary** button should appear in the top right corner of the tool window.

    > **NOTE:** If the **Configure HA Secondary** button does not appear, close the tool on both servers, restart the primary HA tool, and start the secondary HA tool.

12. Click the **Configure HA Secondary** button. Proceed with the backup for the existing database—the stream from the primary to the secondary should begin after. The initial streaming may take several minutes depending on the amount of data to be replicated. To confirm HA is configured, review the *Postgres Status* values for both nodes. They should state *Running Primary* and *Running Replica* depending on the role.
13. Verify that you can log in to Privilege Secure on both servers.

### Before You Upgrade

Determine whether your Privilege Secure environment has HA and/or remote services configured.

- For HA, launch the Privilege Secure HA Configuration Tool (`NPS.HaMgr`) that comes with your installer on your primary server. If *Replication Status* is listed as *Active*, HA is configured.
- For remote services, launch Privilege Secure and check whether any remote hosts are listed under **Service Nodes**. If there are, you have remote services that need to be upgraded.

If neither of these is configured, you may proceed with a standard Privilege Secure upgrade and bypass the steps outlined in this article. Otherwise, proceed to the appropriate sections for HA and/or remote services.

> **NOTE:** When upgrading from 3.6 or higher to 3.7CU1 (3.7.1250) or higher, it is assumed that all of your encryption keys are in agreement on all Privilege Secure servers and remote service nodes. The 3.7CU1 installer retains the existing encryption keys on each server, and you can omit any steps in the following instructions involving the export and import of encryption keys.

### HA Upgrade Instructions

Each host in the active/passive configuration must be upgraded, starting with the secondary (passive) host and proceeding to the primary (active) host. After both hosts are upgraded, the primary and secondary are restored to an HA configuration and their services are re-registered in the Privilege Secure console. If the secondary cannot connect or decrypt data after the upgrade, see [Resolve Secondary Connection and Decryption Failures](#resolve-secondary-connection-and-decryption-failures).

#### Step 1 — Failover and Upgrade the Secondary

1. Create a new folder in your Privilege Secure installation folder:
   ```text
   C:\Program Files\Stealthbits\PAM\HA Tools
   ```
2. Copy the HA Manager Tool from your download directory `Extras\NPS.HaMgr.exe` to the installation folder `C:\Program Files\Stealthbits\PAM\HA Tools`. If you have an older copy of the HA Tool, ensure you copy the existing configuration file over so the tool has the previous configuration values.
3. Start the HA Manager Tool `NPS.HaMgr.exe`.
4. Click the **Failover** button on the HA Tool UI. This updates the PostgreSQL database on the secondary so the upgrade can be performed on the secondary without impacting the primary.

    > **NOTE:** Clicking **Failover** flips the IP Address of the primary and the secondary hosts. Ensure you undo this change after the upgrade.

5. Run `NPS_Setup` and click the **Upgrade Netwrix Privilege Secure** button.
6. After the installer completes, close the installer and close `NPS_Setup`.

#### Step 2 — Upgrade the Primary

1. Create a new folder in your Privilege Secure installation folder:
   ```text
   C:\Program Files\Stealthbits\PAM\HA Tools
   ```
2. Copy the HA Manager Tool from the download directory `Extras\NPS.HaMgr.exe` to the installation folder `C:\Program Files\Stealthbits\PAM\HA Tools`. If you have an older copy of the HA Tool, ensure you copy the existing configuration file over so the tool has the previous configuration values.
3. Start the HA Manager Tool `NPS.HaMgr.exe`. The tool shows that HA is not configured until you re-establish it in [Step 3 — Re-establish HA on the Secondary](#step-3--re-establish-ha-on-the-secondary).
4. Run `NPS_Setup` and click the **Upgrade Netwrix Privilege Secure** button.
5. After the installer completes, close the installer and close `NPS_Setup`.

#### Step 3 — Re-establish HA on the Secondary

1. Launch the HA Tool on the secondary server.
2. Enter the primary IP address into the **Primary IP** text box and the secondary IP address into the **Secondary IP** text box, then click the **Configure HA** button.

#### Step 4 — Verify the Secondary

1. Connect to the secondary Web UI directly.
2. Log in with a Privilege Secure Administrator account (`domain\user`).
3. Go to the **Configuration > System Settings > Services** page. Verify the URL is properly configured so the services are communicating with the secondary service.
4. Click **Register Services**, then go to **Service Nodes**.
   - Verify that your secondary server shows up as online.
   - Verify that your primary server shows up as online.

#### Step 5 — Verify the Primary

1. Connect to the primary Web UI directly.
2. Log in with a Privilege Secure Administrator account (`domain\user`).
3. Go to the **Configuration > System Settings > Services** page. Verify the URL is properly configured so the services are communicating with the primary service.
4. Click **Register Services**, then go to **Service Nodes**.
   - Verify that your primary server shows up as online.
   - Verify that your secondary server shows up as online.

### Remote Service Upgrade Instructions

In addition to upgrading the Privilege Secure server, you must upgrade each remote host with a remote service. After upgrading the remote hosts, copy the encryption keys so the remote services share the same keys as the Privilege Secure server, then re-register the services in the Privilege Secure console. The encryption key steps apply only to remote Action and Scheduler services, not Proxy services.

#### Step 1 — Upgrade the Privilege Secure Server

1. Run `NPS_Setup` and click the **Upgrade Netwrix Privilege Secure** button.
2. After the installer completes, close the installer and close `NPS_Setup`.

#### Step 2 — Upgrade All Remote Services

1. Run the appropriate service-specific installer on each remote host (for example, `ActionService.exe` for the Action Service).
2. After the installer completes, close the installer.

#### Step 3 — Export the Encryption Keys from the Privilege Secure Server (Action and Scheduler Services only)

1. On the Privilege Secure server, run `cmd` as Administrator.
2. Enter the following commands to export the encryption keys for the secondary:
   ```text
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe export -n keys.exp
   ```
3. Take note of the password for the export file.

    > **IMPORTANT:** This temporary password protects the Privilege Secure encryption keys during copying. Do not save it to digital media or transmit it with the encryption key package.

#### Step 4 — Copy the Encryption Keys to the Remote Hosts (Action and Scheduler Services only)

For each remote host running a remote service, do the following:

1. Copy the `keys.exp` file to `C:\Program Files\Stealthbits\PAM\KeyTools`.
2. Run `cmd` as Administrator. Enter the following commands to import the encryption keys:
   ```text
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe import -n keys.exp
   ```

   The tool prompts you for the password.
3. Delete the export file from the remote host.

After you complete these steps on every remote host, delete the export file from the Privilege Secure server.

#### Step 5 — Re-register the Services on the Privilege Secure Server

1. Connect to the primary Web UI directly.
2. Log in with a Privilege Secure Administrator account (`domain\user`).
3. Click **Register Services**, then go to **Service Nodes** and verify that all remote service nodes are listed as online.

### Troubleshooting

#### Configure Critical HA Settings Manually

Complete the following steps to manually configure critical HA settings on your HA pair:

1. On the primary server, go to the `%PROGRAMDATA%\Stealthbits\Postgres16` folder. The following is the default path:
   ```text
   C:\ProgramData\Stealthbits\Postgres16
   ```
2. Open the `pg_hba.conf` file using a text editor. Add the following lines to the end of the file:
   ```text
   host  replication  repuser  %SECONDARY_IP%/32  md5
   host  all  all  %SECONDARY_IP%/32  md5
   ```
   Replace the `%SECONDARY_IP%` placeholders with the IP address of your secondary server. Save the changes.
3. On the secondary server, go to the `%PROGRAMDATA%\Stealthbits\Postgres16` folder. The following is the default path:
   ```text
   C:\ProgramData\Stealthbits\Postgres16
   ```
4. Open the `pg_hba.conf` file using a text editor. Add the following lines to the end of the file:
   ```text
   host  replication  repuser  %PRIMARY_IP%/32  md5
   host  all  all  %PRIMARY_IP%/32  md5
   ```
   Replace the `%PRIMARY_IP%` placeholders with the IP address of your primary server. Save the changes.

#### Resolve Secondary Connection and Decryption Failures

Newer upgrades keep the existing `appsettings.json` file and encryption keys, so you normally do not need these steps. If the secondary cannot connect to the primary or cannot decrypt data after the upgrade, complete the following steps on the primary and the secondary:

1. On the primary server, locate the `appsettings.json` file at `C:\ProgramData\Stealthbits\PAM\HA\appsettings.json` and copy it to the same path on the secondary server.
2. On the primary server, run `cmd` as Administrator.
3. Enter the following commands to export the encryption keys for the secondary:
   ```text
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe export -n keys.exp
   ```
4. Take note of the password for the export file.

    > **IMPORTANT:** This temporary password protects the Privilege Secure encryption keys during copying. Do not save it to digital media or transmit it with the encryption key package.

5. Copy the export file to `C:\Program Files\Stealthbits\PAM\KeyTools` on the secondary server.
6. On the secondary server, run `cmd` as Administrator.
7. Enter the following commands to import the encryption keys:
   ```text
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe import -n keys.exp
   ```

   The tool prompts you for the password.
8. Delete the export file from both the primary and secondary servers.
