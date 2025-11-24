---
description: >-
  Explains what the Netwrix Active Directory Object Restore tool can and cannot
  recover, the account requirements for recovery, and related documentation
  links.
keywords:
  - Active Directory
  - object restore
  - Netwrix Auditor
  - AD Tombstone
  - GPO
  - OU
  - forest
  - domain
products:
  - auditor
sidebar_label: Active Directory Object Restore
tags: []
title: "Active Directory Object Restore"
knowledge_article_id: kA00g000000H9UxCAK
---

# Active Directory Object Restore

## Question

Can Netwrix Active Directory Object Restore restore and recover the following?

- AD Group Policy Objects
- OU hierarchy
- Complete AD Forest
- Complete AD Domain
- Changed AD Object attributes

## Answer

The Netwrix Active Directory Object Restore tool recovers removed Active Directory objects from the Netwrix Auditor snapshots or AD Tombstones and does not depend on the functional level of the Active Directory. The tool does not recover DNS zones into Active Directory. If you change some attribute values in the Configuration or Schema, the tool can restore them using the data collected by Netwrix Auditor earlier.

The account used for recovery and restore is the same account used for data collection in your Netwrix Auditor Active Directory monitoring plan.

<div>![Active]./../0-images/servlet_image_3823966b1661.png)</div>

> **NOTE:** This tool should **NOT** be used to revert the changes caused by raising the forest functional level. For additional information, refer to the following article: Object Restore for Active Directory.

## Related Link

- Object Restore for Active Directory



