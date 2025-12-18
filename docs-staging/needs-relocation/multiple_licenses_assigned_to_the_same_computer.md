---
description: >-
  This article provides guidance on resolving issues when multiple licenses are assigned to the same computer by reviewing license assignments and enabling the appropriate system settings.
keywords:
  - license management
  - virtual desktop clones
  - Endpoint Protector
sidebar_label: Multiple Licenses on Computer
tags: []
title: "Multiple Licenses Assigned to the Same Computer"
knowledge_article_id: kA0Qk0000002B2fKAE
products:
  - endpointprotector
---

# Multiple Licenses Assigned to the Same Computer

## Question

What should you do if multiple licenses are assigned to the same computer?

## Answer

To resolve issues with multiple licenses assigned to the same computer, you will review license assignments and enable the appropriate system setting to prevent duplicates. Follow the steps below to complete this process:

> **NOTE:** The Endpoint Protector Server needs to properly identify virtual desktop clones.

1. To view the license IDs associated with each machine, navigate to the **Endpoint Protector Console** > **System Configuration** > **System Licensing** > **View Licenses**.  
   ![View Licenses screen in System Licensing](../0-images/servlet_image_c18781dc37ee.png)  
   ![List of licenses assigned to computers](../0-images/servlet_image_e566e333ee45.png)

2. If duplicates exist (more than one license associated with the same machine name), then navigate to **System Configuration** > **System Settings** and enable the option **Virtual Desktop Clones Support**.  
   ![Virtual Desktop Clones Support option in System Settings](../0-images/servlet_image_6774db6198b6.png)

The **Virtual Desktop Clones Support** setting allows the server to identify virtual desktop clones and interact accordingly with the client.