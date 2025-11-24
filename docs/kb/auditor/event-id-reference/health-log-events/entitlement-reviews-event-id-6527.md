---
description: >-
  Netwrix Auditor logs show Event ID 6527 indicating the Entitlement Reviews
  license has expired while Access Reviews collectors remain active. This
  article explains the cause and steps to stop the errors using the Access
  Reviews Configuration Tool.
keywords:
  - Event ID 6527
  - Entitlement reviews
  - Access Reviews
  - license expired
  - Netwrix Auditor
  - Health Logs
  - configuration tool
  - collectors
  - error message
products:
  - auditor
sidebar_label: Entitlement Reviews — Event ID 6527
tags: []
title: "Entitlement Reviews — Event ID 6527"
knowledge_article_id: kA04u00000110hgCAA
---

# Entitlement Reviews — Event ID 6527

## Symptom

Either **Netwrix Auditor** Health Logs or Event Viewer logs contain multiple Event ID 6527 errors:

```text
Event ID: 6527
License name: Entitlement reviews. 

Your subscription plan for Netwrix Auditor has expired.
```

![image001.png]./../0-images/ka04u0000011688_0EM4u000008LCjZ.png)

## Cause

Netwrix Auditor Access Reviews license has expired with Access Reviews collectors still set up for data collection.

## Resolution

1. Run the Access review configuration tool — refer to the following article for information on the location: Set Up the Access Reviews Configuration Tool.
2. Uncheck all the sources checkboxes, click **Save** and close the application.

In case you receive an error message:

```text
Netwrix Auditor Access Reviews is no longer installed.
```

Click **OK** to proceed to the configuration tool.

