---
title: "Elevating COM / CSLID Class Items"
description: "Elevating COM / CSLID Class Items"
sidebar_position: 60
---

# Elevating COM / CSLID Class Items

:::note
For an overview of COM Class Policies, see the
[COM Support](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/basicsandgettingstarted/comsupport.md) video.
:::


COM items are a special type of Windows process and Endpoint Policy Manager can typically elevate
them if needed. Start out by understanding the CSLID value you need to overcome. For instance the
properties of Settings > Ethernet > Properties shows a UAC prompt for a COM / CSLID ID.

Carefully take note of the CSLID ID before proceeding.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/elevate/elevating_com_cslid_class.webp)

Then create the policy to overcome the UAC prompt by using New > COM Class Policy.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/elevate/elevating_com_cslid_class_1.webp)

You can then use three methods to provide the CSLID number:

- Add custom COM Class - Typical for installed applications which have a COM function.
- Add well-known COM Class - Typical for operating system functions
- Scan registry for COM Classes - Helpful if you need to locate registered COM items from an example
  machine.

Those choices can be seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/elevate/elevating_com_cslid_class_2.webp)

In this example we will **Add well-known COM class**. Be sure to select the exact match or the
function will not work as expected.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/elevate/elevating_com_cslid_class_3.webp)

After the policy applies, the COM item will have its UAC prompt overcome.



