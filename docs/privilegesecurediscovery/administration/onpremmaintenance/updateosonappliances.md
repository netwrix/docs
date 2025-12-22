---
title: "Update Privilege Secure OS on Appliances"
description: "Update Privilege Secure OS on Appliances"
sidebar_position: 40
---

# Update Privilege Secure OS on Appliances

Update Privilege Secure OS on Appliances

# Update Privilege Secure OS on Appliances

The best practice for installing Privilege Secure OS updates is to do so during a scheduled
maintenance window, and with all services scaled down. This prevents potential issue should an
update require a reboot of the server or Docker service.

There are different options to fit your environment or downtime tolerance.

- Cluster:  No downtime
- Single-Node:  Downtime during reboot

This is a guide to updating the OS on Privilege Secure node with that best practice in mind.
Privilege Secure will be offline for 30-60 minutes.

## Requirements

- 30-60 minute scheduled maintenance window with expected downtim
- [Install the S1 CLI Helper Utility ](/docs/privilegesecurediscovery/installation/s1clihelperutility.md)

## Use Case: Cluster In-Place (1 node at a Time, No Downtime)

Check DB replication status, “stateStr” should be “PRIMARY” or "SECONDARY"; and replication time
difference, a few seconds is acceptable:

```
mEvl="sudo docker exec -it $(sudo docker ps | grep mongo | cut -d' ' -f1) mongo SecureONESecureONE --quiet --eval"; $mEvl 'rs.status()' | grep "name\|stateStr\|lastHeartbeatRecv\|
\|lastHeartbeatMessage" | column -t; echo; $mEvl 'rs.printSlaveReplicationInfo()'; unset
mEvl

```

**NOTE:** If the database replication is not in healthy state, resolve that before continuing.

Primary node only: Check Privilege Secure services and nodes status:

```
s1 status; s1 nodes
```

Check for the swarm leader:

```
s1 nodes | grep Leader
```

Only if the node being updated has a MANAGER STATUS of leader, run the below command on a different
node to change the swarm Leader.  Replace `<hostname>` with the hostname of the node being upgraded
and run the command below.

```
HNupg=`<hostname>` ;  sudo docker node demote $HNupg; sleep 10; sudo docker node promote $HNupg
```

Verify swarm leader is no longer the node being updated:

```
s1 nodes | grep Leader

```

Process one node completely before moving on to another node:

List nodes with:

- s1 nodes

Drain node to be updated:

- sudo docker node update --availability drain `<hostname>`

Verify “Availability” is set to “Drain” with:

- s1 nodes

SSH to the node being updated

**Step 1 –** Download Update Package Information.

- sudo apt update

**Step 2 –** Install package updates.

- sudo apt -y upgrade

**NOTE:** If prompted to replace a configuration file or setting, always use the option to keep the
existing configurations, setting, or file.

**Step 3 –** Reboot if required.

- sudo cat /var/run/reboot-required
- Result if reboot is required:  "\*\*\* System restart required \*\*\*"
- Result if reboot not required:  "cat: /var/run/reboot-required: No such file or directory"
- If required, reboot node:

    - sudo reboot

**Step 4 –** Once reboot has started, return to the other node. S

- Set drained node to active from a different node:

    - sudo docker node update --availability active `<hostname>`

- Monitor for the node to complete rebooting with:

    - watch s1 nodes

        - Verify “Availability” is set to “Active” on updated node.

- Once the updated node is reachable, Ctrl+C to get out of the watch command
- Check DB replication status, “stateStr” should be “PRIMARY” or "SECONDARY"; and replication time
  difference, a few seconds is acceptable:
- ```
  mEvl="sudo docker exec -it $(sudo docker ps | grep mongo | cut -d' ' -f1) mongo SecureONE --quiet --eval"; $mEvl 'rs.status()' | grep "name\|stateStr\|lastHeartbeatRecv\|lastHeartbeatMessage" | column -t; echo; $mEvl 'rs.printSlaveReplicationInfo()'; unset mEvl
  ```

**Step 5 –** Check Privilege Secure services and nodes status:

- s1 status; s1 node

**Step 6 –** Move on to next node.

**Step 7 –** After all nodes completed, check Privilege Secure services and nodes status:

- s1 status; s1 nodes

## Use Case: Single-Node (Downtime During Reboot)

**Step 1 –** Check Privilege Secure services and nodes status.

- s1 status; s1 nodes

**Step 2 –** Download Update Package Information.

- sudo apt update

**Step 3 –** Install package updates.

- sudo apt -y upgrade

- If prompted to replace a configuration file or setting, always use the option to keep the existing
  configurations, setting, or file.

**Step 4 –** Reboot if required.

- sudo cat /var/run/reboot-required

    - Result if reboot is required:  "\*\*\* System restart required \*\*\*"
    - Result if reboot not required:  "cat: /var/run/reboot-required: No such file or directory"
    - If required, reboot node:

        - sudo reboot

**Step 5 –** After reboot complete, log in and check Privilege Secure services and nodes status:

- s1 status; s1 nodes
