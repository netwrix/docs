---
title: "How do I know if Application Manager is not behaving properly versus the target application not behaving properly?"
description: "How do I know if Application Manager is not behaving properly versus the target application not behaving properly?"
sidebar_position: 80
---

# How do I know if Application Manager is not behaving properly versus the target application not behaving properly?

1. Are ANY settings getting delivered by Netwrix Endpoint Policy Manager (formerly PolicyPak) to the
   recommended test application: WinZip 14?
   - Yes? The CSE is licensed and working.
   - No? Possible issues:
     - Licensing: Endpoint Policy Manager licensing GPOs must be linked to where COMPUTERS are,
       not users.
     - Using User side or Computer side incorrectly: Endpoint Policy Manager lets you deliver
       settings to EITHER user or computer side. Did you edit the GPO on the "correct" side and
       link to where users or computers are? Suggest you try USERS first.
2. Are \*ANY\* settings getting delivered to your application (not WinZip) by Endpoint Policy
   Manager?
   - Yes? The CSE is working and licensed.
   - No: Check Endpoint Policy Manager Licensing issues
3. Are \*SOME\* settings not being deployed correctly?
   - Yes: CSE is working and licensed, possibly a Pak typo / definition error. Pak definition
     errors are somewhat common because they go thru "light Q/A".
   - Possibly the application itself isn't "accepting" what Endpoint Policy Manager is delivering.
     What to do next? Take Endpoint Policy Manager out of the equation. See what value would be
     needed and try it MANUALLY. (No Endpoint Policy Manager involved.) Does the application take
     it now?
     - No: Application issue itself.
     - Yes: Endpoint Policy Manager delivery issue of that particular setting. This would then
       require further investigation.
4. Does System Wide Lockdown work for ANY setting? (System Wide Lockdown is specific to Firefox and
   Java).
   - No: Endpoint Policy Manager could have a problem with delivering locking settings.
   - Yes: If ANY setting gets locked down, that means there is likely an issue with that ONE
     setting being accepted by the application. Not 100% of all settings in an app can necessarily
     be locked down.
5. Does "UI Lockdown" work for ANY setting? (UI Lockdown works for most well-behaved apps).
   - No: Endpoint Policy Manager could have a problem with delivering locking settings. Again: Not
     all applications are supported for UI lockdown.
   - Yes: If ANY setting gets locked down, that means there is likely an issue with that ONE
     setting being accepted by the application. Not 100% of all settings in an app can necessarily
     be locked down.
   - Tip: Check the readme file for the Pak. We do a reasonable job explaining when lockdown isn't
     expected to function in most Pak readme's.


