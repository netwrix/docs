---
title: "Using the Helper Utility"
description: "Using the Helper Utility"
sidebar_position: 60
---

# Using the Helper Utility

In the Start Screen & Taskbar Manager Quickstart examples, we recommended that your management
station have the same applications as your target computers, but sometimes that is not practical.
For instance, someone in the Sales department may be the only one who has the "Sales Application
123" desktop application or "Mega Player" UWP installed. Or there could be other instances where you
don't want to install an application on your machine just for the sake of getting it into the Start
Screen or Taskbar. That's where the Start Screen & Taskbar Manager Helper utility comes in. You can
run the Start Screen & Taskbar Manager utility on an endpoint with the application already
installed; however, you should make sure it is one you want to associate a policy with later.

:::note
For a video overview demonstrating the use of the Start Screen & Taskbar Manager Helper
utility, watch this video:
[Endpoint Policy Manager Start Screen and Taskbar Manager Helper Utility](/docs/endpointpolicymanager/components/startscreenandtaskbar/videos/gettingstarted/helperutility.md)
:::


The Start Screen & Taskbar Manager Helper utility is found in the Netwrix Endpoint Policy Manager
(formerly PolicyPak) ISO or ZIP download in the PolicyPak Extras folder, as seen in Figure 53.

![using_the_helper_utility](/images/endpointpolicymanager/startscreentaskbar/using_the_helper_utility.webp)

Figure 53. The Start Screen & Taskbar Manager Helper utility is located in the Extras folder.

**Step 1 –** When you run the wizard you can choose whether to export registered (desktop)
applications or universal (UWP) applications, as shown in Figure 54.

![using_the_helper_utility_1](/images/endpointpolicymanager/startscreentaskbar/using_the_helper_utility_1.webp)

Figure 54. The PolicyPak Start Screen & Taskbar Manager Helper utility lets you export registered
and UWP applications.

**Step 2 –** Then on the "Select registered programs" page, shown in Figure 55, you can leave the
default settings as they are and click "Next."

![using_the_helper_utility_2](/images/endpointpolicymanager/startscreentaskbar/using_the_helper_utility_2.webp)

Figure 55. The default settings to select all registered applications on the endpoint.

**Step 3 –** Then on the next screen, shown in Figure 56, you can export the IDs for all the UWP
applications on a machine and click "Next."

![using_the_helper_utility_3](/images/endpointpolicymanager/startscreentaskbar/using_the_helper_utility_3.webp)

Figure 56. The defaults to select all UWP applications on the endpoint.

**Step 4 –** Finally, you can export the XML to a file to be used on your management station/GPMC
machine. On your GPMC machine, as you're creating new PolicyPak Start Screen or PolicyPak Taskbar
Manager policies, you can then import from the XML file, as shown in Figure 57.

![using_the_helper_utility_4](/images/endpointpolicymanager/startscreentaskbar/using_the_helper_utility_4.webp)

Figure 57. On the management station you can import from the XML file.

At this point, your list will change to what was imported from the XML file. This process means you
don't need to install the actual application on your machine to deliver Endpoint Policy Manager
Start Screen or Endpoint Policy Manager Taskbar Manager policies.


