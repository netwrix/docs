---
title: "Update the operating system"
description: "Install operating system updates on the nodes of an ISO-based Privilege Secure for Discovery deployment during a maintenance window."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: Netwrix doesn't pin a Docker version, and test labs upgrade without problems on Docker 29.x. Decide as a policy call (product management or Support) whether to keep the hold on the docker-ce, docker-ce-cli, and containerd.io packages in this procedure.
:::

This page applies to the deprecated ISO appliance. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

Install operating system updates during a scheduled maintenance window, because an update can require a reboot of the server or the Docker service. The downtime depends on the deployment:

- **Three-node cluster:** No data loss. The API and background services restart briefly when a node reboots. Update one node at a time.
- **Single node:** Downtime during the reboot, usually 30 to 60 minutes.

## Prerequisites

- A scheduled maintenance window. For a single node, plan for 30 to 60 minutes of downtime.
- The `s1` command-line helper, installed on the nodes.
- Shell access with `sudo` rights to each node.

## Update a three-node cluster

Update one node at a time.

1. On any node, open a database shell:

   ```bash
   sudo s1 db
   ```

2. Check the replication status. Each member must show `PRIMARY` or `SECONDARY` in `stateStr`, and the replication lag must be a few seconds at most:

   ```javascript
   rs.status().members.forEach(function (m) { print(m.name, m.stateStr) })
   ```

   Then check the replication lag. On MongoDB 4.0, run:

   ```javascript
   rs.printSlaveReplicationInfo()
   ```

   On MongoDB 8.0, run:

   ```javascript
   rs.printSecondaryReplicationInfo()
   ```

   If replication isn't healthy, resolve the problem before you continue.

3. Exit the database shell:

   ```javascript
   exit
   ```

4. On the primary node, check the status of the services and nodes:

   ```bash
   s1 status; s1 nodes
   ```

5. Connect by SSH to the node that you update.

6. Check that the Docker packages have a hold:

   ```bash
   sudo apt-mark showhold
   ```

7. If the command doesn't list `docker-ce`, `docker-ce-cli`, and `containerd.io`, add them to the hold list:

   ```bash
   sudo apt-mark hold docker-ce docker-ce-cli containerd.io
   ```

8. Download the package information and list the available updates:

   ```bash
   sudo apt update; sudo apt list --upgradable
   ```

9. Install the updates:

   ```bash
   sudo apt -y upgrade
   ```

   If a prompt asks whether to replace a configuration file or setting, keep the existing configuration, setting, or file.

10. Check whether a reboot is required:

    ```bash
    sudo cat /var/run/reboot-required
    ```

    If a reboot is required, the command returns `*** System restart required ***`. Otherwise, it returns `cat: /var/run/reboot-required: No such file or directory`.

11. If a reboot is required, reboot the node:

    ```bash
    sudo reboot
    ```

12. From another node, wait until the rebooted node completes the restart:

    ```bash
    watch s1 nodes
    ```

    When **Availability** shows `Active` for the updated node, press Ctrl+C to stop the command.

13. Check the replication status again, as described in steps 1 through 3.

14. Check the status of the services and nodes:

    ```bash
    s1 status; s1 nodes
    ```

15. Repeat steps 5 through 14 for the next node.

16. After you update all nodes, check the status of the services and nodes one more time:

    ```bash
    s1 status; s1 nodes
    ```

## Update a single node

1. Check the status of the services and nodes:

   ```bash
   s1 status; s1 nodes
   ```

2. Check that the Docker packages have a hold:

   ```bash
   sudo apt-mark showhold
   ```

3. If the command doesn't list `docker-ce`, `docker-ce-cli`, and `containerd.io`, add them to the hold list:

   ```bash
   sudo apt-mark hold docker-ce docker-ce-cli containerd.io
   ```

4. Download the package information and list the available updates:

   ```bash
   sudo apt update; sudo apt list --upgradable
   ```

5. Install the updates:

   ```bash
   sudo apt -y upgrade
   ```

   If a prompt asks whether to replace a configuration file or setting, keep the existing configuration, setting, or file.

6. Check whether a reboot is required:

   ```bash
   sudo cat /var/run/reboot-required
   ```

   If a reboot is required, the command returns `*** System restart required ***`. Otherwise, it returns `cat: /var/run/reboot-required: No such file or directory`.

7. If a reboot is required, reboot the node:

   ```bash
   sudo reboot
   ```

8. After the reboot completes, sign in and check the status of the services and nodes:

   ```bash
   s1 status; s1 nodes
   ```
