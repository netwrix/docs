---
description: >-
  Step-by-step instructions to deploy the Netwrix Data Classification SharePoint
  app from the App Catalog to Site Collections, including how to add, trust, and
  schedule deployment of the `conceptClassifierApp`.
keywords:
  - SharePoint
  - App Catalog
  - Site Collection
  - Netwrix Data Classification
  - conceptClassifierApp
  - deployment
  - Site Contents
products:
  - auditor
  - data-classification
sidebar_label: SharePoint Application Deployment for NDC
tags: []
title: "SharePoint Application Deployment for NDC"
knowledge_article_id: kA00g000000PbcqCAC
---

# SharePoint Application Deployment for NDC

This is part two of the SharePoint app installation KB; it is assumed that you have already [installed the Netwrix Data Classification SharePoint app](https://kb.netwrix.com/5486).

**Note:** To enable the app you will need to be a site collection administrator.  
To enable the app you will need to add the app to the **App Catalog** then deploy the app to the required Site Collections.  
**Note:** you cannot add the app directly to a Site Collection.

1. Navigate to the **App Catalog** → **Site Contents** and ensure you are using the classic experience.
2. Click **Add an app** and select `conceptClassifierApp`.

![User-added image]./../0-images/ka04u000000HcXd_0EM4u000002D96q.png)

3. Click **Trust It** to accept the app permissions and allow the app to be installed into the App Catalog.  
   ![User-added image]./../0-images/ka04u000000HcXd_0EM4u000002D975.png)
4. Once the app has been added to the App Catalog, configure the deployment by hovering over the app then clicking on the ellipsis in the top right corner of the app and clicking **Deployment**.  
   ![User-added image]./../0-images/ka04u000000HcXd_0EM4u000002D97U.png)
5. Select how to deploy the app to a combination of specific Sire Collections, by pats, and by a template. Click **OK**.

   **Note:** The default order of the page is to show the newest app first, so you should see the app as one of the first options (if you do not you can search for “conceptClassifierApp”):

6. The app will then be scheduled for deployment to the chosen Site Collections. This can take a few minutes and on completion, `conceptClassifierApp` will appear in the Site Contents of these Site Collections.

![User-added image]./../0-images/ka04u000000HcXd_0EM4u000002D97j.png)

7. To complete the setup, navigate to the **Site Collection** → **Site Contents** and select `conceptClassifierApp`. This will complete the installation of the app on the Site Collection and allow you to configure the writing of classifications (if licensed).



