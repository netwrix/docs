---
description: >-
  Explains why Group Policy changes may appear incorrectly in Netwrix Auditor
  and how to configure a single domain controller for Group Policy collection to
  avoid false changes.
keywords:
  - group policy
  - GPO
  - domain controller
  - replication
  - Netwrix Auditor
  - dclist.txt
  - AD Change Reporter
  - fake changes
  - replication issue
products:
  - auditor
sidebar_label: Group Policy Fake Changes
tags: []
title: "Group Policy Fake Changes"
knowledge_article_id: kA00g000000H9c9CAC
---

# Group Policy Fake Changes

You received the **Group Policy Change Report** showing some changes you do not believe you made.

## Cause

By default Netwrix Auditor is using the most available domain controller for the data collection. On some of the domain controllers Group Policy replication may not occur correctly. Netwrix Auditor may connect to the domain controller that has a replication issue with regards to Group Policies, hence the outdated information, and gather GPOs that contain outdated policy settings. The outdated information in gathered GPOs will be considered as a change when comparing to the previous snapshot.

## Resolution

To prevent this from happening, we recommend using a single domain controller for collecting Group Policy changes.

1. Check which domain controller is currently used for Group Policy changes collection by viewing this file:
   - ` %Working Folder%\AD Change Reporter\Omitlists\%domain.name%\dclist.txt`
2. By default ` %Working Folder%` is `C:\ProgramData\Netwrix Auditor`.
3. If there is more than one DC listed in that file, it means that the first DC in the list didn't respond at some point and Netwrix had to pick a new one. This could be the reason for fake changes.
4. If you know a DC which is highly available and stable, feel free to put its FQDN into that file instead of the current ones.
