---
description: >-
  This article provides troubleshooting steps for resolving the "503 Service Unavailable" error encountered when loading the NDC Dashboard.
keywords:
  - HTTP Error 503
  - NDC Dashboard
  - IIS Application Pool
sidebar_label: 503 Service Unavailable
tags: []
title: "Error: 503 Service Unavailable NDC Dashboard"
knowledge_article_id: kA00g000000PbcsCAC
products:
  - data-classification
---

# Error: 503 Service Unavailable NDC Dashboard

## Symptom

When attempting to load the Dashboard, you receive the following error:

```
HTTP Error 503. The service is unavailable.
```

## Cause

This error is caused by the **conceptQSAppPool** being stopped.

## Resolution

In most situations, you can resolve this by simply restarting the application pool in IIS and refreshing the QS page.

If the error persists after the application pool has been restarted, then the issue is most likely tied to the application pool identity, which can be seen listed in the **Identity** column in the screenshot below. The **ConceptQSAppPool** needs local admin rights to prevent it from crashing. Granularly, the **ConceptQSAppPool** identity needs the **Logon as batch** and **Logon as service** user rights assignment applied. Either grant the existing identity local admin rights or change the identity to an existing account with local admin rights.

For example:

![NDC Dashboard Identity Settings](https://kb.netwrix.com/wp-content/uploads/2020/04/503-3-1024x541.png)

To assign granularly:

1. Right-click on the **conceptQSAppPool** and select **Advanced Settings...**
2. Scroll down to **Identity** and enter a new username in the **domain\username** format.
3. Click **OK** and start the application pool.

The NDC dashboard will load in the browser.

If none of the solutions above solve the issue, check **Windows Event Log** → **Applications** → **NDC** for errors.