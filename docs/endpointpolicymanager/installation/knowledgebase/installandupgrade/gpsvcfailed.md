---
title: "I am getting an error about \"GPSVC failed at sign-in\". This error occurs exactly one time. What does this mean?"
description: "I am getting an error about \"GPSVC failed at sign-in\". This error occurs exactly one time. What does this mean?"
sidebar_position: 50
---

# I am getting an error about "GPSVC failed at sign-in". This error occurs exactly one time. What does this mean?

If GP finds a non-Microsoft CSE it'll reconfigure itself into its own service host which causes
this. The reconfigure happens after Winlogon has registered the RCP interfaces for delivering
Winlogon revents. The restart causes the error. Microsoft is researching a fix, but at this time is
considered "known behavior."

The error is saying the "Group Policy Service failed at sign-in".

:::note
users never see this message more than once per PC.
:::


There is more information at the Microsoft website:
[https://support.microsoft.com/en-us/help/2976660/first-logon-fails-with-the-universal-unique-identifier-uuid-type-is-no](https://support.microsoft.com/en-us/help/2976660/first-logon-fails-with-the-universal-unique-identifier-uuid-type-is-no)

![20_1_sdgdfhfgnfjfghjfghjfghjfghj](/images/endpointpolicymanager/troubleshooting/error/20_1_sdgdfhfgnfjfghjfghjfghjfghj.webp)

