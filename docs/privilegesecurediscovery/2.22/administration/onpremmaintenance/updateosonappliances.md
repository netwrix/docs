---
title: "Update Privilege Secure OS on Appliances"
description: "Update Privilege Secure OS on Appliances"
sidebar_position: 40
---

# Update Privilege Secure OS on Appliances

Update Privilege Secure OS on Appliances

# Update Privilege Secure OS on Appliances

The best practice for installing Privilege Secure OS updates is to do so during a scheduled
maintenance window. For a 3-node clustered NPSD deployment a failover is optional. During that change window, 
complete the following high-level steps. This prevents a potential issue should an
update require a reboot of the server or Docker service.

There are different options to fit your environment or downtime tolerance.

- Cluster:  No downtime
- Single-Node:  Downtime during reboot

This is a guide to updating the OS on Privilege Secure node with that best practice in mind.
Privilege Secure will be offline for 30-60 minutes.

## Requirements

- 30-60 minute scheduled maintenance window with expected downtime
- [Install the S1 CLI Helper Utility ](../../installation/s1clihelperutility.md)

## Use Case: Cluster In-Place (1 node at a Time, No Downtime)

Check DB replication status, "stateStr" should be "PRIMARY" or "SECONDARY"; and replication time
difference, a few seconds is acceptable:

```
mEvl="sudo docker exec -it $(sudo docker ps | grep mongo | cut -d' ' -f1) mongo SecureONESecureONE --quiet --eval"; $mEvl 'rs.status()' | grep "name\|stateStr\|lastHeartbeatRecv\|
\|lastHeartbeatMessage" | column -t; echo; $mEvl 'rs.printSlaveReplicationInfo()'; unset
mEvl

```

**NOTE:** If the database replication isn't in a healthy state, resolve that before continuing.

Primary node only: Check Privilege Secure services and nodes status:

```
s1 status; s1 nodes
```

SSH to the node being updated

**Step 1 –** Confirm the Docker version on each node.
```
docker --version
```

**NOTE: Ensure it isn't at/above the 29.x.x versions.**

**Step 2 –** On each node, confirm that the following 3 Docker packages have a hold on them.
```
sudo apt-mark showhold
```
If the command doesn't return any results, then go to Step 3.

**Step 3 –** Run the following command to add the packages to the holds list.
```
sudo apt-mark hold docker-ce docker-ce-cli containerd.io
```
  
**Step 4 –** Download Update Package Information.
```
sudo apt update; sudp apt list --upgradable
```

**Step 5 –** Install Package Updates.

```
sudo apt -y upgrade
```

**NOTE:** If prompted to replace a configuration file or setting, always use the option to keep the
existing configurations, settings, or files.

**Step 6 –** Reboot if required.

```
sudo cat /var/run/reboot-required
```

- Result if reboot is required:  "\*\*\* System restart required \*\*\*"
- Result if reboot not required:  "cat: /var/run/reboot-required: No such file or directory"
- If required, reboot node.


  ```
  sudo reboot
  ```

**Step 7 –** Once reboot has started, return to the other node.

- Monitor for the node to complete rebooting with.

  ```
  watch s1 nodes
  ```

  - Verify "Availability" is set to "Active" on updated node.

- After the updated node is reachable, press Ctrl+C to stop the watch command
- Check DB replication status, "stateStr" should be "PRIMARY" or "SECONDARY"; and replication time
  difference, a few seconds is acceptable:
  ```
  mEvl="sudo docker exec -it $(sudo docker ps | grep mongo | cut -d' ' -f1) mongo SecureONE --quiet --eval"; $mEvl 'rs.status()' | grep "name\|stateStr\|lastHeartbeatRecv\|lastHeartbeatMessage" | column -t; echo; $mEvl 'rs.printSlaveReplicationInfo()'; unset mEvl
  ```

**Step 8 –** Check Privilege Secure services and nodes status.

```
s1 status; s1 node
```

**Step 9 –** Move on to the next node.

**Step 10 –** After all nodes completed, check Privilege Secure services and nodes status:

- s1 status; s1 nodes

## Use Case: Single-Node (Downtime During Reboot)

**Step 1 –** Check Privilege Secure services and nodes' status.

```
s1 status; s1 nodes
```

**Step 2 –** Confirm the Docker version on each node, with the following command.
```
docker --version
```

**Note: ensure it isn't at/above the 29.x.x versions.**

**Step 3 –** On each node, confirm that the following 3 Docker packages have a hold on them via the command.
```
sudo apt-mark showhold
```

If the command doesn't return any results, then go to Step 3.

**Step 4 –** Run the following command to add the packages to the holds list.
```
sudo apt-mark hold docker-ce docker-ce-cli containerd.io
```
  
**Step 5 –** Download Update Package Information.
```
sudo apt update; sudp apt list --upgradable
```

**Step 6 –** Install package updates.
```
sudo apt -y upgrade
```
- If prompted to replace a configuration file or setting, always use the option to keep the existing
  configurations, setting, or file.

**Step 7 –** Reboot if required.

```
sudo cat /var/run/reboot-required
```

- Result if reboot is required:  "\*\*\* System restart required \*\*\*"
- Result if reboot not required:  "cat: /var/run/reboot-required: No such file or directory"
- If required, reboot node.
    
```
sudo reboot
```

**Step 8 –** After reboot complete, log in and check Privilege Secure services and nodes status:

- s1 status; s1 nodes

**See also:** [Docker Credentials Helper](../../installation/dockercredentials.md) — secure
credential storage required when pulling private registry images during NPSD upgrades.

