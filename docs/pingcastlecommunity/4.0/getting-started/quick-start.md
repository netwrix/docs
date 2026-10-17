---
sidebar_position: 4
sidebar_label: Quick start
description: Run your first PingCastle healthcheck with the most common command line options.
---
# Quick Start Commands

**Basic scan of a domain**:
```
PingCastle.exe --healthcheck --server domain.local
```

**Detailed scan with full findings** (includes each finding in each risk):
```
PingCastle.exe --healthcheck --server domain.local --level Full
```

**Privileged scan of a domain**:
```
PingCastle.exe --healthcheck --server domain.local --privileged
```
