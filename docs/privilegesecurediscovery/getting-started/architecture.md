---
title: "Architecture overview"
description: "Learn how Privilege Secure for Discovery is built from container services and what each service does."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Update the cluster diagram, which still lists "NTP UDP 123", "RADIUS UDP 1812, if used", and fixed syslog ports "UDP 514 or TCP 6514". Evidence: the code sends no NTP traffic from the product, the RADIUS port is the UDP port the administrator enters, and the syslog port is the customer collector's port, as the Ports and firewall page states.

TODO: Confirm whether customers may use the Windows bridge services (`windows-bridge` and `windows-bridge-proxy`) and who enables them. Evidence: the `windows_bridge` release toggle is `enabled: false` on a 26.09.1 stack, and the bridge README calls it a preview feature that is disabled by default.
:::

Privilege Secure for Discovery runs as a set of Docker services, deployed as the `s1` stack on Docker Swarm. A single-node deployment runs every service on one Ubuntu Server host. A three-node cluster runs the same services across three hosts and adds a three-member MongoDB replica set. This page describes the services and how to check them.

## Deployment diagrams

The following diagrams show the architecture of a clustered and a single-node deployment.

![Architecture diagram of a three-node cluster deployment. Clients reach a load balancer over HTTPS. Three Ubuntu Server nodes run in one Docker Swarm. Each node hosts one MongoDB replica and one health reporter, and Swarm schedules the other services on any node. The diagram lists the ports for node-to-node traffic and for connections to Active Directory, Microsoft Entra ID, Windows and Linux systems, EDR platforms, a SAML identity provider, NTP and RADIUS servers, SIEM collectors, and the Netwrix container registry.](/images/privilegesecurediscovery/architecture/cluster-architecture.webp)

![Architecture diagram of a single-node deployment. Administrators, users, and REST API clients connect over HTTPS to the web portal and API. All containers run on one Docker host in Swarm mode. The containers connect to Active Directory, Microsoft Entra ID, Windows and Linux systems, EDR platforms, and SIEM and log collectors.](/images/privilegesecurediscovery/architecture/single-node-architecture.webp)

## Container services

The deployment stack defines the following services. In the stack, each service name starts with the stack name, for example `s1_api`.

| Service | Purpose |
| --- | --- |
| `s1_api` | Runs the web portal, the user interface, and the REST API. |
| `s1_internal_api` | Runs code for the main API that depends on shared Python libraries. |
| `s1_db` (single node) or `s1_mongo1`, `s1_mongo2`, and `s1_mongo3` (cluster) | Runs MongoDB, which stores all product data. |
| `s1_mq` | Handles messaging and message prioritization between services. |
| `s1_worker` and `s1_worker-secondary` | Carry out active requests. The worker handles the default requests. The secondary worker handles requests for EDR integrations and other fallback strategies. |
| `s1_scanner` | Scans the network and updates the database with what it discovers. |
| `s1_ldapsync` | Synchronizes the configured Active Directory domains and Microsoft Entra ID tenants with the database. |
| `s1_expire` | Manages active and pending expiration requests. |
| `s1_fluentd` | Collects, formats, and forwards logs. |
| `s1_analytics_engine` | Calculates access risk, license usage, and the history behind the dashboard. |
| `s1_health_reporter` (one per node in a cluster) | Reports service health to the API. |
| `s1_windows-bridge` and `s1_windows-bridge-proxy` | Run Windows system connections in a separate process when you turn on the Windows bridge. The bridge stays off by default. |

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

The LDAP sync service reads Active Directory (AD) domains and Microsoft Entra ID tenants and keeps the database current. Despite the name, it handles both directory types. A first synchronization runs these stages for each AD domain:

1. Connect and authenticate.
2. Synchronize AD computer objects.
3. Synchronize AD user objects.
4. Synchronize AD group objects.
5. Report that the synchronization is complete.

After the first synchronization, the service checks for changes every minute and runs a full synchronization once a day. The service doesn't write a local log file by default. See [Application logs](../troubleshooting/application-logs.md).

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

The worker service carries out active requests. Some of its tasks overlap with the scanner, such as rescanning a system and, where relevant, enforcing protect mode. Most of its work enforces changes that a user requests in the interface or through the API, such as removing an administrator, changing persistence, and granting access.

Check the service from the command line:

```bash
sudo docker service ps s1_worker
```

## List all services

To list every service and its replica count, run the following command:

```bash
sudo docker service ls
```
