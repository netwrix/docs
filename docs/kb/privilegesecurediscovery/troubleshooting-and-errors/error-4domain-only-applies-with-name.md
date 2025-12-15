---
description: 'Shows the cause and resolution for the "4Domain only applies with name" UI error on the Grant Access page and how to verify and remove the offending local group member using PowerShell.'
keywords:
- 4Domain
- Grant Access
- Local Administrators
- Get-LocalGroupMember
- Remove-LocalGroupMember
- PowerShell
- AccountDomainSid
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116daAAA
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-11'
  knowledge_article_id: kA04u00000110qOCAQ
  last_modified_date: '2023-07-11'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: "Error: 4Domain Only Applies with Name"
tags: []
title: 'Error: 4Domain Only Applies with Name'
knowledge_article_id: kA04u00000110qOCAQ
---

# Error: 4Domain Only Applies with Name

Formerly SecureONE

## Symptom and Cause

Error message:

```text
4Domain only applies with name
```

UI error message in upper right corner of **Grant Access** page.

Checking this can be done via PowerShell command below:

```powershell
Get-LocalGroupMember -SID S-1-5-32-544 | ConvertTo-JSON
```

![GetLocalGroupMember.png](../0-images/ka04u00000116da_0EM4u000008LVoZ.png)

The **AccountDomainSid** value showing incomplete. The example shows the **Name** value as `CSTEST\` when the complete value should have an account associated with is such as `CSTEST\s1protect`.

This causes the return of incomplete data for an account/member within the Local Administrators group.

## Resolution

The offending record/member will need to be removed from the local administrator group, once it is determine it is not needed, via the below command:

```powershell
Remove-LocalGroupMember -Group Administrators -member < DOMAIN >
```

After the removal of the offending account a rescan of the system should result in a successful message.
