---
title: "Configuration Data Using Sysinternals Process Monitor"
description: "Configuration Data Using Sysinternals Process Monitor"
sidebar_position: 40
---

# Configuration Data Using Sysinternals Process Monitor

Most applications' data should be easy to find. However, occasionally it is difficult to locate an
application's configuration data. When these issues occur, you might want to turn to Microsoft's
free Sysinternals Process Monitor to help discover where an application stores its data.

:::note
Endpoint Policy Manager DesignStudio is a lite capture tool and needs to be instructed on
where to perform the before and after snapshot (specific file, portion of the registry, etc).
:::


Process Monitor's job is to monitor what an application is doing. When it comes to the applications
we want to control, we care most about knowing what an application is doing with regard to file
writes or registry writes (though Process Monitor can also trap process and thread events, DLL
loads, and network activity). In short, if we know where the application is doing its writing, it's
easy to learn where it stores its data. Then we can tell Endpoint Policy Manager DesignStudio where
to perform its capture. Process monitor can be downloaded from Microsoft at:
[http://technet.microsoft.com/sysinternals](http://technet.microsoft.com/sysinternals).

Let's explore some quick tips for running Process Monitor. First, make sure Process Monitor is
capturing events by clicking on File|Capture Events (this should be on by default) and Edit|Auto
Scroll (which is not the default). You can see these configuration options In the figure shown and
The figure shown.

![discovering_configuration_15_499x277](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_15_499x277.webp)

The figure shown. Selecting the option to capture events.

![discovering_configuration_16](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_16.webp)

The figure shown. Selecting the option for autoscrolling.

Next, you're going to create a filter automatically. To do this, use Process Monitor's Target Sight
icon and drag it directly onto the target application's main window as shown In the figure shown.

![discovering_configuration_17](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_17.webp)

The figure shown. Dragging the Target Sight icon into the main window.

Next, have the first two filter types selected, Registry and File, as shown In the figure shown. Unselect
the remaining three items (Network Activity, Process & Thread, and Profiling Events).

![discovering_configuration_18_624x105](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_18_624x105.webp)

The figure shown. Selecting the "Registry" and "File" types.

Next, make a change in your application and click "Apply" or "OK." Look for registry or disk
activity that occurs when you click "OK." It takes a little practice but you should see some disk
writes or registry writes when you make a change to your application. Note that some applications
will keep settings in memory and only to write their data (to the registry or disk) when the
application is closed. This can be a little bit frustrating, so if don't see the changes you expect,
you can also try to close the application and see if it wrote any changes to the registry or disk.

In the figure shown you can see the deployment.properties file was changed after checkbox was unselected
and the change was applied.

![discovering_configuration_19](/images/endpointpolicymanager/applicationsettings/designstudio/configurationdata/discover/discovering_configuration_19.webp)

The figure shown. Applying changes.

Knowing this, you can use Endpoint Policy Manager DesignStudio to use this location (in this case, a
file) as the data root and continue to build an AppSet for the application.

:::warning
Be sure to reset the filter the next time you run Process Monitor, since it will be set
to the previous application's process ID (PID). The filter dialog prompt appears only if you had set
a filter the last time you ran Process Monitor. You'll be asked whether you want to continue using
the same filter. Note, if you hadn't set the filter or had cleared it, you don't get the filter
dialog prompt when you re-run Process Monitor.
:::


If you discover a file that stores data for your application, but it isn't a currently supported
type (INI, XML, JS, .properties, etc.) then let us know by [opening a support ticket](https://www.netwrix.com/tickets.html#/open-a-ticket) with details so we can include its support in
a future release. For more information on using Process Monitor, be sure to watch this in-depth
video (from the 35:30 mark) as well for more tips:

[http://channel9.msdn.com/Events/TechEd/NorthAmerica/2010/WCL314](http://channel9.msdn.com/Events/TechEd/NorthAmerica/2010/WCL314).
You can also purchase the book on Sysinternals tools (where Process Monitor is covered) by Mark
Russinovich and Aaron Margosis by visiting this link:
[http://www.amazon.com/Windows%C2%AE-Sysinternals-Administrators-Reference-Russinovich/dp/073565672X](http://www.amazon.com/Windows®-Sysinternals-Administrators-Reference-Russinovich/dp/073565672X).



