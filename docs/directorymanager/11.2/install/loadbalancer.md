---
title: "Set Up Directory Manager Behind a Load Balancer"
description: "Set up multiple Directory Manager servers behind a load balancer for load balancing and high availability, including certificates, shared secrets, Elasticsearch, distributed cache, and SAML."
sidebar_position: 50
---

# Set Up Directory Manager Behind a Load Balancer

To distribute client traffic across multiple Directory Manager servers (nodes), place the nodes
behind a load balancer. All nodes must share the same signing key, GroupID password, and passphrase,
and clients must reach every node through the load balancer's host name.

This topic describes the recommended order of setup. The first node you install is the primary node.
Every other node is a secondary node.

## Plan Your Setup

Before you start, decide how the load balancer handles HTTPS traffic:

- **Terminates and re-encrypts** – The load balancer ends the client's TLS connection and opens a
  new encrypted connection to the node.
- **Passes through** – The load balancer forwards the encrypted traffic to the node unchanged.

Provision certificates based on that decision:

- If the load balancer terminates client TLS, the SAN of its virtual server certificate must cover
  the load balancer's public host names. The IIS certificate of each node must be valid for the host
  name that the load balancer presents when it re-encrypts the traffic.
- The IIS site of every node must present a certificate that is valid for the load balancer's host
  name, because clients and SAML endpoints use that name.

## Set Up the Nodes

Step 1 – On every node, map the load balancer's host name to the local machine. Open
`%SystemRoot%\System32\drivers\etc\hosts` and add an entry that maps the load balancer's host name
to `127.0.0.1`.

This lets the IIS site of each node, which is bound to the load balancer's host name, resolve and
validate correctly when the node connects to itself.

Step 2 – Install and configure Directory Manager on the primary node. When you configure the IIS
site, set the host name binding to the load balancer's host name, not the node's machine name. See
the [Install Directory Manager](/docs/directorymanager/11.2/install/installer/install.md) and
[Configure Directory Manager](/docs/directorymanager/11.2/install/configure/configure.md) topics.

Step 3 – On the primary node, export the signing key, the GroupID password, and the passphrase. Each
export also produces a password that you need to import that file.

```powershell
.\SigningKeyUtility.exe ExportSigningKey -o "<path_to_directory>"
.\GroupIDPasswordTransferUtility.exe export -o "<path_to_file>"
.\directory-manager-passphrase-utility.exe export -o "<path_to_file>"
```

For more on these utilities, see the
[Signing Key Utility](/docs/directorymanager/11.2/admincenter/service/securityservice/signkeyutility.md),
[Security Utility](/docs/directorymanager/11.2/install/securityutility.md), and
[Passphrase Utility](/docs/directorymanager/11.2/install/passphraseutility.md) topics.

Step 4 – Copy the exported signing key, GroupID password, and passphrase files to every secondary
node.

Step 5 – On each secondary node, import the GroupID password and the passphrase. Use the passwords
that the exports produced.

```powershell
.\GroupIDPasswordTransferUtility.exe import -i "<path_to_file>" -p "<password>"
.\directory-manager-passphrase-utility.exe import -i "<path_to_file>" -p "<password>"
```

Step 6 – Configure Directory Manager on each secondary node. Set the IIS host name binding to the
load balancer's host name, and import the signing key that you exported from the primary node. All
nodes then share the same signing material. See the
[Configure a new Directory Manager server to add it to an existing Directory Manager 11 cluster with an existing database](/docs/directorymanager/11.2/install/configure/database.md)
topic.

## Resolve Elasticsearch Replication Issues

If the nodes use a Directory Manager-managed Elasticsearch cluster, replication can fail because the
Elasticsearch state on the nodes has drifted apart. To resolve this, adjust `elasticsearch.yml` on
each node, clear the Elasticsearch data directory, and restart the Elasticsearch service. See the
[Resolve Elasticsearch Replication Issues](/docs/directorymanager/11.2/install/configure/database.md#resolve-elasticsearch-replication-issues)
section.

## Configure the Security Services

Step 1 – Enable distributed cache on every Security service (STS) instance. Without it, session and
cache state stays on a single node and breaks when the load balancer sends requests to different
nodes. In Admin Center, go to **Applications** > **Security Service** > the Security service >
**Advanced Settings**, and enable **Distributed Cache**. See the
[Manage Advanced Settings](/docs/directorymanager/11.2/admincenter/service/securityservice/manage.md#manage-advanced-settings)
section.

Step 2 – On the Security service of every node, add every URL that a client can use to reach
Directory Manager to `ReturnUrlValidation.AllowedBaseUrls` in `appsettings.json`. Include the
load balancer's host names and VIPs, and the host name and IP address of every node. See the
[Allow Return URLs for Load Balancers and Reverse Proxies](/docs/directorymanager/11.2/admincenter/service/securityservice/allowedurls.md)
topic.

Step 3 – Restart IIS on every node.

## Configure SAML

Use the load balancer's host name for all SAML setup that you do from now on. Any new SAML relying
party or identity provider configuration must reference the load balancer's host name, never the
host name of an individual node. This way it keeps working regardless of which node serves a
request.
