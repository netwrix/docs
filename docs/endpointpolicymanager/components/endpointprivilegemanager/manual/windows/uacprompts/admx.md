---
title: "Using the Endpoint Privilege Manager ADMX Settings"
description: "Using the Endpoint Privilege Manager ADMX Settings"
sidebar_position: 20
---

# Using the Endpoint Privilege Manager ADMX Settings

There are two reasons you might want to configure the Endpoint Policy Manager Least Privilege
Manager Helper Tools via the included ADMX files:

- Use it to trim what the user sees in the Printer tool.
- Use it to trim what the user sees in the Remove Programs too seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/helper/using_the_endpointpolicymanager_least.webp)

## ADMX Settings with the Printer Tool

The ADMX setting prevents users from configuring Print Server Properties using the Endpoint Policy
Manager Printers tool, and will block access to the button and window highlighted here.

![using_the_policypak_least](/images/endpointpolicymanager/leastprivilege/tool/helper/using_the_endpointpolicymanager_least.webp)

## ADMX Settings with the Remove Programs Tool

By default, the Remove Programs tool (once elevated) will enable a user to remove any application
installed on the computer, except for the Endpoint Policy Manager client-side extension or other
Netwrix or Endpoint Policy Manager-signed installed applications or components.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/helper/using_the_endpointpolicymanager_least_1.webp)

However, using the Endpoint Policy Manager Least Privilege Manager ADMX settings you can hide or
reveal which applications are available for users to uninstall. This is possible by using one the
following policies:

- Configure program names to include or exclude from the Endpoint Policy Manager Programs Manager
  tool
- Configure publisher names to include or exclude from the Endpoint Policy Manager Programs Manager
  tool

These two settings act similarly, but when they are used together, you can do the following:

- Hide all applications, except those from the publisher Microsoft which also contain the name
  Skype.
- Show only applications published by Adobe.
- Show only one application named Java 8 update 171.

In this example, we will show only applications published by Oracle where the name contains Java,
except Java 8 Update 171. To do this, we need to use both of the ADMX settings.

Start out by showing only the items which are published by Oracle by using the Configure publisher
names to include or exclude from the Endpoint Policy Manager: Programs Manager tool settings that
are shown here. Specify a value name of "\*oracle\*" and a value of 1. This will pick up publishers
named Oracle and Oracle Corporation.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/helper/using_the_endpointpolicymanager_least_1.webp)

Next, using the same tool, you specify a value name of "\*Java\*" as the program name and a value
of 1. Since we also want to hide programs with 171 in the name, you’ll need to specify a value name
of \*171\* with a value of 0 to specifically hide programs with this value in the name.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/helper/using_the_endpointpolicymanager_least_2.webp)

The result of these settings can be seen here, where only a limited number of programs are available
for removal.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/helper/using_the_endpointpolicymanager_least_2.webp)



