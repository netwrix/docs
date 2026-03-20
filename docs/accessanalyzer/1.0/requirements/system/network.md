---
title: "Network and Port Requirements"
description: "Required network ports, outbound endpoints, and firewall rules"
sidebar_position: 30
---

# Network and Port Requirements

Access Analyzer requires outbound internet access during installation and operation, and specific internal ports for service communication.

## Outbound Endpoints (Internet)

The following endpoints must be reachable over HTTPS (port 443):

| Endpoint | Purpose | When Required |
| --- | --- | --- |
| `get.k3s.io` | K3s installer download | Installation only |
| `raw.githubusercontent.com` | ArgoCD manifests | Installation only |
| `oci.pkg.keygen.sh` | Netwrix OCI registry (Helm charts, application images) | Installation and updates |
| `docker.io` / `docker.com` | Container base images | Installation and updates |

## Internal Ports

These ports are used within the Access Analyzer VM for service-to-service communication:

| Port | Protocol | Service | Description |
| --- | --- | --- | --- |
| 443 | TCP | Traefik | HTTPS ingress for web UI and API |
| 6443 | TCP | K3s API | Kubernetes API server |
| 8090 | TCP | ArgoCD | ArgoCD UI (via port-forward) |
| 5432 | TCP | PostgreSQL | Database connections |
| 8123 | TCP | ClickHouse | HTTP interface |
| 9000 | TCP | ClickHouse | Native protocol |
| 6379 | TCP | Redis | Cache and queue connections |

:::note
All internal ports are bound to the local cluster network. Only port 443 (Traefik) is exposed externally for the web interface.
:::

## Connector Network Requirements

Depending on the connectors you configure, the Access Analyzer VM must also have outbound access to your data sources:

| Connector | Target Port | Protocol | Notes |
| --- | --- | --- | --- |
| CIFS / SMB | 445 | TCP | SMB file shares |
| Active Directory | 389 / 636 | TCP | LDAP / LDAPS |
| SharePoint Online | 443 | TCP | Microsoft Graph API |
| Entra ID | 443 | TCP | Microsoft identity platform |
| Local Groups | 5985 / 5986 | TCP | WinRM (HTTP / HTTPS) |

## Proxy Configuration

If outbound traffic is routed through a proxy, set the following environment variables before running the installer:

```bash
export HTTP_PROXY="http://<PROXY_HOST>:<PROXY_PORT>"
export HTTPS_PROXY="http://<PROXY_HOST>:<PROXY_PORT>"
export NO_PROXY="localhost,127.0.0.1,10.0.0.0/8"
```

## Firewall Configuration

See [Network Configuration](/docs/accessanalyzer/1_0/install/network) for firewall rule examples for Azure, AWS, and on-premises environments.
