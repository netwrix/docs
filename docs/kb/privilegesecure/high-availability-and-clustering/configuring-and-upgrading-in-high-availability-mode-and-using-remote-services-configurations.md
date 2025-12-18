---
description: >-
  Explains how to configure PostgreSQL high availability (HA) for Netwrix
  Privilege Secure using the NPS.HaMgr.exe tool, and how to upgrade an existing
  HA server pair and remote service nodes, including troubleshooting steps and
  encryption key handling.
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
products:
  - privilege-secure-access-management
sidebar_label: Configuring and Upgrading in High Availability Mod
tags: []
title: "Configuring and Upgrading in High Availability Mode and Using Remote Services Configurations"
knowledge_article_id: kA04u0000000K8ICAU
---

# Configuring and Upgrading in High Availability Mode and Using Remote Services Configurations

## Overview

This article explains how to configure PostgreSQL high availability (HA) for Netwrix Privilege Secure using the `NPS.HaMgr.exe` (NPS HA Configuration Tool). It also includes steps to upgrade an existing HA server pair and to upgrade remote service nodes. The `NPS.HaMgr.exe` tool is available in the **Extras** folder of the Netwrix Privilege Secure download directory. This implementation of HA is active/passive—if the primary server becomes unavailable, you must perform a manual failover to switch to the secondary database. All applications and services remain active on their respective servers; however, both write only to the primary database.

> **NOTE:** If the primary server becomes unavailable and a failover is required, refer to the "Upgrade an Existing NPS High Availability (HA) Pair" section for steps."

> **IMPORTANT:** Before configuring HA, perform the following steps on both primary and secondary Netwrix Privilege Secure servers:
>
> 1. Open the HA tool. Click the folder icon to the right of the `PgDataDir` path to open the **Postgres** folder.  
> 2. Locate the **Archive** folder. Delete the contents of the **Archive** folder.

> **IMPORTANT:** After establishing the HA pair, use the primary Netwrix Privilege Secure server. The database on the secondary server runs in read-only mode in the HA pair.

> **IMPORTANT:** A reboot is required on all Netwrix Privilege Secure servers for both initial installations and upgrades.

- Initial Configuration
- Upgrades

1. Before You Begin
2. Upgrading from 3.6 or Higher to 3.7CU1 (3.7.1250) or Higher
3. HA Upgrade Instructions
   1. Summary – HA Upgrade
   2. Failover and Upgrade the Secondary
   3. Upgrade the Primary
   4. Copy appsettings.json File to the Secondary
   5. Copy the Encryption Keys to the Secondary
   6. Re-establish HA on the Secondary
   7. Verify the Secondary
   8. Verify the Primary
4. Remote Service Upgrade Instructions
   1. Summary – Remote Service Upgrade
   2. Upgrade the Netwrix Privilege Secure Server
   3. Upgrade All Remote Services
   4. Export the Encryption Keys from the Netwrix Privilege Secure Server (Action and Scheduler Services only)
   5. Copy the Encryption Keys to the Remote Hosts (Action and Scheduler Services only)
   6. Re-register the Services on the Netwrix Privilege Secure Server
5. HA Troubleshooting

## Initial Configuration

Perform the following steps to configure an HA pair:

1. Verify that both `5432` (PostgreSQL) and `6500` (Netwrix Privilege Secure Web Services) ports are open between the servers.
   - If either port was modified, open the corresponding port instead.
   - The HA tool creates exclusion rules for Windows Firewall, but your network firewall may still block these ports.
2. Copy the HA tool from the **Extras** folder to the following folder on both primary and secondary servers:
   ```text
   C:\Program Files\Stealthbits\PAM\HA Tools
   ```
   If required, replace the default installation path with a custom one.
3. Run the HA tool on the primary server. Specify the primary server IP in the **Primary IP** field. Allow the tool to process the IP to then fill the **Port** value. A green checkmark appears in the **Primary Node** section.

   > **IMPORTANT:** The **Primary IP** field only registers IP addresses. The field does not register FQDNs or localhost (`127.0.0.1`).

4. Specify the secondary server IP in the **Secondary IP** field. Specify the **Port** value (`5432` by default for PostgreSQL). After specifying the values, click any white space in the window of the HA tool to process the secondary IP and port.

   > **IMPORTANT:** Some errors and warnings can be ignored during the initial setup:
   >
   > - The `%Secondary_IP% not found in pg_hba.conf` error indicates no established connection between the PostgreSQL databases. This behavior is expected.
   > - The `Firewall Port Not Open` warning does not get updated after the HA tool creates a firewall rule.
   >
   > **IMPORTANT:** Do not proceed to the next step until both servers have a green check mark in the HA Manager.

5. Follow the instructions in How to Configure Encryption Keys in Multiple Netwrix Privilege Secure Server Environments ⸱ Netwrix to export the encryption keys from the primary server to the secondary server.
   [How to Configure Encryption Keys in Multiple NPS Server Environments](/docs/kb/privilegesecure/high-availability-and-clustering/how-to-configure-encryption-keys-in-multiple-nps-server-environments.md)
