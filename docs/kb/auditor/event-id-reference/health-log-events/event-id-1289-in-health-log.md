---
description: >-
  Describes Event ID 1289 entries in the Health Log for SharePoint monitoring
  and provides causes and resolutions for two specific error messages related to
  configuration database access and timeouts.
keywords:
  - Event ID 1289
  - Health Log
  - SharePoint
  - configuration database
  - timeout
  - Netwrix Auditor
  - read access events
  - binding timeout
products:
  - auditor
sidebar_label: Event ID 1289 in Health Log
tags: []
title: "Event ID 1289 in Health Log"
knowledge_article_id: kA00g000000H9cjCAC
---

# Event ID 1289 in Health Log

## Symptoms

You might see one of the following error messages under Event ID 1289 in the **Health Log** for your SharePoint monitoring plan:

1. Error 1:

```text
An unexpected error occurred while trying to collect read access events from the audited SharePoint farm: 
Details: The content type text/html;
charset=utf-8 of the response message does not match the content type of the binding (text/xml; charset=utf-8).
If using a custom encoder, be sure that the IsContentTypeSupported method is implemented properly. The first 45 bytes of the response were:
'Cannot connect to the configuration database.'..
```

2. Error 2:

```text
An unexpected error occurred while trying to collect read access events from the audited SharePoint farm:
The request change timed out while waiting for a reply after 01:00:00.
Increase the timeout value passed to the call to Request or increase the SendTimeout value on the Binding.
The time allotted to this operation may have been a portion of a longer timeout.
```

## Causes

1. Error 1: Netwrix Auditor failed to collect data due to an unexpected error in SharePoint. The site collection configuration is corrupt, or there is no access to the SharePoint configuration database.

2. Error 2: Netwrix Auditor failed to collect data as the timeout expired due to SharePoint settings. This could be caused by maintenance activity in your network, resulting in failed process requests to SharePoint.

## Resolutions

Review the resolution for the corresponding error:

1. Error 1: Verify the farm can be reached and is configured correctly — refer to the following article for additional information on the initial setup: Configuration − SharePoint · v10.6.

2. Error 2: Verify the farm can be reached. It might be required to extend the timeout on a binding — learn more in [Configuring Timeout Values on a Binding ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/configuring-timeout-values-on-a-binding).

## Related articles

- Configuration − SharePoint · v10.6
- [Configuring Timeout Values on a Binding ⸱ Microsoft 🤝](https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/configuring-timeout-values-on-a-binding)
