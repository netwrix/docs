---
description: >-
  When the Web Portal displays red boxes instead of images, enable the IIS
  Static content feature. This article shows how to enable Static content on
  Windows 7 and Windows 2008 to restore image display.
keywords:
  - IIS
  - Static content
  - images
  - red boxes
  - Web Portal
  - Windows 7
  - Windows 2008
  - display images
products:
  - auditor
sidebar_label: Images Are not Shown
tags: []
title: "Images Are not Shown"
knowledge_article_id: kA00g000000H9YHCA0
---

# Images Are not Shown

## Question
Web Portal shows no images just red boxes. Whats the case?

![User-added image]./../0-images/ka04u00000117dv_0EM7000000050pb.png)

## Answer
The issue occurs because IIS cannot display images because of configuration.  
To address the issue, enable the **Static content** feature within IIS.

**In Windows 7:**

1. Go to **Control Panel - Programs and Features - Turn Windows features on or off**.  
2. Navigate to **Internet Information Services (IIS) - World Wide Web Services - Common HTTP Features**.  
3. Make sure that the checkbox in front of the **Static content** is enabled.

**In Windows 2008**:

1. Navigate to **Server Manager - Roles - Web server**, find the Role services in the right pane, click **Add role services**.  
2. Enable **Static content** under **Common HTTP Features**.

