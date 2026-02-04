---
title: "Entra ID Object Details Pages"
description: "Entra ID Object Details Pages"
sidebar_position: 30
---

# Entra ID Object Details Pages

The Microsoft Entra ID Object details pages provide details on Microsoft Entra ID objects including
users, groups, applications, devices and roles. These pages can be used to discover more information
about the various resources related to threats and events in Threat Manager. Pages include:

- [User Details Page](/docs/threatmanager/3.1/administration/threats/entraidobjects/entraiduser.md)

- [Group Details Page](/docs/threatmanager/3.1/administration/threats/entraidobjects/entraidgroup.md)

- [Role Details Page](/docs/threatmanager/3.1/administration/threats/entraidobjects/entraidrole.md)

- [Application Details Page](/docs/threatmanager/3.1/administration/threats/entraidobjects/entraidapplication.md)

![threatlist](/images/threatmanager/3.0/administration/threatlist.webp)

The [Threats Page](/docs/threatmanager/3.1/administration/threats/threats.md) contains a threats list with hyperlinks which can be clicked to
access these pages.

**Common Details Page Elements**

The User Details, Group Details, Application details and Role details pages contain some common page
elements.

## Profile Card

The profile card displays information about the selected user, application, group, or role.

![Entra ID User Profile Card](/images/threatmanager/3.0/administration/threatdetails/entraiduserprofilecard.webp)

- Name
- UPN
- Manager
- Department
- ObjectID
- Object Type
- Tenant
- On-premises synced accounts (will appear if a synced account exists)
- Assigned tags, with an option to add Tags

## Tabs

Depending on the selected user, group, application or role, the following tabs may be displayed:

![Tabs](/images/threatmanager/3.0/administration/threatdetails/tabs.webp)

- Threats Tab – Displays a chart with threats detected for a Microsoft Entra ID object
- Activity Summary Tab – Depending on the selected object, the page may display the following
  information:

    - Activity Overview Chart (Past 12 Months)
    - Average Activity by Hour Chart
    - Average Activity by Day Chart
    - Events by Type Chart
    - Activity by Host Table
    - Activity by Client Table

- Group Membership Tab – For a:

    - user - displays a table that lists the groups of which the user is a member
    - group - displays a table that lists the users that belong to that group

- Roles - roles assigned to the group or user

## Add Tag Button

The Add Tag button can be used to assign existing tags to a user, group, or host computer. It also
provides the option to create new tags.

**Add an Existing Tag**

Follow the steps to add a tag to a user, group, or computer

![Existing Tags List](/images/threatmanager/3.0/administration/threatdetails/addtagbutton.webp)

**Step 1 –** Click the Add Tag button.

**Step 2 –** Click the desired tag to add from the list of existing tags.

The selected tag is added to the user, group, application or role. See the
[Tag Management Page](/docs/threatmanager/3.1/administration/configuration/integrations/tagmanagement.md) topic for additional
information.
