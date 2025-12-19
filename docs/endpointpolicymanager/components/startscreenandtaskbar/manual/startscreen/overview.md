---
title: "Quick Start - Start Screen Manager"
description: "Quick Start - Start Screen Manager"
sidebar_position: 30
---

# Quick Start - Start Screen Manager

:::note
For some video overviews of Start Screen & Taskbar Manager, see Start Screen & Task Bar
Manager > [Video Learning Center](/docs/endpointpolicymanager/components/startscreenandtaskbar/videos/videolearningcenter.md).
:::


If you want to follow along with this Quickstart guide for Start Screen Manager, we suggest you
first download some applications on your Windows 10 management station and your endpoint. Start
Screen & Taskbar Manager is the best and quickest way to set up, test, and manage the Start Screen
and Taskbar from your machine (the Group Policy Editor machine) if you have the same applications as
the target machines. Therefore, we recommend you install Adobe Acrobat Reader twice—once on your
management station and once on your Window 10 endpoint. We suggest the offline MSI installer
package, which can be found at
[https://get.adobe.com/reader/enterprise/](https://get.adobe.com/reader/enterprise/). Make sure, for
the purposes of this Quickstart, you install the same version on your management station as on your
endpoint.

You should be able to see Acrobat Reader in the Start Menu, as shown in Figure 5.

![quickstart_start_screen_manager](/images/endpointpolicymanager/startscreentaskbar/startscreen/quickstart_start_screen_manager.webp)

Figure 5. Adobe Reader is installed on the GPMC machine and the Windows 10 Endpoint.

After Adobe Reader is installed, we can see that it is not automatically assigned to any group in
the Start Menu. Using Start Screen & Taskbar Manager, we want to place all of our newly installed
applications into a single group called "My Important Apps." In this Quickstart, we will create a
group policy object (GPO) and link it to your sample users. (You could also create and link a GPO to
your computers, but we will not be doing that in this Quickstart.)


