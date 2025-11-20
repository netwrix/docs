---
title: "Why must some GPPreferences items be run in User Context?"
description: "Why must some GPPreferences items be run in User Context?"
sidebar_position: 20
---

# Why must some GPPreferences items be run in User Context?

You might have some existing GPPreferences items, like Printer ,which won't work as expected when
using them with Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud or Endpoint Policy
Manager with an MDM service, like Intune, when the computer is non-domain joined.

This is because the item might be required to be run in the User context and not the System context.

This is especially true when you have machines which are NOT domain joined, but you wish to use
on-prem / Active Directory joined resources.

There are three available recommended fixes for this, all with the same end result. The result of
all three recommendations is exactly the same.

## Modify the option in the GPPreferences Editor and specify Run in logged-on user's security context

This must be done by hand on each Group Policy Preference item that requires it. The downside is
that this might change the expected behavior in production for existing Group Policy preferences
items. But you can at least perform this action on one or two items to verify if this is actually
the problem.

![403_1_hfkb-1131-img-01_950x470](/images/endpointpolicymanager/gpoexport/403_1_hfkb-1131-img-01_950x470.webp)

## Hand edit the setting within the XML after export

Group Policy Preferences items can be viewed as XML and then hand-edited. Items in the SYSTEM
context will appear as `userContext = "0"`.

![403_2_hfkb-1131-img-02_950x173](/images/endpointpolicymanager/gpoexport/403_2_hfkb-1131-img-02_950x173.webp)

You may hand-edit them to `userContext = "1"` like what's seen here, to use them with non-domain
joined machines.

![403_3_hfkb-1131-img-03_950x147](/images/endpointpolicymanager/gpoexport/403_3_hfkb-1131-img-03_950x147.webp)

## Use the GPO Export Manager to automatically detect and change the setting (works for Printers items only)

The Endpoint Policy Manager GPO Export Manager will detect your use of Printer items on the USER or
COMPUTER side of the GPO where you are using the System context, and then make a recommendation for
you which would flip any / all of them to the User context. The GPO Export Manager will ONLY check
for Printer items at this time and will make this recommendation if you have items on the USER or
COMPUTER side, and when the context is SYSTEM and should be USER.

![403_4_hfkb-1131-img-04_950x466](/images/endpointpolicymanager/gpoexport/403_4_hfkb-1131-img-04_950x466.webp)

## More details:

When the Preferences Item is attempting to run in System, the access rights are simply blocked
because the item attempting to be run with the System context is not authorized to do an action with
a domain object. For instance, a Printer with a queue called `\\dc2016\Printer2` will not allow the
System to map to the queue, because the System is not recognized in Active Directory. However, the
user might be, and can use his pass-thru credentials to make that shared printer mapping.

If you fail to change the context from System to User and attempt to map a printer, you will get the
following in the Group Policy Preferences Trace logs, which show the Access Denied details.

![403_5_hfkb-1131-img-05_950x612](/images/endpointpolicymanager/gpoexport/403_5_hfkb-1131-img-05_950x612.webp)


