---
title: "Entra ID Object Details Pages"
description: "Entra ID Object Details Pages"
sidebar_position: 30
---

# Entra ID Object Details Pages

The Microsoft Entra ID Object details pages provide details on Microsoft Entra ID objects including
users, groups, applications, service principals, devices, and roles. Use these pages to review the
resources related to threats and events in Threat Manager. Pages include:

- [User Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraiduser.md)

- [Group Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraidgroup.md)

- [Role Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraidrole.md)

- [Application Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraidapplication.md)

- [Service Principal Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraidserviceprincipal.md)

![threatlist](/images/threatmanager/3.0/administration/threatlist.webp)

The [Threats Page](/docs/threatmanager/3.3/administration/threats/threats.md) contains a threats list with hyperlinks to
access these pages.

**Common Details Page Elements**

The User Details, Group Details, Application Details, Service Principal Details, and Role Details
pages contain some common page elements.

## Profile Card

The profile card displays information about the selected user, application, service principal,
group, or role. The fields vary by object type. See the individual details page topics for the
fields specific to each object type.

![Entra ID User Profile Card](/images/threatmanager/3.0/administration/threatdetails/entraiduserprofilecard.webp)

The profile card may include the following fields:

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

Depending on the selected user, group, application, service principal, or role, the page may
display the following tabs:

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

Some tabs display only for AI agent objects. See the
[Application Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraidapplication.md)
and [Service Principal Details Page](/docs/threatmanager/3.3/administration/threats/entraidobjects/entraidserviceprincipal.md)
for definitions of these object types.

- Owners Tab – Lists the objects that can manage the application or service principal. Doesn't
  appear for Agent Identity Blueprint Principals
- Sponsors Tab – Lists the directory objects that sponsor an Agent Identity or Agent Identity
  Blueprint. Appears only for those object types
- Agent Identities Tab – Lists the Agent Identities and Agent Users created from an Agent Identity
  Blueprint. Appears only on Agent Identity Blueprint applications
- Agent Users Tab – Lists the Agent Users linked to an Agent Identity. Appears only on Agent
  Identity service principals

## Add Tag Button

Use the Add Tag button to assign existing tags to a user, group, application, service principal,
computer, or role. You can also create new tags.

**Add an Existing Tag**

To add a tag to a user, group, application, service principal, computer, or role:

![Existing Tags List](/images/threatmanager/3.0/administration/threatdetails/addtagbutton.webp)

**Step 1 –** Click the Add Tag button.

**Step 2 –** Click the tag you want to add from the list of existing tags.

Threat Manager adds the selected tag to the user, group, application, service principal, computer,
or role. See the
[Tag Management Page](/docs/threatmanager/3.3/administration/configuration/integrations/tagmanagement.md) to view or manage all
built-in and custom tags.
