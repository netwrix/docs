---
description: >-
  Shows how to edit the static text in the group expiry notification email for
  Netwrix Directory Manager 11 so you can include custom messages about
  distribution lists, security groups, or other impacts.
keywords:
  - Netwrix Directory Manager
  - GLMExpiredNotify
  - notification editor
  - expiring group email
  - group lifecycle
  - email template
  - distribution list
  - security group
  - notification
products:
  - directory-manager
sidebar_label: How To Modify Expiring Group Email Template
tags:
  - portal-customization-and-ux
title: "How To Modify Expiring Group Email Template"
knowledge_article_id: kA0Qk0000002IQfKAM
---

# How To Modify Expiring Group Email Template

## Applies To
Netwrix Directory Manager 11

## Overview
By default, the Group Lifecycle notification email in Netwrix Directory Manager 11 only explains the consequence of not renewing distribution lists. You can customize the email body to include additional information, such as the impact of not renewing security groups or any other custom text. This article explains how to edit the static text in the group expiry notification email.

## Instructions
1. In the Netwrix Directory Manager Admin Center, select **Notifications** then **Notification Editor**.  
   ![Notification Editor in Directory Manager Admin Center](./../0-images/ka0Qk000000D8m9_0EMQk00000BpGZ3.png)

2. On the next page, you will see a list of all notifications in Netwrix Directory Manager. Search for the notification named `GLMExpiredNotify`. Under **Actions**, click **Edit**.  
   ![List of notifications with Edit option in Directory Manager](./../0-images/ka0Qk000000D8m9_0EMQk00000BpGXR.png)

3. Select the **Source Code** tab and go to line 44. This line contains the consequence of not renewing a group. Edit the text as needed to include your custom message.  
   ![Source Code tab with editable email body in Directory Manager](./../0-images/ka0Qk000000D8m9_0EMQk00000BpGaf.png)

4. After making your changes, go to the **Interactive** tab to preview the results in a clean, easy-to-read format.  
   ![Interactive tab showing email preview in Directory Manager](./../0-images/ka0Qk000000D8m9_0EMQk00000BpGcH.png)

5. If you are satisfied with the output, return to the **Source Code** tab and click **Save**. Confirm your changes by clicking **Save** again.  
   ![Save button in Source Code tab in Directory Manager](./../0-images/ka0Qk000000D8m9_0EMQk00000BpCs2.png)  
   ![Confirmation of saved changes in Directory Manager](./../0-images/ka0Qk000000D8m9_0EMQk00000BpGdt.png)
