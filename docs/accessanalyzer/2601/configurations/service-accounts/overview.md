---
title: "Overview"
description: "How service accounts work in Access Analyzer and which credential type each data source requires"
sidebar_position: 1
---

# Overview

Service accounts store the credentials Access Analyzer uses to authenticate against data sources during scans. Each data source connector requires a specific credential type, and the source group wizard automatically selects the correct type when you set up a new source group.

You can create a service account in two ways:

- **Inline during source group setup** — Click **+** next to the **Service Account** field in the source group wizard. The wizard locks the credential type to match the data source being configured.
- **In advance from Configuration** — Navigate to **Configuration** > **Service Accounts** and click **Add**. Select the credential type that matches your intended data source.

## Credential Types by Data Source

| Data Source | Credential Type |
| --- | --- |
| Active Directory | Username and Password |
| File Server | Username and Password |
| Entra ID | Client ID and Secret |
| SharePoint Online | Client ID and Certificate |

## Editing Service Accounts

Credential fields — passwords and client secrets — are never pre-populated when you edit an existing service account. You must re-enter them each time you save changes.

Updating the service account on an existing source group replaces the credentials used for all future scans in that source group. Ensure the replacement account has the required permissions before saving.
