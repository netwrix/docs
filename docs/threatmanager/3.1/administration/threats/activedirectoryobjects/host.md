---
title: "Host Details Page"
description: "Host Details Page"
sidebar_position: 30
---

# Host Details Page

The Host Details page displays all threats on the selected host.

![Host Details page](/images/threatmanager/3.0/administration/threatdetails/page_2.webp)

The top of the page displays a host profile card which may contain the following information about
the host:

- Host Name
- Distinguished Name (DN)
- NT Name (SAM Account Name)
- DNG Host Name
- Operating System
- Operating System Version
- Object GUID
- Object Type
- Domain
- Tags, with an option to add additional tags

The page has the following tabs:

- Threats Tab
- Activity Summary Tab
- Group Membership Tab

## Threats Tab

The Threats tab for a host displays the threats for the host by timeframe.

![Threats tab of the Host Details page](/images/threatmanager/3.0/administration/threatdetails/threatstab.webp)

The Threats tab contains a bar chart that displays each type of threat on the host and a pie chart
that shows the total number of threats on the host. The Threats List displayed below the Historical
Events section displays all threats that occurred on the host for the selected timeframe.

## Activity Summary Tab

The Activity Summary tab displays charts for host activity over different time periods.

![Activity Summary tab of the Host Details page](/images/threatmanager/3.0/administration/threatdetails/activitysummarytab.webp)

The Activity Overview (Past 12 Months) shows a color-coded heat map of host activity. Other metrics
include Average Activity by Hour, and Average Activity by Day, and Events by Type.

## Group Membership Tab

The Group Membership tab displays the groups the host is a member of. It has the following sub-tabs:

- Direct Member Of – Lists groups the host is a direct member of
- Indirect Member Of – Lists groups the host is a member of via membership in a nested group

![groupmembershiptab](/images/threatmanager/3.0/administration/threatdetails/groupmembershiptab.webp)

![Group Membership Tab Indirect Member of Page](/images/threatmanager/3.0/administration/threatdetails/groupmembershiptabindirect.webp)

Each table has the following columns:

- Name – The name of the group. Click the link to view group details. See the
  [Group Details Page](/docs/threatmanager/3.1/administration/threats/activedirectoryobjects/group.md) topic for additional information.
- Domain – Name of the domain. This may be either the domain DNS name or domain controller hostname.
- Tags – The tag present on the perpetrator, file, or host associated with the event
