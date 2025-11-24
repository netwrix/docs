---
description: >-
  This article provides step-by-step instructions on how to display the Common Name (CN) instead of the Display Name in the Member Of tab within the Directory Manager portal.
keywords:
  - Directory Manager
  - Common Name
  - Display Name
sidebar_label: Display Common Name in Member Of Tab
tags:
  - portal-customization-and-ux
title: "How to Display Common Name Instead of Display Name in the Member Of Tab"
knowledge_article_id: kA0Qk0000002bWXKAY
products:
  - directory-manager
---

# How to Display Common Name Instead of Display Name in the Member Of Tab

## Applies To

Directory Manager 11

## Overview

In the Directory Manager portal, the **Member Of** tab shows the **Display Name** of the groups a user is a member of. This can cause sorting issues if some groups do not have the **DisplayName** attribute populated. You can resolve this issue by displaying the **Common Name (CN)** instead of **DisplayName** in the **Member Of** tab.

> **NOTE:** Before making any changes to your environment, create a backup, snapshot, or checkpoint of the Directory Manager server.

## Instructions

1. In **Directory Manager Admin Center**, go to **Application** from the navigation bar and click the three-dot icon for the portal you want to customize.
2. Click the **Settings** button. A new page will appear.
3. Select the **Identity Store** you want to customize the design for.
4. Navigate to **Custom Display Types** and look for **userMembersOfGrid**.

   ![Custom Display Types - userMembersOfGrid](./../0-images/servlet_image_6436205e3d96.png)

5. Click the pencil icon to **Edit**. The **Edit Grid Display Type** window will appear.
6. Select **WEB_Display_Name** from the list under **Fields** and click **Edit**. The **Grid Column** window will appear.

   ![Edit Grid Column for Display Name](./../0-images/servlet_image_7007481a5d12.png)

7. Select **CN** in the **Field** dropdown box and provide a suitable name in the **Display Name** textbox. Click **OK**.

   ![Set CN as Display Name in Grid Column](./../0-images/servlet_image_1736a7d682a3.png)

8. After making changes, click **Save**.
9. Relaunch the Directory Manager Portal. In the **Member Of** tab of any user, you can now sort the list of groups alphabetically by **Common Name (CN)**, even if the **Display Name** is not available.