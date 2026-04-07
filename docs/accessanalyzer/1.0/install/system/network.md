---
title: "Network and Port Requirements"
description: "Required network ports, outbound endpoints, and firewall rules"
sidebar_position: 30
---

# Network and Port Requirements

Access Analyzer requires outbound internet access during installation and operation, and specific internal ports for service communication.

## Outbound Endpoints (Internet)

All outbound traffic uses HTTPS (port 443). The following endpoints must be reachable from the Access Analyzer server:

| Endpoint | Category | Purpose | When Required |
| --- | --- | --- | --- |
| `api.keygen.sh` | Keygen / Licensing | License validation API | Installation and updates |
| `oci.pkg.keygen.sh` | Keygen / Licensing | Netwrix OCI registry — Helm charts and application images | Installation and updates |
| `raw.pkg.keygen.sh` | Keygen / Licensing | Installer script download | Installation and updates |
| `keygen-dist.c3c9112df8df715f42d1162cdce5dba1.r2.cloudflarestorage.com` | Keygen / Licensing CDN | Keygen artifact storage | Installation and updates |
| `api.github.com` | GitHub | GitHub API | Installation only |
| `github.com` | GitHub | Repository and release access | Installation only |
| `raw.githubusercontent.com` | GitHub | ArgoCD bootstrap manifests | Installation only |
| `release-assets.githubusercontent.com` | GitHub | Release asset downloads | Installation only |
| `pkg-containers.githubusercontent.com` | GitHub Container Registry | GitHub Packages CDN | Installation and updates |
| `ghcr.io` | GitHub Container Registry | Container images | Installation and updates |
| `auth.docker.io` | Docker Hub | Docker authentication | Installation and updates |
| `registry-1.docker.io` | Docker Hub | Container images | Installation and updates |
| `production.cloudflare.docker.com` | Docker CDN | Docker Hub CDN | Installation and updates |
| `docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com` | Docker CDN | Docker image storage | Installation and updates |
| `d2glxqk2uabbnd.cloudfront.net` | Docker CDN | Docker image CDN | Installation and updates |
| `get.k3s.io` | K3s / Rancher | K3s installer download | Installation only |
| `rpm.rancher.io` | K3s / Rancher | K3s package repository | Installation only |
| `storage.googleapis.com` | K3s / Rancher | K3s artifact storage | Installation only |

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

| Connector | Port | Protocol | Notes |
| --- | --- | --- | --- |
| CIFS / SMB | 445 | TCP | SMB file sharing |
| Active Directory | 389 | TCP | LDAP |
| Active Directory | 636 | TCP | LDAPS (encrypted) |
| Active Directory | 135–139 | TCP | RPC |
| Active Directory | 49152–65535 | TCP | RPC dynamic ports |
| SharePoint Online | 443 | TCP | Microsoft Graph API |
| Entra ID | 443 | TCP | Microsoft identity platform |
| Local Groups | 5985 | TCP | WinRM (HTTP) |
| Local Groups | 5986 | TCP | WinRM (HTTPS) |

## Proxy Configuration

If outbound traffic is routed through a proxy, set the following environment variables before running the installer:

```bash
export HTTP_PROXY="http://<PROXY_HOST>:<PROXY_PORT>"
export HTTPS_PROXY="http://<PROXY_HOST>:<PROXY_PORT>"
export NO_PROXY="localhost,127.0.0.1,10.0.0.0/8"
```

## Firewall Configuration

See [Network Configuration](/docs/accessanalyzer/1_0/install/network) for firewall rule examples for Azure, AWS, and on-premises environments.
