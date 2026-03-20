---
title: "Preflight Checks"
description: "System validation checks performed before installation"
sidebar_position: 25
---

# Preflight Checks

The Access Analyzer installer performs comprehensive system validation before any installation steps begin. Preflight checks verify hardware resources, kernel capabilities, and system access to prevent partial installation failures.

## Dry-Run Mode

Run preflight checks without installing anything using the `--dry-run` flag:

```bash
export LICENSE_KEY='<YOUR_LICENSE_KEY>'
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --dry-run
```

Dry-run mode performs all validation checks and writes results to `/var/log/dspm-preflight.json`, then exits without modifying the system.

## Phase 1: System Resource Validation

| Check | Minimum | Recommended | Failure Behavior |
| --- | --- | --- | --- |
| **Total memory** | 8 GB | 16 GB | FAIL — installation blocked |
| **Available memory** | 4 GB (during install) | — | FAIL — installation blocked |
| **CPU cores** | 2 vCPUs | 4 vCPUs | FAIL — installation blocked |
| **Disk space (`/`, `/var`, `/var/lib`)** | 20 GB free | 50 GB free | FAIL — installation blocked |
| **Disk space (`/var/log`)** | 5 GB free | — | FAIL — installation blocked |
| **Disk space (`/etc`)** | 1 GB free | — | FAIL — installation blocked |
| **Write access** | `/var`, `/tmp`, `/etc` | — | FAIL — installation blocked |
| **Swap** | None required | 2–4 GB if RAM < 16 GB | WARN — continues with warning |
| **Dynamic memory** | N/A | Static allocation | WARN — continues with warning |

## Phase 2: Kernel and System Access

| Check | Requirement | Failure Behavior |
| --- | --- | --- |
| **System directories** | Write access to `/var` and `/etc` | FAIL — installation blocked |
| **Kernel modules** | `/proc/modules` readable | FAIL — installation blocked |
| **Control groups** | cgroups v1 or v2 with memory and CPU controllers | FAIL — installation blocked |
| **Overlay filesystem** | `overlay` kernel module loaded or available | FAIL — installation blocked |
| **Linux namespaces** | NET, PID, IPC, UTS, MNT, USER | FAIL — installation blocked |

## Antivirus Detection

The installer scans for active antivirus agents that may interfere with Kubernetes container operations:

- Microsoft Defender for Endpoint (mdatp)
- CrowdStrike Falcon
- ClamAV
- Sophos
- Carbon Black
- Trend Micro

If an antivirus agent is detected, the installer issues a warning. To skip this check, set the `SKIP_AV_CHECK` environment variable:

```bash
export SKIP_AV_CHECK=true
```

## Preflight Result Log

All preflight results are written to `/var/log/dspm-preflight.json` in structured JSON format:

```json
{
  "timestamp": "2026-01-15T10:30:00Z",
  "overall_status": "PASS",
  "thresholds": {
    "min_ram_gb": 8,
    "min_cpu_cores": 2,
    "min_disk_gb": 20
  },
  "checks": [
    {
      "status": "PASS",
      "component": "Memory",
      "message": "Total memory sufficient for DSPM installation",
      "current_value": "15.56 GB",
      "threshold": "8 GB minimum"
    }
  ]
}
```

## Handling Warnings

When preflight checks produce warnings (but no failures), the installer prompts for confirmation before proceeding. To automatically accept warnings — for example, in automated or scripted deployments — use one of the following:

```bash
# CLI flag
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --accept-warnings

# Environment variable
export ACCEPT_WARNINGS=true
```

## Exit Codes

The installer uses specific exit codes to indicate failure categories:

| Exit Code | Meaning |
| --- | --- |
| `0` | Success |
| `10` | License validation error |
| `50` | K3s installation error |
| `60` | ArgoCD installation error |
| `70` | Application deployment timeout |
| `80` | Preflight check failure |
