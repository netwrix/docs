---
title: "How do I make an Item Level Target for Windows 10 or Windows 11 endpoints"
description: "How do I make an Item Level Target for Windows 10 or Windows 11 endpoints"
sidebar_position: 190
---

# How do I make an Item Level Target for Windows 10 or Windows 11 endpoints

Currently Item Level Target (ILT) does not have a separate drop-down option specifically for Windows
11 computers. However, they can be targeted using alternate filters

## Option 1

You want to target both Windows 10 and Windows 11 computers inclusively. To target both Windows 10
and 11 endpoints, simply filter by Operating System and select Windows 10. This will target both.

![803_1_image-20230207212701-2](/images/endpointpolicymanager/itemleveltargeting/803_1_image-20230207212701-2.webp)

![803_2_image-20230207212701-3](/images/endpointpolicymanager/itemleveltargeting/803_2_image-20230207212701-3.webp)

## Option 2

You want to target Windows 10 or Windows 11 computers separately. If you only want to target one
operating system, we need to take a different approach. For this we will utilize Registry Match and
target the CurrentBuild or CurrentBuildNumber value.

![803_3_image-20230207212701-4](/images/endpointpolicymanager/itemleveltargeting/803_3_image-20230207212701-4.webp)

On your current Windows computers, find the registry value(s) for CurrentBuildNumber

```
HKLM:Software\Microsoft\Windows NT\CurrentVersion\CurrentBuildNumber
```

![803_4_image-20230207212701-5](/images/endpointpolicymanager/itemleveltargeting/803_4_image-20230207212701-5.webp)

Currently, the value for Windows 11 build is 21996. This will change as new builds are introduced.
It is necessary to use CurrentBuild or CurrentBuildNumber, as ReleaseID, that would normally be
used, is currently the same for both Windows 10 and 11 installations (current value for both is
2009).

To add additional targets, simply add another Registry Match option for CurrentBuildNumber to
specify the additional value and change the separator option from AND to OR.

![803_5_image-20230207212701-6](/images/endpointpolicymanager/itemleveltargeting/803_5_image-20230207212701-6.webp)

