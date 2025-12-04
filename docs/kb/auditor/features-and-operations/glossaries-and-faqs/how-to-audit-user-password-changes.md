---
description: >-
  Shows how to enable auditing of user password changes by editing the
  omitproplist.txt file to remove or comment out the *.PasswordChanged entry.
  Includes a note about reapplying the change after product upgrades and a tip
  for avoiding Access is Denied when saving.
keywords:
  - user password change
  - auditing
  - omitproplist.txt
  - omit list
  - Netwrix Auditor
  - Active Directory Auditing
  - PasswordChanged
  - omitproplist
  - access denied
products:
  - auditor
sidebar_label: How to Audit User Password Changes
tags: []
title: "How to Audit User Password Changes"
knowledge_article_id: kA00g000000H9edCAC
---

# How to Audit User Password Changes

## Symptom

User Password Changes are not appearing in Search or Report results.

## Cause

By default User Password Change auditing is disabled via omitlist.

## Reolution

This functionality can be easily enabled by navigating to the following file location:

`C:\Program Files (x86)\Netwrix Auditor\Active Directory Auditing\omitproplist.txt`

Open `omitproplist.txt` in a text editor, find the entry of `*.PasswordChanged` and comment it out with a pound/hash sign (#), like this: `#*.PasswordChanged .` By doing so you make the omit list ignore this entry, effectively re-enabling it for reporting. All future User Password Changes will now be audited by Netwrix Auditor.  
Instead of commenting, the line can also be deleted.

**Note**: When you upgrade Netwrix Auditor to a new version, it would restore that parameter in the omit list, so you will have to comment/delete it again.

**Tip**: When saving changes to the omit list, you may receive "Access is Denied" error. In order to proceed, either open the text editor as Administrator or save the file to the desktop and drag'n'drop to the original folder, which would trigger the admin prompt."
