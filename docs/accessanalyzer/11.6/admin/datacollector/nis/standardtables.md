---
title: "Standard Reference Tables & Views for the NIS Data Collector"
description: "Standard Reference Tables & Views for the NIS Data Collector"
sidebar_position: 10
---

# Standard Reference Tables & Views for the NIS Data Collector

The NIS Data Collector gathers essential user and group inventory information into standard
reference tables. Unlike other Enterprise Auditor data collectors, the NIS Data Collector writes
data to these tables regardless of the job executing the query.

The following table outlines these tables and their associated views:

| Table               | Details                                                                                |
| ------------------- | -------------------------------------------------------------------------------------- |
| SA_NIS_GroupMembers | Contains a map of groups to member Identifiers                                         |
| SA_NIS_Groups       | Contains extended information about groups, mail enabled, security enabled, and so on. |
| SA_NIS_Users        | Contains extended information about users, department, title, and so on                |

Views are the recommended way for Enterprise Auditor users to obtain the information the NIS Data
Collector gathers. They contain additional information useful for building queries. The following
explains the corresponding view for some of the tables the NIS Data Collector generates:

| Views                   | Details                               |
| ----------------------- | ------------------------------------- |
| SA_NIS_GroupMembersView | Contains group membership information |
