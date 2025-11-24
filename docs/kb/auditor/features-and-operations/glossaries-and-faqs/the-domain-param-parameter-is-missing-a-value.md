---
description: >-
  Explains how to resolve the warning that the Domain Param parameter is missing
  a value during Active Directory snapshot report generation by enabling
  snapshot reporting or importing snapshots into Netwrix Auditor.
keywords:
  - Active Directory
  - snapshot
  - snapshot reporting
  - Domain Param
  - Netwrix Auditor
  - State-in-Time Reports
  - reports
  - import snapshot
  - warning
products:
  - auditor
sidebar_label: The 'Domain Param' parameter is missing a value
tags: []
title: The 'Domain Param' parameter is missing a value
knowledge_article_id: kA00g000000H9bECAS
---

# The 'Domain Param' parameter is missing a value

You are getting the following warning during AD snapshot report generation:

![User-added image]./../0-images/ka04u000000HcTz_0EM700000005AFx.png)

---

It can happen if the snapshot reporting feature is disabled and/or no AD snapshots were uploaded to the database.

---

In order to fix this issue please open the Netwrix Auditor and make sure that snapshot reporting feature is enabled under **Active Directory | Reports | Snapshot Reports (State-in-Time Reports)** tab.

Otherwise, on the same page you can import the snapshot you want to report on to the database. In order to do this, transfer the snapshot from the **"All available snapshots"** to the **"SNapshots available for reporting"** column and then click the **"Apply"** button.

