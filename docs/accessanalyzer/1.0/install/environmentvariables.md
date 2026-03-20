---
title: "Environment Variables"
description: "CLI flags and environment variable reference for the Access Analyzer installer"
sidebar_position: 30
---

# Environment Variables

The Access Analyzer installer can be configured using command-line flags or environment variables. Environment variables are useful for scripted or automated installations.

## CLI Flags

```
install.sh --license-key <key> [options]

Options:
  --license-key <key>         Netwrix license key (required)
  --target-revision <rev>     Application version to deploy (default: 1.*)
  --size <N>                  Resource size multiplier, 1–10 (default: 1)
  --accept-warnings           Accept preflight warnings and continue
  --dry-run                   Run preflight checks only, without installing
  --help                      Display usage information
```

## Mandatory Variables

| Variable | CLI Flag | Description |
| --- | --- | --- |
| `LICENSE_KEY` | `--license-key` | Netwrix license key for OCI registry authentication. Required for installation. |

## Optional Configuration Variables

| Variable | CLI Flag | Default | Description |
| --- | --- | --- | --- |
| `DSPM_TARGET_REVISION` | `--target-revision` | `1.*` | Target version for DSPM applications |
| `SIZE` | `--size` | `1` | Resource size multiplier (1–10). Scales memory thresholds. |
| `ACCEPT_WARNINGS` | `--accept-warnings` | `false` | Set to `true` to skip preflight warning prompts |

## Proxy Variables

| Variable | Description | Example |
| --- | --- | --- |
| `HTTP_PROXY` | HTTP proxy server URL | `http://proxy.example.com:8080` |
| `HTTPS_PROXY` | HTTPS proxy server URL | `http://proxy.example.com:8080` |
| `NO_PROXY` | Comma-separated list of hosts to bypass proxy | `localhost,127.0.0.1,10.0.0.0/8` |

## Advanced Variables

These variables are intended for specialized deployments and troubleshooting. They are not required for standard installations.

| Variable | Default | Description |
| --- | --- | --- |
| `SKIP_AV_CHECK` | `false` | Skip antivirus detection during preflight |
| `FORCE_CA_MOUNT` | `false` | Force CA certificate bundle mounting to ArgoCD components |
| `USE_LOCAL_CHARTS` | `false` | Use local Helm charts instead of OCI registry |
| `USE_MIRRORED_IMAGES` | `true` | Use mirrored container images |
| `DISABLE_DEX` | `true` | Disable the Dex identity provider in ArgoCD |
| `DISABLE_NOTIFICATIONS` | `true` | Disable ArgoCD notifications |
| `DSPM_INSTALL_DEBUG` | Not set | Enable debug logging for the installer |

## Examples

**Basic installation:**

```bash
export LICENSE_KEY='<YOUR_LICENSE_KEY>'
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -
```

**Installation with a specific version:**

```bash
export LICENSE_KEY='<YOUR_LICENSE_KEY>'
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --target-revision "1.0.6"
```

**Scaled deployment (2x resources):**

```bash
export LICENSE_KEY='<YOUR_LICENSE_KEY>'
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --size 2
```

**Installation behind a proxy:**

```bash
export LICENSE_KEY='<YOUR_LICENSE_KEY>'
export HTTP_PROXY="http://proxy.example.com:8080"
export HTTPS_PROXY="http://proxy.example.com:8080"
export NO_PROXY="localhost,127.0.0.1"
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -
```
