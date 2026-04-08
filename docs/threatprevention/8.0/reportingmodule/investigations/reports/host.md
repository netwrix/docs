---
title: "Host Details"
description: "Host Details Page"
sidebar_position: 20
---

# Host Details Page

The Host Details page displays the groups that a host is a member of.

In an investigation report, host names appear as links under the Target column in the Event Details
and Top Resources sections (see the [Investigation Reports](/docs/threatprevention/8.0/reportingmodule/investigations/reports/reports.md) topic). Click a link to land
on the Host Details page.

![Host Details page](/images/threatprevention/8.0/reportingmodule/investigations/hostdetails.webp)

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

## Group Membership Tab

The Group Membership tab displays the groups the host is a member of. It has the following sub-tabs:

- Direct Member Of – Lists groups the host is a direct member of
- Indirect Member Of – Lists groups the host is a member of via membership in a nested group

Each sub-tab displays a table with the following columns:

- Group – The name of the group. Click the link to view group details. See the
  [Group Details Page](/docs/threatprevention/8.0/reportingmodule/investigations/reports/group.md) topic for additional information.
- Domain – Name of the domain. This may be either the domain DNS name or domain controller hostname.
- Tags – The tag present on the perpetrator, file, or host associated with the event
