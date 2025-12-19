---
description: >-
  Netwrix Auditor may display the Exchange server name rather than the user in
  the Who changed column for group membership changes when the Exchange
  Administrator Audit Log LogLevel is set to None. This article explains the
  cause and shows how to change the LogLevel to Verbose so the required
  properties are included in audit entries.
keywords:
  - Exchange
  - audit log
  - LogLevel
  - Verbose
  - Netwrix Auditor
  - ModifiedProperties
  - ModifiedObjectResolvedName
  - Who changed
products:
  - auditor
sidebar_label: Exchange Server name instead of User in reports
tags: []
title: "Exchange Server name instead of User in reports"
knowledge_article_id: kA00g000000H9ZzCAK
---

# Exchange Server name instead of User in reports

Netwrix Auditor report shows the Exchange server name instead of the user name in the **Who changed** column for group membership changes.

## Cause

This happens because by default the `LogLevel` parameter of the Administrator Audit Log is set to `None`, and the following properties are included in log entries:

- `CmdletName`
- `ObjectName`
- `Parameters` (values)
- `Caller`
- `Succeeded`
- `RunDate`

However, the data required to show the correct **Who changed** is missing because `ModifiedProperties` (old and new) and `ModifiedObjectResolvedName` properties are NOT included in the log entries when `LogLevel` is `None`.

## Resolution

You must change the `LogLevel` parameter from `None` to `Verbose` so the `ModifiedProperties` (old and new) and `ModifiedObjectResolvedName` properties are included in the audit log entries.

1. Open **Exchange Management Shell**.
2. Run the following cmdlet to enable verbose logging:

```
Set-AdminAuditLogConfig -LogLevel Verbose
```

The output should look like this:

```powershell
[PS] C:Windowssystem32>Set-AdminAuditLogConfig -LogLevel Verbose
WARNING: The admin audit log configuration change you specified could take up to 60 minutes to take effect.
```

3. After that, run the following cmdlet and check that `LogLevel` is set to `Verbose`:

```
Get-AdminAuditLogConfig
```

You should see:

```
LogLevel : Verbose
```

Once `LogLevel` is set to `Verbose`, Netwrix Auditor will receive the `ModifiedProperties` and `ModifiedObjectResolvedName` information and will be able to display the correct user in the **Who changed** column for group membership changes.
