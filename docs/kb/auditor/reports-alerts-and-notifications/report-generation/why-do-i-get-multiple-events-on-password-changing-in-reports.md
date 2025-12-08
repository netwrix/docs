---
description: >-
  Explains why repeated activity records show a computer account password change
  in reports — automatic computer account password changes in Active Directory
  and how domain controllers appear in audit logs.
keywords:
  - active directory
  - computer account
  - password change
  - audit events
  - domain controller
  - local user
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'Why Do I get Multiple Events on Password Changing '
tags: []
title: "Why Do I get Multiple Events on Password Changing in Reports?"
knowledge_article_id: kA04u000000wnt1CAA
---

# Why Do I get Multiple Events on Password Changing in Reports?

## Question

Why do I get multiple activity records of the following format?

```
Who:CORP\ITSQLTR$
Action:Modified
Object type:Local User
What:System Information\Local Users\ITSQLARC$
When:11/15/2023 4:25:09 AM
Where:DCD003.CORP.net
Data source:Windows Server
Monitoring plan:DC Monitoring Plan
Item: DCD003.CORP.net' (Computer)
RID:2023111500000000000000000000000000
Details:Password changed  
```

## Answer

The event you are seeing is an automatic password change for a computer account in Active Directory, which occurs every 30 days by default. Since Domain Controllers are in the auditing scope, the domain computer account was picked up and interpreted as a local user for the DC.
