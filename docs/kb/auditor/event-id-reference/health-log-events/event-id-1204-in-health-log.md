---
description: >-
  This article describes causes and resolutions for Event ID 1204 ("Unable to
  establish connection to the remote WebService") that appears in the Health Log
  for a SharePoint monitoring plan in Netwrix Auditor.
keywords:
  - Event ID 1204
  - Health Log
  - SharePoint
  - Netwrix Auditor
  - WebService
  - TCP 10060
  - Central Administration
  - Monitoring plan
  - IIS Bindings
products:
  - auditor
sidebar_label: Event ID 1204 in Health Log
tags: []
title: "Event ID 1204 in Health Log"
knowledge_article_id: kA00g000000H9dKCAS
---

# Event ID 1204 in Health Log

## Symptom

The following error message under Event ID 1204 is prompted in Health Log for your SharePoint monitoring plan:

```text
Unable to establish connection to the remote WebService
```

## Causes

Refer to the following possible causes based on the error description:

- 
  ```text
  Could not connect to %URL%/_vti_bin/Netwrix/ManagementService.svc.
  TCP error code 10060: A connection attempt failed because the connected party did not properly respond after a period of time,
  or established connection failed because connected host has failed to respond %address%
  ```
  - There is no network connection between the Netwrix Auditor host and the SharePoint Central Administration host, or the WebService is not responding.

- 
  ```text
  The requested service %service_name% could not be activated
  ```
  - The system resources of the SharePoint Central Administration host are insufficient.
  - Access to the Central Administration site is performed via the https protocol, and it is not specified in the Alternate Access Mapping.
  - Access to the Central Administration site is performed via alternative access, and the IIS Bindings contains several host names for the Central Administration site.

## Resolutions

1. Verify SharePoint Central Administration is accessible.

2. Free or add system resources and execute the `iisreset` command in elevated Command Prompt.

3. Verify the correct SharePoint Central Administration URL is specified in the monitoring plan settings via **Monitoring Plans** > select `%SharePoint_plan%` > **Edit** > select the item and click **Edit item** > modify the **SharePoint Central Administration URL** > click **Save & Close**.

4. Specify one **Host Name** for the Central Administration site in IIS Bindings.
