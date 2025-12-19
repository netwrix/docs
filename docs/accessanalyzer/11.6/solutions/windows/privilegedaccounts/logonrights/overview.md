---
title: "Logon Rights Job Group"
description: "Logon Rights Job Group"
sidebar_position: 30
---

# Logon Rights Job Group

The Logon Rights job group collects local policy information and reports on privileged users.

![Logon Rights Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/windows/privilegedaccounts/logonrights/jobstree.webp)

The jobs and job groups in the Logon Rights job group are:

- [Collection Job Group](/docs/accessanalyzer/11.6/solutions/windows/privilegedaccounts/logonrights/collection/overview.md)
  – The jobs within this group collect group policy settings, local users, and local group
  membership from Windows servers which will be further analyzed to provide insight into privileged
  users within the environment
- [SG_AccountPrivileges Job](/docs/accessanalyzer/11.6/solutions/windows/privilegedaccounts/logonrights/sg_accountprivileges.md)
  – This job highlights account privileges across the audited environment, filtering out default
  privileges present on Windows servers
- [SG_LocalPolicies Job](/docs/accessanalyzer/11.6/solutions/windows/privilegedaccounts/logonrights/sg_localpolicies.md)
  – This job identifies privileged accounts across the audited environments, based on the number of
  local security policies assigned
