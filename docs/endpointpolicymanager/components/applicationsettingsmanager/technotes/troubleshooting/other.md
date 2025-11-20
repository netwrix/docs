---
title: "It appears that Endpoint Policy Manager is processing AppSet entries from another Group Policy Object. How is this possible?"
description: "It appears that Endpoint Policy Manager is processing AppSet entries from another Group Policy Object. How is this possible?"
sidebar_position: 40
---

# It appears that Endpoint Policy Manager is processing AppSet entries from another Group Policy Object. How is this possible?

This scenario can happen if a Group Policy Object with AppSet entries is COPIED and PASTED using the
GPMC. Or if the GPO is "Imported" using the GPMC's Import command.
Here's an example that can illustrate the problem and the resolution.

Assume you have a Group Policy Object named ORIG. When you do this, a GPO gets GUID like this.

![445_1_image001](/images/endpointpolicymanager/troubleshooting/applicationsettings/appset/445_1_image001.webp)

When you make a Netwrix Endpoint Policy Manager (formerly PolicyPak) entry, data is stored in the
Group Policy Object.

Then if you copy the Group Policy Object that data is copied with the Group Policy Object, but is
now pointing to the original Group Policy Object.

![445_2_image003](/images/endpointpolicymanager/troubleshooting/applicationsettings/appset/445_2_image003.webp)

This is not a supported scenario using Endpoint Policy Manager Application Manager.

The correct supported scenario using Endpoint Policy Manager Application Manager would be to:

1. In the original Group Policy Object, open the Entry. Use the OPTIONS button in the AppSet entry
   and EXPORT AS XML.
2. In the new Group Policy Object, create a new Entry. Use the OPTIONS button in the AppSet entry
   and IMPORT AS XML.

When you look at the settings report, what you want to see is that the REAL Group Policy Object's
GUID…

![445_3_image004](/images/endpointpolicymanager/troubleshooting/applicationsettings/appset/445_3_image004.webp)

That now matches the Group Policy Object's guts:

![445_4_image005](/images/endpointpolicymanager/troubleshooting/applicationsettings/appset/445_4_image005.webp)

If you already have this situation and need to get out of it, it's an easy fix:

**Step 1 –** Export the XML settings (from the original –or- new Group Policy Object – it doesn't
matter.)

**Step 2 –** In the Group Policy Object with the problem, delete the AppSet Entry.

**Step 3 –** Then re-create the Entry.

**Step 4 –** Then Import the XML settings

This will create a new AppSet Entry and all the "guts" should be aligned correctly.


