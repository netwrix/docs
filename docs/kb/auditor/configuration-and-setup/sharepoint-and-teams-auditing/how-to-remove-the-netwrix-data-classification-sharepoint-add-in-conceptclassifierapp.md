---
description: >-
  Step-by-step instructions to remove the Netwrix Data Classification SharePoint
  Provider-Hosted Add-In (conceptClassifierApp) from SharePoint, including
  removal of associated JavaScript, Custom Actions, and Remote Event Receivers
  (RERs).
keywords:
  - Netwrix Data Classification
  - SharePoint
  - add-in removal
  - conceptClassifierApp
  - App Catalog
  - Remote Event Receiver
  - Custom Actions
  - JavaScript
products:
  - auditor
  - data-classification
sidebar_label: How to remove the Netwrix Data Classification Shar
tags: []
title: "How to remove the Netwrix Data Classification SharePoint Add-In (conceptClassifierApp)"
knowledge_article_id: kA00g000000H9e2CAC
---

# How to remove the Netwrix Data Classification SharePoint Add-In (conceptClassifierApp)

How to **remove/uninstall** the **Netwrix Data Classification** **SharePoint** **Provider** **Hosted** **Add**-**In** from **SharePoint** including the associated **JavaScript**, **Custom Actions**, and **Remote Event Receivers (RERs)**?

## Manual Deployment (Add-In installed manually per site-collection)

1. Navigate to each site collection on which the **Add-In** has been installed, and:
   1. Load the **Site Contents** page
   2. Locate the `conceptClassifierApp` entry
   3. **Select the ellipsis**
   4. Click **Remove**
2. Navigate to your **App Catalog** site collection, and:
   1. Load the library **Apps for SharePoint**
   2. Delete the `conceptClassifierApp` entry
3. Navigate to the conceptQS Administration Interface, and:
   1. Select **Sources** from the top navigation
   2. Select **SharePoint** from the sub navigation
   3. Expand **Settings** from the side navigation
   4. Select **App Configuration** from the side navigation
   5. Delete any associated **configurations**

## Tenancy Scoped Deployment (Add-In installed into the App Catalog and pushed out to the tenancy)

1. Navigate to the QS Administration Interface, and:
   1. Load the following URL: `<QSUrl>/conceptQS/ClassifierApp/Deployment/Remove`
   2. Select any site collections that are currently using the **Add-In**
   3. Select **Remove**
2. Navigate to your **App Catalog** site collection, and:
   1. Load the **Site Contents** page
   2. Locate the `conceptClassifierApp` entry
   3. **Select the ellipsis**
   4. Select **Deployment**
   5. Remove all tenancy options and submit the changes
   6. Load the library **Apps for SharePoint**
   7. Delete the `conceptClassifierApp` entry
3. Navigate to the QS Administration Interface, and:
   1. Select **Sources** from the top navigation
   2. Select **SharePoint** from the sub navigation
   3. Expand **Settings** from the side navigation
   4. Select **App Configuration** from the side navigation
   5. Delete any associated **configurations**
