---
title: "When I edit the GPO, the settings don't seem to \"stick\""
description: "When I edit the GPO, the settings don't seem to \"stick\""
sidebar_position: 40
---

# When I edit the GPO, the settings don't seem to "stick"

This is a problem on DCs where they hold files open. So edits appear to work, until you close and
reopen the GPO and find out that they aren't applying at all.

Apply this KB to apply to all your DCs:

[https://support.microsoft.com/en-us/kb/2791372](https://support.microsoft.com/en-us/kb/2791372)

Then retry the Netwrix Endpoint Policy Manager (formerly PolicyPak) operation.

