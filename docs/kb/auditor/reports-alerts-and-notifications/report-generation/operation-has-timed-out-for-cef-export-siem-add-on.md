---
description: >-
  This article explains how to troubleshoot and resolve the "The operation has
  timed out" error when running the Netwrix Auditor Add-on for SIEM CEF Export
  PowerShell script.
keywords:
  - Netwrix Auditor
  - CEF Export
  - SIEM
  - Integration API
  - timeout
  - GetResponse
  - PowerShell
  - Cookie.bin
products:
  - auditor
sidebar_label: Operation Has Timed Out for CEF Export SIEM Add-on
tags: []
title: "Operation Has Timed Out for CEF Export SIEM Add-on"
knowledge_article_id: kA04u00000110u1CAA
---

# Operation Has Timed Out for CEF Export SIEM Add-on

## Symptom

In Netwrix Auditor Add-on for SIEM, the PowerShell script prompts the following error:

```
Cannot acquire Activity Records through Integration API endpoints due to 'Exception calling "GetResponse" with "0" argument(s): "The operation has timed out"'
```

## Causes

- Default TCP port (9699) for API is closed.
- Insufficient hardware resources.

## Troubleshooting

Decrease the collection time interval to a few minutes to verify you can run the script:

1. Open the CEF Export Add-on script with a text editor and search for the following line:

```powershell
$from = (Get-Date).AddMonths(-1).ToString("yyyy-MM-ddTHH:mm:sszzz");
```

2. Replace it with the following line:

```powershell
$from = (Get-Date).AddMinutes(-2).ToString("yyyy-MM-ddTHH:mm:sszzz");
```

   You can use various values in the `AddMinutes` parameter parentheses (e.g., `-1`, `-3`, etc.) to see if any data is retrieved.

3. Run the script.

**IMPORTANT:** Revert the changes to the script and delete the `Cookie.bin` file from the folder containing the script after the troubleshooting stage.

## Resolutions

- Verify that the required ports are open. Refer to the following article for additional information on ports required for Netwrix Auditor add-ons to operate: https://docs.netwrix.com/docs/auditor/10_8 API Ports · v10.6).
- Insufficient RAM may lead to the timeout error. Ensure that you have enough RAM to run the export—refer to the following article for general recommendations on deployment in various environments: https://docs.netwrix.com/docs/auditor/10_8 Deployment Scenarios · v10.6).

## Related Articles

- https://docs.netwrix.com/docs/auditor/10_8 API Ports · v10.6)
- https://docs.netwrix.com/docs/auditor/10_8 Deployment Scenarios · v10.6)
