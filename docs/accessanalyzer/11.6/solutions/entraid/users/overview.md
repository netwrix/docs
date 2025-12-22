---
title: "2.Users Job Group"
description: "2.Users Job Group"
sidebar_position: 30
---

# 2.Users Job Group

The jobs in the 2.Users group identify user conditions and pinpoint potential areas of
administrative concerns within Microsoft Entra ID such as disabled or stale users.

![2.Users Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/entraid/users/jobstree.webp)

The jobs in the 2.Users Job Group are:

- [AAD_DirectMembership Job](/docs/accessanalyzer/11.6/solutions/entraid/users/aad_directmembership.md)
  – Identifies Microsoft Entra ID users who do not have any group membership. This condition may
  indicate unnecessary user accounts that are suitable candidates for review and cleanup.
- [AAD_DisabledUsers Job](/docs/accessanalyzer/11.6/solutions/entraid/users/aad_disabledusers.md)
  – Identifies disabled user accounts within Microsoft Entra ID. These accounts should be reviewed
  and cleaned up in order to increase security and reduce complexity.
- [AAD_StaleUsers Job](/docs/accessanalyzer/11.6/solutions/entraid/users/aad_staleusers.md)–
  Identifies potentially stale users based on a variety of factors. These accounts should be
  reviewed and cleaned up in order to increase security and reduce complexity.
- [AAD_UserAttributeCompletion Job](/docs/accessanalyzer/11.6/solutions/entraid/users/aad_userattributecompletion.md)–
  Identifies which attributes are present within User fields in Microsoft Entra ID, and which ones
  are blank for a majority of objects. This may indicate accounts within Microsoft Entra ID which
  are lacking appropriate information.
- [AAD_UserDirSync Job](/docs/accessanalyzer/11.6/solutions/entraid/users/aad_userdirsync.md)
  – Summarizes on-premises Active Directory syncing in the audited Microsoft Entra ID environment