6. On the primary server, locate the `appsettings.json` file at `C:\ProgramData\Stealthbits\PAM\HA\appsettings.json` and copy it to the same path on the secondary server.
7. Run the HA tool on the secondary server. Specify the **Primary IP**, **Primary Port**, and **Secondary IP**.

   > **IMPORTANT:** The HA tool might prompt errors and warnings after you enter the values. This behavior is expected.  
   > Do not update or refresh any of the fields.

8. Close the HA tool on both the primary and secondary servers.
9. Run the HA tool on the primary server and verify the IP address and port fields. Click **Update** in the **Secondary Node** section to update the `pg_hba.conf` file.
10. Run the HA tool on the secondary server. Allow the tool to initialize—a **Configure HA Secondary** button should appear in the top right corner of the tool window.

    > **NOTE:** If the **Configure HA Secondary** button does not appear, close the tool on both servers, restart the primary HA tool, and start the secondary HA tool.

11. Click the **Configure HA Secondary** button. Proceed with the backup for the existing database—the stream from the primary to the secondary should begin after.  
    The initial streaming may take several minutes depending on the amount of data to be replicated.

    > **NOTE:** To confirm HA is configured, review the **Postgres Status** values for both nodes—they should state **Running Primary** and **Running Replica** depending on the role.

12. Verify that you can log in to Netwrix Privilege Secure on both servers.

## Upgrades

### Before You Begin

Determine if your Netwrix Privilege Secure environment has HA and/or remote services configured.

- For HA, launch the Netwrix Privilege Secure HA Configuration Tool (NPS.HaMgr) that was packaged with your installer on your primary server. If **Replication Status** is listed as **Active**, HA is configured.
- For remote services, launch Netwrix Privilege Secure and check if there are any remote hosts listed under **service nodes**. If there are, you have remote services that will need to be upgraded.

If neither of these are configured, you may proceed with a standard Netwrix Privilege Secure upgrade and bypass the steps outlined in this article. Otherwise, proceed to the appropriate section(s) for HA and/or remote services.

### Upgrading from 3.6 or Higher to 3.7CU1 (3.7.1250) or Higher

When upgrading from 3.6, it is assumed that all of your encryption keys are in agreement on all Netwrix Privilege Secure servers and remote service nodes. The 3.7CU1 installer will retain the existing encryption keys on each server, and you can omit any steps in the below instructions involving the export and import of encryption keys.

## HA Upgrade Instructions

### Summary

Each host in the active/passive configuration must be upgraded, starting with the secondary (passive) host and proceeding to the primary (active) host. After both hosts are upgraded, steps are included to ensure that both Netwrix Privilege Secure installations share the same encryption keys. Once the encryption keys match, the primary and secondary are restored to an HA configuration and their services are re-registered in the Netwrix Privilege Secure console.

### Failover and Upgrade the Secondary

1. Create a new folder in your Netwrix Privilege Secure installation folder:
   ```text
   C:\Program Files\Stealthbits\PAM\HA Tools
   ```
2. Copy the HA Manager Tool from your download directory `Extras\NPS.HaMgr.exe` to the installation folder `C:\Program Files\Stealthbits\PAM\HA Tools`. If you have an older copy of the HA Tool, make sure to copy the existing configuration file over so the tool has the previous configuration values.
3. Start the HA Manager Tool `NPS.HaMgr.exe`.
4. Click the **Failover** button on the HA Tool UI. This will update the PostgreSQL database on the secondary so the upgrade can be performed on the secondary without impacting the primary.

   > **NOTE:** Clicking **Failover** flips the IP Address of the primary and the secondary hosts. Make sure to undo this change after the upgrade.

5. Run `NPS_Setup` and click the **Upgrade Netwrix Privilege Secure** button.
6. After the installer completes, close the installer and close `NPS_Setup`.

### Upgrade the Primary

1. Create a new folder in your Netwrix Privilege Secure installation folder:
   ```text
   C:\Program Files\Stealthbits\PAM\HA Tools
   ```
2. Copy the HA Manager Tool from the download directory `Extras\NPS.HaMgr.exe` to the installation folder `C:\Program Files\Stealthbits\PAM\HA Tools`. If you have an older copy of the HA Tool, make sure to copy the existing configuration file over so the tool has the previous configuration values.
3. Start the HA Manager Tool `NPS.HaMgr.exe`.
4. You will see that HA is not configured; that will be addressed later.
5. Run `NPS_Setup` and click the **Upgrade Netwrix Privilege Secure** button.
6. After the installer completes, close the installer and close `NPS_Setup`.

### Copy appsettings.json File to the Secondary

1. On the primary server, locate the `appsettings.json` file at `C:\ProgramData\Stealthbits\PAM\HA\appsettings.json` and copy it to the same path on the secondary server.

### Copy the Encryption Keys to the Secondary

1. On the primary server, run `cmd` as Administrator.
2. Type the following commands to export the encryption keys for the secondary:
   ```text
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe export -n keys.exp 
   ```
