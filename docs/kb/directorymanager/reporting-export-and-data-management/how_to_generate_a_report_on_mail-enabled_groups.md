---
description: >-
  This article explains how to generate a report in Netwrix Directory Manager to view all mail-enabled groups and the time they were last used.
keywords:
  - report generation
  - mail-enabled groups
  - Netwrix Directory Manager
sidebar_label: Generate Report on Mail-Enabled Groups
tags:
  - reporting-export-and-data-management
title: "How to Generate a Report on Mail-Enabled Groups"
knowledge_article_id: kA0Qk0000002bZlKAI
products:
  - directory-manager
---

# How to Generate a Report on Mail-Enabled Groups

## Overview

This article explains how to generate a report in **Netwrix Directory Manager** (formerly GroupID) to view all mail-enabled groups and the time they were last used. The Directory Manager Reports module is a free reporting tool designed to run reports on Active Directory and Microsoft Exchange/Office 365.

## Instructions

1. In the **Directory Manager** portal, select **Reports** from the left navigation bar. The Reports portal will open in a new browser tab.

   ![Reports portal in Directory Manager](./../0-images/servlet_image_e903c0799efe.png)

2. Click the **Group Reports** button on the navigation bar.

3. In the Groups category, type **Mail-enabled groups and the time they were last used (Exchange)** in the search bar.

4. Select the first report template in the list.

   ![Selecting mail-enabled groups report template](./../0-images/servlet_image_b00de8ab7e53.png)

5. Click **Create Report** to initiate the report creation wizard.

   ![Create Report wizard in Directory Manager](./../0-images/servlet_image_e9f53029c2da.png)

6. On the first page, enter a name for the report, select the search scope within the directory, and specify a filter criterion. By default, the wizard searches the Global Catalog.

   To limit the scope to a particular container:
   1. Click **Browse** to launch the **Select Container** dialog box and select the required source container.
   2. Select the **Include sub-containers** checkbox if you want to include its sub-containers when reporting.
   3. In the **Filter Criteria** box, modify the default LDAP filter. The default filter generates a list of all mail-enabled groups along with the time they were last used.

   ![Filter criteria for mail-enabled groups and last used time](./../0-images/servlet_image_fe3a35826be4.png)

7. Click **Next**.

8. The **Report Fields** page displays the fields that will be included in the report. To add more fields, click **Add**. To remove a field, select it and click the **X** icon. You can change the order of these fields by using the double bar icons.

   ![Report Fields page in Directory Manager](./../0-images/servlet_image_9ff27edc1467.png)

9. Click **Finish**.

10. The report will be generated. You can download the report in your desired format or pin the report to the Reports portal Dashboard.

    ![Generated report on mail-enabled groups and last used time](./../0-images/servlet_image_9f107e1beec8.png)