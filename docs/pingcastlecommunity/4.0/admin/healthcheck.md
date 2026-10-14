---
sidebar_position: 1
sidebar_label: Healthcheck
description: Run an Active Directory healthcheck and review the HTML and XML reports it generates.
---
# Performing an Active Directory Healthcheck

## Using Interactive Mode

Launch PingCastle and select "healthcheck" from the menu.

## Using Command Line

```
PingCastle.exe --healthcheck --server mydomain.com
```

## Understanding Healthcheck Output

When a healthcheck scan completes, PingCastle generates two files:

- **HTML Report**: Designed for human review, containing visualizations, detailed findings, and remediation guidance
- **XML Report**: Machine-readable format used for consolidation of multiple reports, automation, and integration with other tools
