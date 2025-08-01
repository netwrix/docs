---
title: "Standard Reference Tables & Views for the NIS Data Collector"
description: "Standard Reference Tables & Views for the NIS Data Collector"
sidebar_position: 10
---

# Standard Reference Tables & Views for the NIS Data Collector

The NIS Data Collector gathers essential user and group inventory information into standard
reference tables. Unlike other Enterprise Auditor data collectors, the NIS Data Collector writes
data to these tables regardless of the job executing the query.

These tables and their associated views are outlined below:

| Table               | Details                                                                                |
| ------------------- | -------------------------------------------------------------------------------------- |
| SA_NIS_GroupMembers | Contains a map of groups to member Identifiers                                         |
| SA_NIS_Groups       | Contains extended information about groups, mail enabled, security enabled, and so on. |
| SA_NIS_Users        | Contains extended information about users, department, title, and so on                |

Views are the recommended way for Enterprise Auditor users to obtain the information gathered by the
NIS Data Collector. They contain additional information for building queries easily. The following
is an explanation of the corresponding view created for some of the tables generated by the NIS Data
Collector:

| Views                   | Details                               |
| ----------------------- | ------------------------------------- |
| SA_NIS_GroupMembersView | Contains group membership information |
