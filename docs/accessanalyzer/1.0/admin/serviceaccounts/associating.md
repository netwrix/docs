---
title: "Associating with Sources"
description: "Linking service accounts to data sources"
sidebar_position: 30
---

# Associating with Sources

Each data source requires an associated service account to authenticate when connecting to the target environment. A single service account can be shared across multiple sources of compatible types.

## Assigning a Service Account to a Source

Service accounts are assigned during source creation or by editing an existing source:

1. Navigate to **Sources** and open the source detail view.
2. Click **Edit**.
3. In the **Service Account** field, select the desired account from the dropdown.
4. Click **Save**.

The dropdown only shows service accounts with a credential type compatible with the selected source type.

## Changing the Associated Account

To switch a source to a different service account, edit the source and select a new account. The change takes effect on the next scan execution. Running scans continue to use the previously assigned account until completion.

## Disassociating a Service Account

To remove a service account association, edit the source and clear the **Service Account** field, then assign a replacement. Sources cannot be saved without a service account.

:::note
Verify connectivity after changing service account associations by running a [Test Connection](/docs/accessanalyzer/1_0/admin/sources/testconnections).
:::

## Compatibility Matrix

| Source Type | Username/Password | OAuth2 Client Credentials | Certificate |
|---|---|---|---|
| CIFS | Yes | No | No |
| SharePoint | No | Yes | Yes |
| Active Directory | Yes | No | No |
| Entra ID | No | Yes | Yes |
| Local Groups | Yes | No | No |
