---
title: External analytics store access
description: Open the Access Analyzer analytics store (ClickHouse) ports so an external tool, such as a business intelligence (BI) platform, can query it directly.
sidebar_position: 2
---

Access Analyzer keeps scan results in an analytics store, a ClickHouse database that backs the dashboards and reports. By default it accepts connections only from inside the Access Analyzer server. To query it from an external tool, such as a business intelligence (BI) platform, open its ports with the `dspmctl` command on the server.

Opening access exposes two of the analytics store's ports, each on a node port that you choose or Kubernetes assigns:

| Port | Protocol | Purpose |
|---|---|---|
| 9000 | TCP | ClickHouse native protocol. |
| 8123 | TCP | ClickHouse HTTP interface. |

Access Analyzer doesn't expose ClickHouse's metrics port, 9363. External queries run on the same analytics store that serves scan ingestion and the reports, so heavy external load competes with the product.

:::warning
These ports are unencrypted. Credentials and query results cross the network in clear text. Restrict access to a trusted network, or put a TLS-terminating proxy in front of the ports.
:::

## Prerequisites

- **Server access.** Shell access to the Access Analyzer server with `sudo` rights. `dspmctl` needs `sudo`, the same as the installer.
- **Network path.** The external tool must reach the server on the ports you open. Allow them on any network firewall between the two hosts.
- **Network firewall.** A network firewall or cloud security group in front of the server, to restrict who reaches the ports. The server's own firewall can't restrict them. [Access type](#access-type) explains why.

## Access type

Open the ports as a `NodePort` Service. A `NodePort` Service makes a port reachable on each node's own IP address, on a port from 30000 through 32767. A `LoadBalancer` Service doesn't work on a standard installation, because port 9000 is already in use on the server.

`NodePort` has no access control in Access Analyzer. Kubernetes opens the node ports on every node in the cluster, including agent hosts. The command in [Open the ports](#open-the-ports) sets `externalTrafficPolicy=Local`, so only the server, which runs the analytics store, answers on those ports.

:::warning
The server's host firewall doesn't restrict the node ports, whether it's firewalld or ufw. Kubernetes redirects node-port connections to the analytics store, and its own firewall rules accept them before any firewalld or ufw rule applies, including a rule that blocks the port. Any network that can route to the server reaches the analytics store. Restrict the node ports with a network firewall or cloud security group in front of the server, so only the hosts that run your external tools reach them.
:::

:::warning
If you opened `NodePort` access without `externalTrafficPolicy=Local`, every agent host also forwards the node ports to the analytics store. Add the setting with `sudo dspmctl set-helm-param netwrix config.clickhouse.externalAccess.externalTrafficPolicy=Local`, then repeat steps 2 and 3 of [Open the ports](#open-the-ports), or block the node ports to every agent host on your network firewall.
:::

## Open the ports

`dspmctl set-helm-param` turns off ArgoCD's automated sync for the `netwrix` application, so the change takes effect only when you sync it in step 2. Step 3 turns automated sync back on.

:::note
The installer doesn't save these settings. If you run the installer again on this server, for example to change the TLS certificate mode, it removes them and closes access. Repeat these steps afterwards. Upgrades and `update-cert` keep the settings.
:::

1. On the Access Analyzer server, set the access parameters:

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

4. On your network firewall or cloud security group, allow the node ports to the server only from the hosts that run your external tools. If Kubernetes assigned the ports, find them with the command in [Verify access](#verify-access). You don't need a rule on the server's own firewall.

## Get the credentials

Opening access creates a dedicated analytics store user, `access_analyzer_external`, with a generated password. The user has read-only access to the `access_analyzer`, `access_analyzer_sample`, `access_analyzer_landing`, and `access_analyzer_reporting` databases, with the same per-query memory limits as the user Access Analyzer's own reports use. It can run at most four queries at once, and Access Analyzer caps its total memory across them. Clients can't override these limits.

Scan results from File Server, Active Directory, Entra ID, and SharePoint Online sources are in `access_analyzer_landing`, which holds the collected data, and `access_analyzer_reporting`, which holds the tables the reports read.

Give external tools only this user. Don't share the analytics store's administrator credentials: the exposed port reaches the administrator like any other user, so its password is the only thing protecting it.

1. On the Access Analyzer server, print the password:

   ```bash
   sudo dspmctl get-secret clickhouse-external-secret password
   ```

   Omit `password` to print the username and password together. Print one key at a time when you capture the value in a variable, because the two-key form adds a carriage return.

2. In the external tool, connect with the username `access_analyzer_external`, this password, and a default database. For report data, use `access_analyzer_reporting`. To query a table in another database, prefix the table name with the database name, for example `access_analyzer_landing.entities`.

## Verify access

1. On the server, list the assigned node ports:

   ```bash
   sudo kubectl get svc clickhouse-external -n access-analyzer
   ```

2. From the external host, check the HTTP port. Use the node port that the `PORT(S)` column maps to `8123`, for example `30823` in `8123:30823/TCP`:

   ```bash
   curl http://<server-address>:<http-port>/ping
   ```

   Where `<server-address>` is the Access Analyzer server's hostname or IP address.

   A working connection returns `Ok.`.

## Rotate the password

Access Analyzer creates the password once and resets the `access_analyzer_external` user's password from it on every sync of `netwrix.infra`, the application that runs the analytics store. If you change the password inside the analytics store, the next sync overwrites it, so rotate through the stored secret. Delete it, then sync `netwrix.infra` to generate a new one:

```bash
sudo kubectl delete secret clickhouse-external-secret -n access-analyzer
sudo dspmctl sync netwrix.infra
```

The old password stops working when the sync finishes, so update your external tools then. Print the new password with `dspmctl get-secret`.

## Close access

1. Turn the ports off. This also stops `dspmctl get-secret` from reading the password, but it doesn't delete the password or the `access_analyzer_external` user, and turning access on again reuses the old password:

   ```bash
   sudo dspmctl set-helm-param netwrix config.clickhouse.externalAccess.enabled=false
   sudo dspmctl sync netwrix
   sudo dspmctl enable-auto netwrix
   ```

2. Delete the stored password so the next time you turn access on it generates a new one:

   ```bash
   sudo kubectl delete secret clickhouse-external-secret -n access-analyzer
   ```

3. Remove the network firewall or security group rules you added.
