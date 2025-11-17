---
description: >-
  Explains why SharePoint Online audit data may be delayed or missing when
  collected by Netwrix Auditor, including Microsoft Management Activity API
  limitations, maintenance windows, and retention policies. Advises keeping the
  Monitoring Plan active to ensure complete data collection.
keywords:
  - SharePoint Online
  - audit data
  - Management Activity API
  - Netwrix Auditor
  - Monitoring Plan
  - audit log
  - Office 365
  - retention
  - delay
products:
  - auditor
  - Azure_AD_and_Office_365
sidebar_label: SharePoint Online Audit Data Delays or Missing
tags: []
title: "Why do I receive my SharePoint Online audit data too late (or do not receive at all)?"
knowledge_article_id: kA00g000000H9V7CAK
---

# Why do I receive my SharePoint Online audit data too late (or do not receive at all)?

## Explanation

Due to Microsoft Management Activity API limitations, Netwrix Auditor may experience delays when collecting audit data.

- It may take up to 12 hours since the **Monitoring Plan** creation to start collecting audit data. For more information, refer to the following Microsoft article: https://msdn.microsoft.com/office-365/office-365-management-activity-api-reference
- After initial configuration, it may take approximately 15 minutes for events to appear in the activity log after the change occurred.
- In case of Microsoft maintenance works, audit data may be unavailable for a few days. For more information, refer to the following Microsoft article: https://support.office.com/en-us/article/Search-the-audit-log-in-the-Office-365-Security-Compliance-Center-0d4d0f35-390b-4518-800e-0c7ec95e946c?ui=en-US&rs=en-US&ad=US

Also, Microsoft automatically removes events that are older than 7 days—Netwrix Auditor will be unable to collect them. To ensure your audit data is always complete, make sure the **Monitoring Plan** is always active.
