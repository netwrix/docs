---
description: >-
  Describes how to resolve the "Failed-to-load-Classifier-data-cache" error in
  Netwrix Data Classification caused by a failed connection to a SharePoint
  termset.
keywords:
  - classifier
  - cache
  - SharePoint
  - termset
  - GlobalSettings
  - Taxonomies
  - Netwrix Data Classification
  - Classifier Service
  - credentials
products:
  - data-classification
sidebar_label: 'Error: "Failed to load Classifier data cache"'
tags: []
title: 'Error: "Failed to load Classifier data cache"'
knowledge_article_id: kA04u000000XmHACA0
---

# Error: "Failed to load Classifier data cache"

## Scenario

The Netwrix Data Classification: Service Viewer displays the following error message for the Classifier Service:

`Failed-to-load-Classifier-data-cache`

![User-added image](./images/ka04u000000HdG2_0EM4u000001rDFG.png)

## Solution

1. Open `http://hostname/conceptQS/Taxonomies/GlobalSettings`.
2. Confirm the status of each taxonomy. This error will be caused by a failed connection to a SharePoint termset.
3. Find the faulting termset and update the credentials and/or confirm account permissions for that termset.
4. Restart the classifier service. After restarting, the service should immediately begin processing documents pending classifications.
