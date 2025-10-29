---
title: "ExchangePS Error: Cannot Find a Variable With the Name 'EnableSearchOnlySession'"
sidebar_label: "ExchangePS Error: Cannot Find a Variable With the Name 'EnableSearchOnlySession'"
description: "Resolve the ExchangePS data collector error 'Cannot find a variable with the name EnableSearchOnlySession' by configuring the job to use an explicit connection profile with valid Exchange credentials."
keywords: [ExchangePS, EnableSearchOnlySession, PowerShell, StealthAUDIT, EX_MBRights, EX_SendAs, data collector, connection profile, Exchange, credentials]
products: [enterprise-auditor, access-analyzer]
knowledge_article_id: ka0Qk000000GCtFIAW
---

## Related Queries

- "Receiving Get-Variable 'EnableSearchOnlySession' error on EX_MBRights job."
- "EX_SendAs job failed to inherit credentials."
- "Cannot find a variable with the name 'EnableSearchOnlySession'."

## Symptom

When running Exchange jobs using the ExchangePS data collector, the following error appears:

```text
Get-Variable 'EnableSearchOnlySession' error: Cannot find a variable with the name 'EnableSearchOnlySession'.
```

## Cause

This issue occurs when the ExchangePS data collector fails to inherit the correct session credentials.
Without proper credentials, the session does not initialize the expected variables, including `EnableSearchOnlySession`.

## Resolution

To resolve the issue, configure the job to use an explicit connection profile.
This ensures the session uses the appropriate credentials, allowing the necessary variables to load correctly.

1. Right-click the affected job.
2. Select **Properties**.
3. Go to the **Connection** tab.
4. Choose the bottom radio button to specify a custom connection profile.
5. Select the connection profile that contains valid Exchange credentials.

> **NOTE:**
> Navigate to **Settings > Connection** to verify which credentials are valid for Exchange.

6. Click **OK** to save the changes.

---
