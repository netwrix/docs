---
description: >-
  Explains why a summary report shows changes to objects titled
  "rRASAdministrationConnectionPoint" and how to remove RRAS-related child
  objects from computer accounts in Active Directory.
keywords:
  - RRAS
  - Routing and Remote Access
  - Active Directory
  - ADSIEdit
  - ADUC
  - Delete Subtree
  - RouterIdentity
  - computer objects
products:
  - auditor
sidebar_label: Object Type of "RRAS-Administration-Connection-Poi
tags: []
title: Object Type of "RRAS-Administration-Connection-Point"
knowledge_article_id: kA00g000000H9bYCAS
---

# Object Type of "RRAS-Administration-Connection-Point"

## Summary
The summary report contains a change to an object titled "rRASAdministrationConnectionPoint".

Computer objects have an Object Type of "RRAS-Administration-Connection-Point" that is named "RouterIdentity" attached to them (RouterIdentity is a visible container in ADSIEdit under the computer object). The computer objects cannot be deleted.

---

## Cause
This could be caused from the use of the Routing and Remote Access service; if the Routing and Remote Access Service runs it stores information in AD as a child object under the particular computer that hosts the RRAS service. Check to see if the affected computers have the Routing and Remote Access Service running.

It may be a printer or something similar that is installed from the computers in question and published in AD. Again if this is the case, the Delete Subtree resolution below should resolve the inability to delete the computer objects. Using ADUC, from the View menu; select the option for **Users, Groups, and Computers as Containers**. This will show items that are usually objects as containers (similar to an OU). From there you can see what objects exist inside that computer's container.

---

## Resolution
To delete these objects, the `Delete Subtree` permission on Computer objects in addition to the `Delete` permission will be required. The `Delete` permission alone will not work.
