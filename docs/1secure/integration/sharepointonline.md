---
title: "SharePoint Online"
description: "SharePoint Online"
sidebar_position: 30
---

# SharePoint Online

You can use the SharePoint Online integration for the report (Activity and Risk Assessment
Dashboard) subscriptions. This way, the required reports shall be delivered to a specific folder in
SharePoint Online.

| Icon                                                                                          | Description                                                                  |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| ![alerts_editicon](/images/1secure/integration/alerts_editicon.webp) | Edit Icon. Click the Edit Icon to edit the settings of the integration type. |
| ![deletebutton](/images/1secure/integration/deletebutton.webp)       | Bin Icon. Click the Bin icon to delete the SharePoint Online integration.    |

## Add a SharePoint Online Integration in a System

Follow the steps to add the SharePoint Online integration in Netwrix 1Secure.

**Step 1 –** Go to Configuration > **Integrations** and click the **Add** icon to add the SharePoint
integration.

![Integration type pane](/images/1secure/integration/integrationtypewindow.webp)

**Step 2 –** In the displayed Integration type window, click **SharePoint Online** and click
**Next**.

![Configure connection pane](/images/1secure/integration/integrationconfigureconnectionsharepoint.webp)

**Step 3 –** In the Configure connection window, specify the required fields:

- Client ID – The client ID of the app registered in Microsoft Entra ID. See the
  [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
  for additional information.
- Tenant ID – The tenant ID of the app registered in Microsoft Entra ID. See the
  [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
  for additional information.
- Client Secret – The client secret of the app registered in Microsoft Entra ID. See the
  [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
  for additional information.

See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.

**Step 4 –** Click **Finish**.

:::note
You must firstly add a Sites.ReadWrite.All permission in your Microsoft Entra admin
center. See the [ Microsoft 365 Permissions](/docs/1secure/configuration/registerconfig/permissions.md) topic for
additional information.
:::


The SharePoint Online integration is added now. The status displays "Ok" in green.

![Integrations list](/images/1secure/integration/integrationssharepointonline.webp)

You can click the **Edit** icon or the **Bin** icon to edit or delete the integration.

See the [Subscriptions](/docs/1secure/admin/searchandreports/subscriptions.md) and
[Risk Assessment Dashboard](/docs/1secure/admin/riskprofiles/riskassessmentdashboard.md) topics to learn how to
add subscriptions and deliver it to SharePoint Online folder.
