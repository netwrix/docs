---
description: >-
  If you use third-party application whitelisting on the Netwrix Auditor server
  or the SQL Server host, some Auditor components can be blocked and cause
  errors such as SSRS temp files being locked. This article explains what to
  check and how to allow Netwrix Auditor components to run.
keywords:
  - whitelisting
  - application whitelisting
  - Netwrix Auditor
  - SSRS
  - SQL Server
  - Auditor components
  - third-party software
  - temp files
products:
  - auditor
sidebar_label: Which Applications Should be Whitelisted for the Auditor to Function Properly?
tags: []
title: "Which Applications Should be Whitelisted for the Auditor to Function Properly?"
knowledge_article_id: kA04u000000wnlMCAQ
---

# Which Applications Should be Whitelisted for the Auditor to Function Properly?

## Question

Which Applications Should be Whitelisted for the Auditor to Function Properly?

## Answer

If you have a third-party Application Whitelisting software installed in your infrastructure (the Netwrix Auditor Server or the computer where SQL Server resides), please consider that some Netwrix Auditor components can be blocked by this software and that might cause unexpected Netwrix Auditor errors and warnings.

For example, Netwrix Auditor reports might fail because SSRS temp files were locked.

In this scenario, refer to your Whitelisting software documentation for instructions on how to allow specific Netwrix Auditor components to run.
