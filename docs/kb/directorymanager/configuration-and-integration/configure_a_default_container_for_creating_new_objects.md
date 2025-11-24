---
description: >-
  This article explains how to configure a default container for creating new objects in Netwrix Directory Manager, including options for user selection and enforcement of defaults.
keywords:
  - default container
  - Directory Manager
  - object creation
sidebar_label: Configure Default Container
tags:
  - configuration-and-integration
title: "Configure a Default Container for Creating New Objects"
knowledge_article_id: kA0Qk0000002Q9hKAE
products:
  - directory-manager
---

# Configure a Default Container for Creating New Objects

## Applies To

Directory Manager 11

## Overview

Netwrix Directory Manager (formerly GroupID) allows administrators to configure a default container for creating new objects, such as groups, users, contacts, and mailboxes. You can control whether users can select a different container, enforce the default container, or hide the container selection entirely. This flexibility helps ensure that new objects are created in the correct location according to your organization's policies.

## Instructions

### Access Portal Design Settings

1. In the **Directory Manager Admin Center**, select **Applications**.
2. Under **Directory Manager Portal**, select the three-dot icon for your portal and click **Settings**.

   ![Accessing portal settings in Directory Manager Admin Center](./../0-images/servlet_image_d426e93f625f.png)

3. On the **Server Settings** tab, under **Design Settings**, select your portal.

   ![Selecting portal under Design Settings](./../0-images/servlet_image_61b3d2b9e09a.png)

4. Click the **Create Object** tab to customize the Object Creation wizard.
5. In the **Select Directory Object** drop-down list, select the object type for which you want to set a default container (for example, *Group*).
6. In the **Name** list, select **General** and click **Edit**.

   ![Editing General settings for object creation](./../0-images/servlet_image_502dc35f432d.png)

7. In the **Edit Category** dialog box, select **Container** in the **Fields** area and click **Edit**.

   ![Editing the Container field in Directory Manager](./../0-images/servlet_image_9e904c20e782.png)

8. In the **Edit Field** dialog box, click **Advanced options**.

   ![Advanced options in Edit Field dialog](./../0-images/servlet_image_6e6ebdcead10.png)

### Configure Default Container Options

1. Specify a default container while allowing users to change it.
2. In the **Default Value** box, enter the distinguished name of the container you want to set as default.
3. Click **OK** and **Save** your changes.

   ![Setting a default container value](./../0-images/servlet_image_68bd3ffb42de.png)

   Expected Result: On the **Create Group** wizard in the User portal, the specified container is selected by default, but users can click **Browse** to select another container.

   ![Default container selected in Create Group wizard](./../0-images/servlet_image_5b375f305cc3.png)

### Enforce a Default Container and Disable Container Selection

1. In the **Edit Field** dialog box, specify a default container and select the **Is Read Only** check box.
2. Click **OK** and **Save** your changes.

   ![Enforcing default container and disabling selection](./../0-images/servlet_image_f94cfcef3b0f.png)

   Expected Result: On the **Create Group** wizard, the specified container is displayed as the default, and the **Container** field is disabled. Users can only create new groups in the default container.

   ![Container field disabled in Create Group wizard](./../0-images/servlet_image_b6c33ded2ece.png)

### Enforce a Default Container and Hide Container Selection

1. In the **Edit Field** dialog box, use the **Visibility Role** option to select which user roles can see the **Container** field. Only the selected role and roles with a higher priority value will see the field. All roles with a lower priority value will not see or change the default container.
2. Click **OK** to save your changes.

   ![Hiding container selection using Visibility Role](./../0-images/servlet_image_354ef396a169.png)

   Expected Result: On the **Create Group** wizard in the Self-Service portal, the **Container** field is hidden, and users create groups without knowing the container being used.

   ![Container field hidden in Create Group wizard](./../0-images/servlet_image_8bb1521513c5.png)

> **NOTE:** If you hide the **Container** field for any role, you must provide a default value for this field. Otherwise, those roles will not be able to create groups.