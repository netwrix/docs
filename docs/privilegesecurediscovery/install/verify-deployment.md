---
title: "Verify the deployment"
description: "Confirm that Netwrix Privilege Secure for Discovery deployed successfully, and troubleshoot common problems with Docker Swarm and s1 commands."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that `s1 db` runs `mongosh` interactively on a MongoDB 8.0 deployment and that `db.stats()` and `db.systems.countDocuments({})` return results there. Evidence: s1.py `mongo_shell_bin` selects `mongosh` when present; no test output seen.

TODO: Confirm the `rs.status()` and `rs.hello()` commands in the replica set section run unchanged in `mongosh` against the MongoDB 8.0 image. Evidence: none; `rs.isMaster()` is deprecated in `mongosh`, so this page uses `rs.hello()`.

TODO: Confirm the replica set name after `s1 mongo-upgrade retire` on a cluster (`secureone8` per s1.py). Evidence: r06 report citing s1.py:1227; not re-verified here.

TODO: Confirm that customers are expected to run `yarn run migrator up onprem` inside the API container. Evidence: secureone.sh:1717 prints the command when migrations must run on the API node.

TODO: Confirm the Docker log-driver size limits in the stack files for the log limits table. Evidence: none; values carried over from the previous version of this page.
:::

After you run `secureone.sh setup`, use the commands on this page to confirm that Netwrix Privilege Secure for Discovery is healthy and to find the cause of common failures. Run all commands on a swarm manager node unless a section says otherwise.

## Identify the services

The stack name is `s1`. The services differ between a single node and a cluster.

- **Single node:** `api`, `analytics_engine`, `db`, `health_reporter`, `mq`, `worker`, `worker-secondary`, `expire`, `fluentd`, `scanner`, `ldapsync`, `internal_api`, `windows-bridge`, and `windows-bridge-proxy`.
- **Cluster:** the same services, except that `mongo1`, `mongo2`, and `mongo3` replace `db`, and `health_reporter1`, `health_reporter2`, and `health_reporter3` replace `health_reporter`.

### Identify the MongoDB state

The MongoDB service names depend on the state of the deployment. The `s1 db`, `s1 database-status`, and `s1 set-password` commands select the active database service for you, so prefer them to hand-typed `docker exec` commands.

| State | Single-node service | Cluster services | Shell |
|---|---|---|---|
| New installation on MongoDB 8.0 | `s1_db` | `s1_mongo1`, `s1_mongo2`, `s1_mongo3` | `mongosh` |
| Existing deployment still on MongoDB 4.0 | `s1_db` | `s1_mongo1`, `s1_mongo2`, `s1_mongo3` | `mongo` |
| Migration in progress, before cutover | `s1_db` is live; `s1_db8` is the copy | `s1_mongo1` to `s1_mongo3` are live; `s1_mongo1-8` to `s1_mongo3-8` are the copy | `mongo` for the live service, `mongosh` for the copy |
| Cut over, not yet retired | `s1_db8` is live; `s1_db` is stopped | `s1_mongo1-8` to `s1_mongo3-8` are live; the original services are stopped | `mongosh` |
| MongoDB 4.0 retired | `s1_db` | `s1_mongo1`, `s1_mongo2`, `s1_mongo3` | `mongosh` |

To see which state applies, run the following command:

```bash
sudo s1 database-status
```

The command prints the active database service and the MongoDB version that the application uses. For the migration procedure, see [Upgrade MongoDB 4.0 to 8.0](../migration/mongodb-4-to-8/overview.md).

## Run the quick health check

Run the following commands in sequence to get a quick view of the system health.

1. Confirm that all services run with the expected replica counts.

   ```bash
   docker stack services s1
   ```

2. List any task that isn't running.

   ```bash
   docker stack ps s1 | grep -v "Running"
   ```

3. Confirm that the API responds.

   ```bash
   curl -sk https://localhost/api/v1/ping
   ```

   A healthy API returns a JSON response with the message `pong`.

4. Confirm which database the application uses and that it is reachable.

   ```bash
   sudo s1 database-status
   ```

5. Confirm that the message queue is healthy.

   ```bash
   docker exec -it $(docker ps -q -f name=s1_mq) rabbitmqctl list_queues name messages
   ```

6. Check the disk usage.

   ```bash
   du -sh /secureone/data/*
   ```

