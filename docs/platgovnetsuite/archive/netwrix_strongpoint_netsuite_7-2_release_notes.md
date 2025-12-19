---
title: "Core 7.2"
description: "Core 7.2"
sidebar_position: 20
---

# Core 7.2

Netwrix Strongpoint for NetSuite 7.2 Release Notes

## Core 7.2

December 22, 2023

**New:** **Strongpoint Integration API**

Strongpoint is excited to release an [Integration API](/docs/platgovnetsuite/ticketingintegrations/apioverview/api_overview.md) to enable your
developers to support your ticketing systems! Customers enthusiastically embraced our Strongpoint
pre-built integrations for Jira, ServiceNow and Zendesk. The API makes this integration
functionality available to everyone. Integrating your systems with your Strongpoint account helps
you make the most of your change management and ticketing strategies.

Here are the API highlights:

- **Customizations** can be retrieved from your NetSuite account and can be added and removed from
  your Change Requests.
- **Change Requests** can be created, updated, retrieved and deleted.
- **ERD** and **Impact Analysis** tools are available.
- API commands are documented in the [Integration API](/docs/platgovnetsuite/ticketingintegrations/apioverview/api_overview.md) section of this
  guide.
- API commands are available in [Postman](http://postman.com/), where you can try them out and test
  them. There are Postman links in this guide.

**New: Strongpoint Reset Schedule Deployments Suitelet for Sandbox Refresh**

NetSuite has removed the scheduled status on scripts after a sandbox is refreshed. This stops the
Strongpoint scripts required for environment compares, change requests built to push to production,
and other activities. This suitelet enables you to automatically reset all of your Strongpoint
scripts. If you have scheduled custom scripts in your sandbox, you must manually set the status
after a sandbox refresh.

1. Open your Sandbox.
2. Open **Customization** > **Scripting** > **Scripts**.
3. Set the Filter **Type** to **Suitelet** and the **Bundle ID** to **294336**.

    ![Find the Suitelet](/images/platgovnetsuite/release_notes/scripts.webp)

4. Click **View** by the **Strongpoint Reset Schedule Deployments** suitelet.
5. Open the **Deployments** tab.

    ![Open the Deployment tab](/images/platgovnetsuite/release_notes/script_deploy_tab.webp)

6. Click the Suitelet name: **Strongpoint Reset Schedule Deployments**.
7. Click on the Script **URL**.

    ![Click the Script URL](/images/platgovnetsuite/release_notes/script_deploy_url.webp)

## SoD 1.6.3

December 19, 2023

- Changed the format of the **Reason for Exemption** column on the **Strongpoint SoD Change Requests
  (List)** report to **Formula Text**. Due to NetSuite 2023.2 changes, HTML tags were displaying in
  the report. Refer to NetSuite Release 2023.2 Support for more details on the NetSuite change.
- Improved handling of inline edits on Employee names. Making an inline name change does not affect
  open SoD Exemptions for the employee.

**NetSuite Release 2023.2 Support**

The Strongpoint Searches have been updated to support NetSuite's change of **Formula (Text) Fields**
to the new **Formula (HTML) Fields**. This is a NetSuite security enhancement.

If you have custom searches, you must update them to support the NetSuite change. To view the list
of saved searches in your account that contain code in **Formula(Text)** fields, open:
**Lists** > **Search** > **Saved Searches with HTML in Formula(Text)**

![Run the Saved Search to view changes](/images/platgovnetsuite/release_notes/formulahtml.webp)
