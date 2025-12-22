---
description: >-
  This article addresses the warning message related to collecting 'Exchange_Mailbox' information on the server and provides steps to resolve the issue.
keywords:
  - Exchange_Mailbox
  - Microsoft Exchange
  - Information Store service
sidebar_label: Exchange Mailbox Warning Resolution
tags: [troubleshooting-and-errors]
title: "Error: “Collect 'Exchange_Mailbox' Information Warning on Server”"
knowledge_article_id: kA00g000000H9SMCA0
products:
  - general
---

# Error: “Collect 'Exchange_Mailbox' Information Warning on Server”

## Symptom

The following error appears:

*“Collect 'Exchange_Mailbox' information warning on server: %owa server name%. The action could not be completed because the Microsoft Exchange Information Store service is unavailable. Be sure the service is running and you have network connectivity to the Microsoft Exchange Server computer. ..... List of failed procedures Microsoft Exchange Management Last command: SELECT * FROM Exchange_Mailbox %Date%: Collect 'Exchange_PublicFolder' information warning on server: %owa server name% The HTTP service used by Public Folders is not available, possible causes are that Public stores are not mounted and the Information Store service is not running.”*

## Cause

This warning typically occurs when the Microsoft Exchange Information Store service is not running on the target OWA Server.

## Resolution

To resolve this issue, follow these steps:

1. Ensure that the Microsoft Exchange Information Store service is running on the target OWA Server.
2. If the issue persists, exclude the required OWA Server from data collection by modifying the file called **omitserverlist_ecr.txt**.
3. The configuration file is stored in the **%Product installation folder%\Active Directory Auditing**.
4. Add one OWA Server name per line, for example:
   - OWA-SERVER01
   - OWA-SERVER02