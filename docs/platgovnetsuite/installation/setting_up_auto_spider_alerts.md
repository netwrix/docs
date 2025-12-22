---
title: "Setting Up the AutoSpider and Alerts"
description: "Setting Up the AutoSpider and Alerts"
sidebar_position: 30
---

# Setting Up the AutoSpider and Alerts

After you have run your initial spider, the AutoSpider monitors your account on an ongoing basis to
see if customization changes have occurred. This is a light scan of the data to determine if there
were any changes. If changes are detected, you are reminded to ReSpider your account.

Best practice is to run the AutoSpider regularly. If the AutoSpider is not run, your Change Logs
will be missing the **Changed by** and **Actual Change Date** fields. When the Change Log is newly
created, the fields contain **Pending AutoSpider**. If too many days go by, the fields change to
**Could not be determined**.

## Set Up the AutoSpider

:::note
The AutoSpider portlet should be installed on all Administrator homepages. The AutoSpider triggers
when the Administrator logs in. Ideally daily or every other day. Best practice is to wait for the
portlet to load and see the **Spider Triggered** message before continuing.
:::

The **AutoSpider Portlet** is required to update certain object types in NetSuite. Once triggered
through the dashboard portlet, it picks up all changes on custom objects and triggers the scheduled
scripts to reflect them in the Customization records, going back two days. The AutoSpider portlet is
required in order to update these object types:

- Bundle
- Custom Report
- Entry Form
- Mass Update
- Online Customer Form
- Record
- Transaction Form
- Custom Advanced PDF/HTML Template

To add the auto spider portlet:

1. Log in to NetSuite with an Administrator role.
2. Click **Personalize** on your home page.
3. Click **Custom Portlet**.
4. Click the menu icon for the **Custom Portlet** and select **Set Up**
5. Select **Strongpoint AutoSpider Portlet (Realtime)** from the **Source** list.
6. Click **Save**

Any objects not captured by the AutoSpider are picked up by the Customizations to ReSpider alert.

![Auto-Spider Portlet](/images/platgovnetsuite/installing_strongpoint/auto-spider_portlet.webp)

Stay on your **Home** page until you see **Spider Triggered** to ensure the spider starts.

## Set up Customizations to ReSpider Alerts

A series of Workflows are used to review system notes, audit logs and object history. These
workflows identify when the Customization Records have not been updated. To ensure the objects in
your account are updating, set up the Customizations to ReSpider search to provide alerts to the
appropriate people in your company.

**Next Step:** [Managing Users](/docs/platgovnetsuite/installation/managing_users.md)
