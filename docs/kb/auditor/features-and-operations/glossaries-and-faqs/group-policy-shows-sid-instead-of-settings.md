---
description: >-
  If your Group Policy Change report shows SIDs instead of readable settings,
  the collector may have used a domain controller that did not resolve SIDs.
  This article explains the cause and the logs to provide to Netwrix Technical
  Support to resolve the issue.
keywords:
  - group policy
  - SID
  - domain controller
  - change report
  - GPO
  - Netwrix
  - tracing logs
  - AD Change Reporter
products:
  - auditor
sidebar_label: Group Policy shows SID instead of settings
tags: []
title: "Group Policy shows SID instead of settings"
knowledge_article_id: kA00g000000H9bnCAC
---

# Group Policy shows SID instead of settings

## Symptoms
You received Group Policy Change Report showing some changes you do not believe you made. The changes of Group Policy settings look as if they were renamed from human readable text to a computer specific SID.

## Cause
By default the product uses a domain controller for the data collection which is most available. Some of the domain controllers may not resolve the Security Identifiers (SID) correctly. The product may connect to the domain controller that does not resolve SIDs, hence it gathers the SIDs of the settings instead of their names. The SID of the group policy setting will be considered as a change when comparing to the previous snapshot.

## Resolution
To prevent this from happening we recommend using the same domain controller for collecting Group Policy changes.

In order to determine the domain controller that should be used, please submit a ticket to Netwrix Technical Support and provide the following information:

1. The problematic Group Policy Change report (it should contain the date and time the report was received).
2. The Group Policy Change Reporter tracing logs (the entire content of the tracing folder) - the default location is `C:Program Files (x86)NetWrixAD Change Reporter Full VersionGPOExecTracing`
3. The tracing of the Active Directory Change Report module - the entire content of the `Tracing` subfolder located in the installation folder of the product.
