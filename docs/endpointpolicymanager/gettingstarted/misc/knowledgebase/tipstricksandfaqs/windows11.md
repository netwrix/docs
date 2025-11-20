---
title: "How can I use Item Level Targeting to specify a specific Windows 10 build and/or LTSC/LTSB?"
description: "How can I use Item Level Targeting to specify a specific Windows 10 build and/or LTSC/LTSB?"
sidebar_position: 40
---

# How can I use Item Level Targeting to specify a specific Windows 10 build and/or LTSC/LTSB?

**Step 1 –** To target a specific Windows 10 Build, start out by using the Operating System item and
selecting Windows 10.

**Step 2 –** Then select either:

- WMI Query, or
- Registry match.

![14_1_faq-4-rev-1-img-1](/images/endpointpolicymanager/itemleveltargeting/14_1_faq-4-rev-1-img-1.webp)

**Step 3 –** If you choose WMI Query to detect the build number, enter the following in the Query
field:

```
SELECT * FROM Win32_OperatingSystem WHERE BuildNumber = "15063"
```

This would select Windows 1703, which is that build number.

![14_2_faq-4-rev-1-img-2](/images/endpointpolicymanager/itemleveltargeting/14_2_faq-4-rev-1-img-2.webp)

:::warning
Note that you want to place a whole number and not a number with decimal places. The
BUILDNUMBER field is actually nota numeric value, but a stringvalue and must match exactly.
:::


**Step 4 –** If you choose REGISTRY Query to detect the build number, search for the following item
in the Registry:

```
Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion | CurrentBuildNumber
```

![14_3_faq-4-rev-1-img-3](/images/endpointpolicymanager/itemleveltargeting/14_3_faq-4-rev-1-img-3.webp)

**Step 5 –** Use the Registry Match item as follows for a specific Build number.

![14_4_faq-4-rev-1-img-4](/images/endpointpolicymanager/itemleveltargeting/14_4_faq-4-rev-1-img-4.webp)

Other build numbers you can use are:

|       |                          |
| ----- | ------------------------ |
| 10586 | Windows 10, version 1511 |
| 14393 | Windows 10, version 1607 |
| 15063 | Windows 10, version 1703 |
| 16299 | Windows 10, version 1709 |
| 17134 | Windows 10, version 1803 |
| 17763 | Windows 10, version 1809 |

## How to Query for Minor Build Numbers

From time to time, you might want to target a machine with an unusual build number.

For instance, Windows 1809 had two revisions with the same build ID of 17763. These were the
original shipping version (which was pulled from Microsoft due to quality concerns), and then the
final build which was broadly deployed

Each of these Windows 1809 builds has the Build number of 17763, but has a minor version of .1 for
the first release and .253 for the second release.

You can see examples of the first and second Windows 1809 releases below.

First release of Windows 1809 build 17763:

![14_5_faq-4-rev-1-img-5](/images/endpointpolicymanager/itemleveltargeting/14_5_faq-4-rev-1-img-5.webp)

Second release of Windows 1809 build 17763:

![14_6_faq-4-rev-1-img-6](/images/endpointpolicymanager/itemleveltargeting/14_6_faq-4-rev-1-img-6.webp)

The Value you want to match with an ILT Registry Match is this:

```
Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion | UBR
```

UBR stands for Update Build Revision.

This Item Level Target expresses:

When Machine is Windows 10, and

- When build is 17763 (Windows 1809) and
- When build's UBR is .1 (first version of 1809).

![14_7_faq-4-rev-1-img-7](/images/endpointpolicymanager/itemleveltargeting/14_7_faq-4-rev-1-img-7.webp)

## How to Query for CB/CBB vs. LTSB/LTSC

Additionally, if you wanted to be specific and target LTSB/LTSC builds of Windows 10, you use a WMI
query filter which would specify:

```
SELECT OperatingSystemSKU FROM Win32_OperatingSystem WHERE OperatingSystemSKU = 125
```

Or, if you want to target CB/CBB builds:

```
SELECT OperatingSystemSKU FROM Win32_OperatingSystem WHERE OperatingSystemSKU = 4

```

Here's an example:

![14_8_faq-4-rev-1-img-8](/images/endpointpolicymanager/itemleveltargeting/14_8_faq-4-rev-1-img-8.webp)

