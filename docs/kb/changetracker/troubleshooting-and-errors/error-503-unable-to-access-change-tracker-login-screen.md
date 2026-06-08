---
description: >-
  Resolving Error 503 when the Netwrix Change Tracker login screen is
  unavailable due to the web application pool not running or incorrect
  application pool identity credentials.
keywords:
  - error 503
  - application pool
  - IIS
  - identity credentials
  - server unavailable
  - IIS Manager
  - application pool stopped
  - Change Tracker login
  - 503 Service Unavailable
  - web application pool identity
products:
  - change-tracker
sidebar_label: Error 503 — Unable to Access Login Screen
tags:
  - kb
  - troubleshooting-and-errors
title: "Error 503 — Unable to Access Change Tracker Login Screen"
knowledge_article_id: ""
---

# Error 503 — Unable to Access Change Tracker Login Screen

## Symptom

The following error appears when attempting to access Netwrix Change Tracker:

```text
Connection to server lost
Server unavailable since <datestamp> (local),
(503)
```

## Cause

The Change Tracker web application pool is not running. The application pool may fail to start if the custom **Identity** user has incorrect credentials.

## Resolution

1. In the left pane of **IIS Manager**, select the **Application Pools** page.
2. Locate the Change Tracker web application pool, right-click it, and select **Advanced Settings...**
3. Under the **Process Model** section, locate the **Identity** node, select it, and click the ellipsis button.
4. Click **Set...**, and specify new credentials for the account to run the application pool.
5. Click **OK** > **OK** > **OK** to save changes. Right-click the pool and select **Start** to run it.
