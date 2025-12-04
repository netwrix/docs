---
description: >-
  Describes how to resolve "Unable to find domain for member" errors in the
  Access Information Center (AIC) debug log when temporary access to shares
  fails to expire.
keywords:
  - Access Information Center
  - AIC
  - Unable to find domain for member
  - ExpirationState
  - SA_AIC_ResourceAccessRequests
  - UserSID
  - membership expiration
  - debug log
products:
  - access-analyzer
visibility: public
sidebar_label: 'Error: Unable to Find Domain for Member Errors for'
tags:
  - troubleshooting-and-errors
title: 'Error: Unable to Find Domain for Member Errors for Expiring Access to Shares'
knowledge_article_id: kA0Qk0000001h7lKAA
---

# Error: Unable to Find Domain for Member Errors for Expiring Access to Shares

## Symptom

When a membership is failing to expire, you can find the following error message in the Access Information Center (AIC) debug log file, where [User SID] is the user's SID, yyyy-mm-dd is the date, and hh:mm:ss is the time:

```text
Unable to find domain for member: [User SID] yyyy-mm-dd hh:mm:ss -- Error -- Type: System.InvalidOperationException yyyy-mm-dd hh:mm:ss 
-- Error -- StackTrace: at AccessInformationCenter.Model.Membership.ActiveDirectoryMembership.Execute(StorageDataContext dc, String domainName, 
MembershipRequest request) at AccessInformationCenter.Model.Membership.MembershipAction.Execute(StorageDataContext dc, String feature, 
String invokerName, String invokerSid, IEnumerable`1 changes, Nullable`1 changeId)
```

## Cause

This error occurs when you grant a user temporary permissions to a resource, but the user is deleted prior to the permissions expiring. When the permissions expire, the AIC console continues trying to remove the user but cannot locate the user record.

## Resolution

Set the `ExpirationState` to `2` in the `SA_AIC_ResourceAccessRequests` table for each SID encountering the problem using the command below. This will set the permission state to complete.

```sql
Update dbo.SA_AIC_ResourceAccessRequests SET ExpirationState = 2 where UserSID = '{usersid}'
```
