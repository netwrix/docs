---
title: "Client Secret Configuration"
description: "Configure a client secret for the Entra ID app registration"
sidebar_position: 30
---

# Client Secret Configuration

Access Analyzer authenticates to Microsoft Entra ID using a client secret. The client secret is generated within your registered Microsoft Entra ID application and provided to Access Analyzer when configuring the Entra ID connector.

For state-in-time data collection, the registered application must also be assigned to the Global Administrator role.

## Generate Client Secret Value

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** Navigate to **Identity** > **Applications** > **App registrations**.

**Step 3 –** Click the **All applications** tab and select your registered application.

**Step 4 –** Click **Certificates & secrets** under the Manage section.

**Step 5 –** On the **Client secrets** tab, click **New client secret**.

**Step 6 –** Specify the following:

- **Description** – Enter a description for the secret
- **Expires** – Select an expiration period

**Step 7 –** Click **Add**. The client secret value is displayed in the **Value** column.

:::warning
Copy the client secret value immediately. Once you navigate away from this page, the value cannot be retrieved and you will need to create a new secret.
:::

## Assign Roles to the App

The registered application must be assigned to the **Global Administrator** role for Entra ID state-in-time data collection.

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** Navigate to **Identity** > **Applications** > **App registrations**.

**Step 3 –** Click the **All applications** tab and select your registered application.

**Step 4 –** Click **Roles and administrators** under the Manage section.

**Step 5 –** On the All roles page, search for **Global Administrator**.

**Step 6 –** Click the **Global Administrator** role. The Assignments page opens.

**Step 7 –** Click **Add assignments** in the top toolbar.

**Step 8 –** Search for and select your registered application.

**Step 9 –** Click **Add**. The application is listed on the Assignments page.
