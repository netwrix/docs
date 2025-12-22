---
description: >-
  Explains Event ID 1205 that appears in the Health Log for SharePoint
  monitoring in Netwrix Auditor, lists possible causes, and provides resolutions
  to troubleshoot the issue.
keywords:
  - Event ID 1205
  - Health Log
  - SharePoint
  - Central Administration
  - Netwrix Auditor
  - TCP error 10060
  - iisreset
  - audit log trimming
products:
  - auditor
sidebar_label: Event ID 1205 in Health Log
tags: []
title: "Event ID 1205 in Health Log"
knowledge_article_id: kA00g000000H9dGCAS
---

# Event ID 1205 in Health Log

## Symptom

The following error message under Event ID 1205 is prompted in Health Log for your SharePoint monitoring plan:

```text
The following unexpected error has occurred: <%error_message%>.
```

## Causes

- `Could not connect to <URL>/_vti_bin/Netwrix/ManagementService.svc. TCP error code 10060: A connection attempt failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond <address>`
  - Missing network connection between the computer with Netwrix Auditor installed and the computer hosting SharePoint Central Administration.
  - WebService is not responding.
- `Insufficient winsock resources available to complete socket connection initiation.`
  - Insufficient system resources on the computer with SharePoint Central Administration installed.
- `The requested service <service name> could not be activated`
  - Insufficient system resources on the computer with SharePoint Central Administration installed.
  - Access to the Central Administration site is performed via the https protocol not specified in the Alternate Access Mapping.
  - Access to the Central Administration site is performed through alternative access.
  - IIS Bindings contain several Host names for the Central Administration site.
- `Cannot create a file when that file already exists.`
  - Audit log trimming is not configured correctly.
- `Access to the path %PATH% is denied.`
  - Events auditing settings are not cofigured correctly.

## Resolutions

Proceed with one of the following solutions depending on the error:

- Make sure that SharePoint Central Administration is reachable.
- Free or add system resources and execute the `iisreset` command.
- Specify the URL in the Alternate Access Mapping for the Central Administration site, or use a different URL when creating a monitoring plan.
- Leave one Host Name for the Central Administration site in IIS Bindings.
- Configure Audit log trimming. For additional info, refer to the following article: Configuration – SharePoint: Configure Audit Log Trimming ⸱ v10.6.
- Configure events auditing settings. For additional info, refer to the following link: Configuration – SharePoint: Configure Events Auditing Settings ⸱ v10.6.

## Related articles

- Configuration – SharePoint: Configure Audit Log Trimming ⸱ v10.6
- Configuration – SharePoint: Configure Events Auditing Settings ⸱ v10.6