3. Take note of the password for the export file.

   > **IMPORTANT:** This temporary password protects the Netwrix Privilege Secure encryption keys during copying. Do not save it to digital media or transmit it with the encryption key package.

4. Copy the export file to `C:\Program Files\Stealthbits\PAM\KeyTools` on the secondary server.
5. On the secondary server, run `cmd` as Administrator.
6. Type the following commands to import the encryption keys:
   ```text
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe import -n keys.exp 
   ```
7. You will be prompted for the password.
8. Delete the export file from both the primary and secondary servers.

### Re-establish HA on the Secondary

1. Launch the HA Tool on the secondary server.
2. Enter the primary IP address into the **Primary IP** text box.
3. Enter the secondary IP address into the **Secondary IP** text box.
4. Click the **Configure HA** button.

### Verify the Secondary

1. Connect to the secondary Web UI directly.
2. Log in with a Netwrix Privilege Secure Administrator account (`domain\\user`).
3. Go to the **Configuration > System Settings > Services** page. Verify the URL is properly configured so the services are communicating with the secondary service.
4. Click **Register Services**.
5. Navigate to **Service Nodes**.
   1. Verify that your secondary server shows up as online.
   2. Verify that your primary server shows up as online.

### Verify the Primary

1. Connect to the primary Web UI directly.
2. Log in with a Netwrix Privilege Secure Administrator account (`domain\\user`).
3. Go to the **Configuration > System Settings > Services** page. Verify the URL is properly configured so the services are communicating with the secondary service.
4. Click **Register Services**.
5. Navigate to **Service Nodes**.
   1. Verify that your primary server shows up as online.
   2. Verify that your secondary server shows up as online.

## Remote Service Upgrade Instructions

### Summary

In addition to upgrading the Netwrix Privilege Secure server, you must upgrade each remote host with a remote service. After remote hosts are upgraded, steps are included to ensure that the remote services share the same encryption keys as the Netwrix Privilege Secure server. Once the encryption keys match, the services are re-registered in the Netwrix Privilege Secure console.

> **NOTE:** The encryption key import instructions apply only to remote Action and Scheduler services—not Proxy services.

### Upgrade the Netwrix Privilege Secure Server

1. Run `NPS_Setup` and click the **Upgrade Netwrix Privilege Secure** button.
2. After the installer completes, close the installer and close `NPS_Setup`.

### Upgrade All Remote Services

1. Run the appropriate service-specific installer on each remote host (for example, `ActionService.exe` for the Action Service).
2. After the installer completes, close the installer.

### Export the Encryption Keys from the Netwrix Privilege Secure Server (Action and Scheduler Services only)

1. On the Netwrix Privilege Secure server, run `cmd` as Administrator.
2. Type the following commands to export the encryption keys for the secondary:
   ```text
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe export -n keys.exp 
   ```
3. Take note of the password for the export file.

   > **IMPORTANT:** This temporary password protects the Netwrix Privilege Secure encryption keys during copying. Do not save it to digital media or transmit it with the encryption key package.

### Copy the Encryption Keys to the Remote Hosts (Action and Scheduler Services only)

For each remote host running a remote service, do the following:

1. Copy the `keys.exp` file to `C:\Program Files\Stealthbits\PAM\KeyTools`.
2. Run `cmd` as Administrator. Type the following commands to import the encryption keys:
   ```text
   cd "C:\Program Files\Stealthbits\PAM\KeyTools"
   .\SbPAM.RotateKey.exe import -n keys.exp 
   ```
3. You will be prompted for the password.
4. Delete the export file from the remote host.

Once all remote hosts have the correct encryption keys, delete the export file from the Netwrix Privilege Secure server.

### Re-register the Services on the Netwrix Privilege Secure Server

1. Connect to the primary Web UI directly.
2. Log in with a Netwrix Privilege Secure Administrator account (`domain\\user`).
3. Click **Register Services**.
4. Navigate to **Service Nodes**. Verify that all remote service nodes are listed as online.

## HA Troubleshooting

The following steps allow you to manually configure critical HA settings on your HA pair.

1. On the primary server, navigate to the `%PROGRAMDATA%\Stealthbits\Postgres12` folder. Refer to the following default path:
   ```text
   C:\ProgramData\Stealthbits\Postgres16
   ```
2. Open the `pg_hba.conf` file using a text editor. Add the following lines to the end of the file:
   ```text
   host  replication  repuser  %SECONDARY_IP%/32  md5
   host  all  all  %SECONDARY_IP%/32  md5
   ```
   Replace the `%SECONDARY_IP%` placeholders with the IP address of your secondary server. Save the changes.
3. On the secondary server, navigate to the `%PROGRAMDATA%\Stealthbits\Postgres12` folder. Refer to the following default path:
   ```text
   C:\ProgramData\Stealthbits\Postgres16
   ```
4. Open the `pg_hba.conf` file using a text editor. Add the following lines to the end of the file:
   ```text
   host  replication  repuser  %PRIMARY_IP%/32  md5
   host  all  all  %PRIMARY_IP%/32  md5
   ```
   Replace the `%PRIMARY_IP%` placeholders with the IP address of your primary server. Save the changes.
