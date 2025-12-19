---
title: "1.Users and Roles Job Group"
description: "1.Users and Roles Job Group"
sidebar_position: 30
---

# 1.Users and Roles Job Group

The 1.Users and Roles Job Group is designed to provide insight into user security, roles, and object
permissions on all Oracle database objects.

![Users and Roles Job Group](/images/accessanalyzer/11.6/solutions/databases/oracle/usersroles/jobgroup19.webp)

The jobs in the 1.Users and Roles Job Group are:

- [Oracle_PasswordIssues Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/usersroles/oracle_passwordissues.md)
  – This job group is designed to analyze the Oracle user passwords and evaluate if they comply with
  the prescribed password policies. In addition, the job will also scan the passwords for weak
  passwords.
- [Oracle_RoleMembers Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/usersroles/oracle_rolemembers.md)
  – This job is designed to analyze and provide information about all the role members in each of
  the Oracle database roles across all the targeted Oracle database servers
- [Oracle_SystemAdministrators Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/usersroles/oracle_systemadministrators.md)
  – This job group is designed to provide insight into all the users who have DBA, SYSDBA, and
  SYSOPER roles across all the targeted Oracle database servers
- [Oracle_Users Job](/docs/accessanalyzer/11.6/solutions/databases/oracle/usersroles/oracle_users.md)
  – This job group is designed to provide insight into all the attributes associated with all the
  users in the Oracle database across all targeted Oracle database servers
