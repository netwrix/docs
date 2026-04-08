---
title: "Data Discovery and Classification Reports"
description: "Data Discovery and Classification Reports"
sidebar_position: 30
---

# Data Discovery and Classification Reports

Follow these steps to review Data Discovery and Classification reports:

**Step 1 –** Navigate to **Reports > Data Discovery and Classification** and select a report you
are interested in.

**Step 2 –** Click **View**.

Data Discovery and Classification reports are grouped by data sources.

The table below lists the reports available for Data Discovery and Classification. 

**Note:** Some reports listed below are marked as obsolete but remain available for backward compatibility. Renewed versions of these reports are available under **SharePoint Online** in the **Reports** section and are described later in this article. All other reports remain current and fully supported.

| Report                                             | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File Servers                                       |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity reports                                   |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity Related to Sensitive Files and Folders    | This report lists all access attempts (failed and successful changes, and successful and failed read attempts) to files and folders that contain certain categories of sensitive data at the moment.                                                                                                                                                                                          |
| State-in-Time reports                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| Most Accessible Sensitive Files and Folders        | This report shows the number of users that effectively have access to sensitive files or folders, sorted in descending order. Use this report to identify data at high risk and plan for corrective actions accordingly.                                                                                                                                                                      |
| Overexposed Files and Folders                      | This report shows sensitive files and folders accessible by the specified users or groups, based on the combination of folder and share permissions. Use this report to identify data at high risk and plan for corrective actions accordingly.                                                                                                                                               |
| Sensitive Files and Folders by Owner               | This report shows ownership of files and folders that are stored in the specified file share and contain selected categories of sensitive data. Use this report to determine the owners of particular sensitive data.                                                                                                                                                                         |
| Files and Folders Categories by Object             | This report shows files and folders that contain specific categories of sensitive data. Use this report to see whether a specific file or folder contains sensitive data.                                                                                                                                                                                                                     |
| Sensitive Files Count by Source                    | This report shows the number of files that contain specific categories of sensitive data. Use this report to estimate amount of your sensitive data in each category, plan for data protection measures and control their implementation.                                                                                                                                                     |
| Sensitive File and Folder Permissions Details      | This report shows permissions granted on files and folders that contain certain categories of sensitive data. Use this report to see who has access to a particular file or folder, via either group membership or direct assignment. Use this report to reveal sensitive content that has permissions different from the parent folder.                                                      |
| SharePoint                                         |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity reports                                   |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity Related to Sensitive Data Objects         | This report shows changes and read operations on SharePoint sites and documents that contain sensitive information. Use this report to detect suspicious activity around your sensitive data.                                                                                                                                                                                                 |
| State-in-Time reports                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| Sensitive Data Objects by Site Collection          | For each SharePoint site collection listed, this report shows the categories of sensitive data stored there and the number of documents in each category. Use this report to reveal the number of sensitive files stored in your SharePoint site collections.                                                                                                                                 |
| Sensitive Data Objects                             | For each site collection listed, this report shows the SharePoint objects (sites, lists and documents) that have been classified as containing sensitive information. Use this report to plan and control data protection measures for sensitive information stored on your SharePoint.                                                                                                       |
| Sensitive Data Object Permissions                  | For each SharePoint object (site, list or document) listed, this report shows the user accounts that have access to this object, their effective permissions and how those permissions were granted (for example, permissions can be granted directly, via group membership or using SharePoint policy). Use this report to control access to SharePoint objects that contain sensitive data. |
| Overexposed Sensitive Data Objects                 | For each user account listed, this report shows the SharePoint objects (sites, lists and documents) containing sensitive data that the user can access based on their effective permissions. Use this report to identify overexposed data and plan measures to mitigate your risk.                                                                                                            |
| Most Exposed Sensitive Data Objects                | This report lists the SharePoint objects (sites, lists and documents) containing sensitive data that can be accessed by the most users (or even Everyone), based on effective permissions. Use this report to identify data at high risk and plan corrective actions.                                                                                                                         |
| SharePoint Online                                  |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity reports                                   |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity Related to Sensitive Data Objects         | **Status**: Obsolete. **Replacement**: SharePoint Online > SharePoint Online Activity > Activity Related to Sensitive Data Objects. This report shows changes and read operations on SharePoint Online sites and documents that contain sensitive information. Use this report to detect suspicious activity around your sensitive data.                                                      |
| State-in-Time reports                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| Sensitive Data Objects by Site Collection          | For each SharePoint Online site collection listed, this report shows the categories of sensitive data stored there and the number of files in each category.                                                                                                                                                                                                                                  |
| Sensitive Data Objects                             | For each site collection listed, this report shows the SharePoint Online objects (sites, lists and documents) that have been classified as containing sensitive information. Use this report to plan and control data protection measures for sensitive information stored on your SharePoint Online.                                                                                         |
| Sensitive Data Object Permissions                  | **Status**: Obsolete. **Replacement**: SharePoint Online > SharePoint Online — State-in-Time > SharePoint Online Object Permissions. This report shows user accounts with effective permissions and means granted to access to this object. Permissions may be granted directly, via group membership, or using SharePoint Online policy.                                                     |
| Overexposed Sensitive Data Objects                 | **Status**: Obsolete. **Replacement**: SharePoint Online > SharePoint Online — State-in-Time > Account Permissions in SharePoint Online. This report shows the SharePoint Online objects with sensitive data that a user can access based on effective permissions. This applies to every user account in the list. Use this report to identify overexposed data and plan corrective measures.|
| Most Exposed Sensitive Data Objects                | This report lists the SharePoint Online objects (sites, lists and documents) with sensitive data that can be accessed by the most users (or even Everyone), based on effective permissions.                                                                                                                                                                                                   |
| Sensitive Data External Sharing by Site Collection | For each SharePoint Online site collection listed, this report shows the categories of sensitive data shared with users via any level of external sharing. Clicking a link will open the "Sensitive Data Object Permissions" report for the selected site collection.                                                                                                                         |


