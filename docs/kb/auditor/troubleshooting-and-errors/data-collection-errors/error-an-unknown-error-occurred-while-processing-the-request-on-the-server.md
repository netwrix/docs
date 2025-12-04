---
description: >-
  This article explains how to resolve a 500 Server Error
  (Sys.WebForms.PageRequestManagerServerErrorException) that occurs when running
  State-in-Time reports with large amounts of data by extending the report
  timeout on the Report Manager URL.
keywords:
  - State-in-Time
  - Report Manager
  - timeout
  - 500
  - Sys.WebForms.PageRequestManagerServerErrorException
  - Netwrix Auditor
  - report timeout
products:
  - auditor
sidebar_label: 'Error: An Unknown Error Occurred While Processing '
tags: []
title: 'Error: An Unknown Error Occurred While Processing the Request on the Server'
knowledge_article_id: kA0Qk0000000PmPKAU
---

# Error: An Unknown Error Occurred While Processing the Request on the Server

## Symptom

When running State-in-Time reports for items that contain large amount of data, the report completes with the following error:

```
 
        Sys.WebForms.PageRequestManagerServerErrorException: An unknown error occurred while processing the request on the server. 
        The status code returned from the server was: 500.
            
```

## Cause

The error occurs due to large amount of processed data.

## Resolution

Extend the report timeout on the on the Report Manager URL. For that:

1. Go to your Report Manager URL: in Netwrix Auditor, navigate to **Settings** -> **Audit Database** and click the **Report Manager URL** link.
2. Find the problematic report and open it.
3. Click the 3 dots in the Reports Manager for the report itself, then click **Manage**.
4. In the **Advanced** section, modify the report timeout settings.  
   ![User-added image]./../0-images/ka0Qk0000001ZBp_0EMQk000002dUpt.png)

