---
description: >-
  Use the provided PowerShell script to enable item-level auditing on multiple
  file servers. Edit `line #19` to set the target OU and domain, then run the
  script under a domain admin account.
keywords:
  - item level auditing
  - file servers
  - PowerShell script
  - auditing
  - OU
  - domain admin
  - file shares
  - modify events
  - access events
products:
  - auditor
sidebar_label: How to enable item level auditing on multiple file
tags: []
title: "How to enable item level auditing on multiple file servers?"
knowledge_article_id: kA00g000000H9W6CAK
---

# How to enable item level auditing on multiple file servers?

Using the PowerShell script provided, edit `line #19` and replace `your_ou_name` and `your_domain` with their corresponding values.  
This script will take all Computers in the specified OU and apply audit to all visible shares on these computers with audit settings for all access and modify events.  
The script must be run under a domain admin account.

## Steps

1. Open the provided PowerShell script in an editor.
2. Edit `line #19` and replace `your_ou_name` and `your_domain` with the appropriate values for your environment.
3. Save the script.
4. Run the script under a domain admin account.

## Notes

- The script targets all Computers in the specified OU.
- The script applies audit settings to all visible shares on those computers for all access and modify events.
- Ensure you run the script using a domain admin account to allow the required changes.
