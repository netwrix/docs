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

Access Analyzer's bundled k3s cluster includes ServiceLB, its built-in load balancer. Use `LoadBalancer` with a list of allowed client address ranges in Classless Inter-Domain Routing (CIDR) notation. ServiceLB binds ports 9000 and 8123 on the server, so those ports must be free.

`NodePort` has no access control in Access Analyzer, so restrict it with the server's firewall. Kubernetes opens the node ports on every node in the cluster, including agent hosts. The `NodePort` command in [Open the ports](#open-the-ports) sets `externalTrafficPolicy=Local`, so only the server, which runs the analytics store, answers on those ports. Use `NodePort` only if you disabled ServiceLB or ports 9000 and 8123 are already in use.

A list of allowed address ranges works only with `LoadBalancer`. Setting it with `NodePort` fails.

## Open the ports

`dspmctl set-helm-param` turns automated sync off for the application. The last step turns it back on.

:::note
The installer doesn't save these settings. If you run the installer again on this server, for example to change the TLS certificate mode, it removes them and closes access. Repeat these steps afterwards. Upgrades and `update-cert` keep the settings.
:::

1. On the Access Analyzer server, set the access parameters. For `LoadBalancer`, restricting access to one address range:

   ```bash
   sudo dspmctl set-helm-param netwrix \
     config.clickhouse.externalAccess.enabled=true \
     config.clickhouse.externalAccess.type=LoadBalancer \
     config.clickhouse.externalAccess.allocateLoadBalancerNodePorts=false \
     config.clickhouse.externalAccess.externalTrafficPolicy=Cluster \
     'config.clickhouse.externalAccess.loadBalancerSourceRanges[0]=<cidr>'
   ```

   Add `[1]`, `[2]`, and so on for more ranges. By default, Kubernetes also opens a node port for a `LoadBalancer` Service, and a client that connects to the server on that port skips the allowed address ranges. `allocateLoadBalancerNodePorts=false` stops Kubernetes from opening it. ServiceLB needs `externalTrafficPolicy=Cluster` to forward traffic when the Service has no node port.

   For `NodePort`:

   ```bash
   sudo dspmctl set-helm-param netwrix \
     config.clickhouse.externalAccess.enabled=true \
     config.clickhouse.externalAccess.type=NodePort \
     config.clickhouse.externalAccess.externalTrafficPolicy=Local \
     config.clickhouse.externalAccess.nodePorts.native=30900 \
     config.clickhouse.externalAccess.nodePorts.http=30823
   ```

   Choose ports from 30000 through 32767, or omit the `nodePorts` lines to have Kubernetes assign them.

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

Opening access creates a dedicated analytics store user, `access_analyzer_external`, with a generated password. The user has read-only access to the `access_analyzer`, `access_analyzer_sample`, `access_analyzer_landing`, and `access_analyzer_reporting` databases, with the same per-query memory limits as the user Access Analyzer's own reports use. It can run at most four queries at once, and Access Analyzer caps its total memory across them. Clients can't override these limits.

Scan results from File Server, Active Directory, Entra ID, and SharePoint Online sources are in `access_analyzer_landing`, which holds the collected data, and `access_analyzer_reporting`, which holds the tables the reports read.

Give external tools only this user. Don't share the analytics store's administrator credentials: the exposed port reaches the administrator like any other user, so its password is the only thing protecting it.

1. On the Access Analyzer server, print the password:

   ```bash
   sudo dspmctl get-secret clickhouse-external-secret password
   ```

   Omit `password` to print the username and password together. Print one key at a time when you capture the value in a variable, because the two-key form adds a carriage return.

2. In the external tool, connect with the username `access_analyzer_external`, this password, and one of the four databases the user can read as the default database. To query a table in another database, prefix the table name with the database name, for example `access_analyzer_landing.entities`.

## Verify access

1. On the server, list the assigned ports and address:

   ```bash
   sudo kubectl get svc clickhouse-external -n access-analyzer
   ```

2. From the external host, check the HTTP port. With `LoadBalancer` that is `8123`. With `NodePort`, use the assigned node port from the `PORT(S)` column:

   ```bash
   curl http://<server-address>:<http-port>/ping
   ```

   A working connection returns `Ok.`.

## Limitations

- If you opened `LoadBalancer` access without the `allocateLoadBalancerNodePorts=false` and `externalTrafficPolicy=Cluster` lines, the Service has node ports, and clients can reach the database through the server's address on those ports without passing the allowed address ranges. Until you remove them, block TCP ports 30000 through 32767 on the server's firewall. Changing the settings doesn't remove node ports from an existing Service, so set them, then delete the Service:

  ```bash
  sudo dspmctl set-helm-param netwrix \
    config.clickhouse.externalAccess.allocateLoadBalancerNodePorts=false \
    config.clickhouse.externalAccess.externalTrafficPolicy=Cluster
  sudo dspmctl sync netwrix
  sudo dspmctl enable-auto netwrix
  sudo kubectl delete service clickhouse-external -n access-analyzer
  ```

  Automated sync recreates the Service without node ports, and external tools can't connect until it does. To check, run `sudo kubectl get svc clickhouse-external -n access-analyzer`: the `PORT(S)` column lists `9000/TCP,8123/TCP` with no node port numbers. If the Service doesn't reappear within a few minutes, run `sudo dspmctl sync netwrix.infra`.

- With `NodePort` and no `externalTrafficPolicy=Local` line, every node in the cluster, including agent hosts, forwards connections on the node ports to the analytics store. The server's firewall doesn't protect agent hosts. If you opened `NodePort` access without that line, add it with `sudo dspmctl set-helm-param netwrix config.clickhouse.externalAccess.externalTrafficPolicy=Local`, then repeat steps 2 and 3 of [Open the ports](#open-the-ports). If you keep the default instead, block the node ports on every agent host's firewall too.

## Rotate the password

Access Analyzer creates the password once and resets the `access_analyzer_external` user's password from it on every sync. If you change the password inside the analytics store, the next sync overwrites it, so rotate through the stored secret:

```bash
kubectl delete secret clickhouse-external-secret -n access-analyzer
sudo dspmctl sync netwrix
sudo dspmctl enable-auto netwrix
```

The sync generates a new password. Print it with `dspmctl get-secret`.

## Close access

1. Turn the ports off. This also stops `dspmctl get-secret` from reading the password, but it doesn't delete the password or the `access_analyzer_external` user, and turning access on again reuses the old password:

   ```bash
   sudo dspmctl set-helm-param netwrix config.clickhouse.externalAccess.enabled=false
   sudo dspmctl sync netwrix
   sudo dspmctl enable-auto netwrix
   ```

2. Delete the stored password so the next time you turn access on it generates a new one:

   ```bash
   kubectl delete secret clickhouse-external-secret -n access-analyzer
   ```

3. Remove the firewall rules you added.
