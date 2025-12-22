---
title: "0.Collection > UX_UsersAndGroups Job"
description: "0.Collection > UX_UsersAndGroups Job"
sidebar_position: 10
---

# 0.Collection > UX_UsersAndGroups Job

The UX_UsersAndGroups job collects user and group information from /etc/passwd, /etc/shadow, and
their equivalents in order to provide details on user and group conditions to help pinpoint
potential areas of administrative concern.

![0.Collection > UX_UsersAndGroups Job in the Jobs Tree](/images/accessanalyzer/11.6/solutions/unix/usersgroups/collectionjobstree.webp)

The UX_UsersAndGroups job is located in the 0.Collection job group.

## Queries for the UX_UsersAndGroups Job

The UX_UsersandGroups job uses the Unix Data Collector for the following queries:

:::warning
The queries are preconfigured for this job. Never modify the queries.
:::


![Queries for the UX_UsersAndGroups Job](/images/accessanalyzer/11.6/solutions/unix/usersgroups/usersandgroupsqueries.webp)

The queries for the UX_UsersAndGroups job are:

- UX_LocalUsers – Obtains local user information from /etc/passwd
- UX_LocalGroups – Obtains local group information from /etc/group
- UX_LocalGroupMembers – Obtains local group membership information from /etc/group
- UX_UserPasswords_AIX – Gets shadow file information on AIX hosts
- UX_UserPasswords_Linux – Gets shadow file information on RHEL, CentOS, Debian, SuSE, and Solaris
  hosts
- UX_PasswordSettings_AIX – Gets system password settings from /etc/security/user
- UX_PasswordSettings_Linux – Gets system password settings from /etc/login.defs
- UX_PasswordSettings_Solaris – Gets system password settings from /etc/default/passwd
- UX_UserPasswords_AIX_LastUpdate – Gets passwd file information on AIX hosts

## Analysis Tasks for the UX_UsersAndGroups Job

Navigate to the **Unix** > **1.Users and Groups** > **0.Collection** > **UX_UsersAndGroups** >
**Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the UX_UsersAndGroups Job](/images/accessanalyzer/11.6/solutions/unix/usersgroups/usersandgroupsanalysis.webp)

The default analysis tasks are:

- Creates UX_Users from LDAP_Users, NIS_Users, and UX_LocalUsers – Creates the UX_Users table
  accessible under the job’s Results node
- Creates UX_Groups from LDAP_Groups, NIS_Groups, and UX_LocalGroups – Creates the UX_Groups table
  accessible under the job’s Results node
- Creates UX_GroupMembers – Creates the UX_GroupMembers table accessible under the job’s Results
  node
