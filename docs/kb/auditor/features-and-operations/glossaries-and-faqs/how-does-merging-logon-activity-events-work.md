---
description: >-
  Explains how Netwrix Auditor merges similar Logon Activity events to reduce
  noise and how events are selected and prioritized during merging.
keywords:
  - logon
  - logon activity
  - merging
  - events
  - Netwrix Auditor
  - duplicate events
  - failed attempts
  - event IDs
products:
  - auditor
sidebar_label: How Does Merging Logon Activity Events Work?
tags: []
title: "How Does Merging Logon Activity Events Work?"
knowledge_article_id: kA04u000001118cCAA
---

# How Does Merging Logon Activity Events Work?

## Question

How does merging Logon Activity events work?

## Answer

Netwrix Auditor merges similar logon events to reduce noice and narrow the number of similar events. Merging events works as follows:

1. The records are considered similar when they have the same event type, User, Name and IP of the originating workstation, Name and IP of the target workstation. For Failed Attempts the failure reasons must also match.

2. For successful logons the value of events is ranged as follows (ascending):

   - Unidentified Logon
   - Interactive Logon based on the events `4768` and `4769`
   - Interactive Logon based on the event `4624`
   - Reconnecting to a remote session based on the event `4778`

   After the merging completes, the first event is displayed to the user.

3. If there is an Interactive Logon based on events `4768` and `4769` where the **What** and **Workstation** fields are different, all subsequent events of this type with **What** and **Workstation** fields matching the **What** field of the original event, will be merged. Other words, if there was a remote connection to a workstation, it would overwrite all direct connections within the specified time range.

4. Domain Controller Logoff events of the same type are also merged and the user sees the first one. However if there was an event `4779` (remote session disconnected), it would be considered more valueable. The product also filters out all logoffs for which the corresponding logon belongs to another event (i.e. not displayed to the user).

5. Failed Attempts are also combined into a single event and the number of failed attempts is displayed.

6. For all other events the product simply removes duplicates. The user sees the first event in the series.
