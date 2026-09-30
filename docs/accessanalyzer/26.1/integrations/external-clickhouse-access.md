---
title: External analytics store access
description: Open the Access Analyzer analytics store (ClickHouse) ports so an external tool, such as a business intelligence (BI) platform, can query it directly.
sidebar_position: 2
---

Access Analyzer keeps scan results in an analytics store, a ClickHouse database that backs the dashboards and reports. By default it accepts connections only from inside the Access Analyzer server. To query it from an external tool, such as a business intelligence (BI) platform, open its ports with the `dspmctl` command on the server.

Opening access exposes two ports:

| Port | Protocol | Purpose |
|---|---|---|
| 9000 | TCP | ClickHouse native protocol. |
| 8123 | TCP | ClickHouse HTTP interface. |

Access Analyzer never exposes the metrics port. External queries run on the same analytics store that serves scan ingestion and the reports, so heavy external load competes with the product.

:::warning
These ports are unencrypted. Credentials and query results cross the network in clear text. Restrict access to a trusted network, or put a TLS-terminating proxy in front of the ports.
:::

## Prerequisites

- **Server access.** Shell access to the Access Analyzer server with `sudo` rights. `dspmctl` needs `sudo`, the same as the installer.
- **Network path.** The external tool must reach the server on the ports you open. Open them inbound on the server's firewall and on anything between the two hosts.

## Choose an access type

| Type | Use when | Access control |
|---|---|---|
| `LoadBalancer` | A load balancer is available: one from your cloud provider, or the ServiceLB that the installer leaves enabled in the bundled k3s cluster. | A list of allowed client address ranges in Classless Inter-Domain Routing (CIDR) notation. |
| `NodePort` | No load balancer is available, for example because you disabled ServiceLB. | None in Access Analyzer. Restrict access with the server's firewall. |

The bundled k3s cluster includes ServiceLB, so use `LoadBalancer` with an allowed address list on a standard installation. ServiceLB binds ports 9000 and 8123 on the server, so those ports must be free.

A list of allowed address ranges works only with `LoadBalancer`. Setting it with `NodePort` fails.

## Open the ports

`dspmctl set-helm-param` turns automated sync off for the application. The last step turns it back on.

1. On the Access Analyzer server, set the access parameters. For `NodePort`:

   ```bash
   sudo dspmctl set-helm-param netwrix \
     config.clickhouse.externalAccess.enabled=true \
     config.clickhouse.externalAccess.type=NodePort \
     config.clickhouse.externalAccess.nodePorts.native=30900 \
     config.clickhouse.externalAccess.nodePorts.http=30823
   ```

   Choose ports from 30000 through 32767, or omit the `nodePorts` lines to have Kubernetes assign them. For `LoadBalancer`, restricting access to one address range:

   ```bash
   sudo dspmctl set-helm-param netwrix \
     config.clickhouse.externalAccess.enabled=true \
     config.clickhouse.externalAccess.type=LoadBalancer \
     'config.clickhouse.externalAccess.loadBalancerSourceRanges[0]=<cidr>'
   ```

   Add `[1]`, `[2]`, and so on for more ranges.

   On a cloud provider, request an internal load balancer so the database never gets a public address. The annotation key contains dots, so escape them and quote the argument:

   ```bash
   sudo dspmctl set-helm-param netwrix \
     'config.clickhouse.externalAccess.annotations.service\.beta\.kubernetes\.io/aws-load-balancer-internal=true'
   ```

   The annotation name is provider-specific. Use the one your provider documents.

2. Apply the change:

   ```bash
   sudo dspmctl sync netwrix
   ```

3. Turn automated sync back on:

   ```bash
   sudo dspmctl enable-auto netwrix
   ```

4. Open the chosen ports on the server's firewall.

## Get the credentials

Opening access creates a dedicated analytics store user, `access_analyzer_external`, with a generated password. The user has read-only access to the `access_analyzer` and `access_analyzer_sample` databases, with the same per-query memory limits as the user Access Analyzer's own reports use.

Give external tools only this user. Don't hand out the analytics store's administrator credentials: the exposed port reaches the administrator like any other user, so its password is the only thing protecting it.

1. On the Access Analyzer server, print the password:

   ```bash
   sudo dspmctl get-secret clickhouse-external-secret password
   ```

   Omit `password` to print the username and password together. Print one key at a time when you capture the value in a variable, because the two-key form adds a carriage return.

2. In the external tool, connect with the username `access_analyzer_external`, this password, and the `access_analyzer` database.

## Verify access

1. On the server, list the assigned ports and address:

   ```bash
   kubectl get svc clickhouse-external -n access-analyzer
   ```

2. From the external host, check the HTTP port:

   ```bash
   curl http://<server-address>:<http-port>/ping
   ```

   A working connection returns `Ok.`.

## Limitations

- With `LoadBalancer`, Kubernetes still opens a port on every node. On a cluster with routable node addresses, a client can reach the database through that port and bypass the allowed address ranges. Close it by turning off node-port allocation:

  ```bash
  sudo dspmctl set-helm-param netwrix config.clickhouse.externalAccess.allocateLoadBalancerNodePorts=false
  ```

- Access Analyzer runs one analytics store. With `NodePort`, connections reach it through any node in the cluster. To change how the cluster routes traffic, set `config.clickhouse.externalAccess.externalTrafficPolicy` to `Cluster` or `Local`.

## Close access

1. Turn the ports off. This also stops `dspmctl get-secret` from reading the password, but it doesn't delete the `access_analyzer_external` user. If you shared the credentials, change the password or remove the user in the analytics store:

   ```bash
   sudo dspmctl set-helm-param netwrix config.clickhouse.externalAccess.enabled=false
   sudo dspmctl sync netwrix
   sudo dspmctl enable-auto netwrix
   ```

2. Remove the firewall rules you added.
