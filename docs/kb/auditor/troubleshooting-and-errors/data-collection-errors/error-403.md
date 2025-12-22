---
description: >-
  This article explains causes and resolutions for "Error 403 - Access is
  denied" when accessing portals in Netwrix Auditor. It shows how to verify IIS
  SSL and Default Document settings.
keywords:
  - error 403
  - access denied
  - IIS
  - SSL
  - Default Document
  - PM virtual directory
  - Netwrix Auditor
  - portal
  - troubleshooting
products:
  - auditor
sidebar_label: Error 403
tags: []
title: "Error 403"
knowledge_article_id: kA00g000000H9TwCAK
---

# Error 403

When trying to browse to any portal, you get "Error 403 - Access is denied"

![User-added image]./../0-images/ka04u000000HcNi_0EM700000004yKg.png)

The 403 error can be caused by several reasons. The most common reasons are:

1. You are trying to access the site via HTTP when HTTPs is required.  
   To enable access via regular HTTP make sure that **Require SSL** check-box is not enabled.

   1. Launch the **IIS Manager**
   2. Navigate to the **PM** virtual directory (Default Web Site/PM by default).
   3. In the central pane double-click **SSL Settings**
   4. Check settings, change if necessary

   ![User-added image]./../0-images/ka04u000000HcNi_0EM700000004yKq.png)

   ![User-added image]./../0-images/ka04u000000HcNi_0EM700000004yKv.png)

2. Default document IIS feature is not enabled.

   To check this:

   1. Launch the **IIS Manager**
   2. Navigate to the **PM** virtual directory (Default Web Site/PM by default).
   3. In the central pane double-click **Default Document**
   4. In the right pane click **Enable** (if there is no Enable option there, but **Disable** is, it means that the feature is enabled)

   ![User-added image]./../0-images/ka04u000000HcNi_0EM700000004yL0.png)

   ![User-added image]./../0-images/ka04u000000HcNi_0EM700000004yL5.png)

