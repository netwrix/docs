---
title: "Multiple AppSets and Priority"
description: "Multiple AppSets and Priority"
sidebar_position: 30
---

# Multiple AppSets and Priority

-Level Targeting (described in the previous section).

In the figure shown, you can see the same AppSet (WinZip 14 and later) used three times within the same
GPO. However, each AppSet item has Item-Level Targeting turned on and specific conditions associated
with it.

![policypak_application_settings_2_8](/images/endpointpolicymanager/applicationsettings/extras/endpointpolicymanager_application_settings_2_8.webp)

The figure shown. WinZip 14 being used multiple times in the same GPO.

The recommended way to use Endpoint Policy Manager Application Settings Manager is as follows:

- Create multiple AppSet items within a GPO.
- Use Item-Level Targeting to set the conditions.
- Set a description for the particular AppSet item (see the next section).

However, you could occasionally have multiple AppSets overlap each other with certain settings
you've engaged. As a result, you might want to ensure that the delivery of those settings occurs in
a particular order. As seen In the figure shown, Endpoint Policy Manager Application Settings Manager
enables you to specify which AppSet is delivered in which order.

![policypak_application_settings_2_9](/images/endpointpolicymanager/applicationsettings/extras/endpointpolicymanager_application_settings_2_9.webp)

The figure shown. The order in which the Paks (in this scenario) are delivered.

Paks within a GPO are processed in order from lowest to highest.

:::note
This is the same way the Group Policy Preferences prioritizes items.
:::


To change the priority of a particular AppSet, simply right-click on it within the GPO and select
either "Enable priority mode (press Enter to exit)" or "Set priority," which are both shown in
The figure shown.

![policypak_application_settings_2_10](/images/endpointpolicymanager/applicationsettings/extras/endpointpolicymanager_application_settings_2_10.webp)

The figure shown. By clicking "Enable priority mode (press Enter to exit)," as shown here, you can change
the priority of a specific Pak.

When you select "Enable priority mode (press Enter to exit)" you can then move the AppSet up and
down using the arrow keys. When you are satisfied with the position, press Enter to complete the
edit.

You can also select "Set priority," which will enable you to specify a numeric value, as shown in
The figure shown.

![policypak_application_settings_2_11](/images/endpointpolicymanager/applicationsettings/extras/endpointpolicymanager_application_settings_2_11.webp)

The figure shown. By clicking "Set priority," as shown here, you can change the priority of a specific Pak
by setting the numeric value.

The AppSet you've selected will take that priority number, and the rest will be lowered in priority.



