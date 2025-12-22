---
title: "Add Owner Window"
description: "Add Owner Window"
sidebar_position: 40
---

# Add Owner Window

The Add Owner window opens from either the
[Add New Resource Wizard](/docs/accessinformationcenter/11.6/resourceowners/interface/add.md)
or the
[Update Resource Wizard](/docs/accessinformationcenter/11.6/resourceowners/interface/update.md).
Choose between:

- [Select a Probable Owner](#select-a-probable-owner) — Select from a calculated list of probable
  owners
- [Search for Owner](#search-for-owner) — Browsing Active Directory for a user account

## Select a Probable Owner

![Add Owner window showing Probable Owner option](/images/accessinformationcenter/11.6/resourceowners/window/addownerprobable.webp)

Probable owners are calculated from the available data:

- For File System and SharePoint resources

    - Common Managers – Calculated by looking at the users who have created content within the
      resource and their manager as defined in Active Directory
    - Content Owners – Calculated by looking at the users who have created content within the
      resource
    - Active Users – Calculated by looking at the users who have performed activity within the
      resource as identified by Enterprise Auditor activity audits

- For groups

    - Administrators – Calculated by looking at the Managed By property for the selected group
    - Common Managers – Calculated by looking at the Manager property for the users within the
      selected group

:::note
The Probable Owner categories may or may not be populated with options. For File System or
SharePoint resources, it depends on content and activity data which has been collected by Enterprise
Auditor. If no content or activity information exists, no owner will be recommended. For Active
Directory resources, it depends on the Managed By property for groups and the Manager property for
users to be set within Active Directory. If these properties are blank, no owner will be
recommended.
:::


Select the desired owner from the list and click **OK**. The Add Owner window closes and the
selected user appears in the Owner list.

## Search for Owner

![Add Owner window showing Search option](/images/accessinformationcenter/11.6/resourceowners/window/addownersearch.webp)

Enter a name in the search field to find and select users from Active Directory, which populates in
a drop-down menu as you type. If multiple domains are known to the application, ensure the correct
domain is selected from the drop-down menu. Click **OK** and the Add Owner window closes. The
selected user appears in the Owner list.
