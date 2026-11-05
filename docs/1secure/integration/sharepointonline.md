---
title: "SharePoint Online"
description: "SharePoint Online"
sidebar_position: 30
---

# SharePoint Online

You can use the SharePoint Online integration for report (Activity and Risk Assessment
Dashboard) subscriptions. Reports are delivered to a specific folder in SharePoint Online.

| Icon                                                                                          | Description                                                                  |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| ![alerts_editicon](/images/1secure/integration/alerts_editicon.webp) | Edit Icon. Click the Edit Icon to edit the settings of the integration type. |
| ![deletebutton](/images/1secure/integration/deletebutton.webp)       | Bin Icon. Click the Bin icon to delete the SharePoint Online integration.    |

## Add a SharePoint Online Integration in a System

To add the SharePoint Online integration in Netwrix 1Secure:

**Step 1 –** Go to Configuration > **Integrations** and click the **Add** icon to add the SharePoint
integration.

![Integration type pane](/images/1secure/integration/integrationtypewindow.webp)

**Step 2 –** In the displayed Integration type window, click **SharePoint Online** and click
**Next**.

![Configure connection pane](/images/1secure/integration/integrationconfigureconnectionsharepoint.webp)

**Step 3 –** In the Configure connection window, specify the required fields:

- Tenant ID – The tenant ID of the app registered in Microsoft Entra ID. See the
  [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
  for additional information.
- Client ID – The client ID of the app registered in Microsoft Entra ID. See the
  [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
  for additional information.
- Client Secret – The client secret of the app registered in Microsoft Entra ID. The field masks
  its input. The integration uses a client secret, not a certificate. See the
  [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
  for additional information.

See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.

**Step 4 –** Click **Finish**.

1Secure saves the integration only after the server validates it. Validation signs in with the
client credentials flow and then calls Microsoft Graph `GET /v1.0/sites/getAllSites`. It passes only
if that call returns HTTP 200. If validation fails, 1Secure shows the message "Configuration does
not validate with SharePoint Online".

{/* TODO: Confirm whether the Microsoft 365 Permissions topic applies to this integration's app registration. The code checks no specific Graph permission (F103). */}


The SharePoint Online integration is added. The status displays "Ok".

![Integrations list](/images/1secure/integration/integrationssharepointonline.webp)

You can click the **Edit** icon or the **Bin** icon to edit or delete the integration. Editing
shows the same Tenant ID, Client ID, and Client Secret form and runs the same validation as adding.

The Add Integration wizard offers SharePoint Online only if the organization has no SharePoint
Online integration yet, so each organization can have one. The step 2 form shows the text "Connect
to SharePoint Online for report subscriptions."

This integration delivers reports. It is separate from the SharePoint Online data source, which
collects from Microsoft 365 with an app registration credential.

See the [Subscriptions](/docs/1secure/admin/searchandreports/subscriptions.md) and
[Risk Assessment Dashboard](/docs/1secure/admin/riskprofiles/riskassessmentdashboard.md) topics to learn how to
add subscriptions and deliver it to SharePoint Online folder.

## Deliver Reports to SharePoint Online

The SharePoint delivery option in subscriptions appears only if the SharePointOnlineSubscription
feature flag is on. If no SharePoint Online integration exists, the subscription form shows
"Integration required" and links to the Integrations page in Configuration.

In a subscription, select **Upload reports to a designated folder in SharePoint Online** and
complete these fields:

- **SharePoint Online Site URL** – The URL of the SharePoint site, for example
  `https://site.Sharepoint.com/sites/sitename`. It must be an absolute http or https URL with a
  host. Otherwise the message is "SharePoint Online Site Url is required."
- **SharePoint Online Folder Path** – The folder path in SharePoint, relative to the site URL, for
  example `/Shared Documents/FolderName`. It is required. Otherwise the message is "SharePoint
  Folder Path is required."

A subscription must select at least one delivery option. Otherwise the server rejects it with "At
least one delivery configuration should be selected." SharePoint counts as one option.

The first segment of the folder path is the document library name. It must match a library whose web
URL equals the site URL followed by that segment, ignoring case. 1Secure doesn't create the
document library itself.

When you save the subscription, 1Secure tries to create the folder. If no integration exists, the
save fails with `SharePoint Online is not integrated`. If it can't create the folder, the save
fails with "Unable to create folder in SharePoint Online".

1Secure creates a subfolder named after the organization inside the configured folder and uploads
the reports there. It reuses an existing folder. The report file name comes from the subscription
file name, with the export date appended if the name lacks it. The extension is `.csv`, `.xlsx`, or
`.pptx`, by export format. In the file name, the characters `/ \ : # % * < > ? |` become hyphens and
spaces become underscores.

Delivery can fail with these messages:

- "SharePoint Online Integration Settings not found." – the integration is missing at delivery time.
- "Unable to get site in tenant: _tenant_", "Unable to get drive in tenant: _tenant_", or "Unable to
  get folder in tenant: _tenant_" – the site, library, or folder lookup failed.
- "Unable to Upload File with error ..." – the upload returned anything other than HTTP 201 Created.
