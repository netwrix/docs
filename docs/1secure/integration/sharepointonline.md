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
**Next**. The form shows the text "Connect to SharePoint Online for report subscriptions."

![Configure connection pane](/images/1secure/integration/integrationconfigureconnectionsharepoint.webp)

**Step 3 –** In the Configure connection window, specify the required fields:

- Tenant ID – The tenant ID of the app registered in Microsoft Entra ID. See the
  [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
  for additional information.
- Client ID – The client ID of the app registered in Microsoft Entra ID. See the
  [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
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


The SharePoint Online integration is added. The status displays "Ok" in green.

![Integrations list](/images/1secure/integration/integrationssharepointonline.webp)

You can click the **Edit** icon or the **Bin** icon to edit or delete the integration. Editing
shows the same Tenant ID, Client ID, and Client Secret form and runs the same validation as adding.

This integration delivers reports. It is separate from the SharePoint Online data source, which
collects from Microsoft 365 with an app registration credential.

See the [Subscriptions](/docs/1secure/admin/searchandreports/subscriptions.md) and
[Risk Assessment Dashboard](/docs/1secure/admin/riskprofiles/riskassessmentdashboard.md) topics to learn how to
add subscriptions and deliver it to SharePoint Online folder.
