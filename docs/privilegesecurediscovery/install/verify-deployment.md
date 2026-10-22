---
title: "Verify the deployment"
description: "Confirm that Netwrix Privilege Secure for Discovery deployed successfully by checking the services, the API, the database, and the sign-in."
sidebar_position: 30
---

After `secureone.sh setup` finishes, run these checks to confirm that Netwrix Privilege Secure for Discovery is healthy. If a check fails, see [Inspect and troubleshoot the deployment](../troubleshooting/inspect-and-troubleshoot-the-deployment.md). Run all commands on a swarm manager node. Run `s1` without `sudo`, and run `docker` with `sudo`, because the setup doesn't add your user to the `docker` group.

## Check the node setup

Confirm that the `s1` tool and the stack files on the node match the release you deployed:

```bash
sudo -E bash secureone.sh verify --version <version>
```

The command reports every failed check. It doesn't test the running services, so continue with the following checks even when it passes. On a cluster, run `secureone.sh verify --cli-only --version <version>` on the other nodes.

## Check the services

1. List the services and their replica counts.

   ```bash
   sudo docker stack services s1
   ```

   A single node runs 14 services and a three-node cluster runs 18. Every service shows its full replica count, for example `1/1`. The `windows-bridge` service shows `6/6`.

2. List any task that isn't running.

   ```bash
   sudo docker stack ps s1 --filter "desired-state=running" | grep -v "Running"
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
s1 database-status
```

The output names the active database service and the MongoDB version, which is 8.0 on a new installation. On a single node, the output then reports that there is no replica set to query. On a cluster, the output lists each replica set member with its state: one member is `PRIMARY` and the other two are `SECONDARY`.

## Check the message queue

Confirm that the queues have no growing backlog:

```bash
sudo docker exec $(sudo docker ps -q -f name=s1_mq) rabbitmqctl list_queues name messages
```

A message count that keeps growing in the `worker-primary` or `worker-secondary` queue usually means that the `worker` or `worker-secondary` service is down.

## Sign in to the web interface

1. In a browser, go to `https://<host>/`, where `<host>` is the host name or IP address of the node. On a cluster, use any node.
2. Accept the certificate warning if the deployment uses a self-signed certificate.
3. Sign in as the default administrator, `secureone`. Get the initial password from Netwrix Support.
4. Change the password immediately. Go to **Configure** > **Server** > **Appliance Admin Password**, or run `s1 set-password` on a swarm manager node. The password must have at least 15 characters.

The dashboard loads after you sign in. Then add your domain. See [Add a domain](../configuration/domains-and-ad/add-a-domain.md).

## Check the disk space

```bash
sudo du -sh /secureone/data/*
```

The `logs` directory grows with use. Netwrix Privilege Secure for Discovery doesn't manage the retention of the host log files. The Python services rotate each file at 10 MB and keep 5 backups. Docker also caps the log size of some services. If the disk fills up, check `/secureone/data/logs/` first.

## Next step

Review the [Go-live checklist](./go-live-checklist.md) before you protect production systems.