## Check the stack and services

```bash
# List all services with replica counts and image versions
docker stack services s1

# Show all tasks with node placement
docker stack ps s1

# Show only failing or stopped tasks
docker stack ps s1 | grep -v "Running"
docker stack ps s1 --filter "desired-state=shutdown"

# Show the replica counts of all services
docker service ls --filter "name=s1"

# Show all tasks, current and historical, for one service
docker service ps s1_api

# Show only the running tasks of one service
docker service ps s1_api --filter "desired-state=running"

# Inspect a service, including its configuration, environment variables, and constraints
docker service inspect s1_api --pretty

# Show the history and failure messages of a service
docker service ps s1_api --no-trunc
```

On a cluster, use the following commands to check the swarm nodes:

```bash
# List all nodes
docker node ls

# Inspect a node
docker node inspect <node-hostname> --pretty

# Show the tasks that run on a node
docker node ps <node-hostname>
```

You can also use `s1 status` to list the services and `s1 nodes` to list the nodes. For the available commands, see [Install the s1 CLI helper utility](./s1-cli-helper.md).

## View logs

Most services use the Fluentd logging driver. Stream the aggregated logs from the Fluentd service:

```bash
docker service logs s1_fluentd --follow
```

Filter the stream to a specific service:

```bash
docker service logs s1_fluentd --follow | grep "s1_api"
docker service logs s1_fluentd --follow | grep "s1_scanner"
```

The `db`, `mq`, and `fluentd` services, and the cluster `mongo*` services, write directly to the Docker `json-file` driver. View their logs with the following commands:

```bash
docker service logs s1_db --follow
docker service logs s1_mq --follow
docker service logs s1_fluentd --follow

# Cluster MongoDB nodes
docker service logs s1_mongo1 --follow
docker service logs s1_mongo2 --follow
docker service logs s1_mongo3 --follow
```

