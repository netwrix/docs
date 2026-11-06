---
title: "Authentication requirements"
description: "Review the authentication options PingCastle Pro supports and the Microsoft Entra ID app registration it needs."
sidebar_position: 40
---

# Authentication requirements

PingCastle Pro signs users in with one of two authentication methods:

- **Windows Authentication**: Integrated Windows authentication using Active Directory credentials
- **Microsoft Entra ID**: Sign-in with a Microsoft Entra ID account through OpenID Connect

PingCastle Pro doesn't support other authentication systems. Scans don't use these methods; `PingCastle.exe` uses the Windows account that runs it.

## Windows Authentication

Windows Authentication requires no extra configuration beyond enabling it in IIS. The server must be able to reach Active Directory to validate user accounts.

## Microsoft Entra ID

If you use Entra ID, the application must be able to get a token from Entra ID, typically at `login.microsoftonline.com`.

Entra ID requires an app registration with a minimal configuration. At the end of this procedure, you have a **Tenant ID** and a **Client ID**.

### Register the app

1. Sign in to the [Azure portal](https://portal.azure.com).

   ![Azure portal sign-in page](/images/pingcastlepro/4.1/proinstall/image4.webp)

2. Open the **App registrations** pane.

   ![App Registrations pane in the Azure Portal](/images/pingcastlepro/4.1/proinstall/image5.webp)

3. Click **New registration** in the toolbar. The **Register an app** dialog opens.

   ![Register an app dialog](/images/pingcastlepro/4.1/proinstall/image6.webp)

4. Enter a name and the redirect URI.

   :::note
   The redirect URI must point to the fully qualified domain name (FQDN) of the server you are accessing. It must start with HTTPS and end with `/signin-oidc`.
   :::

   For example: `https://pingcastle.contoso.com/signin-oidc`

   ![Name and redirect URI fields in the Register an app dialog](/images/pingcastlepro/4.1/proinstall/image7.webp)

5. Click **Register**.
6. Go to **Authentication** and enable **Access tokens (used for implicit flows)**.

   ![Authentication pane showing the Access tokens option enabled](/images/pingcastlepro/4.1/proinstall/image8.webp)

7. Open the app overview and copy the **Client ID** and **Tenant ID**. You need both values when you install PingCastle Pro.

   ![App overview page showing the Client ID and Tenant ID values](/images/pingcastlepro/4.1/proinstall/image9.webp)

:::note
The first user who connects to the application can grant the permission implicitly.
:::
