---
description: >-
  Explains why the Non-owner Mailbox Access Reporter shows users accessing their
  own mailboxes and how to omit those events by generating and copying a mailbox
  omit list.
keywords:
  - Non-owner Mailbox Access Reporter
  - mailbox archive
  - Microsoft Exchange
  - Get-Mailbox
  - usermailboxesomitlist
  - Netwrix Auditor
  - Outlook
  - omit events
products:
  - auditor
sidebar_label: Users access their own mailboxes
tags: []
title: "Users access their own mailboxes"
knowledge_article_id: kA00g000000H9buCAC
---

# Users access their own mailboxes

The Non-owner Mailbox Access Reporter shows that users access their own mailboxes.

There is a Mailbox Archive option in Microsoft Exchange that creates a linked mailbox with the same name as the user's own mailbox. The user is not an owner of that linked archive mailbox. Each time the user runs Outlook, it reads the archive mailbox content, basically performing non-owner access.

In order to omit such events perform the following steps:

1. On the Exchange server, run the Exchange Management Shell and perform the following cmdlet (without quotes and replace the `%domain name%` with the NetBIOS name of your domain):

```powershell
Get-Mailbox | %{$mailboxstring = ""; $mailboxstring += "%domain name%";$mailboxstring += "";$mailboxstring += $_.samaccountname; $mailboxstring += "="; $mailboxstring += $_.emailaddresses[0].addressstring; echo $mailboxstring >> C:\usermailboxesomitlist.txt}
```

2. Copy the `usermailboxesomitlist.txt` from the Exchange server to the Non-owner Mailbox Access Reporter installation folder; by default it is:
`C:\Program Files (x86)\Netwrix Auditor\Non-owner Mailbox Access Reporter for Exchange`

**NOTE:** If you create a new user with mailbox, you should add it to the existing `usermailboxesomitlist.txt` file located at the Non-owner Mailbox Access Reporter home folder using the following format: `domainusername=mailbox` (E.g.: `CORPjsmith=jsmith@corp.com`).
