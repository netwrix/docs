---
description: >-
  Explains why Threat Prevention reports an expired license even when the
  license is valid, and how to resolve and troubleshoot the issue.
keywords:
  - threat prevention
  - license expired
  - service account
  - local administrators
  - Unblock
  - SIEnterpriseManager
  - StealthIntercept
  - machineID
products:
  - threat-prevention
sidebar_label: Threat Prevention License Has Prematurely Expired
tags: []
title: "Threat Prevention License Has Prematurely Expired"
knowledge_article_id: kA0Qk0000000Mq9KAE
---

# Threat Prevention License Has Prematurely Expired

## Symptoms

- The following message is prompted in Threat Prevention Enterprise Manager:

```text
Your Threat Prevention license has expired, please install a new license in order to run.
Your machineID is: %machineID%, please reference your machineID when requesting a license.
```

- The license is supposed to be active and valid.

## Cause

The account used to run Threat Prevention Enterprise Manager Service is not included in the local administrators group.

## Resolution

Include the service account used to run Threat Prevention Enterprise Manager Service in the local administrators group. Refer to the following article for additional information on requierements for installation and application use: https://docs.netwrix.com/docs/threatprevention/7_5 (Requirements − Console Server Requirements · v7.3).

## Troubleshooting License Issues

Refer to the following steps in case adding the account to the local administrators group did not help:

1. Verify the license file has the **Unblock** check checked. Right-click the license file > select **Properties** > check the **Unblock** check and click **Apply**.
2. Rename the file to `StealthIntercept` (keeping the original extension) and make sure the original file is cut and pasted to the `SIEnterpriseManager` directory instead of being copied.

## Related articles

- https://docs.netwrix.com/docs/threatprevention/7_5 (Requirements − Console Server Requirements · v7.3)