Renewed versions of certain obsolete reports are available under **SharePoint Online** in the **Reports** section.

- The Activity report is located under **SharePoint Online > SharePoint Online Activity**.
- The State-in-Time reports are located under **SharePoint Online > SharePoint Online — State-in-Time**.

The renewed reports are listed below.

| Report                                             | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SharePoint Online                                  |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity reports                                   |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity Related to Sensitive Data Objects         | This report shows changes and read operations on SharePoint Online documents that contain sensitive information. Use this report to detect suspicious activity around your sensitive data.                                                                                                                                                                                                    |
| State-in-Time reports                              |                                                                                                                                                                                                                                                                                                                                                                                               |
| SharePoint Online Object Permissions               | This report lists user accounts with effective object permissions. Use this report for detailed permissions analysis.                                                                                                                                                                                                                                                                         |
| Account Permissions in SharePoint Online           | This report shows a detailed list of the effective permissions that the specified account has on objects in the site collection. Use this report to verify access and ensure compliance with your policies.                                                                                                                                                                                   |


## Requirements for Data Discovery and Classification Reports

Data Discovery and Classification reports are available for the following data sources:

- **File Servers**
- **SharePoint**
- **SharePoint Online**

To run these reports, ensure the following requirements are met for the corresponding data source:

- A monitoring plan must be configured in **Netwrix Auditor** for the selected data source.
- For Activity reports, activity audit must be enabled.
- For State-in-Time reports, the **Collect data for State-In-Time reports** feature must be enabled.
- A **Netwrix Data Classification** instance must be configured to crawl from the same source (the source name must match exactly).
- **Sensitive Data Discovery** must be correctly configured on the Netwrix Auditor Server. To configure it, navigate to **Settings > Sensitive Data Discovery** and ensure the appropriate connection method is enabled:
    - For reports available under **Reports > Data Discovery and Classification**, enable **Connect to NDC SQL database**.
    - For renewed reports available under **SharePoint Online**, enable **Connect to NDC via API**.
    - Both options can be configured simultaneously, if required.

These reports help reduce the risk of data leaks and non-compliance by ensuring that all
sensitive data resides in safe locations, that it isn't overexposed and that user activity around it
is in line with security policies.


## Make Reports Handy

In addition to reviewing reports, you can customize them with filters and create report
subscriptions. Review the following for additional information:

- [View Reports](/docs/auditor/10.8/admin/reports/view.md)
- [Create Subscriptions](/docs/auditor/10.8/admin/subscriptions/create.md)
