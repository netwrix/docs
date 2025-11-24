---
description: >-
  Describes causes and resolutions for Event ID 1208 in the Health Log when
  automatic SharePoint Core Service deployment fails in Netwrix Auditor.
keywords:
  - Event ID 1208
  - Health Log
  - SharePoint
  - Core Service
  - deployment
  - Timeout expired
  - Netwrix Auditor
  - monitoring plan
products:
  - auditor
sidebar_label: Event ID 1208 in Health Log
tags: []
title: "Event ID 1208 in Health Log"
knowledge_article_id: kA00g000000H9cNCAS
---

# Event ID 1208 in Health Log

## Symptom

The following error message under Event ID 1208 is prompted in Health Log for your SharePoint monitoring plan:

`Automatic Netwrix Auditor for SharePoint Core Service deployment failed.`

## Causes and Resolutions

Refer to the entries below for possible causes and resolutions based on event descriptions.

### `Fatal error during installation`

- Cause: The **Timeout expired** error is prompted after SharePoint Core Service installation has taken over 10 minutes.
  **Resolution:** Refer to the following article for additional information: [Timeout Expired Error on SharePoint Core Service Deployment](/docs/kb/auditor/configuration-and-setup/sharepoint-and-teams-auditing/timeout-expired-error-on-sharepoint-core-service-deployment)

- Cause: An invalid SharePoint Central Administration URL was specified during monitoring plan creation.
  **Resolution:**
  1. Edit the Item URL via **Monitoring Plans** > select ` %SharePoint_plan% ` > **Edit** > select the item and click **Edit item** > modify the SharePoint Central Administration URL > click **Save & Close**.

- Cause: An invalid SharePoint Central Administration server was specified during monitoring plan creation. The specified server does not belong to the audited farm.
  **Resolution:**
  1. Edit the SharePoint Central Administration server FQDN in **Monitoring Plans** > select ` %SharePoint_plan% ` > **Edit** > select the item and click **Edit item** > **Core Service** tab > modify the FQDN and click **Save & Close**.

- Cause: SharePoint solution or SharePoint Core Service has already been installed in the SharePoint farm, but the solution has not been deployed yet.
  **Resolution:**
  1. Make sure that the list of installed programs on the target computer does not contain **Netwrix Auditor for SharePoint Core Service**, and uninstall it if it does.
  2. If not, open the SharePoint Central Administration site and navigate to **System Settings** > **Manage farm solutions**. Locate the `netwrix.sharepoint.audit.wsp` solution and delete it.
  3. Update the monitoring plan.

- Cause: The data collecting account does not have the required rights and permissions for automatic Core Service deployment.
  **Resolution:**
  1. Specify a different data collecting account for the affected monitoring plan or grant corresponding permissions to the current account:
     - Navigate to your SharePoint monitoring plan > **Edit Item** > **General**, and enter user name and password for the custom account.
     - Grant the current account the necessary rights and permissions — refer to the following article for additional information: [Permissions for SharePoint Auditing](https://docs.netwrix.com/docs/auditor/10_8/configuration/sharepoint/permissions)

- Cause: SharePoint Central Administration is not functioning properly due to connection problems with the SharePoint Configuration Database, or some other unexpected error.
  **Resolution:**
  1. Make sure SharePoint Central Administration is functioning properly.

- Cause: SharePoint Central Administration URL has been specified without a port number (`Fatal error during installation`).
  **Resolution:**
  1. Verify the Administration URL — Edit the Item URL via **Monitoring Plans** > select ` %SharePoint_plan% ` > **Edit** > select the item and click **Edit item** > modify the SharePoint Central Administration URL > click **Save & Close**.

### `Unable to connect to the remote server.`

- Cause: An invalid SharePoint Central Administration port has been specified.
  **Resolution:**
  1. Verify the Administration URL — Edit the Item URL via **Monitoring Plans** > select ` %SharePoint_plan% ` > **Edit** > select the item and click **Edit item** > modify the SharePoint Central Administration URL > click **Save & Close**.

- Cause: The port of SharePoint Central Administration is blocked in the Windows Firewall settings in the target server, or in the Netwrix Auditor host.
  **Resolution:**
  1. Refer to the following article for additional information on required ports: [SharePoint Ports](https://docs.netwrix.com/docs/auditor/10_8/configuration/sharepoint/ports)

- Cause: The computer that hosts SharePoint Central Administration is not reachable.
  **Resolution:**
  1. Make sure there is network connection to the Central Administration host.

### `The remote name could not be resolved.`

- Cause: An invalid SharePoint Central Administration host has been specified.
  **Resolution:**
  1. Verify the Administration URL — Edit the Item URL via **Monitoring Plans** > select ` %SharePoint_plan% ` > **Edit** > select the item and click **Edit item** > modify the SharePoint Central Administration URL > click **Save & Close**.

### `The network path was not found.`

- Cause: The target server for Core Service deployment has been specified incorrectly.
  **Resolution:**
  1. Edit the SharePoint Central Administration server FQDN in **Monitoring Plans** > select ` %SharePoint_plan% ` > **Edit** > select the item and click **Edit item** > **Core Service** tab > modify the FQDN and click **Save & Close**.

### `Access is denied.`

- Cause: The data collecting account used to install Core Service does not have the required rights and permissions in the target server.
  **Resolution:**
  1. Specify a different data collecting account for the affected monitoring plan or grant corresponding permissions to the current account:
     - Navigate to your SharePoint monitoring plan > **Edit Item** > **General**, and enter user name and password for the custom account.
     - Grant the current account the necessary rights and permissions — refer to the following article for additional information: [Permissions for SharePoint Auditing](https://docs.netwrix.com/docs/auditor/10_8/configuration/sharepoint/permissions)

### `The system cannot find the file specified.`

- Cause: The target server for Core Service deployment has been specified as an alias that is not specified in the DNS and that cannot be authenticated in the local admin share (`\serveradmin$`) in the target Core Service deployment server.
  **Resolution:**
  1. Edit the SharePoint Central Administration server FQDN in **Monitoring Plans** > select ` %SharePoint_plan% ` > **Edit** > select the item and click **Edit item** > **Core Service** tab > modify the FQDN and click **Save & Close**.

### `The pipe has been ended.`

- Cause: The SharePoint Central Administration server was restarted or shut down during the automatic Core Service deployment. Unable to install Netwrix Auditor for SharePoint Core Service on the target server.
  **Resolution:**
  1. Retry installation:
     - To retry the automatic deployment, update the SharePoint monitoring plan.
     - For additional information on manual installation of SharePoint Core Service, refer to the following article: [Install for SharePoint Core Service](https://docs.netwrix.com/docs/auditor/10_8/install/sharepointcoreservice)

## Related articles

- [Timeout Expired Error on SharePoint Core Service Deployment](/docs/kb/auditor/configuration-and-setup/sharepoint-and-teams-auditing/timeout-expired-error-on-sharepoint-core-service-deployment)
- [Permissions for SharePoint Auditing](https://docs.netwrix.com/docs/auditor/10_8/configuration/sharepoint/permissions)
- [SharePoint Ports](https://docs.netwrix.com/docs/auditor/10_8/configuration/sharepoint/ports)
- [Install for SharePoint Core Service](https://docs.netwrix.com/docs/auditor/10_8/install/sharepointcoreservice)

