---
title: "Scan Errors"
description: "Common scan execution errors and solutions"
sidebar_position: 20
---

# Scan Errors

Scan errors occur when Access Analyzer encounters problems during data collection from configured sources. This page covers common scan errors, their causes, and resolution steps.

## Checking Scan Status

Review scan status in the Access Analyzer web UI or check the logs from the relevant pods:

```bash
kubectl logs -n access-analyzer deploy/core-api --tail=200 | grep -i scan
kubectl logs -n access-analyzer deploy/connector-api --tail=200 | grep -i scan
```

## Common Scan Errors

### Scan Timeout

Scans that exceed the configured timeout are terminated automatically.

- **Cause**: Large data sources, slow network connectivity, or insufficient worker resources.
- **Resolution**: Increase the scan timeout if appropriate, reduce the scan scope, or allocate additional resources to worker pods.

### Pod Failures During Scan

If the pod executing a scan is killed or restarted mid-scan, the scan fails without completing.

```bash
kubectl get pods -n access-analyzer --field-selector=status.phase=Failed
kubectl describe pod <failed-pod> -n access-analyzer
```

- **Cause**: OOMKilled (out of memory), node eviction, or liveness probe timeout.
- **Resolution**: Check pod events for `OOMKilled` status. Increase memory limits for the affected pod if needed. Review node resource pressure with `kubectl top nodes`.

### Permission Denied Errors

The scan account lacks the required permissions on the target data source.

- **Cause**: Insufficient privileges for the configured service account.
- **Resolution**: Verify that the service account has the permissions documented for the source type. See [Connection Failures](/docs/accessanalyzer/1.0/troubleshooting/commonissues/connectionfailures) for protocol-specific requirements.

### Partial Scan Results

A scan completes but returns fewer results than expected.

- **Cause**: Access denied on a subset of resources, or rate limiting by the target API.
- **Resolution**: Review the scan logs for warnings about skipped resources. For API-based sources, check for throttling responses (HTTP 429).

## Reviewing Scan Job History

Failed scan jobs appear in the Sidekiq **Retries** or **Dead** tab. See [Failed Job Troubleshooting](/docs/accessanalyzer/1.0/troubleshooting/jobmonitoring/failedjobs) for instructions on inspecting and retrying failed jobs.

:::warning
If scans fail consistently across multiple sources, check cluster-wide resource availability and backing service health before investigating individual source configurations.
:::
