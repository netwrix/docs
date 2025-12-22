---
description: >-
  This article outlines the steps to resolve issues where changes to Active Directory domain resources with a ".ad" suffix are not being saved due to IIS filtering.
keywords:
  - Active Directory
  - IIS
  - domain resource
products:
  - general
sidebar_label: Resolving Issues with .ad Domain Resources
tags: [troubleshooting-and-errors]
title: Resolving Issues Where ".ad" Domain Resource Changes are Not Being Saved (IIS Config)
knowledge_article_id: kA04u00000110fGCAQ
---

# Resolving Issues Where ".ad" Domain Resource Changes are Not Being Saved (IIS Config)

## Overview

This article highlights the procedure for resolving problems where clicking the **Save** button after modifying an Active Directory domain resource results in the **Save** button spinning. In this instance, the frequency of the sync schedule was just saved:

![IIS Configuration Issue](./../0-images/servlet_image_bc580d43e371.png)

This issue occurs because the ".ad" domain suffix is being filtered by IIS.

## Instructions

1. To remediate this, first open **IIS Manager** (`inetmgr`) on the **Privilege Secure** server.
2. In the left-hand tree, select the **Privilege Secure** server's node. The **file name extensions** tab should be visible.
   
   ![File Name Extensions Tab](./../0-images/servlet_image_2583da6d156d.png)

3. Select the **.ad** extension and in the right-hand pane, select **Remove**.
4. In a command prompt, run `iisreset`. You should now be able to save changes to the configuration on a domain ending in ".ad".