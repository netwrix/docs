---
title: "Understanding Unexpected Results"
description: "Understanding Unexpected Results"
sidebar_position: 50
---

# Understanding Unexpected Results

Most applications' UIs are captured correctly by Endpoint Policy Manager DesignStudio; however, not
all are captured perfectly. Let's explore some circumstances where the Endpoint Policy Manager
Capture Wizard performs a capture, but it may not look the way you expect.

## User Interfaces That Cannot Be Captured

Some applications cannot be captured. In the example In the figure shown, the UI elements in Skype are not
able to be captured in a useful way.

![crafting_the_user_interface_24](/images/endpointpolicymanager/applicationsettings/designstudio/userinterface/crafting_the_user_interface_24.webp)

The figure shown. Some applications prevent their UI elements from being captured.

In these cases, you have to create the elements by using the toolbar and manually adding them (as
described earlier). Then you need to configure them (which we will describe later).

## Underlined Elements

Occasionally, during a capture, you might see some captured items that are underlined in the capture
but not in the application itself, as shown In the figure shown.

![crafting_the_user_interface_25](/images/endpointpolicymanager/applicationsettings/designstudio/userinterface/crafting_the_user_interface_25.webp)

The figure shown. Some elements appear underlined when captured.

This means Endpoint Policy Manager DesignStudio was able to capture the element correctly, but was
unable to acquire Endpoint Policy Manager AppLock™ data for the item. Therefore, these items cannot
be locked out in the target application. However, this doesn't prevent the disabling of the whole
tab, it just means these underlined elements cannot be singularly disabled or hidden.

:::note
To set up a perfect AppSet, you will also need to read the section called "Using the Grays
Wizard" for how to control how elements work inside the Group Policy Editor.

:::



