---
description: >-
  Explains how to exclude trustees (users or groups) from Access Information
  Center entitlement reviews by adding their SID and trustee type to the
  SA_AIC_ResourceReviewIgnoredTrustees table. Includes a Netwrix Access Analyzer
  job and SQL examples to automate or manually perform the exclusion.
keywords:
  - Access Information Center
  - entitlement review
  - exclude trustees
  - SA_AIC_ResourceReviewIgnoredTrustees
  - Netwrix Access Analyzer
  - SID
  - trustee type
  - SQL
  - exclusions
products:
  - access_info_center
sidebar_label: Exclude Trustees from Entitlement Reviews
tags: []
title: "Exclude Trustees from Entitlement Reviews"
knowledge_article_id: kA04u0000000IueCAE
---

# Exclude Trustees from Entitlement Reviews

## Symptom

Customers may want to exclude admins, other user accounts or groups, from appearing in Access Information Center (AIC) Entitlement Reviews.

## Cause

In certain cases, customers may want to exclude certain admins, other users, or groups from appearing in Access Information Center (AIC) Entitlement Reviews. This may be useful, so that end users don’t see what access admins and other users have over various resources.

## Instructions

To exclude a user or group from Entitlement Reviews, the object's SID and Trustee Type need to be added to the following database table:

`[SA_AIC_ResourceReviewIgnoredTrustees]`

A Netwrix Access Analyzer job has been created that automates this process, which can be downloaded here:

https://downloads.stealthbits.com/access/files/Utilities/Jobs/AICExclusions.zip

1. Unzip `GROUP_Exclusions` from `AICExclusions.zip` to: ` %sainstallerdir%Jobs`
2. Refresh the Netwrix Access Analyzer job tree, or restart Netwrix Access Analyzer, to see the new **Exclusions** job group.

Before running the job, edit the following CSV with trustees (including the trustee type) that should be excluded from appearing in AIC Entitlement Reviews:

`%sainstalldir%Jobs\GROUP_Exclusions\JOB_0.Import\Exclusions.csv`

Each trustee should go on their own line, in the following format including the trustee type (a full list of trustee type values can be found below):

`MYDOMAIN\MyUser,4`

> NOTE: This Netwrix Access Analyzer job will only work for trustee types 4 and 5 (AD user and AD group, respectively). Other trustee types can be manually added with SQL scripts (examples below).

> NOTE: There cannot be a space after the comma, otherwise the user/group will not be properly added to the exclusions table.

Specifying a trustee type supports the ability to specify any account type (e.g. not just groups and their members).

### Trustee Type Values

| Trustee Type | Description                               |
|--------------|-------------------------------------------|
| 0            | Unknown / Unresolved SID                  |
| 1            | Security Principle                        |
| 2            | Local User                                |
| 3            | Local Group                               |
| 4            | Global User                               |
| 5            | Global Group                              |
| 6            | SharePoint User                           |
| 7            | SharePoint Group                          |
| 8            | Unsupported / Possible Collection Issue   |
| 9            | Service Account                           |
| 10           | Computer                                  |
| 11           | Unresolved Domain Principal               |
| 20           | Unix User                                 |
| 21           | Unix Group                                |

Trustees can also be excluded via manual SQL scripts, rather than using the provided Netwrix Access Analyzer job.

> NOTE: To be added to the exclusion list, users must already exist in [SA_ADInventory_UsersView], and groups must already in exist in [SA_ADInventory_GroupsView] (from Netwrix Access Analyzer scans).

### Example SQL to add multiple Domain Users (trustee type 4) to the exclusion list:

```sql
INSERT INTO [SA_AIC_ResourceReviewIgnoredTrustees]

SELECT ObjectSid,4 FROM SA_ADInventory_UsersView WHERE SamAccountName IN ('DomainUserA','DomainUserB')
```

### Example SQL to add a Domain Group (trustee type 5) to the exclusion list:

```sql
INSERT INTO [SA_AIC_ResourceReviewIgnoredTrustees]

SELECT ObjectSid,5 FROM SA_ADInventory_GroupsView WHERE SamAccountName IN ('Administrators') AND domainname = 'MYDOMAIN'
```

### Example SQL to display excluded trustees:

```sql
SELECT * FROM [SA_AIC_ResourceReviewIgnoredTrustees]
```

> NOTE: In older versions of the AIC this table (`[SA_AIC_ResourceReviewIgnoredTrustees]`) will need to be manually created. In all newer versions the table is created automatically.

### SQL table creation (`[SA_AIC_ResourceReviewIgnoredTrustees]`), if needed:

```sql
IF object_id('[SA_AIC_ResourceReviewIgnoredTrustees]','table') IS NOT NULL

DROP TABLE [SA_AIC_ResourceReviewIgnoredTrustees]

CREATE TABLE [dbo].[SA_AIC_ResourceReviewIgnoredTrustees](

      [ObjectSid] [varchar](184) NOT NULL,

      [TrusteeType] [smallint] NOT NULL,

CONSTRAINT [PK_SA_AIC_ResourceReviewIgnoredTrustees] PRIMARY KEY CLUSTERED(

      [ObjectSid] ASC)

WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS  = ON)

ON [PRIMARY]) ON [PRIMARY]
```
