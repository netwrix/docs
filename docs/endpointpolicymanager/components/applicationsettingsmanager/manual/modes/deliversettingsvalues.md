---
title: "Delivering Settings and Values"
description: "Delivering Settings and Values"
sidebar_position: 10
---

# Delivering Settings and Values

In the previous section, we placed a check inside the "at least one symbol character
(!,@,#,$,%,^,&,\*…)" element. However, if we desired, we could also deliver the setting to uncheck
the checkmark.

Endpoint Policy Manager will deliver settings once you click the setting. If you see a thin
underline underneath the element, you know it's set to deliver the value, as shown In the figure shown. In
the following examples, you can see how to enforce a checkbox's setting.

![policypak_application_settings_1_3](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_3.webp)

The figure shown. Underline indicating that action will be taken on these settings.

When you alter your settings to what is shown In the figure shown, the result will be NO enforcement
action. Note that there is no underline underneath the element.

![policypak_application_settings_1_4](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_4.webp)

The figure shown. The result of these settings will be that no reinforcement action will occur.

Only elements that have configuration data are available to configure client machines. When you
select items with configuration data, they are underlined. If an item does NOT have an underline, it
means it was NOT configured in the DesignStudio, and its value will not be set on the client
machine.

Endpoint Policy Manager Application Settings Manager will deliver an uncheck setting to the element
(that is, it will clear the checkbox). Again, the selected item is underlined.

If the box is already checked in the client's application, Endpoint Policy Manager Application
Settings Manager will forcefully uncheck (clear) the checkbox, as shown In the figure shown.

![policypak_application_settings_1_5](/images/endpointpolicymanager/applicationsettings/modes/endpointpolicymanager_application_settings_1_5.webp)

The figure shown. Action will be taken to uncheck the box.

:::tip
Remember, if an item is underlined, Endpoint Policy Manager Application Settings Manager will
deliver the setting that is specified. Endpoint Policy Manager Application Settings Manager can only
deliver an element's settings if its actions have been set using Endpoint Policy Manager
DesignStudio.
:::



