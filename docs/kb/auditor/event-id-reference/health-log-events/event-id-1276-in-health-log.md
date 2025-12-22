---
description: >-
  Health Log for a SharePoint monitoring plan can show error messages under
  Event ID 1259 related to SharePoint audit configuration, SQL Server access,
  and operation timeouts. This article lists the possible causes and resolutions
  for those errors.
keywords:
  - Event ID 1276
  - Event ID 1259
  - Health Log
  - SharePoint audit
  - SharePoint Core Service
  - Central Administration
  - SharePoint_Config
  - SQL Server
  - timeout
products:
  - auditor
sidebar_label: Event ID 1276 in Health Log
tags: []
title: "Event ID 1276 in Health Log"
knowledge_article_id: kA00g000000H9coCAC
---

# Event ID 1276 in Health Log

## Symptom

One of the following error messages under Event ID 1259 is prompted in Health Log for your SharePoint monitoring plan:

1. Error #1 − `Unable to verify if SharePoint audit was configured correctly due to the following error: There was no endpoint listening at %Central_Administration_URL%/_vti_bin/Netwrix/ConfigurationService.svc that could accept the message. This is often caused by an incorrect address or SOAP action. See InnerException, if present, for more details.`
2. Error #2 − `Unable to verify if SharePoint audit was configured correctly due to the following error: A network-related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible. Verify that the instance name is correct and that SQL Server is configured to allow remote connections. (provider: TCP Provider, error: 0 - No connection could be made because the target machine actively refused it.)`
3. Error #3 − `Unable to verify if SharePoint audit was configured correctly due to the following error: Cannot open database "SharePoint_Config" requested by the login. The login failed. Login failed for user 'username'.`"
4. Error #4 − `Unable to verify if SharePoint audit was configured correctly due to the following error: "The request channel timed out while waiting for a reply after 01:00:00. Increase the timeout value passed to the call to Request or increase the SendTimeout value on the Binding. The time allotted to this operation may have been a portion of a longer timeout.`

## Causes

1. Error #1 − Netwrix Auditor for SharePoint Core Service was uninstalled.
2. Error #2 − The SQL Server instance hosting SharePoint configuration database is inaccessible.
3. Error #3 − The SharePoint configuration database is offline, or the user acting as Farm Account does not have the required rights and permissions to access the configuration database.
4. Error #4 − The timeout (1 hour by default) for the audit configuration operation has expired.

## Resolutions

1. Error #1 − Verify Netwrix Auditor for SharePoint Core Service is still installed in the SharePoint Central Administration server. For additional information on installation, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8 − Install for SharePoint Core Service · v10.6).
2. Error #2 − Verify the SQL Server hosting the SharePoint configuration database is accessible, and that the audited SharePoint farm is operational.
3. Error #3 − Verify the configuration database is online, and that the Farm Account has the necessary rights to access the configuration database.
4. Error #4 − Verify the farm can be reached. It might be required to extend the timeout on a binding − learn more in Configuring Timeout Values on a Binding ⸱ Microsoft: https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/configuring-timeout-values-on-a-binding

## Related articles

- Installation − Install for SharePoint Core Service · v10.6: https://docs.netwrix.com/docs/auditor/10_8
- Configuring Timeout Values on a Binding ⸱ Microsoft: https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/configuring-timeout-values-on-a-binding
