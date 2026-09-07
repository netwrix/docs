---
title: Client ID and secret
description: Create a Client ID/secret service account for Entra ID sources from an app registration's application ID and client secret.
sidebar_position: 2
---

A Client ID/secret account holds the application (client) ID and a client secret of an app registration in Microsoft Entra ID. Entra ID sources use it to sign in as the application and read the directory. No user signs in, and the account holds no user password; the application permissions granted to the app registration decide what the account can read. The form labels this type **Client ID/secret**.

## When to use it

Use a Client ID/secret account for Entra ID sources. It's the only type that works for them; the source form doesn't stop you from picking another type, but a scan that uses one fails when it runs.

SharePoint Online sources don't use this type. They authenticate with a certificate; see [Client ID and certificate](client-id-certificate.md).

:::note

This account is for scanning. Letting your team sign in to Access Analyzer with their Entra ID identities is a separate setup, described in [Single sign-on](../settings/single-sign-on.md).

:::

## What you need from the app registration

- Its **Application (client) ID**, a globally unique identifier (GUID).
- A client secret, created under **Certificates & secrets** on the app registration. Copy the secret's value.

You don't enter the tenant ID on this account. It belongs to the Entra ID source, together with the **Azure cloud** setting. For the source settings and the permissions the app registration needs, see [Entra ID](../sources/entra-id.md).

## Create a Client ID/secret service account

1. Go to **Configuration > Service accounts**.
2. Click **Add service account**.
3. In **Name**, enter a name, for example `entra-id-scanner`.
4. In **Service account type**, select **Client ID/secret**.
5. In **Client (application) ID**, paste the app registration's application ID.
6. In **Client secret**, paste the secret's value.
7. Click **Add account**.

![Add service account dialog with Client ID/secret selected](/images/accessanalyzer/26.1/service-accounts/add-client-id-secret.webp)

Next, select this account in **Service account** on the Entra ID source and click **Test connection**. [Scan Entra ID](../guides/entra-id.md) walks through the whole setup, from app registration to first scan.

## Rotate the client secret

When you create a new secret on the app registration, update the account before the old secret expires.

1. On the account's row, click **Actions > Edit**.
2. In **Client secret**, paste the new value. The field starts empty.
3. Click **Save changes**.

If scans already use this account, the **Confirm service account update** dialog lists them before the change goes through. When you continue, running executions restart with the new secret. [Service accounts](index.md#the-confirm-service-account-update-dialog) explains what the dialog does.

## Fields

| Field | Required | Notes |
|---|---|---|
| **Name** | Yes | The name shown in the list and on sources. |
| **Service account type** | Yes | Select **Client ID/secret**. |
| **Client (application) ID** | Yes | A GUID in the form `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. |
| **Client secret** | Yes | The secret's value. Masked as you type. |

Validation runs when you leave a field. An ID that isn't a GUID shows **Client (Application) ID must be a valid GUID (e.g. xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)**; an empty secret shows **Client secret is required**.