If the deployment is in a migration state, the database services also include `s1_db8` or `s1_mongo1-8`, `s1_mongo2-8`, and `s1_mongo3-8`. See [Identify the MongoDB state](#identify-the-mongodb-state).

Use the following flags to control the output:

| Flag | Description |
|---|---|
| `--follow` | Streams logs in real time. |
| `--tail 100` | Shows only the last 100 lines. |
| `--timestamps` | Includes timestamps. |
| `--no-task-ids` | Produces cleaner output when a service has multiple replicas. |

To read the log files that Fluentd writes to disk:

```bash
ls /secureone/data/logs/
tail -f /secureone/data/logs/<logfile>
```

## Open a shell in a container

1. Find the container ID of a running service task.

   ```bash
   docker ps -q -f name=s1_api
   ```

2. Open a shell in the container.

   ```bash
   docker exec -it $(docker ps -q -f name=s1_api) sh
   ```

   You can also use `s1 shell <service>`, for example `s1 shell api`.

:::note
On a cluster, each service task can run on a different node. If `docker ps` returns nothing for a service, the task doesn't run on this node. Sign in to the node that hosts it first.
:::

## Check MongoDB health

Use the `s1` tool instead of hand-typed `docker exec` commands. The tool selects the active database service and the correct shell for the MongoDB version.

Check the database status:

```bash
sudo s1 database-status
```

On a cluster, the output also lists the replica set members and the replication lag.

Open a database shell:

```bash
sudo s1 db
```

At the shell prompt, run a command such as the following:

```javascript
db.stats()
db.systems.countDocuments({})
```

On a cluster, the replica set is `secureone`, with the members `mongo1:27017`, `mongo2:27017`, and `mongo3:27017`. All three members must run before the API connects. To check the replica set from the shell that `s1 db` opens, run `rs.status()` and `rs.hello()`.

:::note
After a migration to MongoDB 8.0, the cluster replica set is named `secureone8`, and the connection string uses `replicaSet=secureone8`.
:::

## Check the message queue

1. Open a shell in the `mq` container.

   ```bash
   docker exec -it $(docker ps -q -f name=s1_mq) bash
   ```

2. List the queues, message counts, and consumers.

   ```bash
   rabbitmqctl list_queues name messages consumers
   ```

3. Check the node health.

   ```bash
   rabbitmqctl status
   ```

4. Check whether the `hello` queue, which the `worker`, `scanner`, and `expire` services use, has a backlog.

   ```bash
   rabbitmqctl list_queues name messages | grep hello
   ```

A large message count in the `hello` queue with no consumers usually means that `worker` or `scanner` is down.

## Check connectivity

Check that the HTTPS API responds. The `-k` option accepts the self-signed certificate.

```bash
curl -sk https://localhost:443/api/v1/ping
```

Check the HTTP endpoint and confirm that the expected ports are bound:

```bash
curl -s http://localhost:80/
ss -tlnp | grep -E '443|80|5672|24224'
```

From inside the API container, check the connection to other services:

```bash
# Check that the API container can reach the message queue
docker exec -it $(docker ps -q -f name=s1_api) sh -c \
  'nc -zv mq 5672 && echo "mq reachable"'

# Check that the API container can reach windows-bridge-proxy
docker exec -it $(docker ps -q -f name=s1_api) sh -c \
  'nc -zv windows-bridge-proxy 80 && echo "proxy reachable"'
```

To confirm that the application reaches the database, run `sudo s1 database-status`.

## Check resource usage

```bash
# Real-time CPU and memory use of all s1 containers
docker stats $(docker ps -q -f name=s1)

# One-time snapshot
docker stats --no-stream $(docker ps -q -f name=s1)

# Disk use
du -sh /secureone/data/logs/
du -sh /secureone/data/db/
```

:::note
The `/secureone/data/db/` directory holds the MongoDB 4.0 data. After a migration to MongoDB 8.0, the live data is in a Docker volume, and the directory no longer shows the live database size.
:::

Docker limits the log file size for each component:

| Component | Limit |
|---|---|
| `fluentd` container | 1 GB for each of 3 files |
| `db` and `mongo*` | 500 MB for each of 3 files |
| `mq` | 100 MB for 1 file |

If the disk is filling up, check `/secureone/data/logs/` first.

## Restart a service

Force a rolling restart of a service:

```bash
docker service update --force s1_api
docker service update --force s1_worker
```

For a hard restart, scale a service down and then up:

```bash
docker service scale s1_api=0
docker service scale s1_api=1
```

To apply a configuration change to the whole stack, re-deploy it with the deployment script:

```bash
sudo -E bash secureone.sh deploy --version <version>
```

:::warning
Don't run `docker stack rm s1` or `s1 undeploy`, and don't run `docker stack deploy` directly, on a deployment that went through a MongoDB migration. Removing the stack also removes the new MongoDB services, and a direct `docker stack deploy` ignores `/secureone/s1.env` and reverts the services to the original database host. Use `secureone.sh deploy` instead.
:::

## Troubleshoot common failures

### A service is stuck in Starting or restarts in a loop

See the failure history and the error messages:

```bash
docker service ps s1_<service> --no-trunc
```

Check the exit codes of stopped containers:

```bash
docker inspect $(docker ps -aq -f name=s1_<service>) | grep -A5 '"ExitCode"'
```

### The health_reporter service keeps restarting

The `health_reporter` service waits for `api:3000` to be ready before it starts. If it loops, the API is unhealthy. Check the `s1_api` logs first.

### The fluentd service is down and several services fail to start

Most services use the Fluentd log driver. If Fluentd doesn't run, the other services can't start. Check Fluentd first when several services fail at the same time:

```bash
docker service logs s1_fluentd
docker service ps s1_fluentd --no-trunc
```

### Migrations fail after a deployment

Check the `s1_api` logs for the migration that failed before you take further action. To run the migrations again, run the following command on the node that hosts the `s1_api` task:

```bash
docker exec -it $(docker ps -q -f name=s1_api) yarn run migrator up onprem
```

If the migrations still fail, contact Netwrix Support.

### The API can't connect to MongoDB on a cluster

The API connects to all three replicas with the following connection string:

```text
mongodb://mongo1:27017,mongo2:27017,mongo3:27017/SecureONE?replicaSet=secureone
```

After a migration to MongoDB 8.0, the string uses the `mongo1-8`, `mongo2-8`, and `mongo3-8` hosts and `replicaSet=secureone8`.

Confirm the following:

1. All three MongoDB tasks run.

   ```bash
   docker stack ps s1 | grep mongo
   ```

2. The replica set has a primary.

   ```bash
   sudo s1 database-status
   ```

3. Each node carries its Swarm node labels.

   ```bash
   docker node ls
   docker node inspect <node-hostname>
   ```
