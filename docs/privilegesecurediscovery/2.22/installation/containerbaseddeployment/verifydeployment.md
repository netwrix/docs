---
title: "Verify the Deployment"
description: "Verify that NPS-D deployed successfully using Docker Swarm monitoring commands"
sidebar_position: 50
---

# Verify the Deployment

After running `secureone.sh setup`, confirm that the deployment is healthy using the commands below.
All commands run on a swarm manager node.

## Quick Health Checklist

Run these commands in sequence to get an at-a-glance picture of system health:

```bash
# 1. Are all services running with the correct replica counts?
docker stack services s1

# 2. Are any tasks in a failed or shutdown state?
docker stack ps s1 | grep -v "Running"

# 3. Is the API responding?
curl -sk https://localhost/api/v1/health

# 4. Is MongoDB up? (single-node)
docker exec -it $(docker ps -q -f name=s1_db) mongo --eval 'db.stats()'

# 4. Is MongoDB up? (cluster — check replica set)
docker exec -it $(docker ps -q -f name=s1_mongo1) mongo --eval 'rs.isMaster()'

# 5. Is the message queue healthy?
docker exec -it $(docker ps -q -f name=s1_mq) rabbitmqctl list_queues name messages

# 6. Disk usage
du -sh /secureone/data/*
```

## Service Overview

The stack name is `s1`. Services differ slightly between single-node and cluster deployments.

**Single-node services:** `api`, `analytics_engine`, `db`, `health_reporter`, `mq`, `worker`,
`worker-secondary`, `expire`, `fluentd`, `scanner`, `ldapsync`, `internal_api`, `windows-bridge`,
`windows-bridge-proxy`

**Cluster adds:** `mongo1`, `mongo2`, `mongo3`, `health_reporter1`, `health_reporter2`,
`health_reporter3` (replacing the single `db` and `health_reporter`)

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

For services that write directly to the json-file driver (`db`, `mq`, `fluentd`):

```bash
docker service logs s1_api --follow
docker service logs s1_db --follow
docker service logs s1_mq --follow
```

## Common Failure Patterns

**Service stuck in "Starting" or restart loop:**

```bash
docker service ps s1_<service> --no-trunc
```

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

**Cluster: API can't connect to MongoDB:**

Confirm all three mongo tasks are running and the replica set has a PRIMARY:

```bash
docker stack ps s1 | grep mongo
docker exec -it $(docker ps -q -f name=s1_mongo1) mongo --eval 'rs.status()'
```

## Restart a Service

```bash
# Force a rolling restart
docker service update --force s1_api

# Scale down then back up
docker service scale s1_api=0
docker service scale s1_api=1
```
