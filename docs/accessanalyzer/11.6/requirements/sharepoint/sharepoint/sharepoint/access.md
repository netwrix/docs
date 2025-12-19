---
title: "SharePoint Access & Sensitive Data Auditing Configuration"
description: "SharePoint Access & Sensitive Data Auditing Configuration"
sidebar_position: 10
---

# SharePoint Access & Sensitive Data Auditing Configuration

Permissions are required on the SharePoint Farm, Web Application, and the SharePoint Database in
order for Enterprise Auditor to execute Access Auditing (SPAA) and/or Sensitive Data Discovery
Auditing scans.

## Configure SharePoint Farm Permissions

Follow the steps to configure the SharePoint Farm level permissions on SharePoint 2013 through
SharePoint 2019 farms.

**Step 1 –** In the SharePoint Central Administration Center, navigate to the Security section.

**Step 2 –** Select the Manage the farm administrators group option under Users.

**Step 3 –** If the Farm Read group exists, add the service account to that group. If the Farm Read
group has been deleted, it is necessary to create a new group with Read privileges at the Farm
level:

- Select More under the Groups section.
- Select New Group from the New drop-down menu.
- Ensure the group has the Read – Can view pages and list items and download documents permission.
- Add the service account to this new group.

The service account has Read level access at the Farm level.

## Configure SharePoint Web Application Permissions

Follow the steps to configure the SharePoint web application level permissions on SharePoint 2013
through SharePoint 2019 farms.

**Step 1 –** In the SharePoint Central Administration Center, navigate to the Application Management
section.

**Step 2 –** Select Manage web applications option under Web Applications.

**Step 3 –** Create a new policy for the desired web application. Follow these steps:

- Click Permission Policy. The Manage Permission Policy Levels window opens.
- Click Add Permission Policy Level. Select the following:

    - Check the Site Collection Auditor permission.
    - Check the Open Items box in the Site Permissions Grant column.
    - Click Save.

**Step 4 –** Repeat Step 3 for each web application in scope. It is recommended to give these
policies the same name.

**Step 5 –** Add the service account to the newly created roles. Follow these steps:

- Select a web application with the newly created role.
- Click User Policy. The Policy for Web Application window opens.
- Click Add Users. Leave all zones select and click Next.
- Add the service account in the Users textbox.
- Check the newly created role with site collection auditor in the Permissions section. Click
  Finish.

**Step 6 –** Repeat Step 5 for each web application in scope.

The service account is provisioned as a Site Collection Auditor on all web applications to be
audited.

## Configure SharePoint Database Server Permissions

Follow the steps to configure the SharePoint database server permissions on SharePoint 2013 through
SharePoint 2019 farms.

**Step 1 –** Navigate to the SharePoint database server user configuration via SQL Management
Studio.

**Step 2 –** Provision the service account to have:

- SPDataAccess Database role membership
- This database role membership needs to be configured on:

    - SharePoint Configuration database (ShaerPoint_Config)
    - All SharePoint Content databases housing web application data (by default the content
      databases begin with WSS*Content*, but they can be customized)

The service account is provisioned with SharePoint database permissions.
