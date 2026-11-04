---
sidebar_position: 4
sidebar_label: Deployment strategies
description: Choose between decentralized and centralized PingCastle deployments to scan multiple domains.
---
# Deployment Strategies

PingCastle supports scalable deployment in enterprise environments. For comprehensive security coverage, run healthchecks on all domains in your infrastructure. Since PingCastle doesn't require domain-specific accounts, you can use trust relationships to scan multiple domains efficiently.

## Decentralized Deployment

Run PingCastle locally on each domain and consolidate the reports centrally.

**Command**:
```
PingCastle.exe --healthcheck
```

After collecting XML reports from all locations, use the consolidation features (encryption, email transfer, or centralized file sharing) to aggregate results into a unified view.

## Centralized Deployment

Run PingCastle from a single location (such as a bastion host or admin workstation) to scan multiple domains.

**Scan all reachable domains**:
```
PingCastle.exe --healthcheck --server *
```

**Scan all domains in a specific forest**:
```
PingCastle.exe --healthcheck --server *.forest.root
```

**Scan a child domain and its trusted domains** (excludes forest root):
```
PingCastle.exe --healthcheck --explore-trust --server child.forest.root
```

**Scan all domains in trusted forests**:
```
PingCastle.exe --healthcheck --explore-forest-trust --server anotherforest.root
```

**Exclude specific domains from scanning**:
```
PingCastle.exe --healthcheck --server * --explore-exception bastion.domain.local,test.domain.local
```

Use `--explore-exception` with comma-separated domain names to skip domains (e.g., to avoid scanning a bastion domain multiple times).
