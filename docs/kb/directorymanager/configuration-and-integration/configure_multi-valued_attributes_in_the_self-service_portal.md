---
description: >-
  This article explains how to configure the Self-Service portal in Netwrix Directory Manager to support multi-valued attributes, using the carLicense attribute as an example.
keywords:
  - Directory Manager
  - multi-valued attributes
  - self-service portal
sidebar_label: Configure Multi-Valued Attributes
tags:
  - configuration-and-integration
title: "Configure Multi-Valued Attributes in the Self-Service Portal"
knowledge_article_id: kA0Qk0000002LmjKAE
products:
  - directory-manager
---

# Configure Multi-Valued Attributes in the Self-Service Portal

## Applies To

Directory Manager 11

## Overview

This article explains how to configure the Self-Service portal in Netwrix Directory Manager (formerly GroupID) to support multi-valued attributes, using `carLicense` as an example.

Multi-valued attributes in Active Directory, such as `carLicense` or phone numbers, allow users to store multiple unique values in a single field. In contrast, single-valued attributes, such as names, can hold only one value. Active Directory does not create attributes with empty values, and each value in a multi-valued attribute must be unique.

## Instructions

1. In the Directory Manager Admin Center, go to **Applications**. On the application or portal where you want to add the attribute, click the three-dot icon and select **Settings**.

   ![Accessing portal settings in Directory Manager](./../0-images/servlet_image_965115af01f6.png)

2. Under **Design Settings**, expand your identity store’s name.

   ![Expanding identity store in Design Settings](./../0-images/servlet_image_7e87b556674f.png)

3. On the **Properties** tab, select *User* from the **Select Directory Object** list.
4. Select **General** in the **Name** list and click the edit symbol under **Actions**.

   ![Editing General properties in Directory Manager](./../0-images/servlet_image_7bf69f003296.png)

5. On the **Edit Design Category** page, click **Add Field**.

   ![Adding a new field in Directory Manager](./../0-images/servlet_image_adda9f41da45.png)

6. Select the **carLicense** attribute in the **Field** list, enter the display name as *carLicense*, and set the display type to *MultiValue*.

   ![Configuring carLicense as a multi-valued attribute](./../0-images/servlet_image_67916a8d7c9f.png)

7. Click **OK**. Scroll down and click **Save**.
8. Launch the user portal. The **carLicense** multi-valued box appears on the General tab in user properties.
9. To add a license number, click **Add**, enter the license number, and click **OK**. You can add multiple license numbers to this field.

   ![Adding multiple values to carLicense in the user portal](./../0-images/servlet_image_b2185e961102.png)

10. View the license numbers added to the user's profile.

    ![Viewing multi-valued carLicense entries in the user profile](./../0-images/servlet_image_030611c3b553.png)