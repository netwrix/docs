---
title: "Global Device Manager Policies"
description: "Global Device Manager Policies"
sidebar_position: 10
---

# Global Device Manager Policies

To get started, create a Device Manager Global Settings policy. Find the node in **Computer
Configuration** > **Netwrix PolicyPak** > **Device Management Security Pak** > **Device Manager**.

Add a new global settings policy by selecting **Add** > **New Global settings policy**.

![device04](/images/endpointpolicymanager/device/devicemanager/device04.webp)

Configure what device types to manage. For this example, you might want to set the recurring
notifications to a higher number to test what happens if you plug and unplug in a device. In this
example, the value is set to 20.

By default, Endpoint Policy Manager Device Manager has a simple notification message to the user,
but that is customizable as well.

![device05](/images/endpointpolicymanager/device/devicemanager/device05.webp)

Your Global policy is now set in the GPO.

![device06](/images/endpointpolicymanager/device/devicemanager/device06.webp)

Once the policy is applied to the endpoint, the immediate result of creating a Global Settings
policy can be seen here on an endpoint when a USB device is inserted.

The users' access to the USB device Read:No, Write:No, Execute:No, can be seen.

A user is presented with the following information and a 60 second countdown which will auto-close
unless the user clicks **More Information**.

![global1](/images/endpointpolicymanager/device/devicemanager/global1.webp)

If an end user tries to read or write data or execute an application, they will get a variety of
error messages. The following screenshots are examples of what end-users may expect.

:::note
There is no customization of the errors at this time. Errors may vary depending on how the
system responds.
:::


![read1](/images/endpointpolicymanager/device/devicemanager/read1.webp)

![execute](/images/endpointpolicymanager/device/devicemanager/execute.webp)

![writeattemppt](/images/endpointpolicymanager/device/devicemanager/writeattemppt.webp)

Selecting More information shows Device Info which may be used in the next steps to allow a device
type. It is recommended to copy these details to Notepad to keep them handy for use during the
read-through of the manual.


