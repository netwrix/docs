---
title: "Service Accounts"
description: "Managing credentials for data source connections"
sidebar_position: 10
---

# Service Accounts

Service accounts store the credentials that Access Analyzer uses to connect to and authenticate against data sources. Each service account is configured with a specific credential type and can be associated with one or more sources.

## Creating a Service Account

To create a service account:

1. Navigate to **Service Accounts** in the sidebar.
2. Click **Create Service Account**.
3. Enter a **Name** and optional **Description**.
4. Select the [credential type](/docs/accessanalyzer/1_0/admin/serviceaccounts/credentialtypes) (Username/Password, OAuth2 Client Credentials, or Certificate).
5. Provide the required credential fields.
6. Click **Save**.

## Service Account List

The service account list displays all configured accounts with their name, credential type, number of associated sources, and creation date. Credentials are never displayed in plaintext after initial creation.

## Editing and Deleting

- **Edit** -- Update the name, description, or credential values. Changing credentials takes effect on the next scan execution.
- **Delete** -- Remove a service account. This operation fails if the account is currently associated with any sources.

:::warning
Before deleting a service account, disassociate it from all sources. See [Associating with Sources](/docs/accessanalyzer/1_0/admin/serviceaccounts/associating).
:::
