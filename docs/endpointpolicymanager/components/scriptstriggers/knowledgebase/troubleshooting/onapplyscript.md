---
title: "What is the expected behavior after an Endpoint Policy Manager Script \"ON/APPLY\" script is modified?"
description: "What is the expected behavior after an Endpoint Policy Manager Script \"ON/APPLY\" script is modified?"
sidebar_position: 20
---

# What is the expected behavior after an Endpoint Policy Manager Script "ON/APPLY" script is modified?

Here is the expected behavior when you modify a script:

- If a REVERT script is present, it is run.
- Then, the newly changed ON/APPLY script is run.

These two actions will occur in the same (next) Group Policy, MDM or Netwrix Endpoint Policy Manager
(formerly PolicyPak) Cloud  process.

As an example:

- You have an ON/APPLY script which deploys 7zip from `\\server\share` and
- You have an OFF/REVERT script which UNINSTALLS 7Zip .. THEN
- You change ON/APPLY script to change the location to `\\server123\share123`

Then the expected behavior we should see is:

- 7zip uninstall (REVERT script is run.)
- 7zip reinstall (Changed on script is run.)


