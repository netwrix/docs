---
title: "Architecture overview"
description: "Learn how Privilege Secure for Discovery is built from container services and what each service does."
sidebar_position: 20
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/requirements/architectureoverview.webp shows a diagram with the old product name and branding from an earlier release. Re-create the diagram for the current release.

TODO: /images/privilegesecure/4.2/discovery/requirements/singlenodearchitecture.webp shows the old product logo and name and an operating system version that is no longer supported. Re-create the diagram for the current release.

TODO: /images/privilegesecure/4.2/discovery/360021493614_screen_shot_2019-04-19_at_1.13.51_pm_293x206.webp (service listing) isn't used here. Capture a new `docker service ls` listing from a 26.09.1 single node if a screenshot is wanted.
:::

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the purpose of the analytics_engine service in customer-facing terms. Evidence: image analytics_engine in docker-stack.prod.single.yml:34; no description found.

TODO: Confirm the purpose of the worker-secondary service and how it differs from worker. Evidence: docker-stack.prod.single.yml:131 uses the worker image.

TODO: Confirm the customer-facing description of health_reporter. Evidence: docker-stack.prod.single.yml:68 posts to the _internal/health-report endpoint of the API; the cluster stack runs one per node (health_reporter1 to 3).

TODO: Confirm whether windows-bridge and windows-bridge-proxy are supported for customer use. Evidence: docker/shared/python/src/remediant/windows_bridge/README.md describes the bridge as a preview feature that is disabled by default.

TODO: Confirm the ldapsync behavior (initial sync stages, 60-second change check, svc-ldap.log file name) still applies at 26.09.1. Evidence: carried over from the earlier documentation; not found in code.

TODO: Confirm whether the entraidsync service named in the application repository runs as a separate service in the customer stack. Evidence: not present in docker-stack.prod.single.yml or docker-stack.prod.cluster.yml.
:::

Privilege Secure for Discovery runs as a set of Docker services, deployed as the `s1` stack on Docker Swarm. A single-node deployment runs every service on one Ubuntu Server 24.04 LTS host. A three-node cluster runs the same services across three hosts and adds a three-member MongoDB replica set. This page describes the services and how to check them.

## Deployment diagrams

The following diagrams show the architecture of a clustered and a single-node deployment.

![Architecture diagram of a Privilege Secure for Discovery cluster deployment showing the services and the database](/images/privilegesecure/4.2/discovery/requirements/architectureoverview.webp)

![Architecture diagram of a single-node Privilege Secure for Discovery deployment](/images/privilegesecure/4.2/discovery/requirements/singlenodearchitecture.webp)

## Container services

The deployment stack defines the following services. In the stack, each service name starts with the stack name, for example `s1_api`.

| Service | Purpose |
| --- | --- |
| `s1_api` | Runs the web portal, the user interface, and the REST API. |
| `s1_internal_api` | Runs code for the main API that depends on shared Python libraries. |
| `s1_db` (single node) or `s1_mongo1`, `s1_mongo2`, and `s1_mongo3` (cluster) | Runs MongoDB, which stores all product data. |
| `s1_mq` | Handles messaging and message prioritization between services. |
| `s1_worker` and `s1_worker-secondary` | Carry out active requests. |
| `s1_scanner` | Scans the network and updates the database with what it discovers. |
| `s1_ldapsync` | Synchronizes the configured domains with the database. |
| `s1_expire` | Manages active and pending expiration requests. |
| `s1_fluentd` | Collects, formats, and forwards logs. |
| `s1_analytics_engine` | Runs analytics. |
| `s1_health_reporter` (one per node in a cluster) | Reports service health to the API. |
| `s1_windows-bridge` and `s1_windows-bridge-proxy` | Run Windows system connections in a separate process. |

### API service

The API service runs the web portal and the user interface that users and administrators work in. It also exposes the REST API, which you can call from any external source that can process JSON. Every feature of the product is available through the API.

Check the service from the command line:

```bash
sudo docker service ps s1_api
```

### Database service

Privilege Secure for Discovery uses MongoDB as its database. A single-node deployment runs one `s1_db` service. A cluster runs `s1_mongo1`, `s1_mongo2`, and `s1_mongo3` as a replica set.

Check the service from the command line:

```bash
sudo docker service ps s1_db
```

In a cluster, check each MongoDB service by name, for example `s1_mongo1`.

### Expire service

Privilege Secure for Discovery can't always reach a system when it needs to act on it. A laptop can leave the network, a firewall rule can change, or the network can fail. When the product can't run a command, such as ending an active just-in-time access (JITA) session, the event moves to the expire queue. The expire service retries the event periodically until it succeeds or times out with an error.

Check the service from the command line:

```bash
sudo docker service ps s1_expire
```

### Fluentd service

Fluentd is the log aggregation tool that the product uses. It collects the logs from the other containers, formats them, and forwards them to a security information and event management (SIEM) system by syslog. For Splunk, Fluentd sends logs directly through the HTTP Event Collector (HEC). See [Forward logs to a SIEM](../integrations/siem/forward-logs.md).

Check the service from the command line:

```bash
sudo docker service ps s1_fluentd
```

### LDAP sync service

The LDAP sync service performs the baseline synchronization with Active Directory (AD). An initial synchronization has the following stages, which are visible in the `svc-ldap.log` file:

1. Connect and authenticate.
2. Synchronize AD computer objects.
3. Synchronize AD user objects.
4. Synchronize AD group objects.
5. Report that the synchronization is complete.

After the initial synchronization, the service checks the configured domains every 60 seconds and tracks changes.

Check the service from the command line:

```bash
sudo docker service ps s1_ldapsync
```

### Message queue service

The message queue (MQ) service handles communication between the other services and prioritizes messages.

Check the service from the command line:

```bash
sudo docker service ps s1_mq
```

### Scanner service

The scanner service provides continuous scanning. It runs as an independent container, scans the network, and updates the database records with what it discovers.

Check the service from the command line:

```bash
sudo docker service ps s1_scanner
```

### Worker service

The worker service carries out active requests. Some of its tasks overlap with the scanner, such as rescanning a system and, where relevant, enforcing protect mode. Most of its work enforces changes that a user requests in the interface or through the API. For example, the worker runs most of the options that appear for a system on the **Grant Access** page, such as rescan, remove administrator, change persistence, and request access.

Check the service from the command line:

```bash
sudo docker service ps s1_worker
```

## List all services

To list every service and its replica count, run the following command:

```bash
sudo docker service ls
```
