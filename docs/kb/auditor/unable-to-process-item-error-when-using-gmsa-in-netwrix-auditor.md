---
description: >-
  Explains logon/impersonation errors encountered when using group Managed
  Service Accounts (gMSA) with Netwrix Auditor and provides causes and
  upgrade-based solutions.
keywords:
  - gMSA
  - group managed service account
  - Netwrix Auditor
  - impersonation
  - logon type
  - KB5022291
  - upgrade
  - Health Log
  - pre-10.5.11041
products:
  - auditor
sidebar_label: Unable to Process Item Error when Using gMSA in Ne
tags: []
title: "Unable to Process Item Error when Using gMSA in Netwrix Auditor"
knowledge_article_id: kA04u0000000GuNCAU
---

# Unable to Process Item Error when Using gMSA in Netwrix Auditor

## Symptom

You may get a variety of errors referring to the logon/impersonation issues, depending on the data collection scope affected.

For instance, using gMSA for Netwrix Auditor for File Servers, you encounter the following error in the Health Log:

```text
Unable to process item: A logon request contained an invalid logon type value.
```

## Causes

On January 10th 2023 Microsoft has released a security update affecting the pre-10.5.11041 Netwrix Auditor versions ability to impersonate gMSA. Refer to the following article for additional information on the update: https://support.microsoft.com/en-us/topic/january-10-2023-kb5022291-os-build-20348-1487-38772acf-103f-463e-9d60-486174e806b2 (Update KB5022291).

In Netwrix Auditor version 9.96 group managed service accounts can be used instead of regular service accounts in a limited number of cases. Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 – Use Group Managed Service Account(gMSA) ⸱ v10.6). Permissions for gMSA are the same as for regular service accounts, refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 (Monitoring Plans – Data Collecting Account ⸱ v10.6).

## Solution

For the pre-10.5.11041 Netwrix Auditor version, make sure to update your Netwrix Auditor instance — refer to the following articles for additional information: /docs/kb/auditor/how-to-upgrade-netwrix-auditor (How to Upgrade Netwrix Auditor) and /docs/kb/auditor/upgrade-increments-for-netwrix-auditor (Upgrade Increments for Netwrix Auditor).
