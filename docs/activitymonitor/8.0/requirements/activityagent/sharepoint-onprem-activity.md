---
title: "SharePoint On-Premise Activity Auditing Configuration"
description: "SharePoint On-Premise Activity Auditing Configuration"
sidebar_position: 50
---

# SharePoint On-Premise Activity Auditing Configuration

SharePoint Event Auditing must be enabled for each site collection to be monitored by the Netwrix
Activity Monitor and/or audited by Netwrix Access Analyzer (formerly Enterprise Auditor).

## User Requirements

Following are the SharePoint On-Premise user requirements:

- Local Administrator on SharePoint server (that hosts Central Administration)
- SharePoint SQL server, which includes login on SharePoint Admin, Config, and all content
  databases, with the following role permissions:

    - SharePoint 2013+

        - SPDataAccess

    - SharePoint 2010

        - db_owner

## Enable Event Auditing

Follow the steps for each site collection within a SharePoint 2013 through SharePoint 2019 farm.

**Step 1 –** Select Settings > Site settings.

**Step 2 –** Under Site Collection Administration, click Go to top level site settings.

**Step 3 –** On the Site Settings page, under Site Collection Administration, select Site collection
audit settings.

**Step 4 –** On the Configure Audit Settings page, in the Documents and Items section select the
events to be audited.

**Step 5 –** Still on the Configure Audit Settings page, in the List, Libraries, and Site section
select the events to be audited.

**Step 6 –** Click OK to save the changes.

SharePoint will create the audit logs to be monitored by the Netwrix Activity Monitor and/or audited
by Access Analyzer. See the Microsoft
[Configure audit settings for a site collection (SharePoint 2013/2016/2019)](https://support.office.com/en-us/article/Configure-audit-settings-for-a-site-collection-a9920c97-38c0-44f2-8bcb-4cf1e2ae22d2)
article for additional information.
