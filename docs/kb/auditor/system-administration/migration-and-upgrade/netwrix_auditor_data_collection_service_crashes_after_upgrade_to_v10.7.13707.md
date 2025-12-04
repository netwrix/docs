---
description: >-
  This article addresses the symptoms, causes, and resolution for the Netwrix Auditor Data Collection Service crashing after an upgrade to version 10.7.13707.
keywords:
  - Netwrix Auditor
  - Data Collection Service
  - Upgrade
  - Error Resolution
  - Health Log
sidebar_label: Data Collection Service Crashes
tags: []
title: "Netwrix Auditor Data Collection Service Crashes After Upgrade to v10.7.13707"
knowledge_article_id: kA0Qk0000001GKTKA2
products:
  - auditor
---

# Netwrix Auditor Data Collection Service Crashes After Upgrade to v10.7.13707

## Symptoms

The following symptoms are present in your Netwrix Auditor environment:

- After upgrading Auditor to v10.7.13707, the Netwrix Auditor Data Collection Service (`NwDataCollectionCoreSvc`) stops or crashes regularly.
- Auditor prompts the following error in the Health Log for previously unaffected monitoring plans:

  ```
  Event ID: 6117
  Monitoring plan: %Monitoring_Plan_name%
  Netwrix Auditor was unable to send Activity Summary: Failed to process a request because the target server is unreachable.
  ```

## Cause

An issue fixed in Auditor v10.7.13710 and later.

## Resolution

Upgrade your Auditor instance to v10.7.13710 or later. Download the executable in [My Products · Netwrix](https://www.netwrix.com/my_products.html).

## Related Articles

- [My Products · Netwrix](https://www.netwrix.com/my_products.html)
- [How to Upgrade Netwrix Auditor](/docs/kb/auditor/system-administration/migration-and-upgrade/how-to-upgrade-netwrix-auditor)