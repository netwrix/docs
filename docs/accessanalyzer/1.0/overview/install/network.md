---
title: "Network Configuration"
description: "Network requirements, outbound endpoints, and firewall rules for Access Analyzer"
sidebar_position: 20
---

# Network Configuration

Access Analyzer requires outbound HTTPS connectivity during installation to download Kubernetes components, container images, and application packages. This page lists the required endpoints and provides firewall configuration examples.

## Required Outbound Endpoints

The following endpoints must be reachable over HTTPS (port 443) from the Access Analyzer VM:

| Endpoint | Purpose |
| --- | --- |
| `get.k3s.io` | K3s installer download |
| `raw.githubusercontent.com` | ArgoCD manifests (bootstrap only) |
| `oci.pkg.keygen.sh` | Netwrix OCI registry — Helm charts and application images |
| `docker.io` / `docker.com` | Container base images (PostgreSQL, ClickHouse, Redis) |

:::note
All application packages are distributed through the Netwrix OCI registry at `oci.pkg.keygen.sh`. Access is authenticated with your license key. No external Git repository access is required.
:::

## Firewall Rules

### Azure VMs (Network Security Group)

```bash
az network nsg rule create \
  --resource-group <RESOURCE_GROUP> \
  --nsg-name <NSG_NAME> \
  --name AllowHTTPSOutbound \
  --protocol Tcp \
  --priority 1010 \
  --destination-port-range 443 \
  --direction Outbound \
  --access Allow
```

### AWS EC2 (Security Groups)

```bash
aws ec2 authorize-security-group-egress \
  --group-id <SECURITY_GROUP_ID> \
  --protocol tcp \
  --port 443 \
  --cidr 0.0.0.0/0
```

### On-Premises / Bare Metal

Using `ufw` (Ubuntu Firewall):

```bash
sudo ufw allow out 443/tcp
```

Using `iptables`:

```bash
sudo iptables -A OUTPUT -p tcp --dport 443 -j ACCEPT
```

## Proxy Configuration

If your environment routes outbound traffic through a proxy server, set the following environment variables before running the installer:

```bash
export HTTP_PROXY="http://<PROXY_HOST>:<PROXY_PORT>"
export HTTPS_PROXY="http://<PROXY_HOST>:<PROXY_PORT>"
export NO_PROXY="localhost,127.0.0.1,10.0.0.0/8"
```

See [Environment Variables](/docs/accessanalyzer/1_0/install/environmentvariables) for the full list of proxy-related variables.

## Verifying Connectivity

Test outbound access to the required endpoints before installation:

```bash
# Test K3s installer access
curl -I https://get.k3s.io

# Test Netwrix registry access
curl -I https://oci.pkg.keygen.sh:443
```

## Common Network Issues

| Issue | Symptom | Solution |
| --- | --- | --- |
| Applications not syncing | `connection refused` to Keygen | Verify outbound HTTPS (443) to `oci.pkg.keygen.sh` |
| K3s installation fails | Download errors | Check connectivity to `get.k3s.io` |
| Container image pull failures | `ImagePullBackOff` pod status | Verify access to `oci.pkg.keygen.sh` and license key validity |
