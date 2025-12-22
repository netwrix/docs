---
description: >-
  Shows how to enable email notifications in Netwrix Directory Manager 11 so
  logged-in users receive emails for changes they make to directory objects via
  the user portal.
keywords:
  - Netwrix Directory Manager
  - notifications
  - email notification
  - identity store
  - user portal
  - logged-in users
  - directory objects
  - mail-enabled users
products:
  - directory-manager
sidebar_label: Notify Logged-In Users About Changes Made to Direc
tags:
  - workflows-automation-and-lifecycle-management
title: "Notify Logged-In Users About Changes Made to Directory Objects"
knowledge_article_id: kA0Qk0000002INRKA2
---

# Notify Logged-In Users About Changes Made to Directory Objects

## Applies To
Netwrix Directory Manager 11

## Overview
You can configure Netwrix Directory Manager 11 (formerly GroupID) to send users an email notification whenever they make changes to directory objects through the user portal. To enable this feature, update the notification settings in the identity store.

## Instructions
1. In Directory Manager Admin Center, click the **Identity Stores** node.  
2. For your identity store, click the three dots (**...**) button and select **Edit**.  
   ![Identity Stores list with edit option highlighted in Directory Manager Admin Center](./../0-images/ka0Qk000000D8iv_0EMQk00000BpFrV.png)
3. On the next page, click the **Configurations** button.  
   ![Configurations button in Directory Manager Admin Center](./../0-images/ka0Qk000000D8iv_0EMQk00000BpFoH.png)
4. Click the **Notifications** button.  
   ![Notifications button in Directory Manager Admin Center](./../0-images/ka0Qk000000D8iv_0EMQk00000BpFmf.png)
5. Under the **Also Notify** option, select the checkbox labeled **Logged in users for their actions**.  
   ![Also Notify option with Logged in users for their actions checkbox selected](./../0-images/ka0Qk000000D8iv_0EMQk00000BpFuj.png)
6. Scroll down and click the **Save** button.

With this notification setting enabled, email notifications will be sent to the logged-in user for changes they make to directory objects using the portal.

> **NOTE:** This setting applies to mail-enabled users only.

## Impact
In the example below, an end user changes the **Description** field of a group.

![User editing the Description field of a group in Directory Manager user portal](./../0-images/ka0Qk000000D8iv_0EMQk00000BpFt7.png)

The user will receive an email notification for the changes they made.

![Sample email notification sent to user after making changes in Directory Manager user portal](./../0-images/ka0Qk000000D8iv_0EMQk00000BpFpt.png)
