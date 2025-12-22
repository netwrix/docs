---
title: "What is the expected behavior on Windows 10 when you MODIFY an existing Endpoint Policy Manager Scripts script?"
description: "What is the expected behavior on Windows 10 when you MODIFY an existing Endpoint Policy Manager Scripts script?"
sidebar_position: 100
---

# What is the expected behavior on Windows 10 when you MODIFY an existing Endpoint Policy Manager Scripts script?

If you modify a script using the MMC or in-cloud editor, then the compute re-processes the new
script, the following will occur:

**Step 1 –** The  REVERT script is run, if present.

**Step 2 –** The newly changed script is then run.

Here's an example:

**Step 1 –** If you used Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts and used it to
deploy 7zip from `\\server\share`

**Step 2 –** AND you have a REVERT script to Uninstall it...

**Step 3 –** THEN you change deploy script to change the location of 7Zip to
`\\newserver123\newshare123`

Then the expected behavior should be:

**Step 1 –** The REVERT script is run (7zip uninstalls).

**Step 2 –** The newly changed script is then run (7zip reinstalls).

This will all occur in the same processing cycle, and should not take several GPupdates or Endpoint
Policy Manager Cloud syncs.


