---
title: "Integration API"
description: "Integration API"
sidebar_position: 70
---

# Integration API

Netwrix Auditor Netwrix Risk Insights uses Netwrix Auditor Integration API. Although you can
always use the add-on as is, Netwrix encourages customers to create their own integration
add-ons. You can tailor add-ons created with Netwrix Auditor Integration API capabilities to your
specific environment and business requirements.

Netwrix Auditor Integration API—endless integration, auditing, and reporting capabilities.

The Netwrix Auditor Integration API provides access to audit data collected by Netwrix Auditor
through REST API endpoints. According to the RESTful model, each operation maps to a URL.
Integration API provides the following capabilities:

- Data in: Solidify security and meet regulatory compliance standards by enabling visibility into
  what is going on in any third-party application.
- Data out: Further automate your business processes, IT security and operations workflows by
  enriching third-party solutions with actionable audit data.

![diagram_thumb_0_0](/images/auditor/10.9/api/diagram_thumb_0_0.webp)

Netwrix Auditor Integration API operates with XML- and JSON-formatted Activity Records—minimal
chunks of audit data containing information on _who_ changed _what_, _when_, and _where_ this change
occurred. XML format is set as default.

With Integration API you can write Activity Records to the SQL Server-based Audit Database and
access audit data from remote computers. Also, Netwrix prepares add-ons—sample scripts—to help you
integrate your SIEM solutions with Netwrix Auditor.

Netwrix Auditor Integration API Service is responsible for processing API requests. Netwrix Auditor
installs this component along with Netwrix Auditor Server and enables it automatically. By default, Netwrix
Auditor Integration API works over HTTPS protocol using an automatically generated certificate.
Default communication port is 9699.

Netwrix doesn't limit which applications you can use with Integration API. You can write
RESTful requests using any tool or application you prefer—cURL, Telerik Fiddler, various Google
Chrome or Mozilla FireFox plug-ins, etc.

## Integration Option

Integration is a custom item type that helps diversify activity records coming from custom sources
and integrations (e.g., Amazon Web Services, Cisco devices) within Netwrix API data source. It is
optional to add this item to your monitoring plan.

Complete the following fields:

| Option                              | Description                                                                                                                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Specify a name for your integration | Specify the add-on name or provide any other name that distinguishes this custom source from any other. This name appears in the Item filter in interactive search results. |

Enable Integration API in Settings → Integrations tab. See
[Integrations](/docs/auditor/10.9/admin/settings/integrations.md) for more information.

Ensure to provide a monitoring plan name and item name in activity records before importing data.
