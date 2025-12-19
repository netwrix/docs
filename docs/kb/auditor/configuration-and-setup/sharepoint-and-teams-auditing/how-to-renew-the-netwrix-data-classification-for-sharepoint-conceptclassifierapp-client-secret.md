---
description: >-
  Instructions to renew the Add-In client secret for SharePoint and Netwrix Data
  Classification (conceptClassifierApp). Follow the steps to create and apply a
  new client secret and update the configuration.
keywords:
  - client secret
  - SharePoint
  - Netwrix Data Classification
  - conceptClassifierApp
  - ClientId
  - AppPrincipalId
  - Update Client Secret
  - Replace Current
products:
  - auditor
  - data-classification
sidebar_label: How to renew the Netwrix Data Classification for S
tags: []
title: "How to renew the Netwrix Data Classification for SharePoint (conceptClassifierApp)   Client Secret"
knowledge_article_id: kA00g000000H9eGCAS
---

# How to renew the Netwrix Data Classification for SharePoint (conceptClassifierApp)   Client Secret

In order to renew the **Add-In** client secret on the SharePoint and Netwrix Data Classification sides, follow the steps below:

## Procedure

1. Navigate to the "**Sources**" section of the **Administration Interface**  
2. Select "**SharePoint**"  
3. Expand "**Settings**"  
4. Select "**App Configuration**"  
5. Select "**Edit**" on the configuration you wish to **renew** and make note of the `ClientId` value (you will need this shortly)  
6. Follow the [Microsoft Guide](https://www.netwrix.com/go/ReplaceAcsClientSecret) for creating a new **client secret** (the `AppPrincipalId` referred to in the guide is the `ClientId` value from step 5)  
7. Close the "**Edit**" dialog and select "**Update Client Secret**"  
8. Enter your new `value`, along with the **expiry date** (typically either 1 or 3 years away).  
9. If your **client secret** has already **expired** then select the "**Replace Current**" option.
