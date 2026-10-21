---
title: "Inspect and troubleshoot the deployment"
description: "Use Docker and s1 commands to inspect the Netwrix Privilege Secure for Discovery services, read logs, check MongoDB and the message queue, and fix common failures."
sidebar_position: 5
---

Use the commands on this page to inspect a running Netwrix Privilege Secure for Discovery deployment and to find the cause of common failures. To confirm that a new deployment is healthy, see [Verify the deployment](../install/verify-deployment.md). Run all commands on a swarm manager node unless a section says otherwise. Run `s1` without `sudo`, because the launcher calls `sudo` itself.

## Identify the services

The stack name is `s1`. The services differ between a single node and a cluster.

- **Single node:** `api`, `analytics_engine`, `db`, `health_reporter`, `mq`, `worker`, `worker-secondary`, `expire`, `fluentd`, `scanner`, `ldapsync`, `internal_api`, `windows-bridge`, and `windows-bridge-proxy`.
- **Cluster:** the same services, except that `mongo1`, `mongo2`, and `mongo3` replace `db`, and `health_reporter1`, `health_reporter2`, and `health_reporter3` replace `health_reporter`.

### Identify the MongoDB state

The MongoDB service names depend on the state of the deployment. The `s1 db`, `s1 database-status`, and `s1 set-password` commands select the active database service for you, so prefer them to hand-typed `docker exec` commands.

For the service names, replica set, and shell that apply in each state, see [MongoDB states](../migration/mongodb-4-to-8/after-cutover.md#mongodb-states).

To see which state applies, run the following command:

```bash
s1 database-status
```

The command prints the active database service and the MongoDB version that the application uses. For the migration procedure, see [Upgrade MongoDB 4.0 to 8.0](../migration/mongodb-4-to-8/overview.md).

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

You can also use `s1 status` to list the services and `s1 nodes` to list the nodes. For the available commands, see [Install the s1 CLI helper utility](../install/s1-cli-helper.md).

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

Fluentd prints the records and doesn't write them to disk. The Expire, Scanner, Worker, and Secondary Worker services also write local log files. To read them:

```bash
ls /secureone/data/logs/
tail -f /secureone/data/logs/<logfile>
```

For the file names and for the `s1 logs` command, see [View application logs](./application-logs.md).

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
s1 database-status
```

On a cluster, the output also lists the replica set members and the replication lag.

Open a database shell:

```bash
s1 db
```

At the shell prompt, run a command such as the following:

```javascript
db.stats()
db.getCollectionNames()
```

On a cluster, the replica set is `secureone`, with the members `mongo1:27017`, `mongo2:27017`, and `mongo3:27017`. All three members must run before the API connects. To check the replica set from the shell that `s1 db` opens, run `rs.status()` and `rs.hello()`.

:::note
After a migration to MongoDB 8.0, the cluster replica set has the name `secureone8`, and the connection string uses `replicaSet=secureone8`. After you retire the MongoDB 4.0 services on a cluster, `s1 db` and `s1 database-status` can't reach the replica set. Open a shell as [Open a shell manually](../admin/maintenance/open-the-mongodb-shell.md#open-a-shell-manually) describes.
:::

## Check the message queue

1. List the queues, message counts, and consumers.

   ```bash
   docker exec $(docker ps -q -f name=s1_mq) rabbitmqctl list_queues name messages consumers
   ```

   The output lists the `worker-primary` and `worker-secondary` queues, which carry the requests for the `worker` and `worker-secondary` services, and a `hello` queue.

2. Check the node health.

   ```bash
   docker exec $(docker ps -q -f name=s1_mq) rabbitmqctl status
   ```

A growing message count in `worker-primary` or `worker-secondary` with no consumers means that the `worker` or `worker-secondary` service is down. See [Check the stack and services](#check-the-stack-and-services).

## Check connectivity

Check that the HTTP endpoint responds and that the published ports are bound:

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:80/
ss -tlnp | grep -E ':443|:80'
```

The API service publishes ports 443 and 80. The `fluentd` service publishes port 24224 on the loopback address only.

From inside the API container, check the connection to other services:

```bash
# Check that the API container can reach the message queue
docker exec $(docker ps -q -f name=s1_api) node -e \
  'require("net").connect(5672, "mq").on("connect", () => { console.log("mq reachable"); process.exit(0); }).on("error", (e) => { console.log(e.message); process.exit(1); })'
```

To confirm that the application reaches the database, run `s1 database-status`.

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
The `/secureone/data/db/` directory holds the live database on a new installation and on a deployment that hasn't migrated. After a migration from MongoDB 4.0 to 8.0, the live data is in a Docker volume, and the directory no longer shows the live database size.
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

Check the `s1_api` logs for the migration that failed before you take further action. To check the migration state, run `s1 migrate status`. To run the pending migrations again, run the following command on the node that hosts the `s1_api` task:

```bash
s1 migrate apply
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
   s1 database-status
   ```

3. Each node carries its Swarm node labels.

   ```bash
   docker node ls
   docker node inspect <node-hostname>
   ```
