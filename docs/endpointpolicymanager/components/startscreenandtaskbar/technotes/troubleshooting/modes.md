---
title: "Endpoint Policy Manager Task Bar Manager differences between MERGE and REPLACE modes"
description: "Endpoint Policy Manager Task Bar Manager differences between MERGE and REPLACE modes"
sidebar_position: 100
---

# Endpoint Policy Manager Task Bar Manager differences between MERGE and REPLACE modes

## Why do I see duplicate icons on the Taskbar?

In the image below you can see that there are 3 types of items:

![719_1_image-20200212183953-1](/images/endpointpolicymanager/startscreentaskbar/719_1_image-20200212183953-1.webp)

1. Windows default apps to the left (blue circle).
2. Apps pinned by the user in the center (orange triangle).
3. Apps that you pin using the XML file (i.e. policy items) to the right (green square).

"REPLACE" mode removes default pinned apps, but does not remove user pinned apps. In other words,
when using the "REPLACE" option if the user has already pinned an application and you choose to pin
the same application using Netwrix Endpoint Policy Manager (formerly PolicyPak) Taskbar Manager you
will end up with two copies of that application on the Taskbar, one pinned by the user and the other
pinned by Endpoint Policy Manager.

![719_3_image-20200212183953-2](/images/endpointpolicymanager/startscreentaskbar/719_3_image-20200212183953-2.webp)

More info:
[https://docs.microsoft.com/en-us/windows/configuration/configure-windows-10-taskbar](https://docs.microsoft.com/en-us/windows/configuration/configure-windows-10-taskbar)

## Example of what happens when using "REPLACE" Mode:

If we started with the Taskbar layout below:

![719_5_image-20200212183953-3](/images/endpointpolicymanager/startscreentaskbar/719_5_image-20200212183953-3.webp)

Then created a REPLACE PP TBM policy with the following settings:

![719_7_image-20200212183953-4_834x93](/images/endpointpolicymanager/startscreentaskbar/719_7_image-20200212183953-4_834x93.webp)

![719_9_image-20201007144149-1_619x269](/images/endpointpolicymanager/startscreentaskbar/719_9_image-20201007144149-1_619x269.webp)

:::note
When creating a REPLACE policy you are shown the warning screen below:
:::


![719_10_image-20200212183953-6_756x226](/images/endpointpolicymanager/startscreentaskbar/719_10_image-20200212183953-6_756x226.webp)

The result of applying this policy is that All Default Applications not mentioned in the policy are
removed, User pinned applications are ignored, then any remaining applications from the PP TBM
REPLACE policy are pinned.

![719_12_image-20200212183953-7_500x38](/images/endpointpolicymanager/startscreentaskbar/719_12_image-20200212183953-7_500x38.webp)

Now, if we edited the same policy and set the REPLACE policy as in the screenshot below:

![719_14_image-20200212183953-8](/images/endpointpolicymanager/startscreentaskbar/719_14_image-20200212183953-8.webp)

![719_16_image-20200212183953-9](/images/endpointpolicymanager/startscreentaskbar/719_16_image-20200212183953-9.webp)

Then applied the policy (remember to logout out and back in after running gpupdate) the result would
be:

![719_18_image-20200212183953-10_541x36](/images/endpointpolicymanager/startscreentaskbar/719_18_image-20200212183953-10_541x36.webp)

Since 7-Zip was not installed on the target machine, it was ignored, since CMD was pinned by the
User it was also ignored. The remaining applications were then removed and the new applications were
pinned.

## Example of what happens when using "MERGE" Mode:

If we started with the Taskbar layout below:

![719_20_image-20200212183953-11_470x38](/images/endpointpolicymanager/startscreentaskbar/719_20_image-20200212183953-11_470x38.webp)

Then created a MERGE PP TBM policy with the following settings:

![719_22_image-20200212183953-12_834x93](/images/endpointpolicymanager/startscreentaskbar/719_7_image-20200212183953-4_834x93.webp)

![719_24_image-20200212183953-13_618x256](/images/endpointpolicymanager/startscreentaskbar/719_24_image-20200212183953-13_618x256.webp)

The result of applying this policy would be that only "Chrome" gets added since the other
applications (Edge and Internet Explorer) were already present. In MERGE mode, any applications from
the PP TBM policy that are already present (pinned) are ignored and then any new applications are
pinned.

![719_26_image-20200212183953-14_468x38](/images/endpointpolicymanager/startscreentaskbar/719_26_image-20200212183953-14_468x38.webp)

:::note
After running gpupdate to apply policy you must logout then back in to receive the new PP
TBM policy settings.

:::


