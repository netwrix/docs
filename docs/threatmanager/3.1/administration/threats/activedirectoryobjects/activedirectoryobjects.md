---
title: "Active Directory Object Details Pages"
description: "Active Directory Object Details Pages"
sidebar_position: 20
---

# Active Directory Object Details Pages

Active Directory Object details pages provide details on Active Directory objects including users,
groups,  and hosts (computers). These pages can be used to discover more information about the
various resources related to threats and events in Threat Manager. Pages include:

- [User Details Page](/docs/threatmanager/3.1/administration/threats/activedirectoryobjects/user.md)
- [Group Details Page](/docs/threatmanager/3.1/administration/threats/activedirectoryobjects/group.md)
- [Host Details Page](/docs/threatmanager/3.1/administration/threats/activedirectoryobjects/host.md)

![threatlist](/images/threatmanager/3.0/administration/threatlist.webp)

The [Threats Page](/docs/threatmanager/3.1/administration/threats/threats.md) contains a threats list with hyperlinks which can be clicked to
access these pages.

**Common Details Page Elements**

The User Details, Group Details, and Host Details pages contain some common page elements.

![page](/images/threatmanager/3.0/administration/threatdetails/page_1.webp)

Common details page elements include:

- Profile Card
- Tabs
- Add Tag Button

## Profile Card

The profile card displays information about the selected user, group, or host.

![This screenshot displays a Profile Card.](/images/threatmanager/3.0/administration/threatdetails/profilecard.webp)

The type information displayed depends on the information available for the user, group, or host.

**Profile Card Icons**

The following icons may be displayed in the profile card for user accounts and computers:

![profileicon](/images/threatmanager/3.0/administration/threatdetails/profileicon.webp)

1. Non-Synced object icon : This icon appears when an object was not found in a sync but was created
   by an event.
2. UBA training hourglass icon : This icon shows that the object is still undergoing its User
   Behavior Analytics (UBA) training period.
3. Magnifying Glass Icon : This magnifying glass icon will lead you to the investigation page to
   create one for this object.

## Tabs

Depending on the selected user, group, or host, the following tabs may be displayed:

![This screenshot displays the tabs for the Active Directory Objects page. Tabs include Threats, Activity Summary, and Group Membership.](/images/threatmanager/3.0/administration/threatdetails/adobjecttabs.webp)

- Threats Tab – Displays a chart with threats detected for the user, group, or host
- Activity Summary Tab – Depending on the selected user, group, or host, the page may display the
  following information:
    - Activity Overview Chart (Past 12 Months)
    - Average Activity by Hour Chart
    - Average Activity by Day Chart
    - Events by Type Chart
    - Activity by Host Table
    - Activity by Client Table
- Group Membership Tab – For a user, displays a table that lists the groups of which the user is a
  member. For a group, displays a table that lists the users that belong to that group.

## Add Tag Button

The Add Tag button can be used to assign existing tags to a user, group, or host computer. It also
provides the option to create new tags.

**Add an Existing Tag**

Follow the steps to add a tag to a user, group, or computer.

![addtagbutton](/images/threatmanager/3.0/administration/threatdetails/addtagbutton.webp)

**Step 1 –** Click the Add Tag button.

**Step 2 –** Click the desired tag to add from the list of existing tags.

The selected tag is added to the user, group, or computer. See the
[Tag Management Page](/docs/threatmanager/3.1/administration/configuration/integrations/tagmanagement.md) topic for additional
information.
