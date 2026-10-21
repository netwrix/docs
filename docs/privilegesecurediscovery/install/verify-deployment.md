---
title: "Verify the deployment"
description: "Confirm that Netwrix Privilege Secure for Discovery deployed successfully by checking the services, the API, the database, and the sign-in."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the sign-in step. State the default user that `secureone.sh setup` creates and how the administrator gets its first password. Evidence: the setup script reports "Sets the default user", but no page states the user name or where the password comes from.

TODO: Confirm what a healthy `docker stack services s1` shows on a new install: every service at its full replica count, for example `1/1`, and the expected number of services on a single node and on a cluster. Evidence: none; the test stack here runs under Docker Compose, not Swarm.

TODO: Confirm that `sudo s1 database-status` on a healthy cluster shows one primary, two secondaries, and no replication lag, and on a single node shows the version `8.0`. Evidence: s1.py `database_status` prints the live `db.version()`; no cluster output seen.

TODO: Confirm that `secureone.sh verify` is meant for customers to run after setup. Evidence: secureone.sh `verify` checks the `s1` tool, `s1.env` and the stack templates. It doesn't check that the services run.
:::

After you run `secureone.sh setup`, run these checks to confirm that Netwrix Privilege Secure for Discovery is healthy. If a check fails, see [Inspect and troubleshoot the deployment](../troubleshooting/inspect-and-troubleshoot-the-deployment.md). Run all commands on a swarm manager node.

## Check the node setup

Confirm that the `s1` tool and the stack files on the node match the release you deployed:

```bash
sudo -E bash secureone.sh verify --version <version>
```

The command reports every failed check. It doesn't test the running services, so continue with the following checks even when it passes. On a cluster, run `secureone.sh verify --cli-only --version <version>` on the other nodes.

## Check the services

1. List the services and their replica counts.

   ```bash
   docker stack services s1
   ```

   Every service shows its full replica count, for example `1/1`.

2. List any task that isn't running.

   ```bash
   docker stack ps s1 --filter "desired-state=running" | grep -v "Running"
   ```

   The command prints only the header line.

## Check the API

Confirm that the API responds. The `-k` option accepts the self-signed certificate.

```bash
curl -sk https://localhost/api/v1/ping
```

A healthy API returns a JSON response with the message `pong`:

```json
{"message":"pong","time":1792554242481}
```

## Check the database

Confirm which database the application uses and that it is reachable:

```bash
sudo s1 database-status
```

The output names the active database service and the MongoDB version, which is 8.0 on a new installation. On a cluster, the output also lists the replica set members and the replication lag. One member is the primary and the others are secondaries.

## Check the message queue

Confirm that the queues have no growing backlog:

```bash
docker exec -it $(docker ps -q -f name=s1_mq) rabbitmqctl list_queues name messages
```

A message count that keeps growing in the `hello` queue usually means that the `worker` or `scanner` service is down.

## Sign in to the web interface

1. In a browser, go to `https://<host>/`, where `<host>` is the host name or IP address of the node. On a cluster, use any node.
2. Accept the certificate warning if the deployment uses a self-signed certificate.
3. Sign in with the administrator account.

The dashboard loads after you sign in. Then add your domain. See [Add a domain](../configuration/domains-and-ad/add-a-domain.md).

## Check the disk space

```bash
du -sh /secureone/data/*
```

The `logs` directory grows with use. Netwrix Privilege Secure for Discovery doesn't manage the retention of the host log files. The Python services rotate each file at 10 MB and keep 5 backups. Docker also caps the log size of some services. If the disk fills up, check `/secureone/data/logs/` first.

## Next step

Review the [Go-live checklist](./go-live-checklist.md) before you protect production systems.
