---
title: "How do I make an Item Level Target for Server 2016 or Server 2019 (on-prem, MDM or Endpoint Policy Manager Cloud) ?"
description: "How do I make an Item Level Target for Server 2016 or Server 2019 (on-prem, MDM or Endpoint Policy Manager Cloud) ?"
sidebar_position: 60
---

# How do I make an Item Level Target for Server 2016 or Server 2019 (on-prem, MDM or Endpoint Policy Manager Cloud) ?

Depending on the editor you are using, your Item Level Target (ILT) editor may show one of either
these two:

![88_1_image007](/images/endpointpolicymanager/itemleveltargeting/88_1_image007.webp)

![88_2_image008](/images/endpointpolicymanager/itemleveltargeting/88_2_image008.webp)

In both cases, they produce the same Item Level Targeting Filter in XML, like this:

![88_3_image009](/images/endpointpolicymanager/itemleveltargeting/88_3_image009.webp)

In this way, there is no distinction between 2016 and 2019 servers. This is not a Netwrix Endpoint
Policy Manager (formerly PolicyPak) bug, because Endpoint Policy Manager is using the underlying
Group Policy Preferences Item Level Targeting editor and evaluation.

So you can have a second item using Item Level Targeting to also check for the ReleaseID, which is
the major build numberin Windows server.

So the ILT would be:

`– SERVER = 2016 / 2019`

and

`REGISTRY MATCH == Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ReleaseId`

You would use 1809 to match for Server 2019 and 1607 to match for Server 2016.

Therefore you can match on Server 2016 when you make your ILT exactly like this:

![88_4_image010](/images/endpointpolicymanager/itemleveltargeting/88_4_image010.webp)

And match on Server 2019 like this:

![88_5_image012](/images/endpointpolicymanager/itemleveltargeting/88_5_image012.webp)

Additionally, if you wanted to limit your targeting to only affect server core installations, you
can use this registry match:

`hklm:/software/microsoft/windows nt/currentversion/installationtype =  "Server Core"`

:::note
If you prefer to target the CurrentBuild instead of the ReleaseID, you can use the
following technique:
:::


**Step 1 –** Locate the CurrentBuildNumber using the registry.

![88_6_image-20190927143735-1](/images/endpointpolicymanager/itemleveltargeting/88_6_image-20190927143735-1.webp)

**Step 2 –** Then set your ILT to something similar to this:

Windows 10 and BuildNumber \<= 17704

![88_7_image](/images/endpointpolicymanager/itemleveltargeting/88_7_image.webp)

