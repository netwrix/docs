---
title: NPS-D Health Checks 
---

# Perform a Health Check on NPS-D

This article walks through the standard health check procedure for NPS-D (formerly known as
SecureONE). It covers the application, database, DR, Docker, and OS checks that should be reviewed
to confirm a healthy environment, and calls out items that should be followed up with Support.

### Services and Nodes

On NPS-D 2.22 and higher, confirm all services and nodes are up and reporting correctly:

```bash
s1 status
s1 nodes
```

On NPS-D 2.21.x and earlier, use the underlying Docker commands directly:

```bash
sudo docker stack services <stack>
sudo docker node ls
```

Confirm every service shows the expected replica count (for example `1/1` or `6/6`) and every node
shows `Ready`/`Active`. A replica count mismatch or a `Down`/`Drain` node should be investigated
before continuing.

### MongoDB Replica Status

For clustered environments, confirm a healthy database replication status.

On NPS-D 2.22.x and higher, use the `s1` CLI helper:

```bash
s1 database-status
```

This runs the same `rs.status()` and `rs.printSlaveReplicationInfo()` queries against MongoDB
internally and prints the parsed result, so no manual container lookup is needed.

On NPS-D 2.21.x and earlier:

```bash
mEvl="sudo docker exec -it $(sudo docker ps | grep mongod | cut -d' ' -f1) mongo SecureONE --quiet --eval"
$mEvl 'rs.status()' | grep "name\|stateStr\|lastHeartbeatRecv\|lastHeartbeatMessage" | column -t
echo
$mEvl 'rs.printSlaveReplicationInfo()'
unset mEvl
```

Look for each node reporting a healthy `stateStr` (for example `PRIMARY` or `SECONDARY`) and recent
heartbeat timestamps. Delayed or missing heartbeats indicate replication issues that should be
investigated before proceeding.

### DR Functions (Backup and Restore)

If the environment has no DR configuration, this section can be skipped and noted as N/A.

Confirm the configuration of `backup_v1.sh` on PROD:

```bash
sudo grep "FAHis\|DRIP\|HowManyBaks\|S1EnvType" /secureone/data/backup_v1.sh | grep -v "#" | head -3
```

Confirm backups are running:

```bash
ls -alh /secureone/data/db/backups/*
```

Check the crontab entry:

```bash
sudo crontab -l | tail
```

Confirm the configuration of `restore_v1.sh` on DR:

```bash
sudo grep "HowManyBaks\|S1EnvType" /secureone/data/restore_v1.sh | grep -v "#" | head -2
```

Confirm restores are running and cleanup is occurring:

```bash
ls -alh /secureone/data/db/restore/*
```

Review the latest restore log:

```bash
sudo tail $(find /secureone/data/db/restore/ -name "restore*.log" | sort | tail -n1)
```

Check the crontab entry:

```bash
sudo crontab -l | tail
```

Reference: DR Scripts Setup Tracking documentation.

### Disk Space and Time Sync

Run on each node in the cluster:

```bash
date && echo "------" && df -h && echo "------" && timedatectl status
```

Confirm sufficient free disk space and that time sync is active and healthy on every node. If a
node shows an unsynced or unreachable NTP source, resolve that before continuing, since time drift
can cause replica set and TLS issues.

### Docker Version

```bash
docker --version
```

### APIPA Networks

Run on one node in the cluster:

```bash
sudo docker network inspect docker_gwbridge bridge ingress s1_default | grep '"Name": "docker_gwbridge"\|"Name": "bridge"\|"Name": "ingress"\|"Name": "s1_default"\|Subnet\|Gateway'
```

Confirm none of the reported subnets fall in the 169.254.0.0/16 (APIPA/link-local) range. Overlay
networks that have fallen back to link-local addressing are a sign of Docker Swarm networking
issues.

### Docker Daemon Status

Run on each node in the cluster:

```bash
sudo service docker status
```

### Local Docker/Service Images

Run on each node in the cluster:

```bash
sudo docker image ls
```

Confirm the expected images are present and versions are consistent across every node in the
cluster. A mismatched tag on one node (for example after a partial upgrade) is a common source of
crash loops.

### Service Local Logging Files and Content

Run on each node in the cluster:

```bash
sudo ls -alh /secureone/data/logs/ | grep svc

for i in $(sudo find /secureone/data/logs/ -iname "*.log*"); do
  echo "File: $i"
  sudo grep -iE "error|fail" "$i" | wc -l
  sudo grep -iE "error|fail" "$i" | grep -o "message[^,]*" | sort | uniq -c | sort -nk1 | tail
  echo "----------"
done
```

Confirm log files are present, actively being written to, and review any recurring error or
failure messages. Note that the `find` pattern needs the wildcards (`*.log*`) to match filenames,
and the `grep` pattern needs `-E` for `|` to work as an alternation between `error` and `fail`.

### Fluentd/Log Forwarding to SIEM

If log forwarding is not configured, the customer can create a Support ticket to enable it. Reference the SIEM log forwarding documentation:

[Forward Logs to SIEM]( https://docs.netwrix.com/docs/kb/privilegesecurediscovery/security-and-compliance/forward-logs-to-siem-fluentd)

### Ubuntu Version

Run on each node in the cluster:

```bash
lsb_release -a
```

Confirm the OS version on each node is a supported version for the installed NPS-D release.

### Upgradable Packages

Run on each node in the cluster:

```bash
sudo apt update && apt list --upgradable
```

Confirm the number and nature of pending OS package updates. Flag any packages that are
significantly out of date or that address known security issues.

