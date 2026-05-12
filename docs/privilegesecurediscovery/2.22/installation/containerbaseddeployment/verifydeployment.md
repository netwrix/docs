---
title: "Verify the Deployment"
description: "Verify that NPS-D deployed successfully and troubleshoot common issues using Docker Swarm commands"
sidebar_position: 50
---

# Verify the Deployment

After running `secureone.sh setup`, confirm that the deployment is healthy using the following
commands. All commands run on a swarm manager node.

## Service Overview

The stack name is `s1`. Services differ slightly between single-node and cluster deployments.

**Single-node services:** `api`, `analytics_engine`, `db`, `health_reporter`, `mq`, `worker`,
`worker-secondary`, `expire`, `fluentd`, `scanner`, `ldapsync`, `internal_api`, `windows-bridge`,
`windows-bridge-proxy`

**Cluster adds:** `mongo1`, `mongo2`, `mongo3`, `health_reporter1`, `health_reporter2`,
`health_reporter3` (replacing the single `db` and `health_reporter`)

## Quick Health Checklist

Run these commands in sequence to get an at-a-glance picture of system health:

```bash
# 1. Are all services running with the correct replica counts?
docker stack services s1

# 2. Are any tasks in a failed or shutdown state?
docker stack ps s1 | grep -v "Running"

# 3. Is the API responding?
curl -sk https://localhost/api/v1/health

# 4. Is MongoDB up? (tries single-node first, falls back to cluster)
docker exec -it $(docker ps -q -f name=s1_db) mongo --eval 'db.stats()' 2>/dev/null \
  || docker exec -it $(docker ps -q -f name=s1_mongo1) mongo --eval 'rs.isMaster()'

# 5. Is the message queue healthy?
docker exec -it $(docker ps -q -f name=s1_mq) rabbitmqctl list_queues name messages

# 6. Disk usage
du -sh /secureone/data/*
```

## Stack and Service Status

```bash
# List all services with replica counts and image versions
docker stack services s1

# Show all tasks with node placement
docker stack ps s1

# Filter to only failing or stopped tasks
docker stack ps s1 | grep -v "Running"
docker stack ps s1 --filter "desired-state=shutdown"

# Check replica counts across all services at a glance
docker service ls --filter "name=s1"

# Show all tasks (current and historical) for a specific service
docker service ps s1_api

# Show only running tasks for a specific service
docker service ps s1_api --filter "desired-state=running"

# Inspect a specific service (config, env vars, constraints)
docker service inspect s1_api --pretty

# Show history and failure messages for a service
docker service ps s1_api --no-trunc
```

**Cluster — swarm node status:**

```bash
# List all nodes
docker node ls

# Inspect a specific node
docker node inspect <node-hostname> --pretty

# See which tasks are running on a node
docker node ps <node-hostname>
```

## View Logs

Most services use the Fluentd logging driver. Stream aggregated logs from the Fluentd container:

```bash
docker service logs s1_fluentd --follow
```

Filter to a specific service:

```bash
docker service logs s1_fluentd --follow | grep "s1_api"
docker service logs s1_fluentd --follow | grep "s1_scanner"
```

For services that write directly to the json-file driver (`db`, `mq`, `fluentd`, and cluster
`mongo*`):

```bash
docker service logs s1_db --follow
docker service logs s1_mq --follow
docker service logs s1_fluentd --follow

# Cluster MongoDB nodes
docker service logs s1_mongo1 --follow
docker service logs s1_mongo2 --follow
docker service logs s1_mongo3 --follow
```

Useful log flags:

| Flag | Description |
|---|---|
| `--follow` | Stream logs in real time |
| `--tail 100` | Show only the last N lines |
| `--timestamps` | Include timestamps |
| `--no-task-ids` | Cleaner output when multiple replicas |

To read log files that Fluentd writes to disk:

```bash
ls /secureone/data/logs/
tail -f /secureone/data/logs/<logfile>
```

## Exec Into a Container

To run a command or open a shell inside a running container:

```bash
# Find the container ID for a running service task
docker ps -q -f name=s1_api

# Open a shell
docker exec -it $(docker ps -q -f name=s1_api) sh
docker exec -it $(docker ps -q -f name=s1_db) bash

# Run a one-off command
docker exec -it $(docker ps -q -f name=s1_api) yarn run migrator up onprem
```

:::note
On cluster deployments, each service task may run on a different node. If `docker ps` returns
nothing for a service, that task isn't running on this node — SSH to the node that hosts it first.
:::

## MongoDB Health

**Single-node:**

```bash
# Check DB stats
docker exec -it $(docker ps -q -f name=s1_db) mongo --eval 'db.stats()'

# Open a full mongo shell
docker exec -it $(docker ps -q -f name=s1_db) mongo SecureONE

# Count documents in a collection
docker exec -it $(docker ps -q -f name=s1_db) mongo SecureONE --eval 'db.systems.count()'
```

