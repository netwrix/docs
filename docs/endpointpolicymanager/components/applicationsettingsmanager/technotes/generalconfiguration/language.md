---
title: "Does Application Manager work when the machine is NOT US-English (say, Italian or Russian?)"
description: "Does Application Manager work when the machine is NOT US-English (say, Italian or Russian?)"
sidebar_position: 160
---

# Does Application Manager work when the machine is NOT US-English (say, Italian or Russian?)

There are multiple parts to this answer.

**Step 1 –** Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Manager itself (the
software) is only localized to English.

**Step 2 –** Endpoint Policy Manager manuals are only in English.

**Step 3 –** Endpoint Policy Manager support is only performed in English.

**Step 4 –** Endpoint Policy Manager Application Manager Paks are performed on the US English
version of applications. Here is what that means:

- Endpoint Policy Manager Application Manager's pre-defined Paks can deliver settings to
  applications, regardless to how they are localized. So if you have, say, Acrobat Reader in Italian
  on an Italian version of Windows, Endpoint Policy Manager Application Manager can deliver settings
  to that application on that version of Windows just fine.
- By default, Endpoint Policy Manager Application Manager's pre-defined Paks can only perform
  Applock ™ (that is, our UI lockdown) on US English versions of applications.

However, because Endpoint Policy Manager ships with the Endpoint Policy Manager DesignStudio, you
are welcome to re-capture applications' UI in the second language, and at that point, Endpoint
Policy Manager AppLock™ should function as expected.

To be safe, you're welcome to fully try out Endpoint Policy Manager Application Manager before you
purchase to make sure it works as expected.

:::note
Endpoint Policy Manager (the company) will not be able to do this for you; but you are
welcome to use the Endpoint Policy Manager DesignStudio for this purpose.

:::


