---
description: >-
  If the system drive fills up, managed objects can disappear. Restore the
  NetwrixChangeReporterConfig.xml file from backup and open a support ticket
  with the pre-restore copy so Netwrix can investigate.
keywords:
  - managed objects
  - disk space
  - system drive
  - NetwrixChangeReporterConfig.xml
  - restore
  - backup
  - support ticket
  - Customer Portal
  - Netwrix
products:
  - auditor
sidebar_label: Managed Objects Disappear After Disk Space on Syst
tags: []
title: "Managed Objects Disappear After Disk Space on System Drive Fills Up"
knowledge_article_id: kA00g000000H9S5CAK
---

# Managed Objects Disappear After Disk Space on System Drive Fills Up

## Summary
Sometimes after filling up the space on the system drive your managed objects may disappear. The root cause has not yet been determined.

## Resolution
1. Restore the `NetwrixChangeReporterConfig.xml` file from backup.
2. By default, this file can be found at: `C:ProgramDataNetWrixManagement Console`
3. Prior to restoring the file, create a support ticket on our Customer Portal and send us a copy of the `NetwrixChangeReporterConfig.xml` file that you have (pre-restore version). This will allow us to gather more data to reproduce this issue and understand the root cause.

The Customer Portal can be found at the following URL:
http://www.netwrix.com/customers/tickets.html?source=supportmenu
