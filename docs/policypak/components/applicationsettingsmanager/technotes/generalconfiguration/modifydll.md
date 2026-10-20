---
title: "I need to modify the Pak (DLL file) of one of the applications I control with Application Manager. Will I lose my group policy settings after I modify the DLL file"
description: "I need to modify the Pak (DLL file) of one of the applications I control with Application Manager. Will I lose my group policy settings after I modify the DLL file"
sidebar_position: 230
---

# I need to modify the Pak (DLL file) of one of the applications I control with Application Manager. Will I lose my group policy settings after I modify the DLL file

The data for the settings is contained within the Group Policy Object itself, not in the DLL.

All existing checkmarks, dropdowns, etc. settings, etc are all maintained.

The only exception to this is if the changes to the Pak / DLL file involve the elimination of an
element such as a checkbox that your PolicyPak based GPO has configured.

In that case, because the checkbox no longer exists, the settings regarding the checkbox will no
longer exist, but all other data remains.


