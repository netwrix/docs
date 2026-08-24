---
title: "Client ID/Certificate"
description: "Client ID and certificate credentials for SharePoint Online source groups"
sidebar_position: 4
---

# Client ID/Certificate

The Client ID/Certificate credential type authenticates with SharePoint Online using certificate-based authentication. Use this credential type when configuring SharePoint Online source groups.

This requires a registered application in your Entra ID tenant. The source group wizard generates the certificate itself — you don't create or upload it here.

## Create a Client ID/Certificate service account

1. Navigate to **Configuration** > **Service Accounts**.
2. Click **Add Service Account**.
3. In the **Name** field, enter a descriptive name for this service account.
4. From the **Service account type** dropdown, select **Client ID/Certificate**.

   ![Add service account form showing Client ID/Certificate fields: name, client application ID, and tenant ID](/images/accessanalyzer/2601/configurations/add-service-account-certificate.png)

5. In the **Client Application ID** field, enter the Application (client) ID from your Entra ID app registration.
6. In the **Tenant ID** field, enter the Directory (tenant) ID of your Entra ID tenant.
7. Click **Add account**.

## Fields

| Field | Description |
| --- | --- |
| **Name** | A display name that identifies this service account in Access Analyzer. |
| **Client Application ID** | The Application (client) ID of your registered Entra ID application. Find this in the Azure portal under **Azure Active Directory** > **App registrations** > your app > **Overview**. |
| **Tenant ID** | The Directory (tenant) ID of your Entra ID tenant. Find this in the Azure portal under **Azure Active Directory** > **Overview**. |

## Certificate

You don't enter the certificate in the service account form. When you set up a SharePoint Online source group, the wizard includes a **Generate and Download Certificate** step that creates the certificate and downloads it to your machine. You then upload the certificate to your registered Entra ID application in the Azure portal before testing the connection.

If you update the service account on an existing source group, you must upload the new account's certificate to the registered app before saving.

For steps to register the application and upload the certificate, see [SharePoint Online Connector Requirements](../../connectors/sharepoint-online/overview.md).
