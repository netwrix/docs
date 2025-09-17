---
description: >-
  Explains why Mimikatz Pass-the-Hash activity may be detected on a Netwrix
  Auditor server and how to address these alerts, including impersonation and
  Secondary Logon Service requirements.
keywords:
  - Mimikatz
  - Pass-the-Hash
  - Netwrix Auditor
  - impersonation
  - Secondary Logon Service
  - SIEM
  - alerts
products:
  - auditor
sidebar_label: Mimikatz Pass-the-Hash Activity on Netwrix Auditor
tags: []
title: "Mimikatz Pass-the-Hash Activity on Netwrix Auditor Server"
knowledge_article_id: kA04u00000110nPCAQ
---

# Mimikatz Pass-the-Hash Activity on Netwrix Auditor Server

## Question

My Security Event and Incident Management suite has detected Mimikatz Pass-the-Hash activity on Netwrix Auditor server. Is Netwrix Auditor trying to steal my passwords and hashes?

## Answer

This is an expected behavior for the set up Active Directory monitoring plan. Netwrix Auditor collects data from audited domains with the Data Collection account via impersonation. Refer to the following link for additional information on impersonation: https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/cc961980(v=technet.10)?redirectedfrom=MSDN. The use of impersonation requires Secondary Logon Service enabled as stated in the product documentation: https://docs.netwrix.com/docs/auditor/10_8

You can exclude your Netwrix Auditor server from the monitoring scope of your SEIM to stop receiving these alerts. For additional information on the Pass-the-Hash attack, refer to the following article: https://blog.netwrix.com/2021/11/30/passing-the-hash-with-mimikatz/.
