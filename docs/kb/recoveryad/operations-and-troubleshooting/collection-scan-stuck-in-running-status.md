---
description: >-
  Shows how to resolve an AD, Entra ID, or Okta collection scan stuck in
  Running status in Netwrix Identity Recovery by updating the
  TaskInstances table and restarting the Task Server service.
keywords:
  - collection scan stuck
  - Running status
  - TaskInstances
  - Task Server
  - Entra ID
  - Okta
  - Active Directory
  - Netwrix Recovery for Active Directory
  - NetwrixRecovery
  - SQL Server Management Studio
  - Identity Recovery
  - StealthRECOVER
tags:
  - kb
  - operations-and-troubleshooting
products:
  - identityrecovery
sidebar_label: Collection Scan Stuck in Running Status
title: "Collection Scan Stuck in Running Status"
---

# Collection Scan Stuck in Running Status

## Symptom

A collection scan (Active Directory, Entra ID, or Okta) remains in **Running** status indefinitely. The console shows no status details or error messages, and the scan never completes or times out.

## Cause

The scan hung during its collection step. Netwrix Identity Recovery does not apply a timeout to collection work for any of the three scan types, so a stalled directory query, Graph call, or Okta API call leaves the task instance at **Running** with no automatic recovery.

## Resolution

1. In your SQL Server Management Studio instance, locate the Identity Recovery database. The default name is `NetwrixRecovery`.
2. Run a query to find the stuck task instance for the affected task:

```sql
SELECT TOP 1 * FROM TaskInstances WHERE TaskID = '%taskID%' ORDER BY ID DESC
```

3. Update the `Status` column for that row to `8` (Failed):

```sql
UPDATE TaskInstances SET Status = 8 WHERE ID = '%targetID%'
```

4. Restart the `Netwrix Recovery Task Server` service on the Identity Recovery server.
5. In the console, start a new scan for the affected domain, tenant, or org.

## TaskInstances.Status Values

| Value | Meaning |
|---|---|
| 0 | Initialized |
| 1 | Running |
| 2 | Paused |
| 4 | Stopped |
| 8 | Failed/Error |
| 16 | Completed/Finished |
| 32 | Waiting |
