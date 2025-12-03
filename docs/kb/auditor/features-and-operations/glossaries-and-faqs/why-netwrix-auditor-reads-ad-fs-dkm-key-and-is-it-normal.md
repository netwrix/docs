---
description: >-
  Explains why Windows Defender flags the "Suspected AD FS DKM key read" alert
  caused by Netwrix Auditor activity and shows how to exclude the AD FS DKM key
  from auditing scope.
keywords:
  - AD FS DKM
  - DKM key
  - Windows Defender
  - Netwrix Auditor
  - DirSync
  - omitstorelist.txt
  - thumbnailPhoto
  - Active Directory auditing
products:
  - auditor
sidebar_label: "Why Netwrix Auditor Reads AD FS DKM Key and Is It Normal?"
tags: []
title: "Why Netwrix Auditor Reads AD FS DKM Key and Is It Normal?"
knowledge_article_id: kA04u000000wns3CAA
---

# Why Netwrix Auditor Reads AD FS DKM Key and Is It Normal?

## Question

Windows Defender generates the **Suspected AD FS DKM key read** alert due to activity from the Netwrix account. Is it a normal behavior for the product?

## Answer

Reading this key is expected behavior as part of enumerating all AD attributes during DirSync.

Avoiding reading it entirely seems to be impossible because Netwrix Auditor has to enumerate all keys to determine what needs to be collected. However, you can fine-tune Netwrix Auditor to exclude the **AD FS DKM key** from the auditing scope. To do that:

1. On the computer that hosts Netwrix Auditor Server, navigate to ` %Installation Path%\Active Directory Auditing\`.
2. Open the `omitstorelist.txt` file with any text editor, for example, with Notepad.
3. Add the following as a new line:

   `*.thumbnailPhoto`

4. Save your edits.
