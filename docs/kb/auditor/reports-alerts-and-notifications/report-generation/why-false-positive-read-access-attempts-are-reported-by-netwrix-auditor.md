---
description: >-
  Explains why Netwrix Auditor may report false positive Read access attempts
  due to how Windows and other software browse files, and which audit events
  Netwrix Auditor looks for.
keywords:
  - Netwrix Auditor
  - false positive
  - Read access
  - EventID 4656
  - EventID 4663
  - File Explorer
  - auditing
  - access attempts
products:
  - auditor
sidebar_label: Why False Positive Read Access Attempts Are Report
tags: []
title: "Why False Positive Read Access Attempts Are Reported by Netwrix Auditor?"
knowledge_article_id: kA04u000000wnoaCAA
---

# Why False Positive Read Access Attempts Are Reported by Netwrix Auditor?

## Question

When running a report, Netwrix Auditor lists files as Read even though the files were never opened. Why Netwrix reports false positive Read access attempts?

## Answer

Successful reads can be tricky and is prone to false positives. This is because of the way Windows and other software browse files. To trigger a "Read" event Netwrix Auditor is looking for two events in conjunction:

```
 
EventID Audit Type Description Accesses Time ObjectName User
4656 Audit Success Handle request Read* time name user
4663 Audit Success Access Read* time name user
Read access type includes ReadData, ReadAttributes, ReadExtendedAttributes, ReadControl, Synchronize, AccessSystemSecurity
```

What this means is that in some circumstances, just browsing files or clicking through the folder the files are in can trigger reads. In Windows File Explorer, for example, just navigating to a file doesn't always trigger the read but clicking on a file or hovering the mouse over it long enough for the tool tip to pop up, can sometime report as a read.
