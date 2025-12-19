---
description: >-
  This article explains Event ID 1212 health log errors that occur when Netwrix
  Auditor collects SharePoint content events and provides causes and resolutions
  for three common error messages.
keywords:
  - Event ID 1212
  - SharePoint
  - Health Log
  - Netwrix Auditor
  - monitoring plan
  - timeout
  - configuration database
  - content events
products:
  - auditor
sidebar_label: Event ID 1212 in Health Log
tags: []
title: "Event ID 1212 in Health Log"
knowledge_article_id: kA00g000000H9d7CAC
---

# Event ID 1212 in Health Log

## Symptoms

Your SharePoint monitoring plan prompts one of the following error messages under Event ID 1212 in Health Log:

1. Error 1:

```
An unexpected error occurred while trying to collect content events from the audited SharePoint farm:
Details: Could not find file: %filePath%
```

2. Error 2:

```
An unexpected error occurred while trying to collect content events from the audited SharePoint farm: Details: 
The content type text/html; charset=utf-8 of the response message does not match the content type of the binding (text/xml; charset=utf-8).
If using a custom encoder, be sure that the IsContentTypeSupported method is implemented properly.
The first 45 bytes of the response were: 'Cannot connect to the configuration database.'.
```

3. Error 3:

```
An unexpected error occurred while trying to collect content events from the audited SharePoint farm:
The request change timed out while waiting for a reply after 01:00:00.
Increase the timeout value passed to the call to Request or increase the SendTimeout value on the Binding.
The time allotted to this operation may have been a portion of a longer timeout.
```

## Causes

1. Error 1: Netwrix Auditor failed to collect audit data due to an unexpected error in Auditor. There is no access to the configuration files, or the files are corrupt.

2. Error 2: Netwrix Auditor failed to collect audit data due to an unexpected error in SharePoint. The site collection configuration is corrupt, or there is no access to the SharePoint configuration database.

3. Error 3: Netwrix Auditor failed to collect audit data as the timeout expired due to SharePoint settings. This could be caused by maintenance activity in your network, resulting in failed process requests to SharePoint.

## Resolutions

Follow the resolution for the corresponding error you encounter:

1. Error 1: Recreate your SharePoint monitoring plan. Refer to the following article for additional information on configuration of SharePoint monitoring plans: https://docs.netwrix.com/docs/auditor/10_8 (Monitoring Plans − SharePoint · v10.6).

2. Error 2: Verify the audited site collection can be reached and is configured correctly − refer to the following article for additional information on the initial setup: https://docs.netwrix.com/docs/auditor/10_8 (Configuration − SharePoint · v10.6).

3. Error 3: Verify the audited site collection can be reached. Extend the timeout on a binding − learn more in https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/configuring-timeout-values-on-a-binding (Configuring Timeout Values on a Binding ⸱ Microsoft 🐍).

> **NOTE:** The recommended timeout value is 2 hours.

## Related articles

- https://docs.netwrix.com/docs/auditor/10_8 (Monitoring Plans − SharePoint · v10.6)
- https://docs.netwrix.com/docs/auditor/10_8 (Configuration − SharePoint · v10.6)
- https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/configuring-timeout-values-on-a-binding (Extend the timeout on a binding − learn more in Configuring Timeout Values on a Binding ⸱ Microsoft 🐍)
