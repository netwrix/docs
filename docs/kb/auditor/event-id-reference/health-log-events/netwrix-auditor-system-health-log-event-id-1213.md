---
description: >-
  Explains Event ID 1213 in the Netwrix Auditor System Health log, lists three
  specific error message types, their likely causes, and recommended
  resolutions.
keywords:
  - Event ID 1213
  - System Health
  - SharePoint
  - Netwrix Auditor
  - monitoring plan
  - configuration database
  - timeout
products:
  - auditor
sidebar_label: Netwrix Auditor System Health Log - Event ID 1213
tags: []
title: "Netwrix Auditor System Health Log - Event ID 1213"
knowledge_article_id: kA00g000000H9d0CAC
---

# Netwrix Auditor System Health Log - Event ID 1213

Netwrix Auditor System Health Log contains the following EventID: **1213**

The Event ID may contain 3 error types:

### Error type 1
*An unexpected error occurred while trying to collect security events from the audited SharePoint farm: Details: Could not find the file:* ` %programdata%Netwrix AuditorNetwrix Auditor for SharePointConfiguration<Managed Object GUID*><any file>.`

### Error type 2
*An unexpected error occurred while trying to collect security events from the audited SharePoint farm: Details: The content type text/html; charset=utf-8 of the response message does not match the content type of the binding (text/xml; charset=utf-8). If using a custom encoder, be sure that the IsContentTypeSupported method is implemented properly. The first 45 bytes of the response were: 'Cannot connect to the configuration database.'..*

### Error type 3
*An unexpected error occurred while trying to collect security events from the audited SharePoint farm: The request change timed out while waiting for a reply after 01:00:00. Increase the timeout value passed to the call to Request or increase the SendTimeout value on the Binding. The time allotted to this operation may have been a portion of a longer timeout.*

---

## Review the possible error causes

### Error type 1
The product failed to collect audit data due to a an unexpected error on the Netwrix Auditor side. There is no access to the configuration files, or the file is corrupt.

### Error type 2
The product failed to collect audit data due to an unexpected error on the SharePoint side. The site collection configuration is corrupt, or there is no access to the SharePoint configuration database.

### Error type 3
The product failed to collect audit data as the timeout expired on the SharePoint side. This can be due to maintenance activity in your network, which results in the failure to process requests on the SharePoint side.

---

## Resolution

Depending on the received error type, follow the corresponding resolution prompts:

### Error type 1
Try re-creating the monitoring plan

### Error type 2
Make sure that the audited site collection is reachable.

### Error type 3
Make sure that the audited SharePoint sites are operational. If this error is logged once, this does not lead to data loss, and all events were collected within 30 minutes after the error occurred. If this error is logged several times, contact your SharePoint administrator.

*To view your monitoring plan GUID, navigate to* ` %programdata%Netwrix AuditorAudit CoreConfig ServerConfiguration.xml`. *Find your monitoring plan name in the configuration file:*

```
- <n n="ManagedObjects">
....
<a n="Name" t="2" v="your_SharePoint_Monitoring_plan_name"/>
```
