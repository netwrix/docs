---
description: >-
  Learn how to prevent disk overflow on the drive that stores the Long-Term
  Archive by adjusting retention, moving the archive, or excluding data from
  monitoring scope.
keywords:
  - long-term archive
  - archive retention
  - disk overflow
  - Netwrix Auditor
  - move archive
  - omit lists
  - monitoring scope
  - virtual machine
  - Active Directory
products:
  - auditor
sidebar_label: How to Prevent Long-Term Archive Overflow
tags: []
title: "How to Prevent Long-Term Archive Overflow"
knowledge_article_id: kA00g000000PbdHCAS
---

# How to Prevent Long-Term Archive Overflow

## Question

How can you prevent disk overflow on the drive where the Long-Term Archive is located?

## Answer

You can deal with this issue in one of the following ways:

1. Modify Long-Term Archive retention period. For that:
   - In Netwrix Auditor, navigate to **Settings**.
   - Select the **Long-Term Archive** page and modify the archive retention settings – provide the value in months.
2. Move the archive to another drive. Learn more in the following article: [How to Move Long-Term Archive to a New Location](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-move-long-term-archive-to-a-new-location)
3. Exclude Data from the Auditing Scope. For additional information, refer to the following article: [How to Exclude Users and Objects from Monitoring Scope in Netwrix Auditor UI](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-exclude-users-and-objects-from-monitoring-scope-in-netwrix-auditor-ui)

You can also fine tune your monitoring scope via omit lists — this allows you to proactively decrease the DB loads as changes for omitted items are not recorded. For additional information on available omit lists, review the corresponding article applicable to your target system. For example, for Active Directory omit lists, refer to the following article: [Active Directory Monitoring Scope](https://docs.netwrix.com/docs/auditor/10_8/admin/monitoringplans/activedirectory/scope)

> **NOTE:** If you are using a virtual machine, either add another drive or expand your current drive.
