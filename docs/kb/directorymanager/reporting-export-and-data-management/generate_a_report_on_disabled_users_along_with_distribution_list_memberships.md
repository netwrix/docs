---
description: >-
  This article explains how to generate a report on disabled users along with their distribution list memberships using Netwrix Directory Manager.
keywords:
  - Directory Manager
  - disabled users
  - distribution list memberships
sidebar_label: Generate Report on Disabled Users
tags:
  - reporting-export-and-data-management
title: "Generate a Report on Disabled Users Along With Distribution List Memberships"
knowledge_article_id: kA0Qk0000002R7NKAU
products:
  - directory-manager
---

# Generate a Report on Disabled Users Along With Distribution List Memberships

## Applies To

Netwrix Directory Manager 11

## Overview

Netwrix Directory Manager (formerly GroupID) allows you to generate reports on disabled users along with their distribution list (DL) memberships. The Reports module is a free tool for running reports on Active Directory and Microsoft Exchange/Office 365. This article explains how to generate this report using the Reports portal.

## Instructions

### Generate a Report on Disabled Users and Their DL Memberships

1. In the Directory Manager portal, select **Reports** from the left navigation bar. The Reports portal will open in a new browser tab.
   ![Reports portal in Directory Manager](./../0-images/servlet_image_451a4261ce2f.png)

2. Click the **User Reports** button on the navigation bar.

3. In the Users category, type **Users multiple DL memberships** in the search bar.
   ![Searching for Users multiple DL memberships report](./../0-images/servlet_image_c303f69db518.png)

4. Click the report when it appears in the search results. A new window will open.

5. Click **Create Report** to start the report creation wizard.
   ![Create Report wizard in Directory Manager](./../0-images/servlet_image_3adeec70e526.png)

6. On the first page, provide a name for the report, then choose the search scope within the directory and provide a filter criterion. By default, the wizard searches the Global Catalog. To limit the scope to a particular container:
   1. Click **Browse** to launch the **Select Container** dialog box and select the required source container.
   2. Select the **Include sub-containers** check box to include sub-containers in the report.
   3. In the **Filter Criteria** box, modify the default LDAP filter. The default filter generates a list of all users in the domain along with their group memberships.
   4. Add the filters **UserAccountControl BitAnd 2** and **GroupType Is Not 2147483648** to fetch a list of all disabled users within the specified container, along with their DL memberships.
   ![Filter criteria for disabled users and DL memberships](./../0-images/servlet_image_761bfdbbeba6.png)

7. Click **Next**.
   ![Next step in report wizard](./../0-images/servlet_image_504b5dea921c.png)

8. The **Report Fields** page displays the fields that will be included in the report. To add more fields, click **Add**. To remove a field, select it and click the **Cross** button. You can change the order of fields using the double bar buttons.

9. Click **Finish** to generate the report.

10. The report will be generated. You can download the report in your desired format or pin the report to the Reports portal Dashboard.
    ![Generated report on disabled users and DL memberships](./../0-images/servlet_image_9a4475fa8080.png)