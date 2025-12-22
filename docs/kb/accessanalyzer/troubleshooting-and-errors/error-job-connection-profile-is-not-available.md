---
description: >-
  Explains why a Netwrix Access Analyzer job fails with "Job connection profile
  is not available" and how to resolve it by selecting the default connection
  profile in job and job group settings.
keywords:
  - Job connection profile
  - Job connection profile is not available
  - connection profile
  - Netwrix Access Analyzer
  - Use Default Profile
  - job properties
  - connection settings
products:
  - access-analyzer
sidebar_label: 'Error: Job Connection Profile Is Not Available'
tags:
  - troubleshooting-and-errors
title: 'Error: Job Connection Profile Is Not Available'
knowledge_article_id: kA04u00000110lxCAA
---

# Error: Job Connection Profile Is Not Available

## Symptom

A Netwrix Access Analyzer job fails with the following error:

```
Job connection profile is not available
```

## Cause

The connection profile has either never been set up, selected, or has been deleted.

## Resolution

Select the **Use(r) default...** option in both **Connection** and **Job Properties**:

1. In job group, go to **Settings** > **Connection**.
2. Select **Use Default Profile (Inherit from the parent group, if any, or the global Default setting)**.
3. In the job groups tree, right-click the required job and select **Properties**.
4. Select the **Connection** tab > select **User default (Inherit from the patent group, if any, or use the global default setting)**.
5. Click **OK** to save changes.
