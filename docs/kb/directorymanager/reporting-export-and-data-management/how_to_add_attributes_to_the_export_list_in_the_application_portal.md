---
description: >-
  This article explains how to add additional attributes to the exportable fields in the Application portal of Netwrix Directory Manager.
keywords:
  - export attributes
  - Application portal
  - Netwrix Directory Manager
sidebar_label: Add Attributes to Export List
tags:
  - reporting-export-and-data-management
title: "How to Add Attributes to the Export List in the Application Portal"
knowledge_article_id: kA0Qk0000002NQLKA2
products:
  - directory-manager
---

# How to Add Attributes to the Export List in the Application Portal

## Overview

This article explains how to add additional attributes to the list of exportable fields in the Export option of the Application portal in **Netwrix Directory Manager** (formerly GroupID). By default, only a standard set of attributes is available for export. You can customize this list to include other attributes, such as **Common Name (CN)**.

To add more attributes to the Export list, you must update the portal's design settings.

![Default export attributes in the Application portal](./../0-images/servlet_image_fcd2d3f5505b.png)

## Instructions

1. Log in to the **Directory Manager Admin** portal and navigate to the **Applications** tab.

   ![Applications tab in the Admin portal](./../0-images/servlet_image_4a2ca5fd6383.png)

2. Open the settings for the application where you want to add the attribute, and click the identity store name.

   ![Selecting the identity store in application settings](./../0-images/servlet_image_05a15540dbe3.png)  
   ![Identity store settings page](./../0-images/servlet_image_6be283cbacf3.png)

3. Navigate to the **Import/Export** tab.

   ![Import/Export tab in identity store settings](./../0-images/servlet_image_b3b231c5084a.png)

4. Click the **(+)** button. Select the field you want to add and provide a display name for it.

   ![Adding a new attribute to the export list](./../0-images/servlet_image_e3c8f74e9668.png)

5. Save your changes. The new field will now be available in the Export wizard of the Application portal.

   ![New attribute visible in the Export wizard](./../0-images/servlet_image_8105d4d50a18.png)