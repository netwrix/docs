---
description: >-
  This article explains how to generate a report on enabled users who do not have a manager, along with their distribution list memberships using Netwrix Directory Manager.
keywords:
  - Netwrix Directory Manager
  - report generation
  - Active Directory
sidebar_label: Generate Report on Users Without Managers
tags:
  - reporting-export-and-data-management
title: "Generate a Report on Enabled Users Without Managers Along with Distribution List Memberships"
knowledge_article_id: kA0Qk0000002R8zKAE
products:
  - directory-manager
---

# Generate a Report on Enabled Users Without Managers Along with Distribution List Memberships

## Applies To

Directory Manager 11

## Overview

Netwrix Directory Manager (formerly GroupID) allows you to generate reports on enabled users who do not have a manager, along with their distribution list (DL) memberships. The Reports module is a free tool for running reports on Active Directory and Microsoft Exchange/Office 365. This article explains how to generate this report using the Reports portal.

## Instructions

### Generate a Report on Enabled Users Without Managers and Their DL Memberships

1. In the Directory Manager portal, select **Reports** from the left navigation bar. The Reports portal will open in a new browser tab.
   ![Reports portal in Directory Manager](./../0-images/servlet_image_7e38294b686d.png)

2. Click the **User Reports** button on the navigation bar.

3. In the Users category, type **Users multiple DL memberships** in the search bar.
   ![Searching for Users multiple DL memberships report](./../0-images/servlet_image_84e4d97f9492.png)

4. Click the report when it appears in the search results. A new window will open.

5. Click **Create Report** to start the report creation wizard.
   ![Create Report wizard in Directory Manager](./../0-images/servlet_image_ed2e03f398de.png)

6. On the first page, provide a name for the report then choose the search scope within the directory and provide a filter criterion. By default, the wizard searches the Global Catalog. To limit the scope to a particular container:
   1. Click **Browse** to launch the **Select Container** dialog box and select the required source container.
   2. Select the **Include sub-containers** check box to include sub-containers in the report.
   3. In the **Filter Criteria** box, modify the default LDAP filter. The default filter generates a list of all users in the domain along with their group memberships.
   4. Add the filter **manager Not Present** to fetch a list of all enabled users without managers, along with DL memberships.
   ![Filter criteria for enabled users without managers](./../0-images/servlet_image_6278e144466d.png)

7. Click **Next**.
   ![Next step in report wizard](./../0-images/servlet_image_e3be8f49fd6c.png)

8. The **Edit Report Fields** page displays the fields that will be included in the report. To add more fields, click **Add**. To remove a field, select it and click **Remove**. You can change the order of fields using the double bar buttons.

9. Click **Finish** to generate the report.

10. The report will be generated. You can download the report in your desired format or pin the report to the Reports portal Dashboard.
    ![Generated report on enabled users without managers and DL memberships](./../0-images/servlet_image_0244ce7a37b7.png)