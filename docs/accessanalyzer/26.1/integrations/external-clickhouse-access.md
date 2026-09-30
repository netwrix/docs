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

Access Analyzer never exposes the metrics port.

:::warning
These ports are unencrypted. Credentials and query results cross the network in clear text. Restrict access to a trusted network, or put a TLS-terminating proxy in front of the ports.
:::

## Prerequisites

- **Server access.** Shell access to the Access Analyzer server with `sudo` rights. `dspmctl` needs `sudo`, the same as the installer.
- **Network path.** The external tool must reach the server on the ports you open. Open them inbound on the server's firewall and on anything between the two hosts.

## Choose an access type

| Type | Use when | Access control |
|---|---|---|
| `NodePort` | The server is a single host with no load balancer. | None in Access Analyzer. Restrict access with the server's firewall. |
| `LoadBalancer` | A load balancer is available, such as one from your cloud provider. | A list of allowed client address ranges in Classless Inter-Domain Routing (CIDR) notation. |

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

   Choose ports from 30000 through 32767, or omit the `nodePorts` lines to have Kubernetes assign them. For `LoadBalancer`, restricted to one address range:

   ```bash
   sudo dspmctl set-helm-param netwrix \
     config.clickhouse.externalAccess.enabled=true \
     config.clickhouse.externalAccess.type=LoadBalancer \
     'config.clickhouse.externalAccess.loadBalancerSourceRanges[0]=<cidr>'
   ```

   Add `[1]`, `[2]`, and so on for more ranges.

2. Apply the change:

   ```bash
   sudo dspmctl sync netwrix
   ```

3. Turn automated sync back on:

   ```bash
   sudo dspmctl enable-auto netwrix
   ```

4. Open the chosen ports on the server's firewall.

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

- With `LoadBalancer`, Kubernetes still opens a port on every node. On a cluster with routable node addresses, a client can reach the database through that port and bypass the allowed address ranges.
- Access Analyzer runs one analytics store. With `NodePort`, connections reach it through any node in the cluster.

## Close access

1. Turn the ports off:

   ```bash
   sudo dspmctl set-helm-param netwrix config.clickhouse.externalAccess.enabled=false
   sudo dspmctl sync netwrix
   sudo dspmctl enable-auto netwrix
   ```

2. Remove the firewall rules you added.
