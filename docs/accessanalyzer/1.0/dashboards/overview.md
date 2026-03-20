---
title: "Dashboards and Reports"
description: "Overview of dashboards, metrics, and reporting capabilities"
sidebar_position: 10
---

# Dashboards and Reports

Netwrix Access Analyzer provides embedded analytics dashboards powered by Metabase. The **Dashboards** section gives you visual insight into your organization's data security posture, sensitive data findings, and access risk summaries.

## Embedded Analytics

Access Analyzer integrates Metabase as an embedded reporting engine with an airgap premium token. Authentication is handled automatically through JWT-based single sign-on from the Core API to Metabase, so users access dashboards directly from within the Access Analyzer interface without separate login credentials.

## Available Dashboards

Pre-built dashboards are visible in the **Dashboards** section of the application. The primary dashboard is the **Data Security Dashboard**, which provides:

- **Sensitive data findings summary** — Aggregated match counts across all scanned sources
- **Risk summary** — High-level view of data exposure organized by severity and compliance framework
- **Trend analysis** — Changes in sensitive data findings over time

## Reporting Capabilities

| Feature | Description |
| --- | --- |
| [Accessing Reports](/docs/accessanalyzer/1_0/dashboards/metabase/accessingreports) | View and interact with embedded Metabase reports |
| [Saved Reports](/docs/accessanalyzer/1_0/dashboards/metabase/savedreports) | Save report configurations for repeated use |
| [Exporting Data](/docs/accessanalyzer/1_0/dashboards/metabase/exportingdata) | Export dashboard data for external analysis or compliance documentation |

:::note
Dashboard content updates automatically as new scan results become available. Run a [sensitive data scan](/docs/accessanalyzer/1_0/sensitivedatadiscovery/runningscan) to populate dashboards with the latest findings.
:::
