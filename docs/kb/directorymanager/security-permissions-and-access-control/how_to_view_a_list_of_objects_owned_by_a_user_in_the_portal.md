---
description: >-
  This article explains how to view all groups owned by a specific user in the Netwrix Directory Manager portal by configuring the user properties.
keywords:
  - Directory Manager
  - user properties
  - managedObjects
sidebar_label: View Objects Owned by User
tags:
  - security-permissions-and-access-control
title: "How to View a List of Objects Owned by a User in the Portal"
knowledge_article_id: kA0Qk0000002R0vKAE
products:
  - directory-manager
---

# How to View a List of Objects Owned by a User in the Portal

## Overview

Netwrix Directory Manager (formerly GroupID) allows you to view all groups owned by a specific user in the portal. By adding a new field mapped to the **managedObjects** attribute in the user properties, you can display a list of groups that a user owns. This article explains how to configure the portal to show this information.

> **NOTE:** Before making any changes to your environment, it is highly recommended to create a backup, snapshot, or checkpoint of the Directory Manager server.

The default properties page for users does not display owned groups:

![Default user properties page in Directory Manager portal](./../0-images/servlet_image_dfe447cf1c8d.png)

## Instructions

### Add the Owned Objects Field to User Properties

1. In the **Directory Manager Admin Center**, go to the **Applications** tab in the left navigation bar.
2. Click the three-dot icon for the portal you want to modify, then click **Settings**.
   
   ![Accessing portal settings in Directory Manager Admin Center](./../0-images/servlet_image_4c6b4d284195.png)

3. In the portal settings, click the identity store name under **Design Settings** for which you want to make design changes.
   
   ![Selecting identity store under Design Settings](./../0-images/servlet_image_7513da8840d6.png)

4. Click the **Properties** button and select **User** from the **Select Directory Object** drop-down list.
5. Click the **Plus** button to create a new category on the User Properties page.
   
   ![Adding a new category to User Properties](./../0-images/servlet_image_bea9d9e7e94f.png)

6. Provide a name for the new category and click **Add Field**.
   
   ![Adding a field to the new category](./../0-images/servlet_image_b130add9b1b8.png)

7. Select **managedObjects** from the **Field** drop-down list, then provide a display name for the new field and select **Display Type** as **MultiValue**.
   
   ![Configuring managedObjects field as MultiValue](./../0-images/servlet_image_578dd5e5f5df.png)

8. Click **OK** to save the changes.
9. Refresh or relaunch the Directory Manager Portal. In the properties of any user, you will now see a new tab (for example, **Owned Objects**) listing all groups owned by the user.
   
   ![Owned Objects tab in User Properties showing groups owned by the user](./../0-images/servlet_image_a5bc912f4356.png)