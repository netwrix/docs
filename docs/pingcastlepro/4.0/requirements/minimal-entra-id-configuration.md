---
title: "Minimal Entra ID configuration"
description: "Configure the minimum Microsoft Entra ID settings that PingCastle Pro needs."
sidebar_position: 60
---

# Minimal Entra ID Configuration

At the end of the procedure, you receive a **Tenant ID** and a **Client ID**.

**Connect to \"Azure Portal\" located at https://portal.azure.com**

![](/images/pingcastlepro/4.0/proinstall/image4.webp)

Then authenticate.

Select the App Registrations pane.

![App Registrations pane in the Azure Portal](/images/pingcastlepro/4.0/proinstall/image5.webp)

Click **New registration** from the toolbar at the top. A **Register an app** dialog opens.

![](/images/pingcastlepro/4.0/proinstall/image6.webp)

Add a name but also the redirect Uri.

:::note
The redirect URI must point to the fully qualified domain name (FQDN) of the server you are accessing. It must start with HTTPS and end with `/signin-oidc`.
:::

![Name and redirect URI fields in the Register an app dialog](/images/pingcastlepro/4.0/proinstall/image7.webp)

Go to authentication and enable "Access tokens (used for implicit
flows".

![Authentication pane showing the Access tokens option enabled](/images/pingcastlepro/4.0/proinstall/image8.webp)

After you create the app, open the app by clicking on its name and copy
ClientID and TenantID and keep it with you.

![App overview page showing the Client ID and Tenant ID values](/images/pingcastlepro/4.0/proinstall/image9.webp)

:::note
The first user connecting to the application can grant the permission
implicitly.
:::
