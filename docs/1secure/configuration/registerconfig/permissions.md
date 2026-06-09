---
title: "Microsoft 365 Permissions"
description: "Microsoft 365 Permissions"
sidebar_position: 10
---

# Microsoft 365 Permissions

This page lists the permissions required for an application you registered in Microsoft Entra ID to
audit the following Microsoft 365 data sources:

- Microsoft Entra ID
- SharePoint Online
- Exchange Online

## Permissions to Audit Microsoft Entra ID

:::note
The registered application must be assigned the Global Administrator or Exchange
Administrator role for Microsoft Entra ID state collection. See the
[Assign Roles to the App](/docs/1secure/configuration/registerconfig/registerconfig.md#assign-roles-to-the-app) section for instructions.
:::

The following permissions are required to audit Microsoft Entra ID. Add each group of permissions
separately using the steps in
[Grant Permissions to the App](/docs/1secure/configuration/registerconfig/registerconfig.md#grant-permissions-to-the-app).

### Microsoft Graph

Go to **API Permissions** > **Add a permission** > **Microsoft Graph** > **Application permissions**. Add each scope below, then click **Add permissions**.

| Category | Permission | Description |
| --- | --- | --- |
| Directory | Directory.Read.All | Read directory data |
| AuditLog | AuditLog.Read.All | Read all audit log data |
| Policy | Policy.Read.All | Read your organization's policies. This permission is required to collect state-in-time reports. |

### Office 365 Management APIs

:::note
Office 365 Management APIs permissions are required by all cloud connectors.
:::

Go to **API Permissions** > **Add a permission** > **Office 365 Management APIs** > **Application permissions**. Add each scope below, then click **Add permissions**.

| Category | Permission | Description |
| --- | --- | --- |
| ActivityFeed | ActivityFeed.Read | Read activity data for your organization |

### Office 365 Exchange Online

:::note
To access the Office 365 Exchange Online API, click the **APIs my organization uses** tab
on the Request API Permissions pane and search for **Office 365 Exchange Online**.
:::

Go to **API Permissions** > **Add a permission** > **APIs my organization uses** > search for **Office 365 Exchange Online** > **Application permissions**. Add each scope below, then click **Add permissions**.

| Category | Permission | Description |
| --- | --- | --- |
| Exchange | Exchange.ManageAsApp | Manage Exchange As Application. This permission is required to collect state-in-time reports. |
<!-- END UPDATED -->


## Permissions to Audit SharePoint Online

The following permissions are required to audit SharePoint Online. Add each group of permissions
separately using the steps in
[Grant Permissions to the App](/docs/1secure/configuration/registerconfig/registerconfig.md#grant-permissions-to-the-app).

### Microsoft Graph

Go to **API Permissions** > **Add a permission** > **Microsoft Graph** > **Application permissions**. Add each scope below, then click **Add permissions**.

| Category | Permission | Description |
| --- | --- | --- |
| Sites | Sites.Read.All | Read items in all site collections |
| Sites | Sites.ReadWrite.All | Read and write items in all site collections |
| Directory | Directory.Read.All | Read directory data |

:::note
The Sites.ReadWrite.All permission is only required for SharePoint Online integration (for
example, when you have to save subscriptions to a SharePoint location).
:::

### SharePoint

:::note
To access the SharePoint API, click the **APIs my organization uses** tab on the Request API Permissions pane and search for **SharePoint**.
:::

Go to **API Permissions** > **Add a permission** > **APIs my organization uses** > search for **SharePoint** > **Application permissions**. Add each scope below, then click **Add permissions**.

| Category | Permission | Description |
| --- | --- | --- |
| Sites | Sites.FullControl.All | Have full control of all site collections. This permission is required to collect state-in-time reports. |

### Office 365 Management APIs

:::note
Office 365 Management APIs permissions are required by all cloud connectors.
:::

Go to **API Permissions** > **Add a permission** > **Office 365 Management APIs** > **Application permissions**. Add each scope below, then click **Add permissions**.

| Category | Permission | Description |
| --- | --- | --- |
| ActivityFeed | ActivityFeed.Read | Read activity data for your organization |
<!-- END UPDATED -->


## Permissions to Audit Exchange Online

The following permissions are required to audit Exchange Online. Add each group of permissions
separately using the steps in
[Grant Permissions to the App](/docs/1secure/configuration/registerconfig/registerconfig.md#grant-permissions-to-the-app).

### Office 365 Management APIs

:::note
Office 365 Management APIs permissions are required by all cloud connectors.
:::

Go to **API Permissions** > **Add a permission** > **Office 365 Management APIs** > **Application permissions**. Add each scope below, then click **Add permissions**.

| Category | Permission | Description |
| --- | --- | --- |
| ActivityFeed | ActivityFeed.Read | Read activity data for your organization |
<!-- END UPDATED -->