**Cluster — replica set health:**

```bash
# Check replica set status
docker exec -it $(docker ps -q -f name=s1_mongo1) mongo --eval 'rs.status()'

# Confirm who is PRIMARY
docker exec -it $(docker ps -q -f name=s1_mongo1) mongo --eval 'rs.isMaster()'

# Check replication lag
docker exec -it $(docker ps -q -f name=s1_mongo1) mongo --eval 'rs.printSlaveReplicationInfo()'
```

The replica set is named `secureone` with members `mongo1:27017`, `mongo2:27017`, `mongo3:27017`.
All three must be running before the API will connect.

## RabbitMQ (Message Queue)

```bash
# Open a shell in the mq container
docker exec -it $(docker ps -q -f name=s1_mq) bash

# List queues and message counts
rabbitmqctl list_queues name messages consumers

# Check node health
rabbitmqctl status

# Check if the 'hello' queue (used by worker, scanner, expire) is backed up
rabbitmqctl list_queues name messages | grep hello
```

A large message count in the `hello` queue with no consumers usually means `worker` or `scanner`
is down.

## Connectivity Checks

```bash
# Check the HTTPS API is responding (ignore self-signed cert)
curl -sk https://localhost:443/api/v1/health
curl -sk https://localhost:443/api/v1/_internal/health-report

# HTTP endpoint
curl -s http://localhost:80/

# Confirm ports 443 and 80 are bound
ss -tlnp | grep -E '443|80|5672|24224'
```

From inside a container:

```bash
# From the api container — check it can reach MongoDB
docker exec -it $(docker ps -q -f name=s1_api) sh -c \
  'curl -s http://db:27017 || echo "no route to db"'

# Check RabbitMQ is reachable on port 5672
docker exec -it $(docker ps -q -f name=s1_api) sh -c \
  'nc -zv mq 5672 && echo "mq reachable"'

# Check windows-bridge-proxy
docker exec -it $(docker ps -q -f name=s1_api) sh -c \
  'nc -zv windows-bridge-proxy 80 && echo "proxy reachable"'
```

## Resource Usage

```bash
# Real-time CPU and memory for all s1 containers
docker stats $(docker ps -q -f name=s1)

# One-shot snapshot (no streaming)
docker stats --no-stream $(docker ps -q -f name=s1)

# Disk usage
du -sh /secureone/data/db/
du -sh /secureone/data/logs/
```

Fluentd configures these log file size limits:

| Component | Limit |
|---|---|
| `fluentd` container | 1 GB × 3 files |
| `db` / `mongo*` | 500 MB × 3 files |
| `mq` | 100 MB × 1 file |

If disk is filling up, check `/secureone/data/logs/` first.

## Restart a Service

```bash
# Force a rolling restart
docker service update --force s1_api
docker service update --force s1_worker

# Scale down then back up (hard restart)
docker service scale s1_api=0
docker service scale s1_api=1

# Remove and redeploy the entire stack (use with caution)
docker stack rm s1
# Wait for all containers to stop, then redeploy:
docker stack deploy -c /secureone/docker-stack.yml s1
```

## Common Failure Patterns

**Service stuck in "Starting" or restart loop:**

```bash
# See the failure history and error messages
docker service ps s1_<service> --no-trunc

# Check exit codes for stopped containers
docker inspect $(docker ps -aq -f name=s1_<service>) | grep -A5 '"ExitCode"'
```

**`health_reporter` keeps restarting:**

It waits for `api:3000` to be ready before starting. If it loops, the API itself is unhealthy —
check `s1_api` logs first.

**`fluentd` is down — multiple services fail to start:**

Most services use the Fluentd log driver. If Fluentd isn't running, other services can't start.
Always check Fluentd first when multiple services fail simultaneously:

```bash
docker service logs s1_fluentd
docker service ps s1_fluentd --no-trunc
```

**Migration failures after deploy:**

```bash
docker exec -it $(docker ps -q -f name=s1_api) yarn run migrator up onprem
```

If migrations fail, check `s1_api` logs for the specific migration that failed before taking
further action.

**Cluster: API can't connect to MongoDB:**

The API connects to all three replicas:
`mongodb://mongo1:27017,mongo2:27017,mongo3:27017/SecureONE?replicaSet=secureone`

Confirm that:

1. All three mongo tasks are running: `docker stack ps s1 | grep mongo`
2. The replica set has a PRIMARY: `docker exec -it $(docker ps -q -f name=s1_mongo1) mongo --eval 'rs.status()'`
3. Node labels are set: `docker node ls` and `docker node inspect <node>`
